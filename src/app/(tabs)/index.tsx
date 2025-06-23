import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import HomePageContainer from "@/components/containers/PagesContainers/HomePageContainer";
import { useThemeColor } from "@/hooks/themesHooks/useThemeColor";

export default function Index() {
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
      <HomePageContainer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
});
