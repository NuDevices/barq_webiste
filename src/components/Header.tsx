import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 py-6"> 
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold text-black">
          <span className="text-[#2CB2DD]">BARQ</span>TECH
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link
            to="/products"
            className={`px-4 py-3 rounded-md text-lg ${
              isActive("/products") ? "bg-[#2CB2DD] text-white" : "text-black hover:bg-[#2CB2DD] hover:text-white"
            }`}
          >
            Products
          </Link>

          <Link
            to="/applications"
            className={`px-4 py-3 rounded-md text-lg ${
              isActive("/applications") ? "bg-[#2CB2DD] text-white" : "text-black hover:bg-[#2CB2DD] hover:text-white"
            }`}
          >
            Applications
          </Link>

          <Link
            to="/about"
            className={`px-4 py-3 rounded-md text-lg ${
              isActive("/about") ? "bg-[#2CB2DD] text-white" : "text-black hover:bg-[#2CB2DD] hover:text-white"
            }`}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className={`px-4 py-3 rounded-md text-lg ${
              isActive("/contact") ? "bg-[#2CB2DD] text-white" : "text-black hover:bg-[#2CB2DD] hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Extra Buttons */}
        <div className="space-x-4">
          <Link to="/contact">
            <button className="border border-gray-400 px-6 py-3 rounded-lg text-lg hover:bg-gray-200">
              Try Now
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-[#2CB2DD] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#1A8CB3]">
              Buy Now
            </button>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;

// <button className="bg-[#2CB2DD] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#1A8CB3]">
// </button><button className="border border-gray-400 px-6 py-3 rounded-lg text-lg hover:bg-gray-200">

