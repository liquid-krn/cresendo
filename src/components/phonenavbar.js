import React from "react";
import "./navbar.css";

function Navbar(props){
  return(
    <div className="navbar">
        <div>
          <a href="#">
           <img src="./images/icon.jpg" alt="Navbrand" style={{width:"50px"}} />
          <h3 className="text-white ms-2">Cresendo</h3>
        </a>  
      </div>
    </div>
  )
}
export default Navbar