import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import SigninPageContainer from "@/components/containers/PagesContainers/SigninPageContainer";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <SigninPageContainer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    width: "100%",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
