import { useFormik } from "formik";
import { useNavigate } from "react-router-dom"
import { forgotSchema } from "../Helper/Schema";
import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
import { forgotPassword } from "../Helper/helper";

export default function Forgot(){
  const navigate=useNavigate();

  const {msg,setMsg,loading,setLoading}=useContext(AppCtx);

  useEffect(()=>{
      setMsg("");
      setLoading(false);
  },[])

  const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
    initialValues:{
        email:"",
    },
    validationSchema:forgotSchema,
    onSubmit:(formikObj)=>{
        setLoading(true);
        forgotPassword(formikObj).then((result)=>{
            setTimeout(()=>{
                setLoading(false)
                setMsg(result.message)
            },2000)
            
        }).catch((error)=>{
            setLoading(false)
            setMsg(error)
        })
    }
})
    return(
        <div className="forgot rounded-3xl">
            <div className="card-section card-glass">
                <div className="card w-96 shadow-xl p-10">
                <div role="tablist" className="tabs tabs-boxed bg-base-300 p-2 skeleton">
                <a role="tab" className="tab" onClick={()=>navigate("/login")}>Login</a>
                <a role="tab" className="tab" onClick={()=>navigate("/register")}>Register</a>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <input value={values.email} name="email" onBlur={handleBlur} onChange={handleChange} type="text" placeholder="Email Address" className="skeleton input text-center input-bordered input-secondary w-full max-w-xs" />
                    {touched.email && errors.email?(<div className="text-secondary">{errors.email}</div>):""}
                    <button className="btn btn-primary" type="submit">{loading==true?<span className="loading loading-ring loading-sm"></span>:"Forgot Password"}</button>
                </div>
                {msg?<div className="text-secondary uppercase">{msg}</div>:""}
                </form>
                </div>
            </div>
           
            <button className="btn btn-primary w-52 fixed top-4 right-4" onClick={()=>navigate("/")}>Back to Dashboard</button>
        </div>
    )
}