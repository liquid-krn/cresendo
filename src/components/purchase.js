import React, { useState } from "react";
import Input from "./input";
import Button from "./button";
import { useNavigate } from "react-router-dom";


function Purchase() {
    const [rate, setRate] = useState(0); 
    const [entry, setEntry] = useState(0); 
    const [currency, setCurrency] = useState("");
    const [error, setError] = useState("");

    const fetchRate = async (selectedCurrency) => {
        const API_KEY = process.env.REACT_APP_KEY; 
        const API_URL = `https://api.coinlayer.com/live?access_key=${API_KEY}&symbols=${selectedCurrency}&target=NGN`;
    
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
    
            if (data.success) {
                const adjustedRate = Math.max(0, data.rates[selectedCurrency.toUpperCase()] - 100);
                setRate(adjustedRate);
                setCurrency(selectedCurrency.toUpperCase());
            } else {
                setError("Failed to fetch live rates.");
            }
        } catch (err) {
            setError("An error occurred while fetching rates.");
        }
    };

    const navigate = useNavigate();
 
    function accept() {
        navigate('/barcode')
    }
    
    const handleAmountChange = (e) => {
        const inputValue = Number(e.target.value); 
        if (inputValue <= 49) {
            setError("Entry must be $50 or more");
            setEntry(0);
        } else {
            setError("");
            setEntry(inputValue);
        }
    };
    

    const handleCurrencySelection = (selectedCurrency) => {
        fetchRate(selectedCurrency);
    };

    return (
        <div>
            <div
                className="backgroundImg"
                style={{ backgroundImage: `url("./images/2.jpg")` }}
            >
                <div className="card">
                    <h1 className="d-flex mx-auto mt-2" style={{ color: "white" }}>
                        $/{rate.toLocaleString()} | ₦{(rate * entry).toLocaleString()}
                    </h1>
                    <div className="d-flex mx-auto mt-5 payment-card">
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="currencyDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Coin Select
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="currencyDropdown">
                                <li>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleCurrencySelection("USDT")}
                                    >
                                        <i className="fa-brands fa-btc me-2"></i> Bitcoin
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleCurrencySelection("ETH")}
                                    >
                                        <i className="fa-brands fa-ethereum me-2"></i> Ethereum
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <Input
                            t="number"
                            p="Enter Purchase amount"
                            n="amount"
                            oC={handleAmountChange}
                            value={entry}
                        />
                    </div>
                    <Button text="Accept" className="btn btn-primary mt-2"  onClick={accept}/>
                    <Button text="Back" className="btn btn-primary mt-2" />
                    {error && (
                        <p className="text-danger mt-3 mx-auto">
                            {error}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Purchase;
