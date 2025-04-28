import { Colors } from "@/constants/Colors";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export const LoadingSpinner = () => (
  <View style={styles.container}>
    <ActivityIndicator size={75} color={Colors.primary.p500} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.transparent,
  },
});
