import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logobow.png";

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg fixed top-0 left-0 w-full z-50 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={Logo}
            alt="BARQTECH" 
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["/products", "/applications", "/about", "/contact"].map((path) => (
            <Link
              key={path}
              to={path}
              className={`px-4 py-2 rounded-lg text-lg transition-all duration-300 ${
                isActive(path)
                  ? "bg-[#2CB2DD] text-white shadow-md"
                  : "text-gray-700 hover:bg-[#2CB2DD]/10 hover:text-[#2CB2DD]"
              }`}
            >
              {path.replace("/", "").charAt(0).toUpperCase() + path.replace("/", "").slice(1)}
            </Link>
          ))}
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
            {["/products", "/applications", "/about", "/contact"].map((path) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-3 rounded-lg text-lg transition-all duration-300 ${
                  isActive(path)
                    ? "bg-[#2CB2DD] text-white"
                    : "text-gray-700 hover:bg-[#2CB2DD]/10 hover:text-[#2CB2DD]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {path.replace("/", "").charAt(0).toUpperCase() + path.replace("/", "").slice(1)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;