import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet, View, Text } from "react-native";
import { CustomText } from "@/components/CustomText";
import { Link } from "expo-router";
import { TranslationKeys } from "@/i18n/translationKeys";
import { useTranslation } from "react-i18next";
import { useThemeColor } from "@/hooks/themesHooks/useThemeColor";
import { useLocalization } from "@/hooks/useLocalization";

type Props = {};

const TermsSectionFiveText = (props: Props) => {
  const { t } = useTranslation();
  const textColor = useThemeColor({}, "text");
  const { isRTL } = useLocalization();

  return (
    <>
      <CustomText
        text={TranslationKeys.termsAndConditions.sectionFive.title}
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        text={
          TranslationKeys.termsAndConditions.sectionFive.subsectionOne.title
        }
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <View
        style={[
          styles.bulletItem,
          {
            flexDirection: isRTL ? "row-reverse" : "row",
          },
        ]}
      >
        <Text
          style={[
            {
              color: textColor,
            },
            styles.bulletPoint,
          ]}
        >
          •
        </Text>
        <Text style={[{ color: textColor }, styles.text]}>
          {t(
            TranslationKeys.termsAndConditions.sectionFive.subsectionOne
              .pointOne
          )}
          <Link href={"/privacy-policy"} style={styles.link}>
            {t(
              TranslationKeys.termsAndConditions.sectionFive.subsectionOne.link
            )}
          </Link>
          .
        </Text>
      </View>
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionFive.subsectionOne.pointTwo
        }
      />
      <CustomText
        text={
          TranslationKeys.termsAndConditions.sectionFive.subsectionTwo.title
        }
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionFive.subsectionTwo.pointOne
        }
      />
      <CustomText
        text={
          TranslationKeys.termsAndConditions.sectionFive.subsectionThree.title
        }
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText
        text={
          TranslationKeys.termsAndConditions.sectionFive.subsectionThree
            .pointOne
        }
      />
    </>
  );
};

export default TermsSectionFiveText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 5,
  },
  bulletPoint: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  link: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
});
