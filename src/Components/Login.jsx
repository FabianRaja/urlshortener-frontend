import { useFormik } from "formik";
import { useNavigate } from "react-router-dom"
import { loginSchema } from "../Helper/Schema";
import { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
import { loginUser } from "../Helper/helper";

export default function Login(){
    const navigate=useNavigate();

    const {msg,setMsg,loading,setLoading}=useContext(AppCtx);

    useEffect(()=>{
        setMsg("");
        setLoading(false);
    },[])

    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:loginSchema,
        onSubmit:(formikObj)=>{
            setLoading(true);
            loginUser(formikObj).then((result)=>{
                
                if(result.message==="login success"){
                    setTimeout(()=>{
                        setMsg(result.message);
                        localStorage.setItem("token",result.token);
                        localStorage.setItem("name",result.data[0].firstName);
                        navigate("/");
                    },2000)  
                }else{
                    setLoading(false);
                    setMsg(result.message)
                }  
            }).catch((error)=>{setLoading(false);
                setMsg(error.message)})
          
        }
    })
    return(
        <div className="login rounded-3xl">
            <div className="card-section card-glass">
                <div className="card w-96 shadow-2xl p-10">
                        <div role="tablist" className="tabs tabs-boxed bg-base-300 p-2 skeleton">
                        <a role="tab" className="tab tab-active">Login</a>
                        <a role="tab" className="tab" onClick={()=>navigate("/register")}>Register</a>
                        </div>
                        <form onSubmit={handleSubmit}>
                <div className="card-body">
                   
                    <input value={values.email} name="email" onBlur={handleBlur} onChange={handleChange} type="text" placeholder="Email Address" className="skeleton input text-center input-bordered input-secondary w-full max-w-xs" />
                    {touched.email && errors.email?(<div className="text-secondary">{errors.email}</div>):""}
                    <input value={values.password} name="password" onBlur={handleBlur} onChange={handleChange} type="password" placeholder="Password" className="skeleton input text-center input-bordered input-secondary w-full max-w-xs" />
                    {touched.password && errors.password?(<div className="text-secondary">{errors.password}</div>):""}
                    <button className="btn btn-primary" type="submit">{loading==true?<span className="loading loading-ring loading-sm"></span>:"Login"}</button>
                    <a className="forgot-section" onClick={()=>navigate("/forgot")}>Forgot Password?</a>
                </div>
                {msg?<div className="text-secondary uppercase">{msg}</div>:""}
                </form>
                </div>
            </div>
           
            <button className="btn btn-primary w-52 fixed top-4 right-4" onClick={()=>navigate("/")}>Back to Dashboard</button>
        </div>
    )
}