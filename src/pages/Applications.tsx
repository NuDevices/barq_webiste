import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import hazzon from "../assets/hazzone.png";
import defdet from "../assets/defdet.png";
import anarea from "../assets/anarea.png";
import prodet from "../assets/prodet.png";
import anpr from "../assets/anpr.png";
import ergana from "../assets/ergana.png";
import objcou from "../assets/objcou.png";
import eyegaz from "../assets/eyegaz.png";
import abaobjdet from "../assets/abaobjdet.png";
import safmon from "../assets/safmon.png";
import emodet from "../assets/emodet.png";
import facrec from "../assets/facrec.png";
import weadet from "../assets/weadet.png";
import stoveidet from "../assets/stoveidet.png";
import objtra from "../assets/objtra.png";
import faldet from "../assets/faldet.png";
import posrec from "../assets/posrec.png";
import heamap from "../assets/heamap.png";
import intdet from "../assets/intdet.png";
import parlot from "../assets/parlot.png";
import peocou from "../assets/peocou.png";
import drosur from "../assets/drosur.png";
import comcon from "../assets/comcon.png";
import perpro from "../assets/perpro.png";
import batana from "../assets/batana.png";
import expdet from "../assets/expdet.png";
import atr from "../assets/atr.png";
import snigla from "../assets/snigla.png";
import stressdet from "../assets/stressdet.png";
import leakdet from "../assets/leakdet.png";
import pallog from "../assets/pallog.png";
import fleetmon from "../assets/fleetmon.png";
import undwat from "../assets/undwat.png";
import marine from "../assets/marine.png";
import attall from "../assets/attall.png";
import detlea from "../assets/detlea.png";
import placeholder from "../assets/placeholder.jpg";

