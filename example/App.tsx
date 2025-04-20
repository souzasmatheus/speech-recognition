import { useEvent } from "expo";
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native";
import SpeechRecognition, {
  startSpeechRecognition,
  stopSpeechRecognition,
  setLanguage,
} from "speech-recognition";

export default function App() {
  const onChangePayload = useEvent(SpeechRecognition, "onResult");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Speech Recognition</Text>
        <Group name="Options">
          <Button title="🇧🇷" onPress={() => setLanguage("pt-BR")} />
          <Button title="🇺🇸" onPress={() => setLanguage("en-US")} />
          <Button title="🇫🇷" onPress={() => setLanguage("fr-FR")} />
          <Button title="🇮🇹" onPress={() => setLanguage("it-IT")} />
        </Group>
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
      </ScrollView>
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
