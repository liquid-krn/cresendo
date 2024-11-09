import React from "react";
import "./home.css";
import Button from "./button";
import Footer from "./footer";
import Input from "./input";


function Signup() {
    return(<>
        <div
            className="firsbody"
            style={{
                backgroundImage: `url("./images/tai.jpeg")`,
            }}
        >
        </div>
        <div className="card">
            <h1 className="mx-auto text-primary" >New Account</h1>
            <div className="container">
            <Input p="Email" t="email"   />
            <Input p="Username" t="text"   />
            <Input p="Password" t="password"   />
            </div>
            <Button className="btn btn-primary" text="Signup" />
        </div>
        <Footer />
        </>
    )
}
export default Signup