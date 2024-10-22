// src/components/Navbar.js

import React from 'react';
import { FaSearch,  } from 'react-icons/fa';  // Importing icons
import logo from "../assets/images/logo.png"
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    
      <div className="bg-black text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="welcome-text">
            WELCOME TO WEDDVAULT
          </div>
          <div className="top-bar-links flex items-center space-x-4">
            <a href="#" className="hover:text-gray-400">HELP</a>
            <a href="#" className="hover:text-gray-400">PRICING</a>
            <a href="#" className="hover:text-gray-400">REGISTER</a>
            <a href="#" className="hover:text-gray-400">LOGIN</a>
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
            <li><Link className="hover:text-red-500">HOME</Link></li>
            <li><Link className="hover:text-red-500">PAGES </Link></li>
            <li><Link className="hover:text-red-500">LISTING </Link></li>
            <li><Link className="hover:text-red-500">VENDOR </Link></li>
            <li><Link className="hover:text-red-500"> PLANNING TOOLS </Link></li>
            <li><Link className="hover:text-red-500">REAL WEDDING </Link></li>
            <li><Link className="hover:text-red-500">CONTACT </Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
