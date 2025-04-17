import { requireNativeView } from 'expo';
import * as React from 'react';

import { SpeechRecognitionViewProps } from './SpeechRecognition.types';

const NativeView: React.ComponentType<SpeechRecognitionViewProps> =
  requireNativeView('SpeechRecognition');

export default function SpeechRecognitionView(props: SpeechRecognitionViewProps) {
  return <NativeView {...props} />;
}
