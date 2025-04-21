import React from "react";
import { Control, FieldErrors } from "react-hook-form";
import { SignupFormData } from "@/components/forms/SignupForm";
import {
  cityPickerOptions,
  countryPickerOptions,
  neighbourhoodPickerOptions,
} from "@/constants/locationPickersOptions";
import CustomPicker from "@/components/inputs/CustomPicker";

type Props = {
  control: Control<SignupFormData, any, SignupFormData> | undefined;
  errors?:
    | FieldErrors<{
        country: string;
        city: string;
        neighbourhood: string;
      }>
    | undefined;
};

const LocationInputsContainer: React.FC<Props> = ({ control, errors }) => {
  return (
    <>
      <CustomPicker
        name="country"
        control={control}
        label="signup_page.form.country"
        elements={countryPickerOptions}
        error={errors?.country ? errors?.country.message : null}
      />
      <CustomPicker
        name="city"
        control={control}
        label="signup_page.form.city"
        elements={cityPickerOptions}
        error={errors?.city ? errors?.city.message : null}
      />
      <CustomPicker
        name="neighbourhood"
        control={control}
        label="signup_page.form.neighbourhood"
        elements={neighbourhoodPickerOptions}
        error={errors?.neighbourhood ? errors?.neighbourhood.message : null}
      />
    </>
  );
};

export default LocationInputsContainer;
