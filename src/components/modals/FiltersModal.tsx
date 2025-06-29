import React from "react";
import { StyleSheet } from "react-native";
import { CustomButton } from "@/components/Btns/CustomBtn";
import CustomPicker from "@/components/inputs/CustomPicker";
import { CustomText } from "@/components/CustomText";
import { LocationInputsContainer } from "@/components/containers/InputsContainers";
import workTypePickerOptions from "@/constants/workTypePickerOptions";
import { TranslationKeys } from "@/i18n/translationKeys";
import CustomModal from "./CustomModal";

interface FiltersModalProps {
  visible: boolean;
  control: any;
  errors: any;
  onSubmit: () => void;
  onClose: () => void;
}

const FiltersModal: React.FC<FiltersModalProps> = ({
  visible,
  control,
  errors,
  onSubmit,
  onClose,
}) => {
  return (
    <CustomModal visible={visible} onClose={onClose}>
      <CustomText text="Filters" type="primarySubtitle" />
      <LocationInputsContainer control={control} errors={errors} />

      <CustomPicker
        name="workType"
        control={control}
        label={TranslationKeys.signupPage.form.workType}
        elements={workTypePickerOptions}
        error={errors.workType?.message}
      />

      <CustomButton
        title={TranslationKeys.searchPage.search}
        onPress={onSubmit}
      />
      <CustomButton
        title={TranslationKeys.searchPage.close}
        onPress={onClose}
        color="dark"
      />
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default FiltersModal;
