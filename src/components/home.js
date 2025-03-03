import React, { useState } from 'react';
import Footer from './footer';
import Button from './button';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Navigation from './navigation';



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
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center blur-sm"
        style={{
          backgroundImage: `url("/images/2.jpg")`,
        }}
      ></div>

      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-2 lg:px-8 bg-gray-800"
        >
          <div className="lg:flex-1 ml-5 sm:ml-16">
            <a href="#" className="-m-1.5 p-1.5">
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
            {Navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-semibold text-sky-100"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end mr-12">
            <a
              onClick={Login}
              href="#"
              className="transition transform rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 hover:scale-105"
            >
              Login
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
                  {Navigation.map((item) => (
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
                    onClick={Login}
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
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
      <main className="animate__animated animate__fadeIn relative px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center welcome ">
            <h1 className="font-sans text-balance text text-5xl font-bold tracking-tight text-sky-100 sm:text-7xl">
              Welcome to{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-200">
                Crescendo
              </span>
            </h1>
            <p className="text-2xl font-serif mt-8 font-medium text-sky-100 sm:text-xl">
              Your gateway to reliable{' '}
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-200">
                Bitcoin(BTC)
              </span>{' '}
              and{' '}
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-200">
                Ethereum(ETH)
              </span>{' '}
              trades. Join us today to experience seamless cryptocurrency transactions!
            </p>
            <div className="mt-10 d-flex items-center justify-center gap-x-6 welcomepagebutton">
              <Button
                onClick={handleClick}
                className="w-2/4 text-lg transition transform hover:scale-105 btn btn-primary"
                text="Register"
              />
              <Button
                onClick={Login}
                className="w-2/4 text-lg transition transform hover:scale-105 btn btn-primary"
                text="Login"
              />
            </div>
          </div>
        </div>
      </main>
        <Footer />
    </div>
  );
}

export default Home;
