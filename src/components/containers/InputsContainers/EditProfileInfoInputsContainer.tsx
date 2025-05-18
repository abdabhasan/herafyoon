import React from "react";
import { View, StyleSheet } from "react-native";
import {
  FullNameFieldsContainer,
  LocationInputsContainer,
} from "../InputsContainers";
import CustomPicker from "@/components/inputs/CustomPicker";
import CustomInputController from "@/components/controllers/CustomInputController";
import workTypePickerOptions from "@/constants/workTypePickerOptions";
import { returnErrorMessage } from "@/helpers/returnInputErrorMessageHelper";

type Props = {
  control: any;
  errors: any;
};

const EditProfileInfoInputsContainer: React.FC<Props> = ({
  control,
  errors,
}) => {
  return (
    <>
      <View style={styles.container}>
        <FullNameFieldsContainer control={control} errors={errors} />
        <LocationInputsContainer
          control={control}
          errors={errors}
          disabledCountry={true}
        />
        <CustomPicker
          name="workType"
          control={control}
          label="signup_page.form.workType"
          elements={workTypePickerOptions}
          error={errors.workType ? errors.workType.message : null}
        />
        <CustomInputController
          name="phoneNumber"
          control={control}
          label="signup_page.form.phone"
          error={errors.phoneNumber ? errors.phoneNumber.message : null}
        />
        <CustomInputController
          name="email"
          type="email-address"
          control={control}
          label="signup_page.form.email"
          error={returnErrorMessage(errors?.email)}
        />
      </View>
    </>
  );
};

export default EditProfileInfoInputsContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
  },
});
