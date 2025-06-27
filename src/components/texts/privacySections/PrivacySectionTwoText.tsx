import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const PrivacySectionTwoText = (props: Props) => {
  return (
    <>
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionTwo.title}
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionTwo.subsectionOne.title}
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={TranslationKeys.privacyPolicy.sectionTwo.subsectionOne.pointOne}
      />
      <BulletItemText
        text={TranslationKeys.privacyPolicy.sectionTwo.subsectionOne.pointTwo}
      />
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionTwo.subsectionTwo.title}
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={TranslationKeys.privacyPolicy.sectionTwo.subsectionTwo.pointOne}
      />
    </>
  );
};

export default PrivacySectionTwoText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
