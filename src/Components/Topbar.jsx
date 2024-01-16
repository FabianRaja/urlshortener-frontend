import { useNavigate } from "react-router-dom"


export default function Topbar(){
    const navigate=useNavigate();
    const name=localStorage.getItem("name");
    return(
        <div className="navbar topbar-section-1">
        <div className="flex-1">
            <a className="btn btn-ghost text-2xl text-success font-bold" onClick={()=>navigate("/")}>DASHBOARD</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 topbar-section-2">
            <li><a className="text-l  text-secondary" onClick={()=>navigate("/shortUrl")}>SHORT LINK NOW</a></li>
            <li><a className="text-l  text-secondary" onClick={()=>{
                navigate("/urlList")
                window.location.reload(false);
                }}>SHORTENED LINK LISTS</a></li>
            <li><a className="text-l  text-secondary" onClick={()=>navigate("/login")}>LOGIN/REGISTER</a></li>
            <li><a className="text-l  text-secondary" onClick={()=>{
                localStorage.removeItem("name");
                localStorage.removeItem("token");
               window.location.reload(false);
            }}>LOGOUT</a></li>
            {name?<li><a className="text-l uppercase skeleton">{name}</a></li>:""}
            </ul>
        </div>
        </div>
    )
}