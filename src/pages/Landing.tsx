import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; 
import TypingEffect from "../components/Utils/TypingEffect";
import productM2 from "../assets/M2.png";

const Landing: React.FC = () => {
  useEffect(() => {
    document.title = "BARQ | AI Acceleration Hardware";
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Two Column Layout */}
      <div className="pt-28 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left" data-aos="fade-right">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight gradient-text mb-6">
                The Fastest AI Vision Accelerator
              </h1>
              <TypingEffect />
            </div>

            {/* Right Content - Product Image */}
            <div data-aos="fade-left">
              <div className="relative bg-white rounded-3xl p-8 shadow-soft">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2CB2DD]/10 to-[#1A8CB3]/10 rounded-[2rem] blur-3xl"></div>
                <div className="relative bg-white rounded-2xl p-8">
                  <img 
                    src={productM2} 
                    alt="BARQ AI Accelerator" 
                    className="w-full max-w-lg mx-auto drop-shadow-xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Full Width */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-soft">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">20x</div>
              <div className="text-gray-600">Faster Processing</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-soft">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">70%</div>
              <div className="text-gray-600">Less Power</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-soft">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">3x</div>
              <div className="text-gray-600">More Efficient</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Why Choose BARQ?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience the next generation of AI acceleration with our cutting-edge solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Unmatched Performance",
                description: "Up to 20 TOPS of dedicated AI compute power for edge applications",
                icon: "⚡"
              },
              {
                title: "Energy Efficient",
                description: "Best-in-class performance per watt for sustainable AI deployment",
                icon: "🌱"
              },
              {
                title: "Easy Integration",
                description: "Multiple form factors supporting various deployment scenarios",
                icon: "🔌"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="card p-8 bg-white"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 rounded-xl bg-primary-light/10 flex items-center justify-center mb-6 shadow-soft">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/products">
              <button className="btn-primary">
                Explore Products
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn-secondary">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;