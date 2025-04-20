import { NativeModule, requireNativeModule } from "expo";

import { SpeechRecognitionModuleEvents } from "./SpeechRecognition.types";

declare class SpeechRecognitionModule extends NativeModule<SpeechRecognitionModuleEvents> {
  start(): void;
  stop(): void;
  setLanguage(language: string): void;
  availableLanguages: string[];
}

// This call loads the native module object from the JSI.
export default requireNativeModule<SpeechRecognitionModule>(
  "SpeechRecognition"
);
