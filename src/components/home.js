import React, { useState } from 'react';
import Footer from './footer';
import Button from './button';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Rates', href: '#' },
  { name: 'Contact us', href: '#' },
];

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  function handleClick() {
    navigate('/signup');
  }
  function Login() {
    navigate('/signin');
  }

  return (
    <div className="relative min-h-screen">
      {/* Blurred Background Layer */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center blur-sm"
        style={{
          backgroundImage: `url("/images/2.jpg")`,
        }}
      ></div>

      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 bg-gray-800">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5" onClick={handleClick}>
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
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-700"
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
             <a onClick={Login} href="#" className="transition delay-150 duration-300 ease-in-out transform hover:scale-105 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Login
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
                    onClick={Login}
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      {/* Main Content */}
      <div className="animate__animated animate__fadeIn relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center welcome shadow-2xl">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Welcome to{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400">
                Cresendo
              </span>
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Your gateway to reliable{' '}
              <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400">
                Bitcoin (BTC)
              </span>{' '}
              and{' '}
              <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400">
                Ethereum (ETH)
              </span>{' '}
              trades. Join us today to experience seamless cryptocurrency
              transactions!!
            </p>
            <div className="mt-10 d-flex items-center justify-center gap-x-6 welcomepagebutton" >
            {/* <Button onClick={handleClick} className="transition delay-150 duration-300 ease-in-out btn btn-primary" text="Register" /> */}
            
            <Button onClick={handleClick} className="transition delay-150 duration-300 ease-in-out transform hover:scale-105 btn btn-primary" text="Register" />
            <Button onClick={handleClick} className="transition delay-150 duration-300 ease-in-out transform hover:scale-105 btn btn-primary" text="Login" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
