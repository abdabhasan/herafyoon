import { Colors } from "@/constants/Colors";
import { Text, type TextProps, StyleSheet } from "react-native";

export type CustomTextProps = TextProps & {
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "label";
};

export function CustomText({
  style,

  type = "default",
  ...rest
}: CustomTextProps) {
  return (
    <Text
      style={[
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "label" ? styles.label : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.white,
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
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#d0fae5",
  },
  label: {
    alignSelf: "flex-end",
    fontSize: 12,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 6,
    marginLeft: 4,
  },
});
