import React from "react";
import logo from "../assets/Logo_navbar.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-gradient-to-r from-orange-400 via-indigo-900 to-black shadow-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Section: Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <h2 className="text-white text-2xl font-bold">Top Hire</h2>
        </div>

        {/* Center Section: Nav Links */}
        <ul className="flex space-x-8">
          <Link to="/">
            {" "}
            <li className="text-white hover:text-purple-300 cursor-pointer transition-all duration-200">
              Home
            </li>
          </Link>
          <Link to="/jobs">
            <li className="text-white hover:text-purple-300 cursor-pointer transition-all duration-200">
              Jobs
            </li>
          </Link>

          <Link to="/contact">
            <li className="text-white hover:text-purple-300 cursor-pointer transition-all duration-200">
              Contact
            </li>
          </Link>

          <Link to="/about">
            <li className="text-white hover:text-purple-300 cursor-pointer transition-all duration-200">
              About
            </li>
          </Link>
        </ul>

        {/* Right Section: Button */}
        <div>
          <button
            className="bg-white text-indigo-900 px-5 py-2 rounded-xl font-semibold hover:bg-purple-300 transition-all duration-200"
            onClick={() => navigate("/jobs")}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
