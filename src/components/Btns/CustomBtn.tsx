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

type WidthOption = "sm" | "m" | "l" | "xl" | "full";
type HeightOption = "normal" | "tiny";
type ColorOption = "primary" | "secondary" | "light" | "dark";
type AlignOption = "center" | "flex-start" | "flex-end";

type ButtonProps = {
  title: string;
  label?: string;
  width?: WidthOption;
  height?: HeightOption;
  color?: ColorOption;
  alignSelf?: AlignOption;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

const widthMap: Record<WidthOption, number> = {
  sm: 30,
  m: 50,
  l: 70,
  xl: 90,
  full: 100,
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
  lightSecondery: {
    backgroundColor: Colors.primary.p50,
    textColor: Colors.primary.p900,
    borderColor: Colors.primary.p900,
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
  alignSelf = "center",
  onPress,
  style,
  disabled = false,
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
    <View style={[styles.container, { alignSelf, width: `${buttonWidth}%` }]}>
      {label ? <CustomText type="label" text={label} /> : null}
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.button,
          dynamicStyle,
          style,
          disabled && styles.disabledButton,
        ]}
      >
        <CustomText style={[{ color: textColor }]} text={title} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  disabledButton: {
    opacity: 0.5,
  },
});
