import React, { useMemo } from "react";
import { Control, FieldErrors, useWatch } from "react-hook-form";
import { SignupFormData } from "@/components/forms/SignupForm";
import { locationOptions } from "@/constants/locationPickersOptions";
import CustomPicker from "@/components/inputs/CustomPicker";
import { SignupNormalUserFormData } from "@/components/forms/SignupNormalUserForm";

type Props = {
  control: Control<SignupFormData | SignupNormalUserFormData, any> | undefined;
  errors?:
    | FieldErrors<{
        country: string;
        city: string;
        neighbourhood: string;
      }>
    | undefined;
};

const LocationInputsContainer: React.FC<Props> = ({ control, errors }) => {
  const selectedCountry = useWatch({ control, name: "country" });
  const selectedCity = useWatch({ control, name: "city" });

  const cityOptions = useMemo(() => {
    const country = locationOptions.find((c) => c.value === selectedCountry);
    return country ? country.cities : [];
  }, [selectedCountry]);

  const neighborhoodOptions = useMemo(() => {
    const city = cityOptions.find((c) => c.value === selectedCity);
    return city ? city.neighbourhoods : [];
  }, [selectedCity, cityOptions]);

  return (
    <>
      <CustomPicker
        name="country"
        control={control}
        label="signup_page.form.country"
        elements={locationOptions.map(({ label, value }) => ({ label, value }))}
        error={errors?.country ? errors.country.message : null}
      />
      <CustomPicker
        name="city"
        control={control}
        label="signup_page.form.city"
        elements={cityOptions.map(({ label, value }) => ({ label, value }))}
        error={errors?.city ? errors.city.message : null}
        disabled={!selectedCountry}
      />
      <CustomPicker
        name="neighbourhood"
        control={control}
        label="signup_page.form.neighbourhood"
        elements={neighborhoodOptions.map(({ label, value }) => ({
          label,
          value,
        }))}
        error={errors?.neighbourhood ? errors.neighbourhood.message : null}
        disabled={!selectedCity}
      />
    </>
  );
};

export default LocationInputsContainer;
