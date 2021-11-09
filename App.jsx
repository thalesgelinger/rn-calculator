import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View, StatusBar  } from "react-native";
import { Button } from "./src/components/Button";
import { Row } from "./src/components/Row";

const BUTTON_LABELS = [
  ["C", "()", "%", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["+/-", "0", ".", "="],
];

export default function App() {
  const [equation, setEquation] = useState("")
  const [result, setResult] = useState("")

  function handleButtonClick(value) {

    const keys = {
      "=": () => { 
        let eq = equation.replace("x", "*")
        setResult(eval(eq))
        setTimeout(() => { 
          setEquation(eval(eq))
          setResult("")
        }, 800)
      },
      "C": () => {
        setEquation("")
        setResult("")
      },
    }

    if (keys.hasOwnProperty(value)) {
      const execute = keys[value];
      execute();
    } else {
      setEquation(prev => prev + value)
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <View styles={styles.result}>
        <Text style={styles.equation}>{equation}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.keyboard}>
      {BUTTON_LABELS.map((_, i) => (
        <Row key={i}>
          {BUTTON_LABELS[i].map((label) => (
            <Button key={label} onPress={handleButtonClick}>{label}</Button>
            ))}
        </Row>
      ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "space-between",
    alignItems: "stretch"
  },
  result: {
    flex: 1,
    alignItems: "flex-start"
  },
  keyboard: {
    // flex: 1
  },
  equation: {
    fontSize: 30,
    alignSelf: "stretch",
    textAlign: "right",
    margin: 10,
  },
  result: {
    fontSize: 50,
    alignSelf: "stretch",
    textAlign: "right",
    margin: 10,
  }
});
