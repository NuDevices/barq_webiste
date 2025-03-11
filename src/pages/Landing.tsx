import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; 
import TypingEffect from "../components/utils/TypingEffect";
import productM2 from "../assets/M2.png";

const Landing: React.FC = () => {
  useEffect(() => {
    document.title = "BARQTECH | AI Acceleration Hardware";
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />

      {/* ✅ Prevent Header Overlap */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        {/* ✅ Fix Title Responsiveness */}
        <h1 data-aos="fade-right" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          The Fastest AI Vision Accelerator
        </h1>

        <TypingEffect />

        {/* ✅ Responsive Image */}
        <img 
          src={productM2} 
          alt="BARQTECH AI Accelerator" 
          className="w-56 sm:w-64 md:w-80 lg:w-96 h-auto mx-auto object-contain mt-6"
          data-aos="fade-left"
        />

        {/* ✅ Icons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6 text-gray-500 text-xs sm:text-sm md:text-base">
          <span>🔬 Advanced AI</span>
          <span>🚀 Edge Acceleration</span>
          <span>🇦🇪 Made in UAE</span>
        </div>

        {/* ✅ CTA Buttons */}
        <div className="flex flex-wrap justify-center mt-8 gap-4">
          <Link to="/products">
            <button className="bg-[#2CB2DD] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium hover:bg-[#1A8CB3] w-full sm:w-auto">
              Explore Products
            </button>
          </Link>
          <Link to="/contact">
            <button className="border border-gray-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-200 w-full sm:w-auto">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
