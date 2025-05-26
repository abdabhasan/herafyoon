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
import CustomInputController from "@/components/controllers/CustomInputController";
import { Colors } from "@/constants/Colors";
import Toast from "react-native-toast-message";
import {
  SignupNormalUserFormData,
  signupNormalUserSchema,
} from "@/schemas/authSchemas";
import { useSignupNormalUserForm } from "@/hooks/useSignupNormalUserForm";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ProgressBarContainer } from "@/components/containers/ProgressBarContainer";

export default function SignupNormalUserForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupNormalUserFormData>({
    resolver: zodResolver(signupNormalUserSchema),
  });

  const { state, onSubmit, onVerifyEmail } = useSignupNormalUserForm(reset);

  return (
    <View style={styles.container}>
      {!state.emailSent ? (
        <>
          <FullNameFieldsContainer control={control} errors={errors} />
          <EmailAndPasswordFieldsContainer control={control} errors={errors} />
          <LocationInputsContainer control={control} errors={errors} />

          <CustomInputController
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
