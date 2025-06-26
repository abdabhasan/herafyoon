import React from "react";
import { StyleSheet } from "react-native";
import { CustomText } from "@/components/CustomText";
import ContactInfoText from "@/components/texts/ContactInfoText";

type Props = {};

const PrivacySectionNineText = (props: Props) => {
  return (
    <>
      <CustomText
        text="9. Contact Us"
        type="primarySubtitle"
        style={styles.sectionTitle}
      />
      <CustomText
        style={styles.text}
        text="If you have any questions or concerns about this Privacy Policy, please contact us at:"
      />
      <ContactInfoText type="email" text="contact@herafyoon.com" />
      <ContactInfoText type="phone" text="+96212345678" />
      <ContactInfoText type="address" text="Amman" />
    </>
  );
};

export default PrivacySectionNineText;

const styles = StyleSheet.create({
  sectionTitle: {
    marginVertical: 10,
  },
  subsectionTitle: {
    marginVertical: 5,
  },
  text: {
    marginBottom: 10,
  },
});
