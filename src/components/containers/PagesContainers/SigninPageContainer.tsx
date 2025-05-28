import React from "react";
import { CustomText } from "@/components/CustomText";
import { View, StyleSheet } from "react-native";
import SigninForm from "@/components/forms/SigninForm";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const SigninPageContainer = (props: Props) => {
  return (
    <>
      <View style={styles.container}>
        <CustomText text={TranslationKeys.signin} type="title" />
        <SigninForm />
      </View>
    </>
  );
};

export default SigninPageContainer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    marginBottom: 250,
    marginTop: 50,
  },
});
