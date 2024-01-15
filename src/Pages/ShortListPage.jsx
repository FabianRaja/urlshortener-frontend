import { useContext, useEffect } from "react";
import Mainspace from "../Components/Mainspace";
import { useNavigate } from "react-router-dom";
import { AppCtx } from "../Context/AppContext";
import UrlList from "../Components/UrlList";
import Swal from "sweetalert2";

export default function ShortListPage(){

    const navigate=useNavigate();

    const {data}=useContext(AppCtx);
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            Swal.fire({
                icon: "error",
                title: "Login to view shortened links list",
                text: "By clicking Ok, you will be redirected to login page",
              });
            navigate("/login")
              
            
        }
    },[])


    return(
        <Mainspace>
            <div className="overflow-x-auto w-full h-full">
            {data && data.map((value,index)=>(
                   <UrlList key={index}
                    longUrl={value.longUrl}
                    shortUrl={value.shortUrl}
                    createdOn={value.createdOn}
                    index={index}
                   />
            ))}
            </div>
        </Mainspace>
        
    )
}