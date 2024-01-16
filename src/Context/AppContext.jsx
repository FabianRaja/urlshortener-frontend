import React, { createContext, useEffect, useState } from "react";
import { getAllUrls, totalCount } from "../Helper/helper";
export const AppCtx=createContext(null);

export default function AppContext({children}){
    //creating states
    const [msg,setMsg]=useState("");
    const [data,setData]=useState([]);
    const [url,setUrl]=useState("");
    const [clip,setClip]=useState("");
    const [count,setCount]=useState("");
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        //to get all urls for listing
        getAllUrls().then((result)=>setData(result.message)).catch((error)=>console.log("Error getting all urls"));
        //to get total number of urls created
        totalCount().then((result)=>{
            setCount((result.message).length) 
        }).catch((error)=>console.log("Error getting count"));
    },[])
    return(
        //passing states to the appctx provider for global use
        <AppCtx.Provider
        value={{msg,setMsg,data,url,setUrl,clip,setClip,count,loading,setLoading}}
        >
            {children}
        </AppCtx.Provider>
    )
}