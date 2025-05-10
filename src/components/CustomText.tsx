import { Colors } from "@/constants/Colors";
import { useTranslation } from "react-i18next";
import { Text, type TextProps, StyleSheet } from "react-native";

export type CustomTextProps = TextProps & {
  text: string;
  type?:
    | "default"
    | "defaultDark"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "primarySubtitle"
    | "link"
    | "label"
    | "error"
    | "details";
};

export function CustomText({
  style,
  text,
  type = "default",
  ...rest
}: CustomTextProps) {
  const { t } = useTranslation();

  return (
    <Text
      style={[
        type === "default" ? styles.default : undefined,
        type === "defaultDark" ? styles.defaultDark : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "primarySubtitle" ? styles.primarySubtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "label" ? styles.label : undefined,
        type === "error" ? styles.error : undefined,
        type === "details" ? styles.details : undefined,
        style,
      ]}
      {...rest}
    >
      {t(text) || " "}
    </Text>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.white,
  },
  defaultDark: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.black,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
    color: Colors.primary.p500,
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  primarySubtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary.p500,
    textTransform: "capitalize",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#d0fae5",
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 6,
    marginLeft: 4,
  },
  error: {
    color: "red",
    marginVertical: 5,
  },
  details: {
    fontSize: 14,
    color: Colors.black,
    marginTop: 4,
  },
});
