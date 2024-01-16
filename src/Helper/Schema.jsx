import * as yup from "yup";
//formik schema for login form
export const loginSchema=yup.object({
    email:yup.string().required("Please enter your email").lowercase(),
    password:yup.string().required("Please enter your password").trim()
})
//formik schema for register form
export const registerSchema=yup.object({
    firstName:yup.string().required("Please enter your first name").max(10,"Maximum 10 letters is allowed"),
    lastName:yup.string().required("Please enter your last name").max(10,"Maximum 10 letters is allowed"),
    email:yup.string().required("Please enter your email").lowercase(),
    password:yup.string().required("Please enter your password").trim()
})
//formik schema for forgot password form
export const forgotSchema=yup.object({
    email:yup.string().required("Please enter your email").lowercase()
})
//formik schema for reset password form
export const resetSchema=yup.object({
    newPassword:yup.string().required("Please enter your password"),
    password:yup.string().oneOf(
        [yup.ref("newPassword"), null],
        "Your passwords doesn't match.").required("Please confirm your password")
})
//formik schema for short url form
export const urlSchema=yup.object({
    longUrl:yup.string().required("Please enter your long Url")
})
