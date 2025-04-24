# 🗣️ Expo Module for iOS Speech Recognition

This is a custom **Expo Module** that wraps iOS’s native **Speech framework** to bring speech-to-text capabilities into your **React Native** app.

With this module, you can access real-time voice transcription using Apple’s built-in speech recognition — fully integrated within an Expo project.

## Installation
```
  $ npx expo install rn-speech-recognition
```

## Setup
Add the following config to app.json:
```json
  "expo": {
      "plugins": [
        [
          "rn-speech-recognition",
          {
            "speechRecognitionPermission": "$(PRODUCT_NAME) needs permission to use speech recognition.",
            "microphonePermission": "$(PRODUCT_NAME) needs access to your Microphone."
          }
        ],
      ]
  }
```

Then run:
```
  $ npx expo prebuild
  $ npx expo start
```


> ⚙️ Built with Swift + Expo Modules API + ❤️