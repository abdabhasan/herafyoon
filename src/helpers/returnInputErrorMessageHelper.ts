import { FieldError } from "react-hook-form";

const isThereError = (errorObject: FieldError | undefined) => {
  return errorObject ? true : false;
};

export const returnErrorMessage = (errorObject: FieldError | undefined) => {
  return isThereError(errorObject) ? errorObject?.message : undefined;
};
