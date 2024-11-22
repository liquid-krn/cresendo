import React, { useState } from "react";
import "./home.css";
import Footer from "./footer";
import Input from "./input";
import Button from "./button";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const navigation = [
  { id: 1, name: "Product", href: "#" },
  { id: 2, name: "Features", href: "#" },
  { id: 3, name: "Rates", href: "#" },
  { id: 4, name: "Contact us", href: "#" },
];

function Signin() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  function Login() {
    navigate("/purchase");
  }
  function Signup() {
    navigate("/signup");
  }

  return (
    <div className="relative min-h-screen">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center blur-sm"
        style={{
          backgroundImage: `url("/images/2.jpg")`,
        }}
      ></div>

      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-50 bg-gray-800 bg-opacity-80 backdrop-blur-sm">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5" onClick={handleClick}>
              <span className="sr-only">Cresendo</span>
              <img
                style={{ width: "50px", height: "50px" }}
                alt=""
                src="/images/icon.jpg"
                className="h-8 w-auto"
              />
              <h1 className="mt-3 ms-2 navbrandtext">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400">
                  Cresendo
                </span>
              </h1>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              onClick={Signup}
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Sign-up
            </a>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Cresendo</span>
                <img alt="" src="/images/icon.jpg" className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.id}
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
                    Sign-Up
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Main Content */}
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="card bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-white">SIGN-IN</h1>
          <h3 className="text-white mt-2">Welcome Back [user]</h3>
          <div className="container mt-4">
            <Input
              p="Enter Email or Username"
              t="email"
              className="mt-4 border-0 border-b border-primary-subtle"
            />
            <Input
              p="Password"
              t="password"
              className="mt-4 border-0 border-b border-primary-subtle"
            />
            <a href="#" className="mt-6 text-white">
              Forgot password?
            </a>
          </div>
          <Button
            onClick={Login}
            className="btn btn-primary mt-4"
            text="Signin"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Signin;
