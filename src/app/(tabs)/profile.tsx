import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import ProfilePageContainer from "@/components/containers/ProfilePageContainer";

const ProfilePage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
