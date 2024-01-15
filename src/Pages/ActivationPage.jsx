import { useContext, useEffect } from "react"
import { activateAccount } from "../Helper/helper"
import { useNavigate, useParams } from "react-router-dom"
import { AppCtx } from "../Context/AppContext";

export default function ActivationPage(){
    
    const {msg,setMsg}=useContext(AppCtx);

    const params=useParams();
    const id=params.id;
    const navigate=useNavigate();
    useEffect(()=>{
        setMsg("");
        activateAccount(id).then((result)=>{setMsg(result.message)
        if(result.message==="Activation Successfull"){
            setTimeout(()=>{
               navigate("/login")
            },3000)
        }
        }).catch((error)=>setMsg(error.message))
    },[])
    return(
        <div className="subject-section">
            <h1 className="text-center align-center justify-center text-secondary text-5xl mb-4 uppercase">{msg}</h1>
            {msg==="Activation Successfull"?<h1 className="text-center align-center justify-center text-neutral text-2xl uppercase">Redirecting to Login Page</h1>:""}
            
        </div>
    )
}