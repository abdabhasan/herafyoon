import React from "react";
import { View, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomButton } from "@/components/Btns/CustomBtn";
import {
  FullNameFieldsContainer,
  EmailAndPasswordFieldsContainer,
  LocationInputsContainer,
} from "@/components/containers/InputsContainers";
import CustomPhoneNumberInput from "../inputs/CustomPhoneNumberInput";
import CustomPicker from "../inputs/CustomPicker";
import { Colors } from "@/constants/Colors";
import Toast from "react-native-toast-message";
import { useTranslation } from "react-i18next";
import workTypePickerOptions from "@/constants/workTypePickerOptions";
import { SignupPractFormData, signupPractSchema } from "@/schemas/authSchemas";

export default function SignupForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupPractFormData>({
    resolver: zodResolver(signupPractSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      country: "",
      city: "",
      neighbourhood: "",
      workType: "",
      phoneNumber: "",
    },
  });
  const { t } = useTranslation();

  const onSubmit = (data: SignupPractFormData) => {
    console.log("Form Data:", data);

    setTimeout(() => {
      reset();
      Toast.show({
        type: "success",
        text1: t("signup_page.success"),
        text2: t("signup_page.will_be_reviewed"),
        position: "top",
      });
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <FullNameFieldsContainer control={control} errors={errors} />
      <EmailAndPasswordFieldsContainer control={control} errors={errors} />
      <LocationInputsContainer control={control} errors={errors} />

      <CustomPicker
        name="workType"
        control={control}
        label="signup_page.form.workType"
        elements={workTypePickerOptions}
        error={errors.workType ? errors.workType.message : null}
      />
      <CustomPhoneNumberInput
        name="phoneNumber"
        control={control}
        label="signup_page.form.phone"
        error={errors.phoneNumber ? errors.phoneNumber.message : null}
      />

      <CustomButton title="signup" width="m" onPress={handleSubmit(onSubmit)} />
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
  },
  workContainer: {
    width: "90%",
  },
  inputField: {
    fontSize: 16,
    color: "#000",
    borderWidth: 1,

    borderRadius: 5,
    borderColor: Colors.primary.p500,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",

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
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    maxHeight: "70%",
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
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
    alignSelf: "center",
  },
});
