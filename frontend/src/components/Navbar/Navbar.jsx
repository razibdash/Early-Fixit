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
    <div className="max-w-screen-2xl container sticky top-0 z-10 h-16   bg-white-800 shadow-md">
      <header className="bg-white mx-w-screen-2xl shadow-md">
        <div className=" mx-auto px-4 py-4">
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
                className={({ isActive }) =>
                  isActive
                    ? "text-stone-800 py-1 px-5 font-bold border-b-blue-800  border-b-2"
                    : "text-gray-700 py-1 px-5 hover:border-b-blue-800 hover:border-b-2 transition-all"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-stone-800 py-1 px-5 font-bold border-b-blue-800  border-b-2"
                    : "text-gray-700 py-1 px-5 hover:border-b-blue-800 hover:border-b-2 transition-all"
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/staff"
                className={({ isActive }) =>
                  isActive
                    ? "text-stone-800 py-1 px-5 font-bold border-b-blue-800  border-b-2"
                    : "text-gray-800 py-1 px-5 hover:border-b-blue-800 hover:border-b-2 transition-all"
                }
              >
                Staffs
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-stone-800 py-1 px-5 font-bold border-b-blue-800  border-b-2"
                    : "text-gray-700 py-1 px-5 hover:border-b-blue-800 hover:border-b-2 transition-all"
                }
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
                to={"/login"}
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
