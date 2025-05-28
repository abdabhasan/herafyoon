import React from "react";
import { CustomText } from "@/components/CustomText";
import { View, StyleSheet } from "react-native";
import SignupNormalUserForm from "@/components/forms/SignupNormalUserForm";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const SingupNormalUserPageContainer = (props: Props) => {
  return (
    <>
      <View style={styles.container}>
        <CustomText
          text={TranslationKeys.signupNormalUserPage.title}
          type="title"
        />
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
