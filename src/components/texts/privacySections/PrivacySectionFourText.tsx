import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const PrivacySectionFourText = (props: Props) => {
  return (
    <>
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionFour.title}
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionFour.subsectionOne.title}
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={TranslationKeys.privacyPolicy.sectionFour.subsectionOne.pointOne}
      />
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionFour.subsectionTwo.title}
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={TranslationKeys.privacyPolicy.sectionFour.subsectionTwo.pointOne}
      />
    </>
  );
};

export default PrivacySectionFourText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
