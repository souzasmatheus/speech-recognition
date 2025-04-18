import { useEvent } from "expo";
import { Button, SafeAreaView, Text, View } from "react-native";
import SpeechRecognition, {
  startSpeechRecognition,
  stopSpeechRecognition,
} from "speech-recognition";

export default function App() {
  const onChangePayload = useEvent(SpeechRecognition, "onResult");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Speech Recognition</Text>
      <Group name="Start/Stop">
        <Button
          title="Start Speech Recognition"
          onPress={startSpeechRecognition}
        />
        <Button
          title="Stop Speech Recognition"
          onPress={stopSpeechRecognition}
        />
      </Group>
      <Group name="Result">
        <Text>{onChangePayload?.result}</Text>
      </Group>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
};
