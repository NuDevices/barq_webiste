import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Logo from "../assets/logohbot.png";

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const closeDropdowns = () => {
    setMenuOpen(false);
    setAboutDropdownOpen(false);
  };

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg fixed top-0 left-0 w-full z-50 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={Logo}
            alt="BARQTECH" 
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/products"
            className={`px-4 py-2 rounded-lg text-lg transition-all duration-300 ${
              isActive("/products")
                ? "bg-[#2CB2DD] text-white shadow-md"
                : "text-gray-700 hover:bg-[#2CB2DD]/10 hover:text-[#2CB2DD]"
            }`}
          >
            Products
          </Link>
          <Link
            to="/applications"
            className={`px-4 py-2 rounded-lg text-lg transition-all duration-300 ${
              isActive("/applications")
                ? "bg-[#2CB2DD] text-white shadow-md"
                : "text-gray-700 hover:bg-[#2CB2DD]/10 hover:text-[#2CB2DD]"
            }`}
          >
            Applications
          </Link>

          {/* About Dropdown */}
          <div className="relative">
            <button
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg text-lg transition-all duration-300 ${
                isActive("/about") || isActive("/news")
                  ? "bg-[#2CB2DD] text-white shadow-md"
                  : "text-gray-700 hover:bg-[#2CB2DD]/10 hover:text-[#2CB2DD]"
              }`}
            >
              About
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  aboutDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
                <Link
                  to="/about"
                  onClick={closeDropdowns}
                  className="block px-5 py-3 text-gray-700 hover:bg-[#2CB2DD]/10 hover:text-[#2CB2DD] transition"
                >
                  About Us
                </Link>
                <Link
                  to="/news"
                  onClick={closeDropdowns}
                  className="block px-5 py-3 text-gray-700 hover:bg-[#2CB2DD]/10 hover:text-[#2CB2DD] transition"
                >
                  News
                </Link>
                <Link
                  to="/careers"
                  onClick={closeDropdowns}
                  className="block px-5 py-3 text-gray-700 hover:bg-[#2CB2DD]/10 hover:text-[#2CB2DD] transition"
                >
                  Careers
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={`px-4 py-2 rounded-lg text-lg transition-all duration-300 ${
              isActive("/contact")
                ? "bg-[#2CB2DD] text-white shadow-md"
                : "text-gray-700 hover:bg-[#2CB2DD]/10 hover:text-[#2CB2DD]"
            }`}
          >
            Contact
          </Link>


        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <Link
              to="/products"
              className={`px-4 py-3 rounded-lg text-lg transition-all duration-300 ${
                isActive("/products")
                  ? "bg-[#2CB2DD] text-white"
                  : "text-gray-700 hover:bg-[#2CB2DD]/10 hover:text-[#2CB2DD]"
              }`}
              onClick={closeDropdowns}
            >
              Products
            </Link>
            <Link
              to="/applications"
              className={`px-4 py-3 rounded-lg text-lg transition-all duration-300 ${
                isActive("/applications")
                  ? "bg-[#2CB2DD] text-white"
                  : "text-gray-700 hover:bg-[#2CB2DD]/10 hover:text-[#2CB2DD]"
              }`}
              onClick={closeDropdowns}
            >
              Applications
            </Link>
            <Link
              to="/about"
              className={`px-4 py-3 rounded-lg text-lg transition-all duration-300 ${
                isActive("/about")
                  ? "bg-[#2CB2DD] text-white"
                  : "text-gray-700 hover:bg-[#2CB2DD]/10 hover:text-[#2CB2DD]"
              }`}
              onClick={closeDropdowns}
            >
              About Us
            </Link>
            <Link
              to="/news"
              className={`px-4 py-3 rounded-lg text-lg transition-all duration-300 ${
                isActive("/news")
                  ? "bg-[#2CB2DD] text-white"
                  : "text-gray-700 hover:bg-[#2CB2DD]/10 hover:text-[#2CB2DD]"
              }`}
              onClick={closeDropdowns}
            >
              News
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-3 rounded-lg text-lg transition-all duration-300 ${
                isActive("/contact")
                  ? "bg-[#2CB2DD] text-white"
                  : "text-gray-700 hover:bg-[#2CB2DD]/10 hover:text-[#2CB2DD]"
              }`}
              onClick={closeDropdowns}
            >
              Contact
            </Link>
            <Link
              to="/careers"
              className={`px-4 py-3 rounded-lg text-lg transition-all duration-300 ${
                isActive("/careers")
                  ? "bg-[#2CB2DD] text-white"
                  : "text-gray-700 hover:bg-[#2CB2DD]/10 hover:text-[#2CB2DD]"
              }`}
              onClick={closeDropdowns}
            >
              Careers
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;