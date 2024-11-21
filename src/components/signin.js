import React from "react";
import { useState } from 'react'
import "./home.css";
import Footer from "./footer";
import Input from "./input";
import Button from "./button";
import Navbar from "./phonenavbar";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Rates', href: '#' },
    { name: 'Contact us', href: '#' },
  ]

function Signin() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigate = useNavigate();
    function handleClick() {
        navigate('/')
    }
    function Login() {
        navigate('/purchase')
    }
    function Signup() {
        navigate('/signup')
    }
    return(<>
        <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 bg-gray-800">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Cresendo</span>
              <img
              style={{width:"50px",height:"50px"}}
                alt=""
                src="./images/icon.jpg"
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
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
             <a onClick={Signup} href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign-up
              </a>
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
                  src="./images/icon.jpg"
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
            style={{
                backgroundImage: `url("./images/2.jpg")`,
            }}
        >
           <div className="card">
           <h1>SIGN-IN</h1>
            <h3 className="text-white" >Weclome Back [user]</h3>
            <div className="container">
            <Input p="Enter Email or Username" t="email"   />
            <Input p="Password" t="password"   />
            <a href="#" className="">Forgot password?</a>
            </div>
            <Button onClick={Login} className="btn btn-primary mt-3" text="Signin" />
        </div>
        <Footer />
        </div>
     </>   
    )
}
export default Signin