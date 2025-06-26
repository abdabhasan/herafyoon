import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";

type Props = {};

const PrivacySectionSixText = (props: Props) => {
  return (
    <>
      <CustomText
        text="6. Security Measures"
        type="primarySubtitle"
        style={styles.sectionTitle}
      />

      <BulletItemText text="We take reasonable precautions to protect your personal data, including encryption and access controls. However, no system can be completely secure, and we cannot guarantee absolute data security." />
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
