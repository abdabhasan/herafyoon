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
import Toast from "react-native-toast-message";
import { useTranslation } from "react-i18next";
import workTypePickerOptions from "@/constants/workTypePickerOptions";
import { SignupPractFormData, signupPractSchema } from "@/schemas/authSchemas";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useRouter } from "expo-router";
import {
  signupUser,
  sendVerificationEmail,
  removeUser,
} from "@/firebase/authService";
import { saveUserDataToFirestore } from "@/firebase/firestoreService";
import rollbar from "@/utils/rollbar";

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
  const [submittedData, setSubmittedData] =
    useState<SignupPractFormData | null>(null);

  rollbar.log("testing signup form rollbar");

  const onSubmit = async (data: SignupPractFormData) => {
    setLoading(true);
    try {
      const { email, password } = data;

      // Create user in Firebase Auth
      const credential = await signupUser(email, password);

      setUserCredential(credential); // Store user credential temporarily
      setSubmittedData(data); // Save form data for later

      // Send verification email
      await sendVerificationEmail(credential.user);

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
        await removeUser(userCredential.user);
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
        if (!submittedData) {
          throw new Error("No form data available to save.");
        }

        // Save user data to Firestore
        await saveUserDataToFirestore(userCredential.user.uid, submittedData);

        Toast.show({
          type: "success",
          text1: t("signup_page.verification_successfull"),
          text2: t("signup_page.your_account_now_active"),
        });

        setTimeout(() => {
          router.push("/");
        }, 1500);
        reset();
        setEmailSent(false);
        setUserCredential(null);
        setSubmittedData(null);
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
            disabled={loading}
          />
        </>
      ) : (
        <CustomButton
          title="signup_page.verify_email_btn"
          onPress={onVerifyEmail}
          width="xl"
          style={{ height: 50, paddingHorizontal: 5, marginTop: "25%" }}
          disabled={loading}
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
