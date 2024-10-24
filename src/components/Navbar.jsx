// src/components/Navbar.js

import React from 'react';
import { FaSearch,  } from 'react-icons/fa';  // Importing icons
import logo from "../assets/images/logo.png"
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [showVendorDropdown, setShowVendorDropdown] = useState(false);

  // Function to toggle dropdown visibility
  const togglePagesDropdown = () => setShowPagesDropdown(!showPagesDropdown);
  const toggleVendorDropdown = () => setShowVendorDropdown(!showVendorDropdown);

  return (
    <div>
    
      <div className="bg-black text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="welcome-text">
            WELCOME TO WEDDVAULT
          </div>
          <div className="top-bar-links flex items-center space-x-4">
            <Link className="hover:text-gray-400">HELP</Link>
            <Link  className="hover:text-gray-400">PRICING</Link>
            <Link to={"/register"} className="hover:text-gray-400">REGISTER</Link>
            <Link to={"/login"} className="hover:text-gray-400">LOGIN</Link>
            <FaSearch className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>

      
      <nav className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
         
          <div className="logo flex items-center">
            <img src={logo} alt="Weddlist Logo" className="h-10 mr-2" />
            <span className="text-2xl font-bold">WEDDVAULT</span>
          </div>

          
          <ul className="flex space-x-8 text-lg font-medium">
        <li><Link className="hover:text-red-500" to="/">HOME</Link></li>

        {/* PAGES Dropdown */}
        <li className="relative">
          <button onClick={togglePagesDropdown} className="hover:text-red-500">
            PAGES
          </button>
          {showPagesDropdown && (
            <ul className="absolute bg-white shadow-lg p-2 space-y-2 mt-2">
              <li><Link to="/about" className="hover:text-red-500">About Us</Link></li>
              <li><Link to="/services" className="hover:text-red-500">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-red-500">Gallery</Link></li>
            </ul>
          )}
        </li>

        <li><Link className="hover:text-red-500" to="/listing">LISTING</Link></li>

        {/* VENDOR Dropdown */}
        <li className="relative">
          <button onClick={toggleVendorDropdown} className="hover:text-red-500">
            VENDOR
          </button>
          {showVendorDropdown && (
            <ul className="absolute bg-white shadow-lg p-2 space-y-2 mt-2">
              <li><Link to="/log" className="hover:text-red-500">Vendor Login</Link></li>
              <li><Link to="/reg" className="hover:text-red-500">Register as Vendor</Link></li>
              <li><Link to="/dashboard" className="hover:text-red-500">Vendor Dashboard</Link></li>
            </ul>
          )}
        </li>

        <li><Link className="hover:text-red-500" to="/planning-tools">PLANNING TOOLS</Link></li>
        <li><Link className="hover:text-red-500" to="/real-wedding">REAL WEDDING</Link></li>
        <li><Link className="hover:text-red-500" to="/contact">CONTACT</Link></li>
      </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
