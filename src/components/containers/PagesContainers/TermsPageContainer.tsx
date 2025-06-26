import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  TermsSectionOneText,
  TermsSectionTwoText,
  TermsSectionThreeText,
  TermsSectionFourText,
  TermsSectionFiveText,
  TermsSectionSixText,
  TermsSectionSevenText,
  TermsSectionEghitText,
  TermsSectionNineText,
} from "@/components/texts/termsSections";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";

const TermsPageContainer = () => {
  return (
    <View style={styles.container}>
      <CustomText
        text={TranslationKeys.termsAndConditions.title}
        type="title"
        style={styles.title}
      />
      <CustomText
        style={styles.effectiveDate}
        text={TranslationKeys.termsAndConditions.date}
      />
      <CustomText
        style={styles.welcomeText}
        text={TranslationKeys.termsAndConditions.welcomeOne}
      />
      <CustomText
        style={styles.welcomeText}
        text={TranslationKeys.termsAndConditions.welcomeTwo}
      />

      <TermsSectionOneText />
      <TermsSectionTwoText />
      <TermsSectionThreeText />
      <TermsSectionFourText />
      <TermsSectionFiveText />
      <TermsSectionSixText />
      <TermsSectionSevenText />
      <TermsSectionEghitText />
      <TermsSectionNineText />

      <CustomText
        style={styles.footer}
        type="defaultSemiBold"
        text={TranslationKeys.termsAndConditions.footer}
      />
    </View>
  );
};

export { TermsPageContainer };

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
