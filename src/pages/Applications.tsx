import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GridSection from "../components/Wrappers/GridSection.tsx";


// Placeholder images (Replace with actual assets later)
import camera from "../assets/SmartVision.jpeg";
import drone from "../assets/Drones.png";
import robot from "../assets/Industrial.png";
import retail from "../assets/SmartRetail.jpeg";
import government from "../assets/Govsec.png";
import automotive from "../assets/Automotive.jpeg";

const Applications: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />

      <GridSection title="Applications" subtitle="Accelerating the World to 2071 by 2031">
        {[
          {
            img: camera,
            title: "Smart Vision",
            desc: "Reduce latency by 80%, increase detection accuracy by 3x, lower power consumption by 70%. Smarter cameras with BARQ",
          },
          {
            img: drone,
            title: "Defence",
            desc: "Get >2x the flight time, capture 4K images, Improve >5x AI accuracy, Decrease weight by 50%. Build the best drones with BARQ",
          },
          {
            img: robot,
            title: "Industrial & Robotics",
            desc: "Address industrial challenges and improve performance of critical applications by 8-10x. Automate with BARQ",
          },
          {
            img: retail,
            title: "Smart Retail",
            desc: "Improve model accuracy by 20%. Boost revenue, reduce costs, improve in-store CX. 10X in-store CX with BARQ",
          },
          {
            img: government,
            title: "Government Sector",
            desc: "Reduce decision latency by 80%, improve threat detection by 3x, cut operational costs by 40%. Future proofing with BARQ",
          },
          {
            img: automotive,
            title: "Automotive",
            desc: "Enhance ADAS performance by 2x, reduce power usage by 60%, improve real-time detection by 95%. Drive the future with BARQ",
          },
        ].map((app, index) => (
          <div key={index} className="bg-white p-8 rounded-xl rounded-2xl shadow-2xl border border-gray-400 flex flex-col items-center text-center">
            <img src={app.img} alt={app.title} className="w-36 h-36 object-contain mb-6" />
            <h3 className="text-4xl font-semibold mb-4">{app.title}</h3>
            <p className="text-2xl text-gray-600">{app.desc}</p>
          </div>
        ))}
      </GridSection>

      <Footer />
    </div>
  );
};

export default Applications;
