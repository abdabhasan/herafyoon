import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";

type Props = {};

const PrivacySectionThreeText = (props: Props) => {
  return (
    <>
      <CustomText
        text="3. Data Sharing"
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        text="Who We Share Data With"
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText text="No third parties have access to your data unless required by law." />
      <CustomText
        text="Visibility in the App"
        type="defaultSemiBold"
        style={styles.subsectionTitle}
      />
      <BulletItemText text="Practitioners’ contact information and work type are visible to all users of the App." />
    </>
  );
};

export default PrivacySectionThreeText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
