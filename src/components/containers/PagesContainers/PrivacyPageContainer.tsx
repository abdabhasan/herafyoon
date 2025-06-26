import React from "react";
import { StyleSheet, View } from "react-native";
import {
  PrivacySectionOneText,
  PrivacySectionTwoText,
  PrivacySectionThreeText,
  PrivacySectionFourText,
  PrivacySectionFiveText,
  PrivacySectionSixText,
  PrivacySectionSevenText,
  PrivacySectionEightText,
  PrivacySectionNineText,
} from "@/components/texts/privacySections";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";

const PrivacyPageContainer = () => {
  return (
    <View style={styles.container}>
      <CustomText
        text={TranslationKeys.privacyPolicy.title}
        type="title"
        style={styles.title}
      />
      <CustomText
        style={styles.effectiveDate}
        text={TranslationKeys.privacyPolicy.date}
      />
      <CustomText
        style={styles.welcomeText}
        text={TranslationKeys.privacyPolicy.welcomeOne}
      />


      <CustomText
        type="defaultSemiBold"
        style={styles.footer}
        text={TranslationKeys.privacyPolicy.footer}
      />
    </View>
  );
};

export { PrivacyPageContainer };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  effectiveDate: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
    fontStyle: "italic",
  },
  welcomeText: {
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  footer: {
    marginVertical: 50,
  },
});
