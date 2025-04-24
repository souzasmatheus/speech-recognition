import { useEvent } from "expo";
import SpeechRecognitionModule from "./SpeechRecognitionModule";
export * from "./SpeechRecognition.types";
export { default } from "./SpeechRecognitionModule";

export function useSpeechRecognition(language?: string) {
  if (language) {
    SpeechRecognitionModule.setLanguage(language);
  }

  const value = useEvent(SpeechRecognitionModule, "onResult");

  function startSpeechRecognition() {
    SpeechRecognitionModule.start();
  }

  function stopSpeechRecognition() {
    SpeechRecognitionModule.stop();
  }

  return {
    startSpeechRecognition,
    stopSpeechRecognition,
    result: value?.result,
  };
}
