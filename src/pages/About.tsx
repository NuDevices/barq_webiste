import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Images
import OurVision from "../assets/ourvision.png";
import OurTeam from "../assets/ourteam.jpg";
import OurTechnology from "../assets/ourtech.jpg";

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // Company milestones
  const milestones = [
    {
      year: "2025",
      title: "Foundation",
      description: "BARQ was established in Dubai, UAE"
    },
    {
      year: "2025 Q1",
      title: "First Product",
      description: "Launch of BARQ V-2 FPGA Starter Kit"
    },
    {
      year: "2025 Q4",
      title: "Product Line Expansion",
      description: "Introduction of BARQ V-20 series"
    },
    {
      year: "2026",
      title: "Global Expansion",
      description: "Opening of international offices"
    }
  ];

  // Team stats
  const teamStats = [
    { value: "15+", label: "Team Members" },
    { value: "4+", label: "Countries" },
    { value: "6+", label: "Patents" },
    { value: "25+", label: "Research Papers" }
  ];

  // Core values
  const coreValues = [
    {
      title: "Innovation",
      description: "Pushing the boundaries of AI acceleration technology",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "Delivering unmatched quality and performance",
      icon: "⭐"
    },
    {
      title: "Sustainability",
      description: "Creating energy-efficient solutions for a better future",
      icon: "🌱"
    },
    {
      title: "Collaboration",
      description: "Working together to achieve breakthrough results",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
            About BARQ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of AI acceleration with cutting-edge hardware solutions
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img src={OurVision} alt="Our Vision" className="rounded-2xl shadow-lg w-full" />
            </div>
            <div data-aos="fade-left" className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600">
                  BARQ envisage AI to help humanity live longer, safer, healthier, and more fulfilling lives—enabling 
                  progress that feels effortless, equitable, and everywhere.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600">
                  Engineer the most powerful, energy-efficient AI processors for the edge—technology that runs 
                  smarter, faster, and leaner to turn AI's potential into real-world impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <span className="text-primary font-bold">{milestone.year}</span>
                      <h3 className="text-xl font-semibold my-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
              <p className="text-lg text-gray-600 mb-8">
                BARQ is a UAE based-tech startup bringing together world-class experts in AI, hardware design, and business strategy. 
                Our diverse team is united by a shared vision of transforming the future of AI acceleration.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {teamStats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <img src={OurTeam} alt="Our Team" className="rounded-2xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img src={OurTechnology} alt="Our Technology" className="rounded-2xl shadow-lg w-full" />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technology</h2>
              <p className="text-lg text-gray-600 mb-8">
                BARQ's cutting-edge AI accelerators leverage the latest in hardware-optimized deep learning 
                to provide unmatched performance, efficiency, and scalability for edge applications.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom AI architecture optimized for edge deployment",
                  "Industry-leading performance per watt",
                  "Flexible form factors for various applications",
                  "Comprehensive development tools and support"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;