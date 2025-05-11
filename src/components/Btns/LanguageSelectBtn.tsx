import React from "react";
import { CustomButton } from "./CustomBtn";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";

const LanguageSelectBtn = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const theOtherLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(theOtherLanguage);
  };

  return (
    <View style={styles.container}>
      <CustomButton
        title="language"
        onPress={toggleLanguage}
        height="tiny"
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "flex-start",

    marginTop: 20,
  },
  button: {
    width: 60,
  },
});

export default LanguageSelectBtn;
