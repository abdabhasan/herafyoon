import SearchPageContainer from "@/components/containers/PagesContainers/SearchPageContainer";
import React from "react";
import { StyleSheet, ScrollView } from "react-native";

const ProfileCards = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <SearchPageContainer />
    </ScrollView>
  );
};

export default ProfileCards;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
});
