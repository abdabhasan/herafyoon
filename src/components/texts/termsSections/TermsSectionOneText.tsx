import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const TermsSectionOneText = (props: Props) => {
  return (
    <>
      <CustomText
        text={TranslationKeys.termsAndConditions.sectionOne.title}
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        text={TranslationKeys.termsAndConditions.sectionOne.subsectionOne.title}
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionOne.subsectionOne.pointOne
        }
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionOne.subsectionOne.pointTwo
        }
      />
      <CustomText
        text={TranslationKeys.termsAndConditions.sectionOne.subsectionTwo.title}
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionOne.subsectionTwo.pointOne
        }
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionOne.subsectionTwo.pointTwo
        }
      />
      <CustomText
        text={
          TranslationKeys.termsAndConditions.sectionOne.subsectionThree.title
        }
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />

      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionOne.subsectionThree.pointOne
        }
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionOne.subsectionThree.pointTwo
        }
      />
      <CustomText
        text={
          TranslationKeys.termsAndConditions.sectionOne.subsectionFour.title
        }
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionOne.subsectionFour.pointOne
        }
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionOne.subsectionFour.pointTwo
        }
      />
      <CustomText
        text={
          TranslationKeys.termsAndConditions.sectionOne.subsectionFive.title
        }
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionOne.subsectionFive.pointOne
        }
      />
    </>
  );
};

export default TermsSectionOneText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
