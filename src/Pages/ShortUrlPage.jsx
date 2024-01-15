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

    const navigate=useNavigate();
    const {msg,setMsg,url,setUrl,clip,setClip}=useContext(AppCtx);
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            longUrl:""  
        },
        validationSchema:urlSchema,
        onSubmit:async(formikObj)=>{
            
            setMsg("");
            setUrl("");
            addUrl(formikObj).then((result)=>{
                if(result.error){
                    
                    setMsg(result.error)
                }else{
                  const details={
                    id:result.message[0]._id
                  }
                  shortUrl(details).then((result)=>{
                    if(result.error){
                        
                        setMsg(result.error)
                    }else{
                        
                          
                            setUrl(result.message.shortUrl)
                        
                    }
                }).catch((error)=>{
                    console.log("error getting data")})
                }
            })
            
        }
    })

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            Swal.fire({
                icon: "error",
                title: "Login to create short links",
                text: "By clicking Ok, you will be redirected to login page",
            });
            navigate("/login");
            setMsg("");
            setUrl("");
            setClip("");
        }
    },[])
    return(
        <Mainspace>
            <div className="card-section card-glass">
                <div className="card w-96 shadow-2xl p-10">
                <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <input value={values.longUrl} name="longUrl" onBlur={handleBlur} onChange={handleChange} type="text" placeholder="Paste Long Url" className="skeleton input text-center input-bordered input-secondary w-full max-w-xs" />
                    {touched.longUrl && errors.longUrl?(<div className="text-secondary text-center">{errors.longUrl}</div>):""}
                    <button className="btn btn-primary" type="submit">Shorten</button>
                </div>
                {msg?<div className="text-secondary text-center">{msg}</div> :""}
                </form>
                </div>
            </div>
           
            <div className="card-section mt-5 card-glass">
            <div className="card w-96 shadow-2xl p-10">
            <div className="card-body">
            <h1 className="text-secondary text-l">{url?url:<div className="text-center">Shortened Url will be displayed here</div>}</h1>
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