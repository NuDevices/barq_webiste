import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png"; // Placeholder logo

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-8 md:px-16 py-6 md:py-10 bg-white border-b border-gray-200">
      {/* Logo - Scales based on screen size */}
      <Link to="/">
        <img src={logo} alt="BARQTECH Logo" className="w-40 md:w-60 lg:w-80" />
      </Link>

      {/* Navigation - Bigger font, responsive layout */}
      <nav className="hidden md:flex space-x-6 lg:space-x-14 font-bold text-lg md:text-2xl">
        <Link to="/products" className="text-gray-700 hover:text-black">Products</Link>
        <Link to="/applications" className="text-gray-700 hover:text-black">Applications</Link>
        <Link to="/about" className="text-gray-700 hover:text-black">About Us</Link>
        <Link to="/contact" className="text-gray-700 hover:text-black">Contact</Link>
      </nav>

      {/* Buttons - Adjust based on screen size */}
      <div className="space-x-3 md:space-x-6">
        <Link to="/contact">
          <button className="border border-gray-400 px-4 md:px-6 py-2 md:py-3 text-base md:text-lg rounded-lg">
            Try Now
          </button>
        </Link>
        <Link to="/contact">
          <button className="bg-gray-900 text-white px-4 md:px-6 py-2 md:py-3 text-base md:text-lg rounded-lg hover:bg-black">
            Buy Now
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
