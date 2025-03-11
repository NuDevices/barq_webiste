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

// Image size settings (uniform tile sizing)
const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans pt-24">
      <Header />
    <StandardSection title="Products" subtitle="NudgeV AI Vision Acceleration Hardware">
        <div className="space-y-8">
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
            <div key={index} className="flex flex-col md:flex-row items-center bg-white p-10 rounded-2xl shadow-2xl border border-gray-400">
              <img src={product.img} alt={product.title} className="w-64 h-64 object-contain rounded-lg md:mr-12 mb-8 md:mb-0" />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-4xl font-semibold mb-4">{product.title}</h3>
                <p className="text-2xl text-gray-600">{product.desc}</p>
                <div className="mt-8 flex justify-center md:justify-start space-x-8">
                  <Link to="/contact">
                    <button className="bg-[#2CB2DD] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#1A8CB3]">{product.button1}</button>
                  </Link>
                  <button 
                  onClick={() => window.open("/documents/Specifications BARQ-V20.pdf", "_blank")}
                  className="border border-gray-400 px-6 py-3 rounded-lg text-lg hover:bg-gray-200">{product.button2}
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
