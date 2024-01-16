import { useContext, useEffect } from "react";
import Mainspace from "../Components/Mainspace";
import { useNavigate } from "react-router-dom";
import { AppCtx } from "../Context/AppContext";
import UrlList from "../Components/UrlList";
import Swal from "sweetalert2";

export default function ShortListPage(){
    //importing useNavigate from the react router dom to navigate between pages
    const navigate=useNavigate();
    //importing states from the app context
    const {data}=useContext(AppCtx);
    useEffect(()=>{
        //setting condition as if there is no token value in the local storage
        if(!localStorage.getItem("token")){
            //alert message from the Swal component
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