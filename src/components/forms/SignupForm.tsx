import React from "react";
import { View, StyleSheet } from "react-native";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomButton } from "@/components/Btns/CustomBtn";
import {
  FullNameFieldsContainer,
  EmailAndPasswordFieldsContainer,
  LocationInputsContainer,
} from "@/components/containers/InputsContainers";
import CustomPicker from "@/components/inputs/CustomPicker";
import Toast from "react-native-toast-message";
import { ProgressBarContainer } from "@/components/containers/ProgressBarContainer";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useSignupPractitionerForm } from "@/hooks/useSignupPractitionerForm";
import workTypePickerOptions from "@/constants/workTypePickerOptions";
import { SignupPractFormData, signupPractSchema } from "@/schemas/authSchemas";
import CustomInputController from "../controllers/CustomInputController";
import { TranslationKeys } from "@/i18n/translationKeys";
import TermsCheckbox from "@/components/inputs/TermsCheckbox";

export default function SignupForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupPractFormData>({
    resolver: zodResolver(signupPractSchema),
  });

  const { state, onSubmit, onVerifyEmail } = useSignupPractitionerForm(reset);

  const isTermsAccepted = useWatch({ control, name: "acceptTerms" });

  return (
    <View style={styles.container}>
      {!state.emailSent ? (
        <>
          <FullNameFieldsContainer control={control} errors={errors} />
          <EmailAndPasswordFieldsContainer control={control} errors={errors} />
          <LocationInputsContainer control={control} errors={errors} />
          <CustomPicker
            name="workType"
            control={control}
            label={TranslationKeys.signupPage.form.workType}
            elements={workTypePickerOptions}
            error={errors.workType?.message || null}
          />

          <CustomInputController
            name="phoneNumber"
            control={control}
            label={TranslationKeys.signupPage.form.phone}
            error={errors.phoneNumber ? errors.phoneNumber.message : null}
          />
          <TermsCheckbox name="acceptTerms" control={control} />
          <CustomButton
            title={TranslationKeys.signup}
            width="m"
            onPress={handleSubmit(onSubmit)}
            disabled={state.loading || !isTermsAccepted}
          />
        </>
      ) : (
        <ProgressBarContainer
          currentStep={state.currentStep}
          onVerifyEmail={onVerifyEmail}
          loading={state.loading}
        />
      )}
      {state.loading && <LoadingSpinner />}
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
});
