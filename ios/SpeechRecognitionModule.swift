import AVFoundation
import ExpoModulesCore
import Speech

public class SpeechRecognitionModule: Module {
    private var recognizer = SFSpeechRecognizer(
        locale: Locale(identifier: "en-US"))
    private let request = SFSpeechAudioBufferRecognitionRequest()
    private let audioEngine = AVAudioEngine()

    public func definition() -> ModuleDefinition {
        Name("SpeechRecognition")

        Constants([
            "availableLanguages": Locale.availableIdentifiers
        ])

        Events("onResult")

        Function("setLanguage") { (language: String) -> Void in
            recognizer = SFSpeechRecognizer(
                locale: Locale(identifier: language))
        }

        Function("start") {
            try! AVAudioSession.sharedInstance().setCategory(.playAndRecord)

            let node = audioEngine.inputNode
            let format = node.outputFormat(forBus: 0)

            node.removeTap(onBus: 0)
            node.installTap(onBus: 0, bufferSize: 1024, format: format) {
                buffer, _ in
                self.request.append(buffer)
            }

            try? audioEngine.start()
            recognizer?.recognitionTask(with: request) { result, _ in
                if let result = result, result.isFinal {
                    self.sendEvent(
                        "onResult",
                        ["result": result.bestTranscription.formattedString])
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
