import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";

type Props = {};

const PrivacySectionFourText = (props: Props) => {
  return (
    <>
      <CustomText
        text="4. Data Storage"
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        text="Where Data Is Stored"
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText text="Personal data is securely stored in our database and protected against unauthorized access." />
      <CustomText
        text="Retention Period"
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText text="We retain your information as long as your account is active. If you delete your account, your data will be permanently removed." />
    </>
  );
};

export default PrivacySectionFourText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
