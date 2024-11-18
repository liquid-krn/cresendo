import React, { useState } from "react";
import Input from "./input";
import Button from "./button";

function Purchase() {
    const [rate,setRate] = useState(543);
    
    function handlechange(e){ 
        if(e.target.value <= 49){
            setRate(543)
        } else{
            setRate(e.target.value * rate);
        }      
    }
  
    return(<div>
        <>
        <div className="backgroundImg"  style={{backgroundImage: `url("./images/2.jpg")`}}>
<div className="card">
    <h1 className="d-flex mx-auto mt-2" style={{color:"white"}}>$/{rate}</h1>
    <div className="d-flex mx-auto mt-5 payment-card" style={{width:'70%',}}>
        <div class="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="currencyDropdown"  data-bs-toggle="dropdown" aria-expanded="false" style={{width:'100%'}}>Coin Select</button>
            <ul class="dropdown-menu" aria-labelledby="currencyDropdown">
                <li><button class="dropdown-item" value="btc"><i class="fa-brands fa-btc me-2"></i> Bitcoin</button></li>
                <li><button class="dropdown-item" value="eth"><i class="fa-brands fa-ethereum me-2"></i> Ethereum</button></li>
            </ul>
        </div>
            <Input t="number" p="Enter Purchase amount" n="amount" oC={handlechange} value={rate}/>
    </div>
        <Button text="Accept" className="btn btn-primary mt-2" />
        <Button text="Back" className="btn btn-primary mt-2" />
</div>
</div>
        </>
    </div>)
}
export default Purchase