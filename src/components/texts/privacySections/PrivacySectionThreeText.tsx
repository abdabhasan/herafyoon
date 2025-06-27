import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const PrivacySectionThreeText = (props: Props) => {
  return (
    <>
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionThree.title}
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionThree.subsectionOne.title}
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={TranslationKeys.privacyPolicy.sectionThree.subsectionOne.pointOne}
      />
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionThree.subsectionTwo.title}
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={TranslationKeys.privacyPolicy.sectionThree.subsectionTwo.pointOne}
      />
    </>
  );
};

export default PrivacySectionThreeText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
