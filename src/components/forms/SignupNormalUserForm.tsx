import React from "react";
import { View, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomButton } from "@/components/Btns/CustomBtn";
import {
  FullNameFieldsContainer,
  EmailAndPasswordFieldsContainer,
  LocationInputsContainer,
} from "@/components/containers/InputsContainers";
import CustomPhoneNumberInput from "../inputs/CustomPhoneNumberInput";
import { Colors } from "@/constants/Colors";
import Toast from "react-native-toast-message";
import { useTranslation } from "react-i18next";

const signupSchema = z.object({
  firstName: z.string().min(3, { message: "validation.first_name" }),
  lastName: z.string().min(3, { message: "validation.last_name" }),
  email: z.string().email({ message: "validation.email" }),
  password: z.string().min(6, { message: "validation.password" }),
  country: z.string().min(3, { message: "validation.country" }),
  city: z.string().min(3, { message: "validation.city" }),
  neighbourhood: z.string().min(3, { message: "validation.neighbourhood" }),
  phoneNumber: z
    .string()
    .min(5, { message: "validation.phone.min" })
    .max(15, { message: "validation.phone.max" })
    .regex(/^[+]?[0-9\s\-()]+$/, {
      message: "validation.phone.invalid",
    }),
});

export type SignupNormalUserFormData = z.infer<typeof signupSchema>;

export default function SignupNormalUserForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupNormalUserFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      country: "",
      city: "",
      neighbourhood: "",
      phoneNumber: "",
    },
  });
  const { t } = useTranslation();

  const onSubmit = (data: SignupNormalUserFormData) => {
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
