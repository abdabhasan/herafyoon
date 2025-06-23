import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import ProfilePageContainer from "@/components/containers/PagesContainers/ProfilePageContainer";
import { useThemeColor } from "@/hooks/themesHooks/useThemeColor";

const ProfilePage = () => {
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
      <ProfilePageContainer />
    </ScrollView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
});
