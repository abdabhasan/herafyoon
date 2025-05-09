import React from "react";
import CustomInputController from "@/components/controllers/CustomInputController";
import { returnErrorMessage } from "@/helpers/returnInputErrorMessageHelper";
import { FieldErrors } from "react-hook-form";

type Props = {
  control: any;
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
