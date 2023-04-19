import * as Yup from "yup";

const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required").min(6),
});

const RegisterSchema = Yup.object({
  username: Yup.string().required("Required").min(3).max(30),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required").min(6),
  passwordConfirm: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .min(6),
});


export {LoginSchema,RegisterSchema}