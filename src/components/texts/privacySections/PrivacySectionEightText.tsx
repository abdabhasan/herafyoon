import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";

type Props = {};

const PrivacySectionEightText = (props: Props) => {
  return (
    <>
      <CustomText
        text="8. Changes to This Privacy Policy"
        type="primarySubtitle"
        style={styles.sectionTitle}
      />

      <BulletItemText text="We may update this Privacy Policy from time to time. Any changes will be posted here, and significant updates will be communicated through the App." />
    </>
  );
};

export default PrivacySectionEightText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
