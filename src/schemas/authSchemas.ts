import { TranslationKeys } from "@/i18n/translationKeys";
import { z } from "zod";


const baseSignupSchema = z.object({
  firstName: z.string().min(3, { message: TranslationKeys.validation.firstName }),
  lastName: z.string().min(3, { message: TranslationKeys.validation.lastName }),
  email: z.string().email({ message: TranslationKeys.validation.email }),
  password: z.string().min(6, { message: TranslationKeys.validation.password }),
  country: z.string().min(3, { message: TranslationKeys.validation.country }),
  city: z.string().min(3, { message: TranslationKeys.validation.city }),
  neighbourhood: z.string().min(3, { message: TranslationKeys.validation.neighbourhood }),
  phoneNumber:
    z.string()
      .transform((val) => val.replace(/[^0-9]/g, "")) // Remove non-numeric characters
      .refine((val) =>
        /^(07\d{8})$/.test(val) || // Jordanian numbers starting with 07
        /^(05\d{8})$/.test(val),   // Palestinian numbers starting with 05
        {
          message: TranslationKeys.validation.phone.invalid,
        }
      )
});

export const signupPractSchema = baseSignupSchema.extend({
  workType: z.string().min(3, { message: TranslationKeys.validation.workType }),
});

export const signupNormalUserSchema = baseSignupSchema;

export const signinSchema = z.object({
  email: z.string().email({ message: TranslationKeys.validation.email }),
  password: z.string().min(6, { message: TranslationKeys.validation.password }),
});

export type SignupPractFormData = z.infer<typeof signupPractSchema>;
export type SignupNormalUserFormData = z.infer<typeof signupNormalUserSchema>;
export type SiginFormData = z.infer<typeof signinSchema>;
