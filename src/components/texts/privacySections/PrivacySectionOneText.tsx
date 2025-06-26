import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const PrivacySectionOneText = (props: Props) => {
  return (
    <>
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionOne.title}
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionOne.subsectionOne.title}
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={TranslationKeys.privacyPolicy.sectionOne.subsectionOne.pointOne}
      />
      <BulletItemText
        style={{ marginHorizontal: 20 }}
        text={TranslationKeys.privacyPolicy.sectionOne.subsectionOne.pointTwo}
      />
      <BulletItemText
        style={{ marginHorizontal: 20 }}
        text={TranslationKeys.privacyPolicy.sectionOne.subsectionOne.pointThree}
      />
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionOne.subsectionTwo.title}
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={TranslationKeys.privacyPolicy.sectionOne.subsectionTwo.pointOne}
      />
    </>
  );
};

export default PrivacySectionOneText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
