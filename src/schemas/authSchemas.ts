import { z } from "zod";

const baseSignupSchema = z.object({
  firstName: z.string().min(3, { message: "validation.first_name" }),
  lastName: z.string().min(3, { message: "validation.last_name" }),
  email: z.string().email({ message: "validation.email" }),
  password: z.string().min(6, { message: "validation.password" }),
  country: z.string().min(3, { message: "validation.country" }),
  city: z.string().min(3, { message: "validation.city" }),
  neighbourhood: z.string().min(3, { message: "validation.neighbourhood" }),
  phoneNumber:
    z.string()
      .transform((val) => val.replace(/[^0-9]/g, "")) // Remove non-numeric characters
      .refine((val) =>
        /^(07\d{8})$/.test(val) || // Jordanian numbers starting with 07
        /^(05\d{8})$/.test(val),   // Palestinian numbers starting with 05
        {
          message: "validation.phone.invalid",
        }
      )
});

export const signupPractSchema = baseSignupSchema.extend({
  workType: z.string().min(3, { message: "validation.work_type" }),
});

export const signupNormalUserSchema = baseSignupSchema;

export const signinSchema = z.object({
  email: z.string().email({ message: "validation.email" }),
  password: z.string().min(6, { message: "validation.password" }),
});

export type SignupPractFormData = z.infer<typeof signupPractSchema>;
export type SignupNormalUserFormData = z.infer<typeof signupNormalUserSchema>;
export type SiginFormData = z.infer<typeof signinSchema>;
