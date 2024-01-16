import { useContext, useEffect, useState } from "react"
import { getUrl } from "../Helper/helper";
import { useParams } from "react-router-dom";
import { AppCtx } from "../Context/AppContext";

export default function Externalpage(){
    //importing useParams from react router dom to navigate between pages
    const params=useParams();
    //setting string value as params string value
    const string=params.string;
    //importing states from the app context
    const {msg,setMsg}=useContext(AppCtx);
    useEffect(()=>{     
        //passing string values to the getUrl function and handling responses
            getUrl(string).then((result)=>{
                if(result.message){
                    //to redirect to the fetched url 
                    console.log(result);
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