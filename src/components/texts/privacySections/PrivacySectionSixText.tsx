import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const PrivacySectionSixText = (props: Props) => {
  return (
    <>
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionSix.title}
        type="primarySubtitle"
        style={styles.sectionTitle}
      />

      <BulletItemText
        text={TranslationKeys.privacyPolicy.sectionSix.subsectionOne.pointOne}
      />
    </>
  );
};

export default PrivacySectionSixText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
