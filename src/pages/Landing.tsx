import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SuperHeroSection from "../components/Wrappers/SuperHeroSection";

// Product Images
import productM2 from "../assets/M2.png";

const Landing: React.FC = () => {
  useEffect(() => {
    document.title = "BARQTECH | AI Acceleration Hardware";
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-black font-sans overflow-hidden pt-24">
      <Header />


      {/* SuperHero Section */}
      <SuperHeroSection
        title="The Fastest AI Vision Accelerator"
        image={productM2}
      />

      {/* Premium Divider with Icons */}
      <div className="flex justify-center items-center mt-2 space-x-6 text-gray-500">
        <span>🔬 Advanced AI</span>
        <span>🚀 Edge Acceleration</span>
        <span>🇦🇪 Made in UAE</span>
      </div>

      {/* CTA Buttons */}
      <div className="flex justify-center mt-8 space-x-4 mb-16"> {/* Add mb-16 for extra bottom margin */}
        <Link to="/products">
          <button className="bg-[#2CB2DD] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#1A8CB3]">
            Explore Products
          </button>
        </Link>
        <Link to="/contact">
          <button className="border border-gray-400 px-6 py-3 rounded-lg text-lg hover:bg-gray-200">
            Get in Touch
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;