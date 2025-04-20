import SpeechRecognitionModule from "./SpeechRecognitionModule";
export * from "./SpeechRecognition.types";
export { default } from "./SpeechRecognitionModule";

export function startSpeechRecognition() {
  return SpeechRecognitionModule.start();
}

export function stopSpeechRecognition() {
  return SpeechRecognitionModule.stop();
}

export function setLanguage(language: string) {
  return SpeechRecognitionModule.setLanguage(language);
}
