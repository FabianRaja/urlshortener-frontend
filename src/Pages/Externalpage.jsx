import { useContext, useEffect, useState } from "react"
import { getUrl } from "../Helper/helper";
import { useParams } from "react-router-dom";
import { AppCtx } from "../Context/AppContext";

export default function Externalpage(){
    const params=useParams();
    const string=params.string;
    const {msg,setMsg}=useContext(AppCtx);
    useEffect(()=>{     
            getUrl(string).then((result)=>{
                if(result.message){
                    window.location.replace(result.message)
                }else{
                    setMsg(result.error)
                }     
            }).catch("error occured")
    },[])
    return(
         
        <div className="subject-section">
             {!msg?"":(<div> <h1 className="text-center align-center justify-center text-secondary text-5xl mb-4 uppercase">{msg}</h1></div>)}
        </div>

      
       
    )
}