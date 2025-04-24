import { ConfigPlugin, withInfoPlist } from "expo/config-plugins";

type Permissions = {
  microphonePermission: string;
  speechRecognitionPermission: string;
};

const withSpeechRecognition: ConfigPlugin<Permissions> = (
  config,
  { microphonePermission, speechRecognitionPermission }
) => {
  config = withInfoPlist(config, (config) => {
    config.modResults["NSMicrophoneUsageDescription"] = microphonePermission;
    config.modResults["NSSpeechRecognitionUsageDescription"] =
      speechRecognitionPermission;

    return config;
  });

  return config;
};

export default withSpeechRecognition;
