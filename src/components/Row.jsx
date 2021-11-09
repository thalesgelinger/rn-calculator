import React from 'react'
import { View, StyleSheet, Dimensions } from "react-native";

export function Row({children}) {
  return (
    <View style={styles.row}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: "space-between"
  }
})
