import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SignupPageContainer from "@/components/containers/PagesContainers/SignupPageContainer";
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
      <SignupPageContainer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
});
