import React from "react";
import { StyleSheet, ScrollView, TouchableOpacity, View } from "react-native";
import { CustomText } from "@/components/CustomText";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useAuth } from "@/hooks/useAuth";
import SigningOptionsPageContainer from "@/components/containers/PagesContainers/SigningOptionsPageContainer";
import ProfileInfoPageContainer from "@/components/containers/PagesContainers/ProfileInfoPageContainer";
import LanguageSelectBtn from "@/components/Btns/LanguageSelectBtn";
import LogoutSVG from "@/assets/illustrations/logout-svgrepo-com.svg";
import { Colors } from "@/constants/Colors";

type Props = {};

const ProfilePageContainer = (props: Props) => {
  const { user, loading, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      console.log("Successfully logged out");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <LanguageSelectBtn />

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
      <View style={styles.btnsContainer}>
        <LanguageSelectBtn />
        <TouchableOpacity onPress={handleLogout} style={styles.logoutBtn}>
          <LogoutSVG width={13} height={13} />
        </TouchableOpacity>
      </View>

      <ProfileInfoPageContainer />
    </ScrollView>
  );
};

export default ProfilePageContainer;

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,

    marginBottom: 50,
  },
  btnsContainer: {
    marginTop: 15,
    paddingHorizontal: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoutBtn: {
    width: 40,
    height: 40,
    backgroundColor: Colors.primary.p500,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
