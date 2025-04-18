import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SignupPageContainer from "@/components/containers/SignupPageContainer";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <SignupPageContainer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
});