const Applications: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("Show all");
  const [selectedDevice, setSelectedDevice] = useState<string>("Show all");
  const [showDeviceDropdown, setShowDeviceDropdown] = useState(false);
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const [showAllUseCases, setShowAllUseCases] = useState(false);
  const useCasesRef = useRef<HTMLDivElement>(null);

  // Helper function to scroll to use cases section
  const scrollToUseCases = () => {
    useCasesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Helper function to format description with bold tagline
  const formatDescription = (desc: string) => {
    const parts = desc.split('.');
    const tagline = parts.pop() || '';
    const mainText = parts.join('.') + '.';
    
    return (
      <div className="space-y-2">
        <p className="text-gray-600">{mainText}</p>
        <p className="font-bold text-primary">{tagline.trim()}</p>
      </div>
    );
  };

  // Industry applications data - only showing industries that have use cases
  const industryApplications = [
    {
      img: placeholder,
      title: "Industrial Automation",
      desc: "Address industrial challenges and improve performance of critical applications by 8-10x. Automate with BARQ",
      filter: "Industrial Automation"
    },
    {
      img: placeholder,
      title: "Defence & Security",
      desc: "Reduce decision latency by 80%, improve threat detection by 3x, cut operational costs by 40%. Future proofing with BARQ",
      filter: "Defence"
    },
    {
      img: placeholder,
      title: "Smart Cities",
      desc: "Enhance urban operations by 2x, reduce power usage by 60%, improve real-time monitoring by 95%. Build smarter cities with BARQ",
      filter: "Smart Cities"
    },
    {
      img: placeholder,
      title: "Healthcare & Safety",
      desc: "Improve patient monitoring by 3x, reduce response time by 70%, enhance safety compliance by 85%. Care better with BARQ",
      filter: "Healthcare"
    },
    {
      img: placeholder,
      title: "Smart Retail",
      desc: "Improve model accuracy by 20%. Boost revenue, reduce costs, improve in-store CX. 10X in-store CX with BARQ",
      filter: "Smart Retail"
    },
    {
      img: placeholder,
      title: "Manufacturing & Logistics",
      desc: "Optimize operations by 4x, reduce errors by 40%, improve tracking accuracy by 99%. Move smarter with BARQ",
      filter: "Manufacturing"
    }
  ];

  // Device applications data - only showing devices from CSV
  const deviceApplications = [
    {
      img: placeholder,
      title: "Cameras",
      desc: "Reduce latency by 80%, increase detection accuracy by 3x, lower power consumption by 70%. Smarter cameras with BARQ",
      filter: "Camera"
    },
    {
      img: placeholder,
      title: "Drones",
      desc: "Get >2x the flight time, capture 4K images, Improve >5x AI accuracy, Decrease weight by 50%. Build the best drones with BARQ",
      filter: "Drone"
    },
    {
      img: placeholder,
      title: "Satellites",
      desc: "Enhance processing speed by 5x, extend coverage by 3x, improve real-time analytics by 90%. See further with BARQ",
      filter: "Satellite"
    },
    {
      img: placeholder,
      title: "Wearables",
      desc: "Boost decision making by 4x, reduce power usage by 65%, improve response time by 95%. Wear smarter with BARQ",
      filter: "Wearable"
    },
    {
      img: placeholder,
      title: "Autonomous Robots",
      desc: "Accelerate AI processing by 10x, cut power consumption by 80%, enhance real-time performance by 95%. Build better robots with BARQ",
      filter: "Autonomous Robot"
    }
  ];

  // Devices and industries from CSV
  const devices = [
    "Show all",
    "Camera",
    "Drone",
    "Satellite",
    "Wearable", 
    "Autonomous Robot",
    "Autonomous Submarine"
  ];

  const industries = [
    "Show all",
    "Industrial Automation",
    "Safety",
    "Smart Retail",
    "Manufacturing",
    "Defence",
    "Security", 
    "Healthcare",
    "Transportation",
    "Smart Cities",
    "Agriculture",
    "Logistics"
  ];

  const allUseCases = [
    {
      title: "Predictive Maintenance of Machinery",
      description: "Employ computer Vision for predictive maintenance on heavy machinery with high accuracy.",
      devices: ["Camera", "Drone"],
      industries: ["Industrial Automation"],
      popularity: "High",
      image: detlea
    },
    {
      title: "Hazardous Zone Identification",
      description: "Computer vision systems on worksites can enhance safety by monitoring behavior around restricted areas and hazardous zones in real time.",
      devices: ["Camera", "Drone"],
      industries: ["Industrial Automation", "Safety"],
      popularity: "Medium",
      image: hazzon
    },
    {
      title: "Defect Detection",
      description: "Automating traditionally manual and time-consuming defect detection.",
      devices: ["Camera"],
      industries: ["Industrial Automation"],
      popularity: "High",
      image: defdet
    },
    {
      title: "Analog Instrument Reading",
      description: "Computer Vision application to read analog dials such as gauges, digital displays, and warning light colors using cameras.",
      devices: ["Camera"],
      industries: ["Industrial Automation"],
      popularity: "Medium",
      image: anarea
    },
    {
      title: "Product Detection",
      description: "Product detection uses deep learning to detect different product types automatically.",
      devices: ["Camera"],
      industries: ["Smart Retail", "Manufacturing"],
      popularity: "High",
      image: prodet
    },
    {
      title: "Automatic Number Plate Recognition",
      description: "Automated Number Plate Recognition to identify vehicles in real-time.",
      devices: ["Camera"],
      industries: ["Transportation", "Security"],
      popularity: "High",
      image: anpr
    },
    {
      title: "Ergonomic Risk Analysis",
      description: "AI-based ergonomic risk analysis using cameras to detect the human posture of employees.",
      devices: ["Camera"],
      industries: ["Safety", "Healthcare"],
      popularity: "Medium",
      image: ergana
    },
    {
      title: "Object Counting",
      description: "Use cameras for automated object counting with deep learning.",
      devices: ["Camera"],
      industries: ["Industrial Automation"],
      popularity: "Medium",
      image: objcou
    },
    {
      title: "Eye Gaze Detection",
      description: "Eye tracking and gaze detection for monitoring the attentiveness and stress levels.",
      devices: ["Camera"],
      industries: ["Smart Retail", "Healthcare"],
      popularity: "Low",
      image: eyegaz
    },
    {
      title: "Abandoned Objects Detection",
      description: "Automatically identify suspicious or dangerous objects placed in public places.",
      devices: ["Camera"],
      industries: ["Security", "Safety"],
      popularity: "Medium",
      image: abaobjdet
    },
    {
      title: "Personal Protective Equipment Detection",
      description: "Automated safety and compliance monitoring to minimize accidents and increase efficiency.",
      devices: ["Camera"],
      industries: ["Safety", "Industrial Automation"],
      popularity: "High",
      image: safmon
    },
    {
      title: "Facial Emotion Analysis",
      description: "Perform facial analysis to detect attributes such as gender, age, emotion and more.",
      devices: ["Camera"],
      industries: ["Smart Retail", "Security"],
      popularity: "Medium",
      image: emodet
    },
    {
      title: "Face Recognition",
      description: "Use deep face recognition to match human faces against a database in real-time videos.",
      devices: ["Camera"],
      industries: ["Security", "Safety"],
      popularity: "High",
      image: facrec
    },
    {
      title: "Weapon Detection",
      description: "Automatically detect weapons in real-time video streams.",
      devices: ["Camera", "Drone"],
      industries: ["Defence", "Security"],
      popularity: "High",
      image: weadet
    },
    {
      title: "Detect Stopping Vehicles",
      description: "Detect unexpected vehicle stops, anomalies, and dangerous situations automatically.",
      devices: ["Camera"],
      industries: ["Smart Cities", "Logistics"],
      popularity: "Medium",
      image: stoveidet
    },
    {
      title: "Customer Behavior Analysis",
      description: "Track the length of time a person spends looking at a display or remains in a specific area.",
      devices: ["Camera"],
      industries: ["Smart Retail"],
      popularity: "Medium",
      image: objtra
    },
    {
      title: "Fall Detection",
      description: "Automated vision-based fall detection system to recognize human falls.",
      devices: ["Camera"],
      industries: ["Healthcare", "Safety"],
      popularity: "Medium",
      image: faldet
    },
    {
      title: "Posture Recognition",
      description: "Detect specific human poses such as Lying Down, Sitting, Standing automatically.",
      devices: ["Camera"],
      industries: ["Healthcare", "Safety"],
      popularity: "Medium",
      image: posrec
    },
    {
      title: "Movement Heat Maps",
      description: "Crowd detection application to identify human movement trajectories in public spaces.",
      devices: ["Camera"],
      industries: ["Smart Retail", "Security"],
      popularity: "Medium",
      image: heamap
    },
    {
      title: "Intrusion Detection",
      description: "Detect intrusion events in pre-defined areas by identifying the target's position, date and time.",
      devices: ["Camera", "Drone", "Satellite"],
      industries: ["Security", "Defence"],
      popularity: "High",
      image: intdet
    },
    {
      title: "Occupancy Detection",
      description: "Vision-based occupancy detection of public spaces and buildings.",
      devices: ["Camera"],
      industries: ["Smart Cities"],
      popularity: "High",
      image: parlot
    },
    {
      title: "People Counting",
      description: "Area-based people counting in real-time using common surveillance cameras.",
      devices: ["Camera", "Drone"],
      industries: ["Smart Retail", "Security"],
      popularity: "High",
      image: peocou
    },
    {
      title: "Automated Drone Surveillance",
      description: "Use drones for continuous aerial monitoring of enemy movements.",
      devices: ["Drone"],
      industries: ["Defence", "Security"],
      popularity: "Medium",
      image: drosur
    },
    {
      title: "Camouflage & Concealment Detection",
      description: "Identify hidden personnel or vehicles using AI-assisted vision.",
      devices: ["Camera", "Satellite"],
      industries: ["Defence", "Security"],
      popularity: "Medium",
      image: comcon
    },
    {
      title: "Border and Perimeter Monitoring",
      description: "Monitor borders and sensitive areas for unauthorized crossings.",
      devices: ["Camera", "Drone", "Satellite"],
      industries: ["Defence", "Security"],
      popularity: "Medium",
      image: perpro
    },
    {
      title: "Real-Time Battlefield Analysis",
      description: "Identify enemy positions, vehicles, and activities in combat zones.",
      devices: ["Camera", "Drone", "Satellite"],
      industries: ["Defence", "Security"],
      popularity: "Medium",
      image: batana
    },
    {
      title: "Explosive and IED Detection",
      description: "Identify suspicious packages or explosive devices in real-time.",
      devices: ["Camera", "Drone"],
      industries: ["Defence", "Security"],
      popularity: "Medium",
      image: expdet
    },
    {
      title: "Automated Target Recognition (ATR)",
      description: "Identify enemy assets, vehicles, and personnel using AI.",
      devices: ["Drone", "Satellite", "Camera"],
      industries: ["Defence", "Security"],
      popularity: "Medium",
      image: atr
    },
    {
      title: "Enemy Sniper & Spotter Detection",
      description: "Detect sniper scopes and reflections using AI-based analysis.",
      devices: ["Camera", "Drone"],
      industries: ["Defence", "Security"],
      popularity: "Medium",
      image: snigla
    },
    {
      title: "Fatigue & Stress Detection for Soldiers",
      description: "Monitor soldiers' stress and fatigue levels for optimal performance.",
      devices: ["Camera", "Wearable"],
      industries: ["Defence", "Security"],
      popularity: "Medium",
      image: stressdet
    },
    {
      title: "Chemical and Biohazard Leak Detection",
      description: "Identify hazardous material leaks in combat or storage sites.",
      devices: ["Camera", "Drone", "Wearable"],
      industries: ["Defence", "Security"],
      popularity: "Medium",
      image: leakdet
    },
    {
      title: "Supply Chain Monitoring",
      description: "AI-based monitoring of logistics, supply lines, and inventory.",
      devices: ["Camera", "Drone"],
      industries: ["Manufacturing", "Logistics"],
      popularity: "Medium",
      image: pallog
    },
    {
      title: "Fleet & Convoy Monitoring",
      description: "Track and optimize convoy movement for operational security.",
      devices: ["Drone", "Camera", "Satellite"],
      industries: ["Defence", "Security"],
      popularity: "Medium",
      image: fleetmon
    },
    {
      title: "Unmanned Submarine Surveillance",
      description: "AI-driven underwater reconnaissance for naval operations.",
      devices: ["Autonomous Submarine", "Underwater Drone"],
      industries: ["Defence", "Security"],
      popularity: "Medium",
      image: undwat
    },
    {
      title: "Maritime Anomaly Detection",
      description: "Identify unauthorized or suspicious vessels near military areas.",
      devices: ["Satellite", "Drone", "Camera"],
      industries: ["Defence", "Security"],
      popularity: "Medium",
      image: marine
    },
    {
      title: "Attention & Fatigue Monitoring",
      description: "Monitor pilots' cognitive load to prevent fatigue-related errors.",
      devices: ["Wearable", "Camera"],
      industries: ["Defence", "Security"],
      popularity: "Medium",
      image: attall
    }
  ];

  const filterUseCases = (useCase: any) => {
    const matchesIndustry = selectedIndustry === "Show all" || useCase.industries.includes(selectedIndustry);
    const matchesDevice = selectedDevice === "Show all" || useCase.devices.includes(selectedDevice);
    return matchesIndustry && matchesDevice;
  };

  // Get filtered and limited use cases
  const filteredUseCases = allUseCases.filter(filterUseCases);
  const displayedUseCases = showAllUseCases ? filteredUseCases : filteredUseCases.slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
            AI Vision Applications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how BARQ's AI acceleration technology transforms industries and devices, 
            delivering unprecedented performance and efficiency.
          </p>
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Solutions</h2>
            <p className="text-xl text-gray-600">Transforming industries with intelligent vision processing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryApplications.map((app, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedIndustry(app.filter);
                  scrollToUseCases();
                }}
              >
                <div className="relative">
                  <img src={app.img} alt={app.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{app.title}</h3>
                  {formatDescription(app.desc)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Applications Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Device Solutions</h2>
            <p className="text-xl text-gray-600">Powering next-generation AI devices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deviceApplications.map((app, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedDevice(app.filter);
                  scrollToUseCases();
                }}
              >
                <div className="relative">
                  <img src={app.img} alt={app.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{app.title}</h3>
                  {formatDescription(app.desc)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section ref={useCasesRef} className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed Use Cases</h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore real-world applications powered by BARQ
            </p>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {/* Device Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowDeviceDropdown(!showDeviceDropdown);
                    setShowIndustryDropdown(false);
                  }}
                  className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center gap-2 hover:border-primary transition-colors"
                >
                  <span className="text-gray-700">Device: {selectedDevice}</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showDeviceDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                    {devices.map((device) => (
                      <button
                        key={device}
                        onClick={() => {
                          setSelectedDevice(device);
                          setShowDeviceDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                          selectedDevice === device ? 'text-primary font-medium' : 'text-gray-700'
                        }`}
                      >
                        {device}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Industry Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowIndustryDropdown(!showIndustryDropdown);
                    setShowDeviceDropdown(false);
                  }}
                  className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center gap-2 hover:border-primary transition-colors"
                >
                  <span className="text-gray-700">Industry: {selectedIndustry}</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showIndustryDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                    {industries.map((industry) => (
                      <button
                        key={industry}
                        onClick={() => {
                          setSelectedIndustry(industry);
                          setShowIndustryDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                          selectedIndustry === industry ? 'text-primary font-medium' : 'text-gray-700'
                        }`}
                      >
                        {industry}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Reset Filters */}
              {(selectedDevice !== "Show all" || selectedIndustry !== "Show all") && (
                <button
                  onClick={() => {
                    setSelectedDevice("Show all");
                    setSelectedIndustry("Show all");
                  }}
                  className="px-4 py-2 text-primary hover:text-primary-dark font-medium"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedUseCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img src={useCase.image} alt={useCase.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {useCase.devices.map((device: string, i: number) => (
                      <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                        {device}
                      </span>
                    ))}
                    {useCase.popularity === "High" && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full ml-auto">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <button className="text-primary hover:text-primary-dark font-medium transition-colors">
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          {filteredUseCases.length > 3 && !showAllUseCases && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllUseCases(true)}
                className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                View More Use Cases ({filteredUseCases.length - 3} more)
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Applications;

export default Applications