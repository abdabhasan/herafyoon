import React from "react";
import CustomInputController from "@/components/controllers/CustomInputController";
import { returnErrorMessage } from "@/helpers/returnInputErrorMessageHelper";
import { FieldErrors } from "react-hook-form";
import { TranslationKeys } from "@/i18n/translationKeys";

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
        label={TranslationKeys.signupPage.form.email}
        error={returnErrorMessage(errors?.email)}
      />
      <CustomInputController
        name="password"
        secureTextEntry={true}
        control={control}
        label={TranslationKeys.signupPage.form.password}
        error={returnErrorMessage(errors?.password)}
      />
    </>
  );
};

export default EmailAndPasswordFieldsContainer;
