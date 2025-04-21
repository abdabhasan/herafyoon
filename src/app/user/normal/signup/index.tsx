import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SingupNormalUserContainer from "@/components/containers/SingupNormalUserContainer";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <SingupNormalUserContainer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
});
