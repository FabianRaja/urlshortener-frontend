import { useNavigate } from "react-router-dom";
import Mainspace from "../Components/Mainspace";
import { useContext } from "react";
import { AppCtx } from "../Context/AppContext";
export default function DashboardPage(){
    const navigate=useNavigate();
    const {day,month}=useContext(AppCtx);
    return(
        <Mainspace>
            <div className="hero">
            <div className="hero bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-6xl text-neutral font-bold ">Shorten URL</h1>
                <h1 className="mb-5 text-2xl text-secondary">URL Shortened today - <span className="text-success font-bold">{day}</span> </h1>
                <h1 className="mb-5 text-2xl text-secondary">URL Shortened this month - <span className="text-success font-bold">{month}</span></h1>
                <button className="btn card-glass w-60 mt-4 skeleton" onClick={()=>navigate("/shortUrl")}>Shorten URL</button>
                </div>
            </div>
            </div>
        </Mainspace>
    )
}