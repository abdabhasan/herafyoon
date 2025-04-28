import React, { useState } from "react";
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
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  deleteUser,
} from "firebase/auth";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { auth } from "@/firebase/config";
import { useRouter } from "expo-router";

export default function SignupForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupPractFormData>({
    resolver: zodResolver(signupPractSchema),
  });

  const router = useRouter();
  const { t } = useTranslation();
  const [emailSent, setEmailSent] = useState(false);
  const [userCredential, setUserCredential] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SignupPractFormData) => {
    setLoading(true);
    try {
      const { email, password } = data;

      // Create user in Firebase Auth
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUserCredential(credential); // Store user credential temporarily

      // Send verification email
      await sendEmailVerification(credential.user);

      setEmailSent(true);
      Toast.show({
        type: "success",
        text1: t("signup_page.verification_email_sent"),
        text2: t("signup_page.check_your_inbox"),
      });
    } catch (error: any) {
      console.error("Error during signup:", error);

      Toast.show({
        type: "error",
        text1: t("signup_page.signup_faild"),
        text2: error.message || t("signup_page.error_occurred"),
      });

      // Clean up partially created user on error
      if (userCredential) {
        await deleteUser(userCredential.user);
      }
    } finally {
      setLoading(false);
    }
  };

  const onVerifyEmail = async () => {
    setLoading(true);
    try {
      if (!userCredential) {
        throw new Error("signup_page.user_not_found");
      }

      // Refresh user to check email verification status
      await userCredential.user.reload();

      if (userCredential.user.emailVerified) {
        Toast.show({
          type: "success",
          text1: t("signup_page.verification_successfull"),
          text2: t("signup_page.your_account_now_active"),
        });

        // Save user data to database if required here
        // Example: await saveUserToDatabase(userCredential.user.uid);

        setTimeout(() => {
          router.push("/");
        }, 1500);
        reset();
        setEmailSent(false);
        setUserCredential(null);
      } else {
        throw new Error("Email not verified. Please check your inbox.");
      }
    } catch (error: any) {
      console.error("Error during email verification:", error);
      Toast.show({
        type: "error",
        text1: t("signup_page.verification_faild"),
        text2: error.message || t("signup_page.error_error_occurred"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {!emailSent ? (
        <>
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

          <CustomButton
            title="signup"
            width="m"
            onPress={handleSubmit(onSubmit)}
          />
        </>
      ) : (
        <CustomButton
          title="signup_page.verify_email_btn"
          onPress={onVerifyEmail}
          width="xl"
          style={{ height: 50, paddingHorizontal: 5, marginTop: "25%" }}
        />
      )}
      <Toast />
      {loading && <LoadingSpinner />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
  },
});
