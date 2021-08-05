import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { change_background } from "../navSlice/NavSlice";
// import Scrollspy from 'react-scrollspy'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState("");
  const [navbarShadow, setNavbarShadow] = useState(false);
  let lastScrollTop = 10;
  const dispatch = useDispatch();
  const blur_background = useSelector((state) => state.background_blur.value);
  const navEffects = () => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (window.scrollY > 10) {
      setNavbarShadow(true);
    } else {
      setNavbarShadow(false);
    }

    if (scrollTop > lastScrollTop) {
      setShowNavbar("hide");
    } else {
      setShowNavbar("show");
    }
    lastScrollTop = scrollTop;
  };

  const menuOpen = () => {
    setIsOpen(true);
    dispatch(
      change_background({
        background_blur: true,
      })
    );
    document.body.style.overflowY = "hidden";
  };

  const menuClose = () => {
    setIsOpen(false);
    dispatch(
      change_background({
        background_blur: false,
      })
    );
    document.body.style.overflowY = "scroll";
  };

  useEffect(() => {
    window.addEventListener("scroll", navEffects);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed  w-full top-0 text-white z-50 blur-navbar blur-navbar-bg ${
        blur_background && "blur-navbar-bg-none"
      } ${navbarShadow && "nav-shadow"}  
      ${!isOpen && ""} ${showNavbar === "hide" && "-top-16"}
      ${showNavbar === "show" || (showNavbar === "" && "top-0")}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center">
            <div className="flex-shrink-0 absolute left-5 z-50">
              <a href="/">
                <h1 className="logo-font opacity-80 hover:opacity-100 text-green-300 font-semibold text-3xl">
                  sirilmp
                </h1>
              </a>
            </div>
            <div className="hidden md:block right-5 absolute ">
              <div className="ml-10 flex items-center space-x-4 sub-font text-xs">
                <a
                  href="#puppies"
                  className={`px-3 py-2 transform duration-200 hover:scale-105`}
                >
                <span className='text-green-200'>A</span>bout
                </a>

                <a
                  href="#products"
                  className={`px-3 py-2 transform duration-200 hover:scale-105`}
                >
             <span className='text-green-200'>W</span>orks
                </a>

                <a
                  href="#services"
                  className={`px-3 py-2 transform duration-200 hover:scale-105`}
                >
                  <span className='text-green-200'>S</span>kill
                </a>
                <a href="#contact" className={`px-3 py-2`}>
                <span className='text-green-200'>C</span>ontact
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            {!isOpen ? (
              <svg
                onClick={menuOpen}
                className="cursor-pointer duration-200"
                width="38"
                height="30"
                viewBox="0 0 38 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="38" height="20" fill="" />
                <rect width="37" height="2.5" rx="1.5" fill="#A7F3D0" />
                <rect y="16" width="25" height="2.5" rx="1.5" fill="#A7F3D0" />
                <rect y="8" width="31" height="2.5" rx="1.5" fill="#A7F3D0" />
              </svg>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`main-bg-color nav-vertical-menu-shadow w-1/2 h-screen fixed right-0 top-0 text-center duration-100`}
          id="mobile-menu"
        >
          <div className="flex justify-end mr-7 mt-3.5 mb-5">
            <svg
              onClick={menuClose}
              className="cursor-pointer text-right"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="18"
                width="25"
                height="2.5"
                rx="1.25"
                transform="rotate(-45 1 18)"
                fill="#A7F3D0"
              />
              <path
                d="M1.11612 0.883883C1.60427 0.395728 2.39573 0.395728 2.88388 0.883883L18.7938 16.7938C19.2819 17.2819 19.2819 18.0734 18.7938 18.5616V18.5616C18.3056 19.0497 17.5142 19.0497 17.026 18.5616L1.11612 2.65165C0.627961 2.1635 0.627961 1.37204 1.11612 0.883883V0.883883Z"
                fill="#A7F3D0"
              />
            </svg>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 sub-font text-sm flex flex-col items-center ">
            <a
              href="#home"
              onClick={menuClose}
              className="text-gray-400 hover:text-gray-700 block px-3 py-2"
            >
              Home
            </a>

            <a
              href="#puppies"
              onClick={menuClose}
              className="text-gray-400 hover:text-gray-700 block px-3 py-2"
            >
              Puppies
            </a>

            <a
              href="#products"
              onClick={menuClose}
              className="text-gray-400 hover:text-gray-700 block px-3 py-2"
            >
              Products
            </a>

            <a
              href="#services"
              onClick={menuClose}
              className="text-gray-400 hover:text-gray-700 block px-3 py-2"
            >
              Services
            </a>

            <a
              href="#contact"
              onClick={menuClose}
              className="text-gray-400 hover:text-gray-700 block px-3 py-2"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
