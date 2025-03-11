import React from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Link } from "react-router-dom";
import StandardSection from "../components/Wrappers/StandardSection.tsx";

// Product Images
import productV2 from "../assets/FPGA.png";
import productV20 from "../assets/Chip.png";
import productM2 from "../assets/M2.png";
import productPcie from "../assets/PCIe.png";

const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans pt-20">
      <Header />
      <StandardSection title="Products" subtitle="NudgeV AI Vision Acceleration Hardware">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {[
            {
              img: productV2,
              title: "BARQ V-2 PCIe FPGA Starter Kit",
              desc: "A development-ready FPGA board with pre-synthesized 2 TOPS of AI acceleration IP, perfect for prototyping and testing computer vision applications.",
              button1: "Order",
              button2: "Learn more",
            },
            {
              img: productV20,
              title: "BARQ V-20 AI Edge Chip-on-board",
              desc: "A compact chip-on-board solution for embedded AI acceleration featuring 20 TOPS, perfect for IoT devices and edge computing applications.",
              button1: "Pre-order",
              button2: "Learn more",
            },
            {
              img: productM2,
              title: "BARQ V-20 M.2 AI Edge Accelerator Module",
              desc: "A versatile M.2 form factor AI accelerator delivering 20 TOPS AI compute that easily integrates into laptops and small form factor PCs.",
              button1: "Pre-order",
              button2: "Learn more",
            },
            {
              img: productPcie,
              title: "BARQ V-20 PCIe AI Accelerator Card",
              desc: "A high-performance PCIe card designed for workstations and servers, offering powerful AI acceleration capabilities with active cooling.",
              button1: "Pre-order",
              button2: "Learn more",
            },
          ].map((product, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-300 transition-transform transform hover:scale-105 w-full sm:w-[90%] md:w-[80%] lg:w-[75%] mx-auto">
              <img src={product.img} alt={product.title} className="w-32 sm:w-40 md:w-48 lg:w-56 h-32 sm:h-40 md:h-48 lg:h-56 object-contain rounded-lg mb-4" />
              <div className="text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{product.title}</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">{product.desc}</p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <Link to="/contact">
                    <button className="bg-[#2CB2DD] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium hover:bg-[#1A8CB3] transition-all w-auto">{product.button1}</button>
                  </Link>
                  <button 
                    onClick={() => window.open("/documents/Specifications BARQ-V20.pdf", "_blank")}
                    className="border border-gray-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-200 transition-all w-auto"
                  >
                    {product.button2}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </StandardSection>
      <Footer />
    </div>
  );
};

export default Products;