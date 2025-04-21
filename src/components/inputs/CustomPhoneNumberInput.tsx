import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { Controller } from "react-hook-form";
import { CustomButton } from "@/components/Btns/CustomBtn";
import { CustomText } from "@/components/CustomText";
import { useTranslation } from "react-i18next";
import { Colors } from "@/constants/Colors";
import countriesDialCodes from "@/constants/countriesDialCodes";

interface CustomPhoneNumberInputProps {
  control: any;
  name: string;
  label: string;
  rules?: object;
  error: string | null | undefined;
}

const CustomPhoneNumberInput: React.FC<CustomPhoneNumberInputProps> = ({
  control,
  name,
  label,
  rules,
  error,
}) => {
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    countriesDialCodes[0]?.key || ""
  );

  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const handleSelectCountry = (countryKey: string, phoneNumber: string) => {
    setSelectedCountry(countryKey);
    const dialCode =
      countriesDialCodes.find((country) => country.key === countryKey)
        ?.dialCode || "";
    return `${dialCode}${phoneNumber}`;
  };

  return (
    <View style={styles.container}>
      <CustomText
        text={label}
        type="label"
        style={{
          alignSelf: isRTL ? "flex-end" : "flex-start",
        }}
      />

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => {
          const [phoneNumber] = value
            ? value
                .replace(/^\+\d+/, "")
                .split(/(\d+)/)
                .filter(Boolean)
            : [""];

          return (
            <>
              <Modal
                visible={showCountryPicker}
                transparent={true}
                animationType="slide"
              >
                <View style={styles.modalBackground}>
                  <View style={styles.modalContainer}>
                    <FlatList
                      data={countriesDialCodes}
                      keyExtractor={(item) => item.key}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          onPress={() => {
                            const fullPhone = handleSelectCountry(
                              item.key,
                              phoneNumber
                            );
                            onChange(fullPhone); // Update form value
                            setShowCountryPicker(false);
                          }}
                          style={styles.countryItem}
                        >
                          <CustomText
                            type="defaultDark"
                            text={item.flag + " " + item.dialCode + " "}
                          />
                          <CustomText type="defaultDark" text={item.name} />
                        </TouchableOpacity>
                      )}
                    />
                    <CustomButton
                      title="Close"
                      style={styles.closeButton}
                      onPress={() => setShowCountryPicker(false)}
                    />
                  </View>
                </View>
              </Modal>

              <View style={styles.inputContainer}>
                <TouchableOpacity
                  onPress={() => setShowCountryPicker(true)}
                  style={styles.countryPickerButton}
                >
                  <CustomText
                    type="defaultDark"
                    text={
                      (countriesDialCodes.find((c) => c.key === selectedCountry)
                        ?.flag || "") +
                      " " +
                      (countriesDialCodes.find((c) => c.key === selectedCountry)
                        ?.dialCode || "")
                    }
                  />
                </TouchableOpacity>

                <TextInput
                  style={styles.phoneInput}
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={(text) => {
                    const fullPhone = handleSelectCountry(
                      selectedCountry,
                      text
                    );
                    onChange(fullPhone); // Update form value
                  }}
                />
              </View>
              {error && <CustomText type="error" text={error} />}
            </>
          );
        }}
      />
    </View>
  );
};

export default CustomPhoneNumberInput;

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.primary.p500,
  },
  countryPickerButton: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  phoneInput: {
    width: "75%",
    paddingHorizontal: 10,
    outlineStyle: "none",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    maxHeight: "70%",
    alignItems: "center",
  },
  countryItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  closeButton: {
    marginTop: 20,
  },
});
