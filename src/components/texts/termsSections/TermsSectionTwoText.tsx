import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const TermsSectionTwoText = (props: Props) => {
  return (
    <>
      <CustomText
        text={TranslationKeys.termsAndConditions.sectionTwo.title}
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        text={TranslationKeys.termsAndConditions.sectionTwo.subsectionOne.title}
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionTwo.subsectionOne.pointOne
        }
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionTwo.subsectionOne.pointTwo
        }
      />
      <CustomText
        text={TranslationKeys.termsAndConditions.sectionTwo.subsectionTwo.title}
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionTwo.subsectionTwo.pointOne
        }
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionTwo.subsectionTwo.pointTwo
        }
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionTwo.subsectionTwo.pointThree
        }
      />
      <CustomText
        text={
          TranslationKeys.termsAndConditions.sectionTwo.subsectionThree.title
        }
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />

      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionTwo.subsectionThree.pointOne
        }
      />
    </>
  );
};

export default TermsSectionTwoText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
