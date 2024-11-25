import React from "react";
import "./footer.css"

function Footer(){
    const year = new Date().getFullYear();
    return <div className="footer-container">
        <p className="font-sans text-sky-100">Copyright © {year}</p>
    </div>
}
export default Footer