import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const TermsSectionThreeText = (props: Props) => {
  return (
    <>
      <CustomText
        text={TranslationKeys.termsAndConditions.sectionThree.title}
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        text={
          TranslationKeys.termsAndConditions.sectionThree.subsectionOne.title
        }
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionThree.subsectionOne.pointOne
        }
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionThree.subsectionOne.pointTwo
        }
      />
      <CustomText
        text={
          TranslationKeys.termsAndConditions.sectionThree.subsectionTwo.title
        }
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionThree.subsectionTwo.pointOne
        }
      />
    </>
  );
};

export default TermsSectionThreeText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
