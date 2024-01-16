import Topbar from "./Topbar";

export default function Mainspace({children}){
return(
    <div className="mainspace">
     <div className="rounded-none card-glass">
        <Topbar/>
     </div>
     <div className="subject-section">
           {children}
     </div>
     </div>

    
)
}