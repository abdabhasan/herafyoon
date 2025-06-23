import SearchPageContainer from "@/components/containers/PagesContainers/SearchPageContainer";
import { useThemeColor } from "@/hooks/themesHooks/useThemeColor";
import React from "react";
import { StyleSheet, ScrollView } from "react-native";

const ProfileCards = () => {
  const backgroundColor = useThemeColor({}, "background");

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollViewContent,
        {
          backgroundColor,
        },
      ]}
    >
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
