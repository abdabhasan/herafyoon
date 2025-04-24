import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomButton } from "@/components/Btns/CustomBtn";
import { EmailAndPasswordFieldsContainer } from "@/components/containers/InputsContainers";
import Toast from "react-native-toast-message";
import { useTranslation } from "react-i18next";
import { SiginFormData, signinSchema } from "@/schemas/authSchemas";

export default function SigninForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SiginFormData>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { t } = useTranslation();

  const onSubmit = (data: SiginFormData) => {
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
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <EmailAndPasswordFieldsContainer control={control} errors={errors} />

      <CustomButton title="signin" width="m" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
