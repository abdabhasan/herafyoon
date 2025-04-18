import React from "react";
import { CustomText } from "@/components/CustomText";
import { View, StyleSheet } from "react-native";
import SignupForm from "@/components/forms/SignupForm";

type Props = {};

const SignupPageContainer = (props: Props) => {
  return (
    <>
      <View style={styles.container}>
        <CustomText text="signup_page.title" type="title" />
        <SignupForm />
      </View>
    </>
  );
};

export default SignupPageContainer;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    marginBottom: 150,
    marginTop: 50,
  },
});
