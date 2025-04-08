import React from "react";
import { Colors } from "@/constants/Colors";
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  View,
} from "react-native";
import { CustomText } from "../CustomText";

type WidthOption = "sm" | "m" | "l" | "xl";
type HeightOption = "normal" | "tiny";
type ColorOption = "primary" | "secondary" | "light" | "dark";

type ButtonProps = {
  title: string;
  label?: string;
  width?: WidthOption;
  height?: HeightOption;
  color?: ColorOption;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const widthMap: Record<WidthOption, number> = {
  sm: 30,
  m: 50,
  l: 70,
  xl: 90,
};

const heightMap: Record<HeightOption, number> = {
  normal: 36,
  tiny: 26,
};

const colorStyles = {
  primary: {
    backgroundColor: Colors.primary.p500,
    textColor: Colors.white,
    borderColor: Colors.transparent,
  },
  secondary: {
    backgroundColor: Colors.primary.p700,
    textColor: Colors.white,
    borderColor: Colors.transparent,
  },
  light: {
    backgroundColor: Colors.white,
    textColor: Colors.black,
    borderColor: Colors.black,
  },
  dark: {
    backgroundColor: Colors.primary.p950,
    textColor: Colors.primary.p50,
    borderColor: Colors.primary.p50,
  },
};

export const CustomButton: React.FC<ButtonProps> = ({
  title,
  label,
  width = "l",
  height = "normal",
  color = "primary",
  onPress,
  style,
}) => {
  const buttonWidth = widthMap[width];
  const buttonHeight = heightMap[height];

  const { backgroundColor, textColor, borderColor } = colorStyles[color];

  const dynamicStyle: ViewStyle = {
    width: "100%",
    height: buttonHeight,
    backgroundColor,
    borderColor,
    borderRadius: buttonHeight / 2, // 50%
  };

  return (
    <View
      style={{ width: `${buttonWidth}%`, alignItems: "center", margin: 10 }}
    >
      {label ? <CustomText type="label">{label}</CustomText> : null}
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, dynamicStyle, style]}
      >
        <CustomText style={[{ color: textColor }]}>{title}</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
});
