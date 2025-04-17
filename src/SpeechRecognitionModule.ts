import { NativeModule, requireNativeModule } from 'expo';

import { SpeechRecognitionModuleEvents } from './SpeechRecognition.types';

declare class SpeechRecognitionModule extends NativeModule<SpeechRecognitionModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<SpeechRecognitionModule>('SpeechRecognition');
