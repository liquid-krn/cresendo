import React, { useState } from "react";
import "./home.css";
import Button from "./button";
import Footer from "./footer";
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
            <div
                className="firsbody"
                style={{
                    backgroundImage: `url("./images/tai.jpeg")`,
                }}
            ></div>
            <div className="hompagebuttons">
                <Button onClick={handleSignupClick} className="btn btn-primary" type="button" text={isClicked ? "Loading" : "Signup"} />
                <Button onClick={handleLoginClick} className="btn btn-light" type="button" text={isClicked ? "Loading" : "Login"} />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Home;
