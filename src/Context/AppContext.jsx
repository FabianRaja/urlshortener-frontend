import React, { createContext, useEffect, useState } from "react";
import { getAllUrls, totalCount } from "../Helper/helper";
export const AppCtx=createContext(null);

export default function AppContext({children}){
    const [msg,setMsg]=useState("");
    const [data,setData]=useState([]);
    const [url,setUrl]=useState("");
    const [clip,setClip]=useState("");
    const [day,setDay]=useState("");
    const [month,setMonth]=useState("");
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        getAllUrls().then((result)=>setData(result.message)).catch((error)=>console.log("Error getting all urls"));
        totalCount().then((result)=>{
            setDay((result.day).length);
            setMonth((result.month).length);
        }).catch((error)=>console.log("Error getting count"));
    },[])
    return(
        <AppCtx.Provider
        value={{msg,setMsg,data,url,setUrl,clip,setClip,day,setDay,month,setMonth,loading,setLoading}}
        >
            {children}
        </AppCtx.Provider>
    )
}