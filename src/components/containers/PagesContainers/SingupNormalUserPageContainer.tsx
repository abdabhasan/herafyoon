import React from "react";
import { CustomText } from "@/components/CustomText";
import { View, StyleSheet } from "react-native";
import SignupNormalUserForm from "@/components/forms/SignupNormalUserForm";

type Props = {};

const SingupNormalUserPageContainer = (props: Props) => {
  return (
    <>
      <View style={styles.container}>
        <CustomText text="signup_normal_user_page.title" type="title" />
        <SignupNormalUserForm />
      </View>
    </>
  );
};

export default SingupNormalUserPageContainer;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    marginBottom: 250,
    marginTop: 50,
  },
});
