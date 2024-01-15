import * as yup from "yup";
export const loginSchema=yup.object({
    email:yup.string().required("Please enter your email").lowercase(),
    password:yup.string().required("Please enter your password").trim()
})
export const registerSchema=yup.object({
    firstName:yup.string().required("Please enter your first name").max(10,"Maximum 10 letters is allowed"),
    lastName:yup.string().required("Please enter your last name").max(10,"Maximum 10 letters is allowed"),
    email:yup.string().required("Please enter your email").lowercase(),
    password:yup.string().required("Please enter your password").trim()
})
export const forgotSchema=yup.object({
    email:yup.string().required("Please enter your email").lowercase()
})
export const resetSchema=yup.object({
    newPassword:yup.string().required("Please enter your password"),
    password:yup.string().oneOf(
        [yup.ref("newPassword"), null],
        "Your passwords doesn't match.").required("Please confirm your password")
})
export const urlSchema=yup.object({
    longUrl:yup.string().required("Please enter your long Url")
})
