import React from "react";
import {
  CiLocationOn,
  CiMail,
  CiFacebook,
  CiTwitter,
  CiInstagram,
} from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="max-w-screen-2xl h-16 mx-auto  bg-white-800 shadow-md">
      {/* <nav className=" border-b-amber-100 flex justify-between items-center p-4 mx-auto text-stone-800">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-1 ">
            <CiLocationOn />
            <p className="text-sm text-gray-500">123 Main St, City, Country</p>
          </div>

          <div className="flex items-center gap-1">
            <CiMail />
            <p className="text-sm text-gray-500">info@example.com</p>
          </div>
        </div>

        <div className="flex justify-between items-center gap-4">
          <CiFacebook />
          <CiTwitter />
          <CiInstagram />
        </div>
      </nav> */}

      <header className="bg-white  sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <NavLink
                to="/"
                className="text-xl font-serif font-bold text-stone-600"
              >
                Early FixIt
              </NavLink>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <NavLink
                to="/"
                className="text-gray-700 hover:text-stone-600 transition-colors"
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className="text-gray-700 hover:text-stone-600 transition-colors"
              >
                services
              </NavLink>
              <NavLink
                to="/staff"
                className="text-gray-700 hover:text-stone-600 transition-colors"
              >
                Staff
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-700 hover:text-stone-600 transition-colors"
              >
                About
              </NavLink>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-stone-600 focus:outline-none">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Call to action buttons - hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLink
                href="#"
                className="text-gray-700 hover:text-stone-600 transition-colors"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
