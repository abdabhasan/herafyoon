import React, { useState, FC } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from "react-native";
import { CustomText } from "../CustomText";
import { useTranslation } from "react-i18next";
import { Controller } from "react-hook-form";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { CustomButton } from "../Btns/CustomBtn";
import { useLocalization } from "@/hooks/useLocalization";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/themesHooks/useThemeColor";

interface PickerProps {
  elements: Array<{ label: string; value: string }>;
  name: string;
  control: any;
  label: string;
  placeholder?: string;
  rules?: object;
  error: string | null | undefined;
  disabled?: boolean;
}

const CustomPicker: FC<PickerProps> = ({
  elements,
  name,
  control,
  label,
  rules,
  error,
  disabled = false,
}) => {
  const { t } = useTranslation();
  const { isRTL } = useLocalization();
  const inputBackgroundColor = useThemeColor({}, "practCardBacgroundColor");
  const inputBorderColor = useThemeColor({}, "practCardBorderColor");
  const pickerArrowColor = useThemeColor({}, "pickerArrowColor");

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => setModalVisible((prev) => !prev);

  const renderItem = (
    { item }: { item: { label: string; value: string } },
    onChange: (value: string) => void,
    value: string
  ) => (
    <TouchableOpacity
      style={[
        styles.item,
        value === item.value && styles.selectedItem,
        {
          flexDirection: isRTL ? "row-reverse" : "row",
        },
      ]}
      onPress={() => {
        onChange(item.value);
        toggleModal();
      }}
    >
      <CustomText text={item.label} type="defaultDark" />
    </TouchableOpacity>
  );

  elements = elements.sort((a, b) => t(a.label).localeCompare(t(b.label)));

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
        render={({ field: { value, onChange } }) => (
          <>
            <TouchableOpacity
              style={[
                styles.inputField,
                {
                  flexDirection: isRTL ? "row-reverse" : "row",
                  backgroundColor: inputBackgroundColor,
                  borderColor: inputBorderColor,
                },
              ]}
              onPress={toggleModal}
              disabled={disabled}
            >
              <CustomText
                type="defaultDark"
                text={
                  elements.find((e) => e.value === value)?.label || "select"
                }
              />
              <MaterialIcons
                name="arrow-drop-down"
                size={16}
                color={pickerArrowColor}
              />
            </TouchableOpacity>

            {error && (
              <CustomText
                type="error"
                text={error}
                style={{ textAlign: "center" }}
              />
            )}

            <Modal
              visible={isModalVisible}
              transparent={true}
              animationType="slide"
            >
              <View style={styles.modalContainer}>
                <ThemedView style={styles.modalContent}>
                  <FlatList
                    data={elements}
                    renderItem={({ item }) =>
                      renderItem({ item }, onChange, value)
                    }
                    keyExtractor={(item) => item.value}
                    style={styles.list}
                  />
                  <CustomButton
                    title="close"
                    onPress={toggleModal}
                    style={styles.closeButton}
                  />
                </ThemedView>
              </View>
            </Modal>
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  inputField: {
    fontSize: 16,
    color: "#000",
    borderWidth: 1,

    borderRadius: 5,
    marginBottom: 10,
    padding: 10,

    alignItems: "center",
    justifyContent: "space-between",

    flexDirection: "row",

    width: "100%",
  },
  inputText: {
    fontSize: 16,
    color: "#333",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    borderRadius: 8,
    padding: 20,
    maxHeight: "70%",
  },
  list: {
    width: "100%",
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ECEDEE",
  },
  selectedItem: {
    backgroundColor: "#e0f7fa",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  closeButton: {
    marginTop: 10,
  },
});

export default CustomPicker;
