import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const PrivacySectionFiveText = (props: Props) => {
  return (
    <>
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionFive.title}
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionFive.subsectionOne.title}
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={TranslationKeys.privacyPolicy.sectionFive.subsectionOne.pointOne}
      />
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionFive.subsectionTwo.title}
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={TranslationKeys.privacyPolicy.sectionFive.subsectionTwo.pointOne}
      />
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionFive.subsectionThree.title}
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={
          TranslationKeys.privacyPolicy.sectionFive.subsectionThree.pointOne
        }
      />
    </>
  );
};

export default PrivacySectionFiveText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
