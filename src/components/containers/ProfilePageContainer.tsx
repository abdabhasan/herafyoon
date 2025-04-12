import React from "react";
import { CustomText } from "@/components/CustomText";
import { View, StyleSheet } from "react-native";
import WelcomeSVG from "@/assets/illustrations/construction-worker-bro.svg";
import ProfilePageBtnContainer from "@/components/containers/ProfilePageBtnsContainer";

type Props = {};

const ProfilePageContainer = (props: Props) => {
  return (
    <>
      <View style={styles.container}>
        <WelcomeSVG style={styles.logo} />
        <CustomText type="title" text="welcome" />
        <ProfilePageBtnContainer />
      </View>
    </>
  );
};

export default ProfilePageContainer;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    marginBottom: 150,
    marginTop: 50,
  },
  logo: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});
