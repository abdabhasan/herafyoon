import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { CustomText } from "@/components/CustomText";
import { Colors } from "@/constants/Colors";
import ProfileInfoCardsContainer from "@/components/containers/CardsContainers/ProfileInfoCardsContainer";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { CustomButton } from "@/components/Btns/CustomBtn";
import { useAuth } from "@/hooks/useAuth";
import {
  updatePractitionerData,
  fetchSinglePractitionerInfo,
} from "@/firebase/firestoreService";
import EditProfileInfoInputsContainer from "../InputsContainers/EditProfileInfoInputsContainer";

type Props = {};

const ProfileInfoPageContainer = (props: Props) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const { loading, userInfo, logout, user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [tempPractitionerInfo, setTempPractitionerInfo] = useState(userInfo);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: userInfo,
  });

  useEffect(() => {
    if (userInfo) {
      reset(userInfo);
      setTempPractitionerInfo(userInfo);
    }
  }, [userInfo, reset]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSaveChanges = async (data: any) => {
    setIsSaving(true);
    try {
      await updatePractitionerData(user.uid, data);
      const updatedPractInfo = await fetchSinglePractitionerInfo(user.uid);
      reset(updatedPractInfo); // Update form with new info
      setTempPractitionerInfo(updatedPractInfo);

      setIsEditing(false);
    } catch (error) {
      console.error("Error updating Practitioner data:", error);
    } finally {
      setIsSaving(false);
    }
  };

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
          text={`${userInfo.firstName} ${userInfo.lastName}`}
          type="primarySubtitle"
          style={styles.name}
        />
      </View>
      <View style={styles.infoContainer}>
        {!isEditing && (
          <CustomText
            text="profile_info_page.edit"
            type="defaultDark"
            style={[
              styles.editBtn,
              {
                alignSelf: isRTL ? "flex-end" : "flex-start",
              },
            ]}
            onPress={handleEditToggle}
          />
        )}

        {isEditing ? (
          <>
            {isSaving && <LoadingSpinner />}
            <EditProfileInfoInputsContainer control={control} errors={errors} />

            <CustomButton
              title="profile_info_page.cancel"
              width="xl"
              color="light"
              onPress={handleEditToggle}
              style={[{ alignSelf: isRTL ? "flex-end" : "flex-start" }]}
            />
            <CustomButton
              title="profile_info_page.save"
              width="xl"
              disabled={isSaving}
              onPress={handleSubmit(handleSaveChanges)}
              style={[{ alignSelf: isRTL ? "flex-end" : "flex-start" }]}
            />
          </>
        ) : (
          <>
            <ProfileInfoCardsContainer info={tempPractitionerInfo} />

            <CustomButton
              title="profile_info_page.logout"
              width="full"
              onPress={handleLogout}
              style={styles.logoutBtn}
            />
          </>
        )}
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
  logoutBtn: {
    marginTop: 15,
  },
});
