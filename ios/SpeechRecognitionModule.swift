import ExpoModulesCore
import Speech
import AVFoundation

public class SpeechRecognitionModule: Module {
    private let recognizer = SFSpeechRecognizer(locale: Locale(identifier: "en-US"))
    private let request = SFSpeechAudioBufferRecognitionRequest()
    private let audioEngine = AVAudioEngine()

  public func definition() -> ModuleDefinition {
    Name("SpeechRecognition")

    Events("onResult")

    Function("start") {
        try! AVAudioSession.sharedInstance().setCategory(.playAndRecord)
        
        let node = audioEngine.inputNode
        let format = node.outputFormat(forBus: 0)
        
        node.removeTap(onBus: 0)
        node.installTap(onBus: 0, bufferSize: 1024, format: format) { buffer, _ in
            self.request.append(buffer)
        }
        
        try? audioEngine.start()
        recognizer?.recognitionTask(with: request) { result, _ in
            if let result = result, result.isFinal {
                self.sendEvent("onResult", ["result": result.bestTranscription.formattedString])
                self.audioEngine.stop()
                node.removeTap(onBus: 0)
            }
        }
    }

    Function("stop") {
      audioEngine.stop()
      audioEngine.inputNode.removeTap(onBus: 0)
      request.endAudio()
    }
  }
}
