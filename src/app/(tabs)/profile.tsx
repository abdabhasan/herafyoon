import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import ProfilePageContainer from "@/components/containers/ProfilePageContainer";
import { CustomText } from "@/components/CustomText";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useAuth } from "@/hooks/useAuth";

const ProfilePage = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ProfilePageContainer />
      </ScrollView>
    );
  }

  // TO DO
  if (user && !user.emailVerified) {
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <CustomText
          text="Please verify your email before accessing the profile."
          type="title"
        />
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/* TO DO */}
      <CustomText text="your profile" type="title" />
    </ScrollView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
});
