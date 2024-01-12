import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function App() {
  const [borderColor, setBorderColor] = useState<"lightgray" | "lightgreen">("lightgray")
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 5}}>Outline Builder</Text>
      <Text 
        style={{
          textAlign: "center",
          color: "#333333",
          fontSize: 12, 
          marginBottom: 5
        }}
        >Press and hold to record your voice. Release to send the recording. Then you'll get a response to your message.</Text>
      <Text style={{ marginVertical: 10, fontSize: 17}}>Your message: </Text>
      <Pressable
      onPressIn={() => {
        setBorderColor("lightgreen")
      }}
      onPressOut={() => {
        setBorderColor("lightgray")
      }}
          style={{
            width: "90%",
            padding: 30,
            gap: 10,
            borderWidth: 3, 
            alignItems: "center",
            borderRadius: 10,
            borderColor: borderColor
          }}
      >
        <Text>Hold to speak</Text>
      </Pressable>
      <StatusBar style="auto" />


      <Button title="Replay last message" onPress={()=>{}}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
