import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const PrivacySectionSevenText = (props: Props) => {
  return (
    <>
      <CustomText
        text={TranslationKeys.privacyPolicy.sectionSeven.title}
        type="primarySubtitle"
        style={styles.sectionTitle}
      />

      <BulletItemText
        text={TranslationKeys.privacyPolicy.sectionSeven.subsectionOne.pointOne}
      />
    </>
  );
};

export default PrivacySectionSevenText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
