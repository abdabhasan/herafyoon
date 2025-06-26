import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, ViewProps } from "react-native";
import { CustomText } from "../CustomText";
import { useLocalization } from "@/hooks/useLocalization";
import { useThemeColor } from "@/hooks/themesHooks/useThemeColor";

type Props = ViewProps & {
  text: string;
};

const BulletItemText: React.FC<Props> = ({ text, style }) => {
  const { isRTL } = useLocalization();
  const textColor = useThemeColor({}, "text");

  return (
    <>
      <View
        style={[
          styles.bulletItem,
          style,
          {
            flexDirection: isRTL ? "row-reverse" : "row",
          },
        ]}
      >
        <Text style={[{ color: textColor }, styles.bulletPoint]}>•</Text>
        <CustomText text={text} style={styles.text} />
      </View>
    </>
  );
};

export default BulletItemText;

const styles = StyleSheet.create({
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
});
