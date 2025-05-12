import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import HomePageContainer from "@/components/containers/PagesContainers/HomePageContainer";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <HomePageContainer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
});
