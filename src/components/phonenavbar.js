import React from "react";
import "./navbar.css";

function Navbar(props){
  return(
    <div className="navbar">
        <div>
          <a href="#">
           <img src="./images/icon.jpg" alt="Navbrand" className="navbrand" />
          <h3 className="text-white ms-2 navbrandtext"><span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400">Cresendo</span></h3>
        </a>  
      </div>
    </div>
  )
}
export default Navbar