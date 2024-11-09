import React from "react";
import "./home.css";
// import Button from "./button";
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
            <h1 className="mx-auto text-primary" >Weclome Back [user]</h1>
            <div className="container">
            <Input p="Enter Email or Username" t="email"   />
            <Input p="Password" t="password"   />
            </div>
            <Button className="btn btn-primary" text="Signin" />
        </div>
        <Footer />
        </>
    )
}
export default Signin