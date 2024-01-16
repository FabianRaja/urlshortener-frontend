import Topbar from "./Topbar";

export default function Mainspace({children}){
return(
      //mainspace component to use topbar as mandatory and to change children component according to the page
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