import React from "react";
import { CustomText } from "@/components/CustomText";
import { View, StyleSheet } from "react-native";
import SignupForm from "@/components/forms/SignupForm";

type Props = {};

const SingupNormalUserContainer = (props: Props) => {
  return (
    <>
      <View style={styles.container}>
        <CustomText text="signup_normal_user_page.title" type="title" />
        <SignupForm />
      </View>
    </>
  );
};

export default SingupNormalUserContainer;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    marginBottom: 250,
    marginTop: 50,
  },
});
