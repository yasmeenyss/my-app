import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .required("Name is required"),

  email: yup
    .string()
    .email("Invalid Email")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be 6 characters")
    .required(),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "password must match")
    .required(),
    age: yup 
       .number()
       .min(18, "Age must be atleast 18")
       .required("Age is required")
});