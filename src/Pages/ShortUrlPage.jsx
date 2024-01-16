import { useFormik } from "formik";
import Mainspace from "../Components/Mainspace";
import copy from 'copy-to-clipboard';
import { urlSchema } from "../Helper/Schema";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addUrl, shortUrl } from "../Helper/helper";
import { AppCtx } from "../Context/AppContext";
import Swal from "sweetalert2";
export default function ShortUrlPage(){
    //importing useNavigate from the react router dom to navigate between pages
    const navigate=useNavigate();
    //importing states from the app context
    const {msg,setMsg,url,setUrl,clip,setClip,loading,setLoading}=useContext(AppCtx);
    //creating formik for short Url page
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            longUrl:""  
        },
        //validation schema as url Schema
        validationSchema:urlSchema,
        onSubmit:async(formikObj)=>{
            setLoading(true);
            setMsg("");
            setUrl("");
            //passing formik obj to the addUrl function and handling responses
            addUrl(formikObj).then((result)=>{
                if(result.error){
                    setLoading(false)
                    setMsg(result.error)
                }else{
                  const details={
                    id:result.message[0]._id
                  }
                  shortUrl(details).then((result)=>{
                    if(result.error){
                        setLoading(false)
                        setMsg(result.error)
                    }else{
                        setTimeout(()=>{
                            setLoading(false)
                            setUrl(result.message.shortUrl)
                        },2000)
                    }
                }).catch((error)=>{setLoading(false)
                    console.log("error getting data")})
                }
            })
            
        }
    })
   //setting initial values while mounting
    useEffect(()=>{
        setMsg("");
        setUrl("");
        setClip("");
        setLoading(false);
        //setting condition as if there is no token data from the local storage
        if(!localStorage.getItem("token")){
            //alert component from Swal
            Swal.fire({
                icon: "error",
                title: "Login to create short links",
                text: "By clicking Ok, you will be redirected to login page",
            });
            navigate("/login");
        }
    },[])
    return(
        <Mainspace>
            <div className="card-section card-glass mt-2">
                <div className="card list:w-96 w-56 shadow-2xl list:p-10">
                <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <input value={values.longUrl} name="longUrl" onBlur={handleBlur} onChange={handleChange} type="text" placeholder="Paste Long Url" className="skeleton input text-center input-bordered input-secondary w-full max-w-xs" />
                    {touched.longUrl && errors.longUrl?(<div className="text-secondary text-center">{errors.longUrl}</div>):""}
                    <button className="btn btn-primary" type="submit">{loading==true?<span className="loading loading-ring loading-sm"></span>:"Shorten"}</button>
                </div>
                {msg?<div className="text-secondary text-center">{msg}</div> :""}
                </form>
                </div>
            </div>
           
            <div className="card-section mt-5 card-glass">
            <div className="card list:w-96 w-56 shadow-2xl list:p-10">
            <div className="card-body ">
            <h1 className="text-secondary overflow-scroll">{url?url:<div className="text-center ">Shortened Url will be displayed here</div>}</h1>
              {url?<button className="btn text-primary skeleton" onClick={()=>{
                copy(url)
                setClip("on")
                }}>Copy to Clipboard{clip!=""?(<div className="badge">✅</div>):""}</button>:""}
            </div>
            </div>
        </div>
             
            
        </Mainspace>
    )
}