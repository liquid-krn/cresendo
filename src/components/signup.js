import React from "react";
import "./home.css";
import Button from "./button";
import Footer from "./footer";
import Input from "./input";
import Navbar from "./phonenavbar";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/')
    }
    return(<>
        <div onClick={handleClick}>
        <Navbar text="Cresendo"/>
       </div>
        <div
            className="backgroundImg"
            style={{
                backgroundImage: `url("./images/2.jpg")`,
            }}
        >
         <div className="card">
            <h3 className="text-white" >Weclome New User</h3>
            <div className="container">
            <Input p="Email" t="email"   />
            <Input p="Username" t="text"   />
            <Input p="Password" t="password"   />
            </div>
            <Button className="btn btn-primary" text="Signup" />
        </div>
        <Footer />
        </div>
       
        </>
    )
}
export default Signup