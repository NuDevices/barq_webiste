import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import Images
import OurStory from "../assets/ourstory.jpg";
import OurVision from "../assets/ourvision.png";
import OurMission from "../assets/ourmission.png";
import OurTeam from "../assets/ourteam.jpg";
import OurTechnology from "../assets/ourtech.jpg";

// Section Data
const sections = [
  {
    title: "Our Story",
    description:
      "BarqTech develops high-performance AI processors that bring datacenter-level intelligence to the edge. Our technology powers smart devices to run advanced AI locally, transforming industries from surveillance to smart cities with unmatched efficiency.",
    image: OurStory,
  },
  {
    title: "Our Vision",
    description:
      "A world where AI helps humanity live longer, safer, healthier, and more fulfilling lives—enabling progress that feels effortless, equitable, and everywhere.",
    image: OurVision,
  },
  {
    title: "Our Mission",
    description:
      "Engineer the most powerful, energy-efficient AI processors for the edge—technology that runs smarter, faster, and leaner to turn AI’s potential into real-world impact.",
    image: OurMission,
  },
  {
    title: "Our Team",
    description:
      "BarqTech was established in 2025 in Dubai, UAE, by a visionary team of AI experts, business strategists, and technology pioneers. From day one, our mission has been to push the boundaries of AI innovation. Today, we’ve assembled a highly skilled and driven team committed to transforming the industry and empowering our customers to excel in the AI-driven future.",
    image: OurTeam,
  },
  {
    title: "Our Technology",
    description:
      "BarqTech's cutting-edge AI accelerators leverage the latest in hardware-optimized deep learning to provide unmatched performance, efficiency, and scalability for edge applications.",
    image: OurTechnology,
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans pt-32">
      <Header />

      {/* About Header */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
          Barqing the Future of AI Inference
        </p>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col items-center text-center sm:text-left w-full">
              <div className="w-full flex justify-center">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">{section.title}</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">{section.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
