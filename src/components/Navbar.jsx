import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { isLoggedIn, logout } from "../auth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = ["Home", "About", "All Course", "Testimonials", "Contact"];

  const handleLogout = () => {
    logout(); // Call the logout function from auth.js
    window.location.href = "/"; // Redirect to home page after logout
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-[999] transition-shadow duration-300 text-xl pt-3 pb-3 ${
        navOpen ? "shadow-md" : ""
      }`}
    >
      <div className=" mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <span className=" text-[35px] sm:text-[35px] font-extrabold text-[#1f1f1f] ">
            FitForge
          </span>
          <span className="text-orange-500 text-[35px] sm:text-[40px] font-extrabold">
            .
          </span>
        </a>
        {/* Desktop Navigation */}
        <nav className="lg:flex hidden items-center gap-8 ">
          {navLinks.map((text, index) => (
            <a
              key={text}
              href={
                text === "Home"
                  ? "/"
                  : `#${text.toLowerCase().replace(/\s/g, "")}`
              }
              className="text-[#1f1f1f] font-medium text-[px] hover:text-orange-500 transition-colors duration-200"
            >
              {text}
            </a>
          ))}
        </nav>
        {/* Register Trainer (Only if logged in) */}
        <div className=" xl:flex gap-2 space-y-2 xl:space-y-0">
          {isLoggedIn() && (
            <Link
              to="/trainer/register-form"
              className="lg:block hidden bg-green-500 text-white px-5 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors duration-200"
            >
              Register Trainer
            </Link>
          )}
          {/* Sign Up / Logout Button (Desktop Only) */}
          <div className="lg:block hidden">
            {isLoggedIn() ? (
              <button
                onClick={handleLogout}
                className=" bg-red-500 text-white px-5 py-2 rounded-full font-medium hover:bg-red-600 transition-colors duration-200"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className=" bg-orange-500 text-white px-5 py-2 rounded-full font-medium hover:bg-green-600 transition-colors duration-200"
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className=" lg:hidden block text-[32px] text-[#1f1f1f]"
          onClick={() => setNavOpen(true)}
          aria-label="Open menu"
        >
          <MdOutlineMenu />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`fixed top-0 left-0 h-full w-[260px] bg-white z-[60] shadow-md transform transition-transform duration-300 ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-[28px] text-[#1f1f1f]"
          onClick={() => setNavOpen(false)}
          aria-label="Close menu"
        >
          <IoCloseSharp />
        </button>

        {/* Nav Links */}
        <ul className="mt-[100px] space-y-4 px-6">
          {navLinks.map((text, index) => (
            <li key={text}>
              <a
                href={
                  text === "Home"
                    ? "/"
                    : `#${text.toLowerCase().replace(/\s/g, "")}`
                }
                className="block text-[#1f1f1f] text-[16px] font-semibold py-2 border-b border-gray-100"
                onClick={() => setNavOpen(false)}
              >
                {text}
              </a>
            </li>
          ))}

          {/* Sign Up in mobile */}
          {/* Register Trainer (Only if logged in) */}
          {isLoggedIn() && (
            <li>
              <Link
                to="/trainer/register-form"
                className="block  w-full text-center bg-green-500 text-white py-2 rounded-full font-medium hover:bg-orange-600 transition"
                onClick={() => setNavOpen(false)}
              >
                Register Trainer
              </Link>
            </li>
          )}

          {/* Sign Up / Logout in mobile */}
          <li className="mt-6">
            {isLoggedIn() ? (
              <button
                onClick={() => {
                  handleLogout();
                  setNavOpen(false);
                }}
                className="block w-full text-center bg-red-500 text-white py-2 rounded-full font-medium hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block w-full text-center bg-orange-500 text-white py-2 rounded-full font-medium hover:bg-orange-600 transition"
                onClick={() => setNavOpen(false)}
              >
                Sign Up
              </Link>
            )}
          </li>
        </ul>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-[55] transition-opacity duration-300 ${
          navOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setNavOpen(false)}
      ></div>
    </header>
  );
};

export default Navbar;
