import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SingupNormalUserPageContainer from "@/components/containers/PagesContainers/SingupNormalUserPageContainer";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <SingupNormalUserPageContainer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
});
