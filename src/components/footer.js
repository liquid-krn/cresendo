import React from "react";
import "./footer.css"

function Footer(){
    const year = new Date().getFullYear();
    return <div className="footer-container">
        <p className="text-white">Copyright © {year}</p>
    </div>
}
export default Footer