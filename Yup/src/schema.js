
import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .test(
      "no-admin",
      "Admin not allowed",
      value => value !== "admin"
    )
    .trim()
    .lowercase()
    .required("Name is required"),
   
    
     email: yup
    .string()
    .email("Invalid Email")
    .required("Email is required")
    .test(
      "check emmail",
      "Email already exists",
      async value => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`)
        const data = await res.json();
        return data.length == 0
      }
    ),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),

  age: yup
    .number()
    .typeError("Age must be a number")
    .min(18, "Age must be at least 18")
    .required("Age is required"),
});

