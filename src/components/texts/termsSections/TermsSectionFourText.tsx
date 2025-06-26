import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const TermsSectionFourText = (props: Props) => {
  return (
    <>
      <CustomText
        text={TranslationKeys.termsAndConditions.sectionFour.title}
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        text={
          TranslationKeys.termsAndConditions.sectionFour.subsectionOne.title
        }
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionFour.subsectionOne.pointOne
        }
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionFour.subsectionOne.pointTwo
        }
      />
      <CustomText
        text={
          TranslationKeys.termsAndConditions.sectionFour.subsectionTwo.title
        }
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionFour.subsectionTwo.pointOne
        }
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionFour.subsectionTwo.pointTwo
        }
      />
      <CustomText
        text={
          TranslationKeys.termsAndConditions.sectionFour.subsectionThree.title
        }
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionFour.subsectionThree
            .pointOne
        }
      />
    </>
  );
};

export default TermsSectionFourText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
