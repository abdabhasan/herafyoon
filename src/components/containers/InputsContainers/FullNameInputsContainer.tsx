import React from "react";
import CustomInputController from "@/components/controllers/CustomInputController";
import { returnErrorMessage } from "@/helpers/returnInputErrorMessageHelper";
import { Control, FieldErrors } from "react-hook-form";
import { SignupFormData } from "@/components/forms/SignupForm";

type Props = {
  control: Control<SignupFormData, any, SignupFormData> | undefined;
  errors?:
    | FieldErrors<{
        firstName: string;
        lastName: string;
      }>
    | undefined;
};

const FullNameFieldsContainer: React.FC<Props> = ({ control, errors }) => {
  return (
    <>
      <CustomInputController
        name="firstName"
        control={control}
        label="signup_page.form.first_name"
        error={returnErrorMessage(errors?.firstName)}
      />
      <CustomInputController
        name="lastName"
        control={control}
        label="signup_page.form.last_name"
        error={returnErrorMessage(errors?.lastName)}
      />
    </>
  );
};

export default FullNameFieldsContainer;
