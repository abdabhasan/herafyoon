import React from "react";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";
import ContactInfoText from "@/components/texts/ContactInfoText";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const PrivacySectionNineText = (props: Props) => {
  return (
    <>
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionNine.title}
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        style={styles.text}
        text={TranslationKeys.privacyPolicy.sectionNine.subsectionOne.pointOne}
      />
      <ContactInfoText
        type={TranslationKeys.privacyPolicy.sectionNine.subsectionOne.email}
        text="contact@herafyoon.com"
      />
      <ContactInfoText
        type={TranslationKeys.privacyPolicy.sectionNine.subsectionOne.phone}
        text="+96212345678"
      />
      <ContactInfoText
        type={TranslationKeys.privacyPolicy.sectionNine.subsectionOne.address}
        text="Amman"
      />
    </>
  );
};

export default PrivacySectionNineText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
  text: {
    marginBottom: 10,
  },
});
