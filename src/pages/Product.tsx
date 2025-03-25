import React, {useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Product Images
import productV2 from "../assets/fpga.png";
import productcv2 from "../assets/cv2.png";
import productV20 from "../assets/Chip.png";
import productM2 from "../assets/M2.png";
import productPcie from "../assets/PCIe.png";





const Products: React.FC = () => {
  const productFamilies = [
    {
      name: "BARQ V-2",
      description: "Entry-level AI acceleration for prototyping and development",
      products: [
        {
          img: productV2,
          title: "BARQ V-2 PCIe FPGA Starter Kit",
          desc: "A development-ready FPGA board with pre-synthesized 2 TOPS of AI acceleration IP, perfect for prototyping and testing computer vision applications.",
          slogan: "Start building with BARQ",
          specs: [
            "Pre-synthesized AI IP",
            "Development Tools Included",
            "PCIe Gen3 x4 Interface",
            "2 TOPS AI Compute"
          ],
          price: "$999",
          availability: { status: "available", label: "Available Now" },
          button1: "Order Now",
          button2: "Learn More",
          button2Link: "documents/Datasheet BARQ-V2 Starter Kit.pdf",
        },
        {
          img: productcv2,
          title: "BARQ V-2 AI Edge Chip-on-board",
          desc: "A compact chip-on-board solution for embedded AI acceleration featuring 2 TOPS, perfect for IoT devices and edge computing applications.",
          slogan: "Build smarter with BARQ",
          specs: [
            "Edge-optimized Architecture",
            "Compact Form Factor",
            "<1W Power Consumption",
            "2 TOPS AI Compute"
          ],
          availability: { status: "coming", label: "Q4 2025" },
          button1: "Pre-order",
          button2: "Learn More",
          button2Link: "documents/Product Brief BARQ-V2 OL.pdf",
        }
      ]
    },
    {
      name: "BARQ V-20",
      description: "High-performance AI acceleration for production deployment",
      products: [
        {
          img: productV20,
          title: "BARQ V-20 AI Chip-on-board",
          desc: "A compact chip-on-board solution for embedded AI acceleration featuring 20 TOPS, perfect for IoT devices and edge computing applications.",
          slogan: "Build smarter with BARQ",
          specs: [
            "Edge-optimized Architecture",
            "Compact Form Factor",
            "5W Power Consumption",
            "20 TOPS AI Compute"
          ],
          availability: { status: "coming", label: "Q4 2025" },
          button1: "Pre-order",
          button2: "Learn More",
          button2Link: "documents/Product Brief BARQ-V20 OL.pdf",
        },
        {
          img: productM2,
          title: "BARQ V-20 M2 AI Accelerator Module",
          desc: "A versatile M2 form factor AI accelerator delivering 20 TOPS AI compute that easily integrates into laptops and small form factor PCs.",
          slogan: "Accelerate with BARQ",
          specs: [
            "Plug-and-Play Design",
            "PCIe Gen3 x8 Interface",
            "M.2 22x80 Form Factor",
            "20 TOPS AI Compute"
          ],
          availability: { status: "coming", label: "Q4 2025" },
          button1: "Pre-order",
          button2: "Learn More",
          button2Link: "documents/Product Brief BARQ-V20 OL.pdf",
        },
        {
          img: productPcie,
          title: "BARQ V-20 PCIe AI Accelerator Card",
          desc: "A high-performance PCIe card designed for workstations and servers, offering powerful AI acceleration capabilities with active cooling.",
          slogan: "Transform with BARQ",
          specs: [
            "Server-grade Reliability",
            "Active Cooling System",
            "PCIe Gen3 x8 Interface",
            "20 TOPS AI Compute"
          ],
          availability: { status: "coming", label: "Q4 2025" },
          button1: "Pre-order",
          button2: "Learn More",
          button2Link: "documents/Product Brief BARQ-V20 OL.pdf",
        }
      ]
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);  



  const comparisonStats = [
    { label: "Faster Processing", value: "20x", description: "Compared to CPU-based solutions" },
    { label: "Power Efficiency", value: "70%", description: "Lower power consumption" },
    { label: "Cost Savings", value: "60%", description: "Lower TCO vs cloud solutions" },
    { label: "Integration Time", value: "3x", description: "Faster time-to-market" }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />


      {/* Hero Section with 3D Parallax Effect */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
              AI Vision Accelerators
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Choose from our range of AI acceleration solutions, from development kits to production-ready modules
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {comparisonStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Families Section */}
      {productFamilies.map((family, familyIndex) => (
        <section key={familyIndex} className={`py-16 px-4 ${familyIndex % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{family.name}</h2>
              <p className="text-xl text-gray-600">{family.description}</p>
            </div>

            <div className={`grid ${family.products.length === 2 ? 'md:grid-cols-2 max-w-5xl' : 'md:grid-cols-3'} gap-8 mx-auto`}>
              {family.products.map((product, productIndex) => (
                <div key={productIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 h-[500px] flex flex-col">
                    <div className="relative h-32 bg-gray-50 flex items-center justify-center">
                      <img 
                        src={product.img} 
                        alt={product.title} 
                        className="h-24 w-auto object-contain"
                      />
                      <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-medium ${
                        product.availability.status === 'available' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {product.availability.label}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{product.desc}</p>
                      <p className="text-sm font-bold text-primary mb-2">{product.slogan}</p>
                      
                      {product.price && (
                        <div className="mb-2">
                          <span className="text-xl font-bold text-gray-900">{product.price}</span>
                          <span className="text-gray-500 ml-2">USD</span>
                        </div>
                      )}
                      
                      <div className="mt-auto">
                        <div className="bg-gray-50 rounded-lg p-3 mb-4">
                          <h4 className="text-sm font-semibold mb-2">Key Specifications</h4>
                          <ul className="space-y-1">
                            {product.specs.map((spec, index) => (
                              <li key={index} className="flex items-center text-xs text-gray-600">
                                <span className="mr-2">•</span>
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex gap-2">
                          <Link to="/contact" className="flex-1">
                            <button className="w-full bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-all">
                              {product.button1}
                            </button>
                          </Link>
                          <button 
                            onClick={() => window.open(product.button2Link, "_blank")}
                            className="flex-1 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all"
                          >
                            {product.button2}
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Interactive Feature Comparison */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BARQ?</h2>
            <p className="text-xl text-gray-600">Industry-leading features that set us apart</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Edge-First Architecture",
                description: "Purpose-built for edge deployment with optimal performance-to-power ratio",
                icon: "⚡"
              },
              {
                title: "Seamless Integration",
                description: "Multiple form factors and standardized interfaces for easy deployment",
                icon: "🔌"
              },
              {
                title: "Future-Proof Design",
                description: "Supports emerging AI models and standards for long-term scalability",
                icon: "🚀"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-primary-light/10 flex items-center justify-center mb-6">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your AI Vision Applications?</h2>
          <p className="text-xl text-gray-600 mb-8">Contact our team to discuss your specific requirements and find the perfect BARQ solution for your needs.</p>
          <Link to="/contact#form">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-primary-dark transition-all text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;