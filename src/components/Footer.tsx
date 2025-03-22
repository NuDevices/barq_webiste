import React from "react";
import Logo from "../assets/logovwot.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Tagline */}
          <div className="flex flex-col space-y-4">
            <img src={Logo} alt="BARQ" className="w-40 h-auto" />
            <p className="text-gray-400">
              Building ultra-efficient AI accelerators for edge computing — where latency, power, and speed matter most.
            </p>
          </div>

          {/* Technology Snapshot */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Technology</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Matrix-to-Matrix Acceleration</li>
              <li>• Real-time Vision Inference</li>
              <li>• Low-latency Local Compute</li>
              <li>• Designed for Harsh Environments</li>
            </ul>
          </div>

          {/* Commitment Block */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Commitment</h3>
            <p className="text-gray-400">
              We are committed to enabling real-time AI at the edge. Every chip we design pushes the boundary of performance, efficiency, and reliability.
            </p>
            <div className="mt-4 text-gray-400 italic">
              “Engineered for the edge. Designed for the future.”
            </div>
          </div>

          {/* Global + Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">In the Field</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Dubai Silicon Oasis, UAE</li>
              <li>🌍 Pilots in UAE, KSA & EU</li>
              <li>📧 info@barqtech.ae</li>
              <li>📞 +971 585883846</li>
              <li>🧠 Driven by a team of silicon, AI, and business veterans</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div>© {currentYear} BARQTECH TRADING FZCO. All rights reserved.</div>
          <div className="mt-4 md:mt-0 text-gray-500">
            The hardware to push the boundaries of AI performance. Made in the UAE.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
