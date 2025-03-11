import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 py-5 px-6">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* ✅ Logo */}
        <Link to="/" className="text-3xl font-bold text-black">
          <span className="text-[#2CB2DD]">BARQ</span>TECH
        </Link>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["/products", "/applications", "/about", "/contact"].map((path) => (
            <Link
              key={path}
              to={path}
              className={`px-4 py-2 rounded-md text-lg ${
                isActive(path) ? "bg-[#2CB2DD] text-white" : "text-black hover:bg-[#2CB2DD] hover:text-white"
              }`}
            >
              {path.replace("/", "").charAt(0).toUpperCase() + path.replace("/", "").slice(1)}
            </Link>
          ))}
        </nav>

        {/* ✅ Mobile Menu Button */}
        <button className="md:hidden text-black text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-lg">
          {["/products", "/applications", "/about", "/contact"].map((path) => (
            <Link
              key={path}
              to={path}
              className="text-black text-lg py-2"
              onClick={() => setMenuOpen(false)}
            >
              {path.replace("/", "").charAt(0).toUpperCase() + path.replace("/", "").slice(1)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
