import React, { useState } from "react";
import Input from "./input";
import Button from "./button";
import Barcode from "./barcodeeth";
import Footer from "./footer";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Rates", href: "#" },
  { name: "Contact us", href: "#" },
];

function Purchase() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rate, setRate] = useState(0);
  const [entry, setEntry] = useState("");
  const [currency, setCurrency] = useState("Select Coin");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const accept = () => {
    if (!entry || entry < 50) {
      setError("Entry must be $50 or more");
      return;
    }
    if (currency === "BTC") {
      navigate("/barcode1");
    } else if (currency === "ETH") {
      navigate("/barcodeeth");
    } else {
      setError("Please select a cryptocurrency.");
    }
  };

  const handleClick = () => {
    navigate("/");
  };

  const fetchRate = async (selectedCurrency) => {
    setLoading(true);
    const API_KEY = process.env.REACT_APP_KEY;
    const API_URL = `https://api.coinlayer.com/live?access_key=${API_KEY}&symbols=${selectedCurrency.toUpperCase()}&target=NGN`;

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log("API Response:", data);

      if (data.success && data.rates[selectedCurrency.toUpperCase()]) {
        setRate(data.rates[selectedCurrency.toUpperCase()]);
        setError("");
      } else {
        setError("Failed to fetch live rates.");
        setRate(0);
      }
    } catch (err) {
      setError("An error occurred while fetching rates.");
      setRate(0);
    } finally {
      setLoading(false);
    }
  };

  const handleAmountChange = (e) => {
    const inputValue = e.target.value;
    setEntry(inputValue);

    if (Number(inputValue) < 50) {
      setError("Entry must be $50 or more");
    } else {
      setError("");
    }
  };

  const handleCurrencySelection = (selectedCurrency) => {
    setCurrency(selectedCurrency);
    fetchRate(selectedCurrency);
  };

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center blur-sm"
        style={{ backgroundImage: `url("/images/2.jpg")` }}
      ></div>

      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-2 lg:px-8 bg-gray-800"
        >
          <div className="lg:flex-1 ml-5 sm:ml-16">
            <a href="#" className="-m-1.5 p-1.5" onClick={handleClick}>
              <span className="sr-only">Crescendo</span>
              <img
                style={{ width: "50px", height: "50px" }}
                alt="Crescendo Logo"
                src="/images/icon.jpg"
                className="h-8 w-auto"
              />
              <h1 className="mt-3 ms-2 navbrandtext">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-200 hidden sm:block">
                  Crescendo
                </span>
              </h1>
            </a>
          </div>
          <div className="flex lg:hidden mr-6 sm:mr-14 border text-blue-700 rounded">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2.5 text-blue-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </nav>
      </header>

      <div className="relative flex items-center justify-center min-h-screen">
        <div className="card bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg">
          <h1 className="mt-2 text-sky-50 text-center text-xl font-bold">
            {loading
              ? "Fetching rate..."
              : rate > 0 && entry
              ? `$/${rate.toLocaleString()} | ₦${(rate * entry).toLocaleString()}`
              : "Enter amount and select currency"}
          </h1>

          <div className="mt-3 d-flex m-auto w-full">
            <select
              className="btn btn-primary text-sm h-1/4 mt-3"
              value={currency}
              onChange={(e) => handleCurrencySelection(e.target.value)}
            >
              <option disabled value="Select Coin">
                Select Coin
              </option>
              <option value="BTC">Bitcoin</option>
              <option value="ETH">Ethereum</option>
            </select>
            <Input
              t="number"
              className="text-sky-100 bg-transparent mx-2.5"
              p="Enter $ amount"
              n="amount"
              oC={handleAmountChange}
              value={entry}
            />
          </div>
          <Button text="Accept" className="btn btn-primary mt-2" onClick={accept} />
          <Button text="Back" className="btn btn-primary mt-2" onClick={handleClick} />
          {error && <p className="text-danger mt-3 mx-auto">{error}</p>}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Purchase;
