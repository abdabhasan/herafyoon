import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SingupNormalUserPageContainer from "@/components/containers/PagesContainers/SingupNormalUserPageContainer";
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
      <SingupNormalUserPageContainer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
});
