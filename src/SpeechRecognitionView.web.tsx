import * as React from 'react';

import { SpeechRecognitionViewProps } from './SpeechRecognition.types';

export default function SpeechRecognitionView(props: SpeechRecognitionViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
