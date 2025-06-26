import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";

type Props = {};

const PrivacySectionFiveText = (props: Props) => {
  return (
    <>
      <CustomText
        text="5. Your Rights"
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        text="Access and Updates"
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText text="You may access and update your personal information by logging into your account." />
      <CustomText
        text="Account Deletion"
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText text="You may request to delete your account at any time, and all associated data will be permanently removed." />
      <CustomText
        text="Privacy Inquiries"
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText text="If you have questions about your data, contact us at contact@herafyoon.com" />
    </>
  );
};

export default PrivacySectionFiveText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
