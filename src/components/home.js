import React, { useState } from "react";
import "./home.css";
import Button from "./button";
import Footer from "./footer";
import Navbar from "./phonenavbar";
import { useNavigate } from "react-router-dom";

function Home() {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    function handleSignupClick() {
        setIsClicked(true);
        navigate("/signup"); 
    }

    function handleLoginClick() {
        setIsClicked(true);
        navigate("/signin"); 
    }

    return (
        <>
        <div>
        <Navbar text="Cresendo"/>
       </div>  
    <div className="backgroundImg" 
        style={{
        backgroundImage: `url("./images/2.jpg")`
    }}
>
        <div className="hompagebuttons">
            <Button onClick={handleSignupClick} className="btn btn-primary mt-3" type="button" text={isClicked ? "Loading" : "Signup"} />
            <Button onClick={handleLoginClick} className="btn btn-light mt-3" type="button" text={isClicked ? "Loading" : "Login"} />
        </div>
    <Footer /> 
    </div>
</>
    );
}

export default Home;
