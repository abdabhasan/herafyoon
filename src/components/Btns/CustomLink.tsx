import React, { ReactNode } from "react";
import { Colors } from "@/constants/Colors";
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  View,
  Platform,
  TextStyle,
} from "react-native";
import { CustomText } from "../CustomText";
import { Href, Link } from "expo-router";
import { useTranslation } from "react-i18next";

type WidthOption = "sm" | "m" | "l" | "xl";
type HeightOption = "normal" | "tiny";
type ColorOption = "primary" | "secondary" | "light" | "dark";

type CustomLinkProps = {
  href: Href;
  title: string;
  label?: string;
  width?: WidthOption;
  height?: HeightOption;
  color?: ColorOption;
  style?: StyleProp<TextStyle>;
};

type NativeLinkProps = {
  children: ReactNode;
  href: Href;
  style?: StyleProp<TextStyle>;
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

export const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  label,
  width = "l",
  height = "normal",
  color = "primary",
  style,
}) => {
  const buttonWidth = widthMap[width];
  const buttonHeight = heightMap[height];

  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const { backgroundColor, textColor, borderColor } = colorStyles[color];

  const dynamicStyle: TextStyle = {
    height: buttonHeight,
    backgroundColor,
    borderColor,
    borderRadius: buttonHeight / 2, // 50%
  };

  const NativeLink = Platform.select({
    web: ({ children, href, style }: NativeLinkProps) => (
      <Link href={href} style={style}>
        {children}
      </Link>
    ),
    default: ({ children, href, style }: NativeLinkProps) => (
      <Link href={href} asChild style={style}>
        {children}
      </Link>
    ),
  });

  return (
    <View
      style={{ width: `${buttonWidth}%`, alignItems: "center", margin: 10 }}
    >
      {label && (
        <CustomText
          type="label"
          text={label}
          style={{
            alignSelf: isRTL ? "flex-end" : "flex-start",
          }}
        />
      )}
      <NativeLink href={href} style={[styles.link, dynamicStyle, style]}>
        <TouchableOpacity
          accessible
          accessibilityLabel={title || label || "Link"}
        >
          <CustomText text={title} style={{ color: textColor }} />
        </TouchableOpacity>
      </NativeLink>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    borderWidth: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
