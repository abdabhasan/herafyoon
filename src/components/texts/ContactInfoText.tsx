import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomText } from "../CustomText";
import { useLocalization } from "@/hooks/useLocalization";

type Props = {
  type: string;
  text: string;
};

const ContactInfoText: React.FC<Props> = ({ type, text }) => {
  const { isRTL } = useLocalization();

  return (
    <>
      <View
        style={[
          styles.container,
          {
            flexDirection: isRTL ? "row-reverse" : "row",
          },
        ]}
      >
        <CustomText text={type} style={styles.type} />
        <CustomText text={text} style={styles.text} />
      </View>
    </>
  );
};

export default ContactInfoText;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  type: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  text: {
    fontStyle: "italic",
  },
});
