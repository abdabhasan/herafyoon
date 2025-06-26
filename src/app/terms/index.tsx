import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useThemeColor } from "@/hooks/themesHooks/useThemeColor";
import { TermsPageContainer } from "@/components/containers/PagesContainers/TermsPageContainer";

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
      <TermsPageContainer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
});
