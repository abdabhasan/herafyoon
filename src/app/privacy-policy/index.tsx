import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useThemeColor } from "@/hooks/themesHooks/useThemeColor";
import { PrivacyPageContainer } from "@/components/containers/PagesContainers/PrivacyPageContainer";

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
      <PrivacyPageContainer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
});
