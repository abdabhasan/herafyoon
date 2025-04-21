import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomButton } from "@/components/Btns/CustomBtn";
import { EmailAndPasswordFieldsContainer } from "@/components/containers/InputsContainers";
import Toast from "react-native-toast-message";
import { useTranslation } from "react-i18next";
import { CustomText } from "@/components/CustomText";

const signupSchema = z.object({
  email: z.string().email({ message: "validation.email" }),
  password: z.string().min(6, { message: "validation.password" }),
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function Index() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { t } = useTranslation();

  const onSubmit = (data: SignupFormData) => {
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
      <CustomText text="signin" type="title" />
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
