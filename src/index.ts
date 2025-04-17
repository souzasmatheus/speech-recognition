// Reexport the native module. On web, it will be resolved to SpeechRecognitionModule.web.ts
// and on native platforms to SpeechRecognitionModule.ts
export { default } from './SpeechRecognitionModule';
export { default as SpeechRecognitionView } from './SpeechRecognitionView';
export * from  './SpeechRecognition.types';
