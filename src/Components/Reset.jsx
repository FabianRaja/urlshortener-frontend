import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom"
import { resetSchema } from "../Helper/Schema";
import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
import { resetPassword } from "../Helper/helper";

export default function Reset(){
    //importing useNavigate from react router dom to navigate between pages
    const navigate=useNavigate();
    //importing states from app context
    const {msg,setMsg,loading,setLoading}=useContext(AppCtx);
    //importing useParams from react router dom to get the params value
    const params=useParams();
    //setting id values from params
    const id=params.id;
    //setting initial values while mounting
    useEffect(()=>{
        setMsg("");
        setLoading(false);
    },[])
    //creating formik to reset form
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            newPassword:"",
            password:""
        },
        //validation schema as reset schema
        validationSchema:resetSchema,
        onSubmit:(formikObj)=>{
            setLoading(true);
            //passing formik obj to the reset Password function and handling responses
            resetPassword(formikObj,id).then((result)=>{
                
                    setLoading(false)
                    setMsg(result.message)
               
                
            }).catch((error)=>{
                setLoading(false)
                setMsg(error.message)
            })
        }
    })

    return(
        <div className="reset rounded-3xl">        
            <div className="card-section card-glass">
                <div className="card shadow-2xl w-46 p-3 login:w-96 login:p-10">
                <div role="tablist" className="tabs tabs-boxed bg-base-300 p-2 skeleton">
                <a role="tab" className="tab" onClick={()=>navigate("/login")}>Login</a>
                <a role="tab" className="tab" onClick={()=>navigate("/register")}>Register</a>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <input value={values.newPassword} name="newPassword" onBlur={handleBlur} onChange={handleChange} type="password" placeholder="New password" className="skeleton input text-center input-bordered input-secondary w-full max-w-xs" />
                    {touched.newPassword && errors.newPassword?(<div className="text-secondary">{errors.newPassword}</div>):""}
                    <input value={values.password} name="password" onBlur={handleBlur} onChange={handleChange} type="password" placeholder="Confirm password" className="skeleton input text-center input-bordered input-secondary w-full max-w-xs" />
                    {touched.password && errors.password?(<div className="text-secondary">{errors.password}</div>):""}
                    <button className="btn btn-primary" type="submit">{loading==true?<span className="loading loading-ring loading-sm"></span>:"Reset"}</button>
                </div>
                {msg?<div className="text-secondary uppercase">{msg}</div>:""}
                </form>
                </div>
            </div>
           
            <button className="btn skeleton w-52 relative top-1  dashboard:fixed dashboard:top-4 dashboard:right-4" onClick={()=>navigate("/")}>Back to Dashboard</button>
        </div>
    )
}