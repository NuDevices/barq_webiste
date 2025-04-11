import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Baker from "../assets/Baker.jpg";
import DSO from "../assets/dso.jpg";

const News: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
            Latest News
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments at BARQ
          </p>
        </div>
      </section>

      {/* Article: Prof. Baker Mohammad */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Company Update
                </span>
                <span className="text-gray-500 text-sm ml-4">March 20, 2025</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Prof. Baker Mohammad joins BARQ as Technical Advisor
              </h2>

              {/* Image */}
              <div className="mb-6 relative max-w-lg lg:max-w-sm mx-auto">
                <img
                  src={Baker}
                  alt="Prof. Baker Mohammad"
                  className="w-full rounded-xl shadow-md"
                />
                <p className="text-sm text-gray-500 mt-2 italic text-center">
                  Prof. Baker Mohammad
                </p>
              </div>

              {/* Content */}
              <div className="space-y-4 text-gray-600">
              <h3 className="text-xl text-primary font-semibold">A World-Class Addition to Our Team</h3>
                <p>
                  We are proud to announce that Prof. Baker Mohammad has joined BARQ as a Technical Advisor.
                  With over 20 years of industry and academic leadership in advanced SoC architecture, embedded memory design,
                  and hardware acceleration for AI and security, Prof. Baker brings invaluable insight to BARQ’s mission of
                  shaping the future of edge computing.
                </p>

                
                <h3 className="text-xl text-primary font-semibold">Prof. Baker’s Credentials at a Glance</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Chair of Computer Engineering and Director of System on Chip Lab at Khalifa University</li>
                  <li>20+ years at Intel and Qualcomm, designing processors from sub-1W mobile to high-performance server-class chips</li>
                  <li>200+ publications, 20+ US patents, and multiple books on VLSI and system architecture</li>
                  <li>Associate Editor for IEEE Access and IEEE Transactions on VLSI, and active in global IEEE committees</li>
                  <li>Ph.D. in Electrical and Computer Engineering from the University of Texas at Austin</li>
                </ul>

                <h3 className="text-xl text-primary font-semibold">Shared Vision for Edge AI Acceleration</h3>
                <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                  "I strongly believe in BARQ's solutions, particularly in AI acceleration for vision and image
                  recognition applications," says Prof. Baker. "The transition from FPGA to ASIC is a pivotal next step,
                  and I look forward to supporting the team as we bring innovative silicon to market."
                </blockquote>

                <h3 className="text-xl text-primary font-semibold">Pushing the Boundaries of Edge Intelligence</h3>
                <p>
                  As Technical Advisor, Prof. Baker will support BARQ's mission to build next-generation AI
                  accelerators tailored for vision inference at the edge, driving advances in power efficiency,
                  area optimization, and hardware-software integration.
                </p>

                <p>
                  BARQ is focused on enabling edge intelligence for smart cities, surveillance, and industrial
                  automation — where real-time AI is critical. With Prof. Baker's deep experience in VLSI, memory
                  computing, and emerging tech like RRAM and in-memory computing, his addition marks an exciting
                  step forward in our journey.
                </p>

                <p className="text-s text-primary font-bold mt-6">
                  We are honored to have Prof. Baker join the BARQ family.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Article: Official Incorporation */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Company Update
                </span>
                <span className="text-gray-500 text-sm ml-4">February 28, 2025</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                BARQ officially incorporated in the UAE
              </h2>

              {/* Image */}
              <div className="mb-6 relative max-w-lg mx-auto">
                <img
                  src={DSO}
                  alt="BARQ Incorporation"
                  className="w-full rounded-xl shadow-md"
                />
                <p className="text-sm text-gray-500 mt-2 italic text-center">
                  BARQ's new headquarters at Dubai Silicon Oasis
                </p>
              </div>

              {/* Content */}
              <div className="space-y-4 text-gray-600">

                <h3 className="text-xl text-primary font-semibold">About BARQ</h3>
                <p>
                  BARQ is building next-generation AI acceleration hardware designed specifically for vision
                  inference at the edge — enabling smarter cities, safer streets, and more efficient industrial systems.
                  Our custom silicon targets ultra-low-latency performance with maximum power efficiency, ideal for
                  applications in surveillance, industrial automation, and smart infrastructure.
                </p>

                <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                  "Our vision is to make edge intelligence seamless, scalable, and accessible — starting with
                  custom-built AI accelerators tailored for real-world deployment," said Edoardo Castelli,
                  Founder and CEO of BARQ.
                </blockquote>

                <h3 className="text-xl text-primary font-semibold">Built in the UAE, designed for global scale</h3>
                <p>
                  Located in Dubai Digital Park, BARQ sits at the intersection of regional innovation and
                  deep-tech expertise — bridging the gap between academic R&D, industry-grade design, and commercial
                  deployment. With strong roots in the UAE and a global outlook, we're focused on bringing locally
                  developed AI hardware into production.
                </p>

                <h3 className="text-xl text-primary font-semibold">Momentum from day one</h3>
                <p>
                  BARQ has already completed its first FPGA-based AI vision Dev Kit, and is now transitioning
                  toward full ASIC development. The company is moving rapidly to deliver purpose-built inference chips that combine
                  best-in-class performance, power, and cost efficiency.
                </p>

                <p className="text-s text-primary font-bold mt-6">
                  We're proud to be building BARQ in the Gulf — and even prouder of what's coming next.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive the latest news and updates from BARQ Technologies.
            </p>
            <Link to="/contact">
              <button className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-primary-dark transition-all">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
