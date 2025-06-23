import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import { CustomText } from "../CustomText";
import { useLocalization } from "@/hooks/useLocalization";
import { useThemeColor } from "@/hooks/themesHooks/useThemeColor";

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
  const { isRTL } = useLocalization();
  const inputBackgroundColor = useThemeColor({}, "practCardBacgroundColor");
  const inputBorderColor = useThemeColor({}, "practCardBorderColor");
  const textColor = useThemeColor({}, "text");

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
        style={[
          styles.input,
          {
            textAlign: isRTL ? "right" : "left",
            backgroundColor: inputBackgroundColor,
            borderColor: inputBorderColor,
            color: textColor,
          },
        ]}
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
    marginBottom: 10,
    padding: 10,
  },
});

export default CustomInput;
