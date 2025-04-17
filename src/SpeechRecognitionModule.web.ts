import { registerWebModule, NativeModule } from 'expo';

import { SpeechRecognitionModuleEvents } from './SpeechRecognition.types';

class SpeechRecognitionModule extends NativeModule<SpeechRecognitionModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(SpeechRecognitionModule);
