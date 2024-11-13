import React from "react";
import "./home.css";
import Footer from "./footer";
import Input from "./input";
import Button from "./button";

function Signin() {
    return(<div
            className="backgroundImg"
            style={{
                backgroundImage: `url("./images/2.jpg")`,
            }}
        >
           <div className="card">
            <h3 className="text-white" >Weclome Back [user]</h3>
            <div className="container">
            <Input p="Enter Email or Username" t="email"   />
            <Input p="Password" t="password"   />
            <a href="#" className="">Forgot password?</a>
            </div>
            <Button className="btn btn-primary mt-3" text="Signin" />
        </div>
        <Footer />
        </div>
    )
}
export default Signin