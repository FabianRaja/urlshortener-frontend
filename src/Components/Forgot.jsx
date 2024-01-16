import { useFormik } from "formik";
import { useNavigate } from "react-router-dom"
import { forgotSchema } from "../Helper/Schema";
import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
import { forgotPassword } from "../Helper/helper";

export default function Forgot(){
    //importing useNavigate from react router dom for navigating between pages
  const navigate=useNavigate();
  //importing states from app Context
  const {msg,setMsg,loading,setLoading}=useContext(AppCtx);
  //setting initial values while mounting
  useEffect(()=>{
      setMsg("");
      setLoading(false);
  },[])
  //creating formik for forgot form
  const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
    initialValues:{
        email:"",
    },
    //using validation schema as forgot Schema
    validationSchema:forgotSchema,
    onSubmit:(formikObj)=>{
        setLoading(true);
        //passing formikObj of values to forgotPassword function and handling the response
        forgotPassword(formikObj).then((result)=>{
            
                setLoading(false)
                setMsg(result.message)
           
            
        }).catch((error)=>{
            setLoading(false)
            setMsg(error)
        })
    }
})
    return(
        <div className="forgot rounded-3xl">
            <div className="card-section card-glass">
                <div className="card shadow-xl w-46 p-3 login:w-96 login:p-10">
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
           
            <button className="btn skeleton w-52 relative top-1  dashboard:fixed dashboard:top-4 dashboard:right-4" onClick={()=>navigate("/")}>Back to Dashboard</button>
        </div>
    )
}