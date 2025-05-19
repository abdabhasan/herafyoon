import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomButton } from "@/components/Btns/CustomBtn";
import { EmailAndPasswordFieldsContainer } from "@/components/containers/InputsContainers";
import Toast from "react-native-toast-message";
import { useTranslation } from "react-i18next";
import { SiginFormData, signinSchema } from "@/schemas/authSchemas";
import { loginUser } from "@/firebase/authService";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useRouter } from "expo-router";

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
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: SiginFormData) => {
    setLoading(true);
    try {
      const userCredential = await loginUser(data.email, data.password);

      Toast.show({
        type: "success",
        text1: t("signin_page.success"),
        position: "top",
      });

      router.push("/");

      reset();
    } catch (error: any) {
      console.error("Login failed:", error);

      if (error?.code === "auth/too-many-requests") {
        Toast.show({
          type: "error",
          text1: t("signin_page.error"),
          text2: t("signin_page.too_many_requests"),
          position: "top",
        });
      } else {
        const isAuthError = error?.code === "auth/invalid-credential";
        Toast.show({
          type: "error",
          text1: t("signin_page.error"),
          text2: isAuthError
            ? t("signin_page.incorrect_credentials")
            : error?.message || "Something went wrong. Please try again.",
          position: "top",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <EmailAndPasswordFieldsContainer control={control} errors={errors} />

      <CustomButton title="signin" width="m" onPress={handleSubmit(onSubmit)} />
      <Toast />
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
