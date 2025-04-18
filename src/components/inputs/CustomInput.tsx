import React from "react";
import { useTranslation } from "react-i18next";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import { CustomText } from "../CustomText";
import { Colors } from "@/constants/Colors";

interface CustomInputProps extends TextInputProps {
  label: string;
  type?: "email-address" | "default" | "numeric" | "phone-pad";
  value: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type = "default",
  style,
  onChange,
  value,
  secureTextEntry = false,
  ...props
}) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <View style={styles.container}>
      <CustomText
        text={label}
        type="label"
        style={{
          alignSelf: isRTL ? "flex-end" : "flex-start",
        }}
      />
      <TextInput
        style={[styles.input, { textAlign: isRTL ? "right" : "left" }]}
        keyboardType={type}
        secureTextEntry={secureTextEntry}
        value={value}
        onChange={onChange}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  input: {
    fontSize: 16,
    color: "#000",
    borderWidth: 1,

    borderRadius: 5,
    borderColor: Colors.primary.p500,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
});

export default CustomInput;
