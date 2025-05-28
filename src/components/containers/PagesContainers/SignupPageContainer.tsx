import React from "react";
import { CustomText } from "@/components/CustomText";
import { View, StyleSheet } from "react-native";
import SignupForm from "@/components/forms/SignupForm";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const SignupPageContainer = (props: Props) => {
  return (
    <>
      <View style={styles.container}>
        <CustomText text={TranslationKeys.signupPage.title} type="title" />
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
    marginBottom: 250,
    marginTop: 50,
  },
});
