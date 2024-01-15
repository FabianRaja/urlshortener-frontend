import { useFormik } from "formik";
import { useNavigate } from "react-router-dom"
import { registerSchema } from "../Helper/Schema";
import { registerUser } from "../Helper/helper";
import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";

export default function Register(){
    const navigate=useNavigate();
    const {msg,setMsg,loading,setLoading}=useContext(AppCtx);

    useEffect(()=>{
        setMsg("");
        setLoading(false)
    },[])

    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            email:"",
            password:""
        },
        validationSchema:registerSchema,
        onSubmit:(formikObj)=>{
            setLoading(true);
           registerUser(formikObj).then((result)=>{
            setTimeout(()=>{
                setLoading(false);
                setMsg(result.message); 
            },2000)
                 
        }).catch((error)=>{setLoading(false)
            setMsg(error.message)})
        
        }
    })

    return(
        <div className="register rounded-3xl">     
            <div className="card-section card-glass">
                <div className="card w-96 shadow-xl p-10">
                <div role="tablist" className="tabs tabs-boxed bg-base-300 p-2 skeleton">
                <a role="tab" className="tab" onClick={()=>navigate("/login")}>Login</a>
                <a role="tab" className="tab tab-active">Register</a>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <input value={values.firstName} name="firstName" onBlur={handleBlur} onChange={handleChange} type="text" placeholder="First Name" className="skeleton input text-center input-bordered input-secondary w-full max-w-xs" />
                    {touched.firstName && errors.firstName?(<div className="text-secondary">{errors.firstName}</div>):""}
                    <input value={values.lastName} name="lastName" onBlur={handleBlur} onChange={handleChange} type="text" placeholder="Last Name" className="skeleton input text-center input-bordered input-secondary w-full max-w-xs" />
                    {touched.lastName && errors.lastName?(<div className="text-secondary">{errors.lastName}</div>):""}
                    <input value={values.email} name="email" onBlur={handleBlur} onChange={handleChange} type="text" placeholder="Email Address" className="skeleton input text-center input-bordered input-secondary w-full max-w-xs" />
                    {touched.email && errors.email?(<div className="text-secondary">{errors.email}</div>):""}
                    <input value={values.password} name="password" onBlur={handleBlur} onChange={handleChange} type="password" placeholder="Password" className="skeleton input text-center input-bordered input-secondary w-full max-w-xs" />
                    {touched.password && errors.password?(<div className="text-secondary">{errors.password}</div>):""}
                    <button className="btn btn-primary" type="submit">{loading==true?<span className="loading loading-ring loading-sm"></span>:"Register"}</button>
                </div>
                {msg?<div className="text-secondary uppercase">{msg}</div>:""}
                </form>
                </div>
            </div>
           
            <button className="btn btn-primary w-52 fixed top-4 right-4" onClick={()=>navigate("/")}>Back to Dashboard</button>
        </div>
    )
}