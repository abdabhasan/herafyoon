import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {};

const TermsSectionSevenText = (props: Props) => {
  return (
    <>
      <CustomText
        text={TranslationKeys.termsAndConditions.sectionSeven.title}
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        text={
          TranslationKeys.termsAndConditions.sectionSeven.subsectionOne.title
        }
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionSeven.subsectionOne.pointOne
        }
      />
      <CustomText
        text={
          TranslationKeys.termsAndConditions.sectionSeven.subsectionTwo.title
        }
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionSeven.subsectionTwo.pointOne
        }
      />
      <CustomText
        text={
          TranslationKeys.termsAndConditions.sectionSeven.subsectionThree.title
        }
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionSeven.subsectionThree
            .pointOne
        }
      />
    </>
  );
};

export default TermsSectionSevenText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
