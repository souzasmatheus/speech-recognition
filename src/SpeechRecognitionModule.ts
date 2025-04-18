import { NativeModule, requireNativeModule } from "expo";

import { SpeechRecognitionModuleEvents } from "./SpeechRecognition.types";

declare class SpeechRecognitionModule extends NativeModule<SpeechRecognitionModuleEvents> {
  start(): void;
  stop(): void;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<SpeechRecognitionModule>(
  "SpeechRecognition"
);
