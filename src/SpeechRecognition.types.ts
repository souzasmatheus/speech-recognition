export type SpeechRecognitionModuleEvents = {
  onResult: (params: ChangeEventPayload) => void;
};

export type ChangeEventPayload = {
  result: string;
};
