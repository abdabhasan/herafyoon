import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomText } from "@/components/CustomText";
import ContactInfoText from "../ContactInfoText";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const TermsSectionNineText = (props: Props) => {
  return (
    <>
      <CustomText
        text={TranslationKeys.termsAndConditions.sectionNine.title}
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        style={styles.text}
        text={
          TranslationKeys.termsAndConditions.sectionNine.subsectionOne.pointOne
        }
      />
      <ContactInfoText
        type={
          TranslationKeys.termsAndConditions.sectionNine.subsectionOne.email
        }
        text="contact@herafyoon.com"
      />
      <ContactInfoText
        type={
          TranslationKeys.termsAndConditions.sectionNine.subsectionOne.phone
        }
        text="+96212345678"
      />
      <ContactInfoText
        type={
          TranslationKeys.termsAndConditions.sectionNine.subsectionOne.address
        }
        text="Amman"
      />
    </>
  );
};

export default TermsSectionNineText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  text: {
    marginBottom: 10,
  },
});
