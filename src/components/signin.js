import React from "react";
import "./home.css";
import Footer from "./footer";
import Input from "./input";
import Button from "./button";

function Signin() {
    return(<>
        <div
            className="firsbody"
            style={{
                backgroundImage: `url("./images/tai.jpeg")`,
            }}
        >
        </div>
        <div className="card">
            <h3 className="mx-auto text-primary" >Weclome Back [user]</h3>
            <div className="container">
            <Input p="Enter Email or Username" t="email"   />
            <Input p="Password" t="password"   />
            <a href="#" className="">Forgot password?</a>
            </div>
            <Button className="btn btn-primary" text="Signin" />
        </div>
        <Footer />
        </>
    )
}
export default Signin