import React from "react";
import { CustomText } from "@/components/CustomText";
import { View, StyleSheet } from "react-native";
import WelcomeSVG from "@/assets/illustrations/construction-worker-bro.svg";
import SigningOptionsBtnsContainer from "@/components/containers/BtnsContainers/SigningOptionsBtnsContainer";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const SigningOptionsPageContainer = (props: Props) => {
  return (
    <>
      <View style={styles.container}>
        <WelcomeSVG style={styles.logo} />
        <CustomText type="title" text={TranslationKeys.welcome} />
        <SigningOptionsBtnsContainer />
      </View>
    </>
  );
};

export default SigningOptionsPageContainer;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    marginBottom: 150,
  },
  logo: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});
