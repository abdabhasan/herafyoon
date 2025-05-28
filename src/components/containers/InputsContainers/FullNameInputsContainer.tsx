import React from "react";
import CustomInputController from "@/components/controllers/CustomInputController";
import { returnErrorMessage } from "@/helpers/returnInputErrorMessageHelper";
import { FieldErrors } from "react-hook-form";
import { TranslationKeys } from "@/i18n/translationKeys";

type Props = {
  control: any;
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
        label={TranslationKeys.signupPage.form.firstName}
        error={returnErrorMessage(errors?.firstName)}
      />
      <CustomInputController
        name="lastName"
        control={control}
        label={TranslationKeys.signupPage.form.lastName}
        error={returnErrorMessage(errors?.lastName)}
      />
    </>
  );
};

export default FullNameFieldsContainer;
