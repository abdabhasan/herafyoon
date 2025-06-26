import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const TermsSectionEghitText = (props: Props) => {
  return (
    <>
      <CustomText
        text={TranslationKeys.termsAndConditions.sectionEight.title}
        type="primarySubtitle"
        style={styles.sectionTitle}
      />

      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionEight.subsectionOne.pointOne
        }
      />
    </>
  );
};

export default TermsSectionEghitText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
});
