import React, { useState } from "react";
import "./home.css";
import Footer from "./footer";
import Input from "./input";
import Button from "./button";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const navigation = [
  { id: 1, name: "Products", href: "#" },
  { id: 2, name: "Features", href: "#" },
  { id: 3, name: "Rates", href: "#" },
  { id: 4, name: "Contact us", href: "#" },
];

function Signin() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({ username: "", password: "" });
  const [user, setStatus] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  function Login(e) {
    e.preventDefault();
  }
  function Signup() {
    navigate("/signup");
  }
  function handleChange(e){
    e.preventDefault();
    const { name, value } = e.target;
    setUserDetails((oldValue) => ({
      ...oldValue,
      [name]: value,  
    }));
  }
  function onsiginin(e){
    e.preventDefault();
    const {username, password}= userDetails;
      setStatus("")
    if(!username || !password){
      setStatus("kindly fill the form below");
      return;
    }else{
      navigate("/purchase");
    }
  }
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center blur-sm"
        style={{
          backgroundImage: `url("/images/2.jpg")`,
        }}
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
                style={{ width: '50px', height: '50px' }}
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
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((props) => (
              <a
                key={props.name}
                href={props.href}
                className="text-lg font-semibold text-sky-100"
              >
                {props.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end mr-12">
            <a
              onClick={Login}
              href="#"
              className="transition transform rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 hover:scale-105"
            >
              Signup
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Crescendo</span>
                <img alt="Crescendo Logo" src="/images/icon.jpg" className="h-8 w-auto" />
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
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    onClick={Signup}
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <form onSubmit={onsiginin} className="animate__animated animate__fadeIn relative flex items-center justify-center min-h-screen">
        <div className="card bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg h-2/4">
          <h1 className="font-sans text-3xl font-bold text-sky-100 text-center">SIGN-IN</h1>
          <h3 className="font-serif text-sky-100 mt-2">{user}</h3>
          <div className="container">
            <Input
              p="Enter Email or Username"
              t="email"
              n="username"
              oC={handleChange}
              value={userDetails.username}
              className="bg-transparent text-sky-100 placeholder:italic placeholder:text-slate-400 mt-3 border-0 border-bottom border-primary-subtle"
            />
            <Input
              p="Password"
              t="password"
              n="password"
              oC={handleChange}
              value={userDetails.password}
              className="bg-transparent text-sky-100 placeholder:italic placeholder:text-slate-400 mt-4 border-0 border-bottom border-primary-subtle"
            />
            <a href="#" className="font-sans mt-6 text-sky-100">
              Forgot password?
            </a>
          </div>
          <Button
            className="transition delay-150 duration-300 ease-in-out transform hover:scale-105 btn btn-primary mt-3"
            text="Signin"
            type="submit"
          />
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Signin;