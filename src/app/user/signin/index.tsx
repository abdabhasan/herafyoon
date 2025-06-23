import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import SigninPageContainer from "@/components/containers/PagesContainers/SigninPageContainer";
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
      <SigninPageContainer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    width: "100%",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
