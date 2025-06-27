import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const PrivacySectionEightText = (props: Props) => {
  return (
    <>
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionEight.title}
        type="primarySubtitle"
        style={styles.sectionTitle}
      />

      <BulletItemText
        text={TranslationKeys.privacyPolicy.sectionEight.subsectionOne.pointOne}
      />
    </>
  );
};

export default PrivacySectionEightText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
