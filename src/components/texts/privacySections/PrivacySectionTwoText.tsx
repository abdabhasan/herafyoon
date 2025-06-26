import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";

type Props = {};

const PrivacySectionTwoText = (props: Props) => {
  return (
    <>
      <CustomText
        text="2. How We Use Your Information"
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        text="Purpose of Collection"
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText text="Practitioners: Your information is collected solely to display your contact details and work type in the App for users seeking your services." />
      <BulletItemText text="Users: Your information is used to manage your account and enable you to save practitioners to favorites." />
      <CustomText
        text="No Additional Use"
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText text="We do not use, sell, or share your personal information for advertising, marketing, or other unrelated purposes." />
    </>
  );
};

export default PrivacySectionTwoText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
