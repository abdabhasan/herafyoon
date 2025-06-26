import React from "react";
import BulletItemText from "@/components/texts/BulletItemText";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";

type Props = {};

const PrivacySectionSevenText = (props: Props) => {
  return (
    <>
      <CustomText
        text="7. Children’s Privacy"
        type="primarySubtitle"
        style={styles.sectionTitle}
      />

      <BulletItemText text="Our App is not intended for children under the age of 13. If we become aware that a child’s personal information has been collected without parental consent, we will delete it promptly." />
    </>
  );
};

export default PrivacySectionSevenText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
});
