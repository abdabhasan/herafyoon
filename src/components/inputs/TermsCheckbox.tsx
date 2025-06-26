import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Controller, Control } from "react-hook-form";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useLocalization } from "@/hooks/useLocalization";
import { CustomText } from "../CustomText";
import { useTranslation } from "react-i18next";
import { TranslationKeys } from "@/i18n/translationKeys";

interface TermsCheckboxProps {
  name: string;
  control: Control<any>;
  rules?: object;
}

const TermsCheckbox: React.FC<TermsCheckboxProps> = ({ name, control }) => {
  const { isRTL } = useLocalization();
  const { t } = useTranslation();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <View style={styles.container}>
          <TouchableOpacity
            style={[
              styles.checkboxContainer,

              { flexDirection: isRTL ? "row-reverse" : "row" },
            ]}
            onPress={() => onChange(!value)}
          >
            <MaterialIcons
              name={value ? "check-box" : "check-box-outline-blank"}
              size={24}
              color={value ? "#4CAF50" : "#999"}
            />
            <Text style={styles.label}>
              {t(TranslationKeys.termsCheckbox.iAccept)}
              <Link href={"/terms"} style={styles.link}>
                {t(TranslationKeys.termsCheckbox.termsAndConditions)}
              </Link>
            </Text>
          </TouchableOpacity>
          {error && <CustomText text={error.message!} type="error" />}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  checkboxContainer: {
    alignItems: "center",
  },
  label: {
    marginHorizontal: 8,
    fontSize: 14,
    color: "#333",
  },
  link: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
  errorText: {
    marginTop: 4,
    fontSize: 12,
    color: "red",
  },
});

export default TermsCheckbox;
