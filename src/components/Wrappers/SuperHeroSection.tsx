import React, { useEffect } from "react";
import TypingEffect from "../utils/TypingEffect";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const SuperHeroSection: React.FC<{ title: string; image: string }> = ({ title, image }) => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center text-center px-6 pt-16">
      <div className="max-w-4xl mx-auto">
        <h1 data-aos="fade-right" className="text-8xl font-bold leading-tight mb-4">{title}</h1>
        <TypingEffect />
      </div>
      <img data-aos="fade-left" src={image} alt="AI Vision Accelerator" className="w-full max-w-4xl mx-auto mb-12" />
    </section>
  );
};

export default SuperHeroSection;
