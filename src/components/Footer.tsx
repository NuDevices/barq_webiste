import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logowot.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: "BARQ V-2", href: "/products#v2" },
      { name: "BARQ V-20", href: "/products#v20" },
      { name: "Development Kits", href: "/products#dev-kits" }
    ],
    applications: [
      { name: "Industrial", href: "/applications#industrial" },
      { name: "Defence", href: "/applications#defence" },
      { name: "Smart Cities", href: "/applications#smart-cities" }
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" }
    ],
    social: [
      { name: "LinkedIn", href: "https://linkedin.com/company/barq", icon: "linkedin" }
    ],
  };

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img src={Logo} alt="BARQ" className="h-24 w-auto" /> {/* Increased size from h-8 to h-12 */}
            </div>
            <p className="text-gray-400 mb-6">
              Pioneering the future of AI acceleration with cutting-edge hardware solutions for edge computing and smart vision applications.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {renderSocialIcon(item.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Applications</h3>
            <ul className="space-y-3">
              {footerLinks.applications.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-400">
              © {currentYear} BARQTECH TRADING FZCO. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="mailto:info@barq.ae" className="hover:text-white transition-colors duration-200">
                  info@barqtech.ae
                </a>
                <a href="tel:+971585883846" className="hover:text-white transition-colors duration-200">
                  +971 585883846
                </a>
                <span>Dubai Silicon Oasis, Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;