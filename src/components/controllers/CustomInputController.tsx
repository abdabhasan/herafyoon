import React from "react";
import { Control, Controller } from "react-hook-form";
import CustomInput from "@/components/inputs/CustomInput";
import { CustomText } from "../CustomText";
import { SignupFormData } from "@/components/forms/SignupForm";
import { SignupNormalUserFormData } from "../forms/SignupNormalUserForm";

type CustomInputControllerProps = {
  control: Control<SignupFormData | SignupNormalUserFormData, any> | undefined;
  name: "firstName" | "lastName" | "email" | "password";
  label: string;
  type?: "email-address" | "default" | "numeric" | "phone-pad";
  secureTextEntry?: boolean;
  error?: string | undefined;
};

const CustomInputController: React.FC<CustomInputControllerProps> = ({
  control,
  error,
  name,
  label,
  type,
  secureTextEntry,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomInput
            label={label}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            type={type}
            secureTextEntry={secureTextEntry}
          />
        )}
      />
      {error && <CustomText text={error} type="error" />}
    </>
  );
};

export default CustomInputController;
