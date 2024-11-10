import React from "react";
import "./footer.css"

function Footer(){
    const year = new Date().getFullYear();
    return <div className="footer-container">
        <p className="text-primary">Copyright © {year}</p>
    </div>
}
export default Footer