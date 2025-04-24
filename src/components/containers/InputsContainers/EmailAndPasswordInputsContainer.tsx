import React from "react";
import CustomInputController from "@/components/controllers/CustomInputController";
import { returnErrorMessage } from "@/helpers/returnInputErrorMessageHelper";
import { Control, FieldErrors } from "react-hook-form";
import { SignupFormData } from "@/components/forms/SignupForm";
import { SignupNormalUserFormData } from "@/components/forms/SignupNormalUserForm";

type Props = {
  control: Control<SignupFormData | SignupNormalUserFormData, any> | undefined;
  errors?:
    | FieldErrors<{
        email: string;
        password: string;
      }>
    | undefined;
};

const EmailAndPasswordFieldsContainer: React.FC<Props> = ({
  control,
  errors,
}) => {
  return (
    <>
      <CustomInputController
        name="email"
        type="email-address"
        control={control}
        label="signup_page.form.email"
        error={returnErrorMessage(errors?.email)}
      />
      <CustomInputController
        name="password"
        secureTextEntry={true}
        control={control}
        label="signup_page.form.password"
        error={returnErrorMessage(errors?.password)}
      />
    </>
  );
};

export default EmailAndPasswordFieldsContainer;
