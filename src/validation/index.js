import * as Yup from "yup";

export const Signup = Yup.object({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("Please enter your full name"),

  email: Yup.string().email("Invalid email").required("plase enter your email"),

  designation: Yup.string().required("please enter your designation"),
  date: Yup.string().required("plese enter your date"),
});
