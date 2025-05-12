import { CustomText } from "@/components/CustomText";
import { Colors } from "@/constants/Colors";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import ProfileInfoCardsContainer from "@/components/containers/CardsContainers/ProfileInfoCardsContainer";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { CustomButton } from "@/components/Btns/CustomBtn";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/hooks/useAuth";

type Props = {};

const ProfileInfoPageContainer = (props: Props) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const { loading, userInfo, logout } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  const { firstName, lastName } = userInfo;

  const handleLogout = async () => {
    try {
      await logout();
      console.log("Successfully logged out");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Image
          size={150}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2815/2815428.png",
          }}
          style={styles.avatar}
        />
        <CustomText
          text={firstName + " " + lastName}
          type="primarySubtitle"
          style={styles.name}
        />
      </View>
      <View style={styles.infoContainer}>
        {/* TO DO */}
        <CustomText
          text="profile_info_page.edit"
          type="defaultDark"
          style={[
            styles.editBtn,
            {
              alignSelf: isRTL ? "flex-end" : "flex-start",
            },
          ]}
        />
        <ProfileInfoCardsContainer info={userInfo} />

        <CustomButton
          title="profile_info_page.logout"
          width="xl"
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};

export default ProfileInfoPageContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",

    marginBottom: 5,
    paddingBottom: 20,

    borderBottomWidth: 1,
    borderBottomColor: Colors.primary.p500,
  },
  avatar: {
    backgroundColor: Colors.primary.p400,
    borderWidth: 1,
    borderColor: Colors.primary.p400,
  },
  name: {
    marginTop: 15,
  },
  editBtn: {
    color: Colors.primary.p500,
    textDecorationLine: "underline",
  },
  infoContainer: {},
});
