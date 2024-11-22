import React, { useState } from "react";
import Input from "./input";
import Button from "./button";
import Footer from "./footer";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Rates', href: '#' },
    { name: 'Contact us', href: '#' },
  ]

function Purchase() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [rate, setRate] = useState(0); 
    const [entry, setEntry] = useState(0); 
    const [currency, setCurrency] = useState("Coin"); // Displayed name of the coin
    const [error, setError] = useState("");
    function Signup() {
        navigate('/signup')
    }

    const fetchRate = async (selectedCurrency) => {
        const API_KEY = process.env.REACT_APP_KEY; 
        const API_URL = `https://api.coinlayer.com/live?access_key=${API_KEY}&symbols=${selectedCurrency}&target=NGN`;

        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            if (data.success) {
                const adjustedRate = Math.max(0, data.rates[selectedCurrency.toUpperCase()] - 100);
                setRate(adjustedRate); // Set the rate for USDT or ETH
            } else {
                setError("Failed to fetch live rates.");
            }
        } catch (err) {
            setError("An error occurred while fetching rates.");
        }
    };

    const navigate = useNavigate();

    const accept = () => {
        navigate('/barcode');
    };

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

    const handleCurrencySelection = (selectedLabel, fetchSymbol) => {
        setCurrency(selectedLabel); // Update button label to the selected display name
        fetchRate(fetchSymbol); // Fetch the rate using the fetchSymbol (e.g., "USDT")
    };

    return (
        <div>
        <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 bg-gray-800">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Cresendo</span>
              <img
              style={{width:"50px",height:"50px"}}
                alt=""
                src="/images/icon.jpg"
                className="h-8 w-auto"
              />
              <h1 className='mt-3 ms-2 navbrandtext'><span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400">Cresendo</span></h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold alice-blue">
                {item.name}
              </a>
            ))}
          </div>
          
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Cresendo</span>
                <img
                  alt=""
                  src="/images/icon.jpg"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 ">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 "
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    onClick={Signup}
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Sign-Up
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header><header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 bg-gray-800">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Cresendo</span>
              <img
              style={{width:"50px",height:"50px"}}
                alt=""
                src="/images/icon.jpg"
                className="h-8 w-auto"
              />
              <h1 className='mt-3 ms-2 navbrandtext'><span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400">Cresendo</span></h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold alice-blue">
                {item.name}
              </a>
            ))}
          </div>
          
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Cresendo</span>
                <img
                  alt=""
                  src="/images/icon.jpg"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 ">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 "
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    onClick={Signup}
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Sign-Up
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
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
                                {currency} {/* Display selected label */}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="currencyDropdown">
                                <li>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleCurrencySelection("BTC", "USDT")}
                                    >
                                        <i className="fa-brands fa-btc me-2"></i> Bitcoin
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleCurrencySelection("ETH", "ETH")}
                                    >
                                        <i className="fa-brands fa-ethereum me-2"></i> Ethereum
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <Input
                            t="number"
                            className="priceinput"
                            p="Enter $ amount"
                            n="amount"
                            oC={handleAmountChange}
                            value={entry}
                        />
                    </div>
                    <Button text="Accept" className="btn btn-primary mt-2" onClick={accept} />
                    <Button text="Back" className="btn btn-primary mt-2" />
                    {error && (
                        <p className="text-danger mt-3 mx-auto">
                            {error}
                        </p>
                    )}
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Purchase;
