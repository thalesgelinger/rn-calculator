import React from 'react'
import { TouchableOpacity, Text,StyleSheet, View, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window")

export function Button({ children, onPress }) {
  return (
    <TouchableOpacity onPress={() => { onPress(children)}}>
      <View style={styles.button}>
        <Text style={styles.label}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: "#474747",
    height: height * 0.125,
    width: width / 4,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#ffffff"
  }
})
