import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { CustomText } from "@/components/CustomText";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useAuth } from "@/hooks/useAuth";
import SigningOptionsPageContainer from "@/components/containers/PagesContainers/SigningOptionsPageContainer";

type Props = {};

const ProfilePageContainer = (props: Props) => {
  const { user, loading } = useAuth();

  console.log("user", user);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <SigningOptionsPageContainer />
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
      <CustomText text="your profile ) : (: " type="title" />
    </ScrollView>
  );
};

export default ProfilePageContainer;

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,

    marginBottom: 50,
  },
});
