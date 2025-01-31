// src/pages/Landing.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Cloud, Server, Building, Factory, Heart, BarChart2, Cpu, Cctv } from 'lucide-react';
import { Helmet } from "react-helmet";

// Component imports
import AutoScrollingTiles from '../components/AutoScrollingTiles';
import { sendEmailRequest } from '../components/EmailService';

// Asset imports
import logo from '../assets/nudgev_logo.png';
import fpga from '../assets/fpga.png';
import devkit from '../assets/devkit.png';
import WhatsAppIcon from '../assets/whatsapp.png';
import Nudgeai from '../assets/Nudgeai.png';

const Landing: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        message: '',
        email: '',
        jobTitle: 'Not Specified',
        country: 'Not Specified',
        privacyCheck: true
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionResult, setSubmissionResult] = useState<{ success: boolean; message: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionResult(null);

        try {
            await sendEmailRequest(formData);
            setSubmissionResult({ success: true, message: 'Thank you for your message!' });
            setFormData({
                name: '',
                company: '',
                email: '',
                message: '',
                jobTitle: 'Not Specified',
                country: 'Not Specified',
                privacyCheck: true
            });
        } catch (error) {
            setSubmissionResult({ success: false, message: 'An error occurred. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <Helmet>
                <title>NudgeV - 20 TOPS Edge AI Processing | Low Power AI Accelerator</title>
                <meta name="description" content="Transform your AI infrastructure with NudgeV' 20 TOPS edge AI processor. Ultra-low power consumption, real-time processing, and enhanced data privacy for smart cities, healthcare, and industrial applications." />
                <meta name="keywords" content="edge AI processor, AI accelerator, low power AI, real-time AI processing" />
                <meta property="og:title" content="NudgeV - 20 TOPS Edge AI Processing | Low Power AI Accelerator" />
                <meta property="og:description" content="Transform your AI infrastructure with NudgeV' 20 TOPS edge AI processor. Ultra-low power consumption for smart cities, healthcare, and industrial applications." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nudgev.ai" />
                <meta name="author" content="NudgeV" />
                <meta name="viewport" content="width=device-width, initial-scale=1 " />
                <link rel="canonical" href="https://nudgev.ai" />
            </Helmet>

            <header className="relative min-h-screen overflow-hidden">
                {/* Background Image Container with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute 
            -top-[10%] md:-top-[10%] 
            inset-x-0 
            w-[130%] md:w-[150%] 
            -right-[15%] md:-right-[25%] lg:-right-[35%] xl:-right-[25%] 
            h-[110%] md:h-[120%]"
                    >
                        <img
                            src={Nudgeai}
                            alt=""
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-20 max-w-[100px] sm:max-w-[120px] md:max-w-[140px]">
                    <img
                        src={logo}
                        alt="NudgeV Edge AI Processor Logo"
                        className="w-[75px] sm:w-[90px] md:w-[105px] h-auto object-contain"
                        loading="eager"
                    />

                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="max-w-2xl 
            pt-[80vh] 
            sm:pt-[75vh] 
            md:pt-[75vh]
            [1024px]:pt-[90vh]
            xl:pt-[45vh]"
                    >
                        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-green-400 mb-3 sm:mb-4">
                            Empower Your Edge AI
                        </h1>
                        <h2 className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 md:mb-16 max-w-xl">
                            20 TOPS of local AI processing power with ultra-low energy consumption
                        </h2>
                    </div>
                </div>
            </header>
            {/* Problem Statement */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-24">
                <div className="max-w-[90%] sm:max-w-xl md:max-w-3xl mx-auto">
                    {/* Size 2: Section Headers */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">
                        Are you tired of choosing between:
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-12">
                        <div className="bg-gray-900/50 rounded-xl p-4 sm:p-6 md:p-8">
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                                <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                                {/* Size 3: Component Headers */}
                                <h3 className="text-md sm:text-lg md:text-xl font-bold">Cloud Limitations</h3>
                            </div>
                            {/* Size 4: Body Text */}
                            <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-400 text-base sm:text-md md:text-lg">
                                <li>• Ongoing subscription costs</li>
                                <li>• Increased latency for real-time applications</li>
                                <li>• Data privacy concerns</li>
                            </ul>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-4 sm:p-6 md:p-8">
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                                <Server className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                                <h3 className="text-md sm:text-lg md:text-xl font-bold">On-Premise Drawbacks</h3>
                            </div>
                            <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-400 text-base sm:text-md md:text-lg">
                                <li>• High initial hardware investments</li>
                                <li>• Complex installation and maintenance</li>
                                <li>• High power consumption costs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="py-8 sm:py-12 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
                        {/* Size 2: Section Headers */}
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">
                            Our chip gives you the best of both worlds
                        </h2>
                        <div className="mt-6 sm:mt-8 md:mt-12 bg-gray-900/50 rounded-xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-12 flex items-center justify-center min-h-[150px] sm:min-h-[180px] md:min-h-[200px]">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-green-400">
                                Powerful. Efficient. Easy to use.
                            </h3>
                        </div>

                        <AutoScrollingTiles
                            tiles={[
                                {
                                    title: "Unmatched Performance",
                                    description: "Delivers up to 20 TOPS, handling the most demanding AI models seamlessly."
                                },
                                {
                                    title: "Seamless Integration",
                                    description: "Plug-and-play design with standard PCIe Gen3 interfaces."
                                },
                                {
                                    title: "Cost-Effective",
                                    description: "Maximize performance without breaking the bank."
                                },
                                {
                                    title: "Enhanced Data Privacy",
                                    description: "Process data locally to maintain confidentiality."
                                },
                                {
                                    title: "Instantaneous Processing",
                                    description: "Achieve zero latency for real-time applications."
                                }
                            ]}
                        />

                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-24">
                <div className="max-w-[90%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto">
                    {/* Size 2: Section Headers */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">
                        Powering Innovations Across Industries
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            { title: "Smart Cities", Icon: Building, description: "Intelligent infrastructure and urban solutions" },
                            { title: "Industrial Automation", Icon: Factory, description: "Smart manufacturing and process control" },
                            { title: "Security Systems", Icon: Cctv, description: "Advanced surveillance and protection" },
                            { title: "Healthcare Monitoring", Icon: Heart, description: "Real-time patient care and diagnostics" },
                            { title: "Retail Analytics", Icon: BarChart2, description: "Customer insights and inventory optimization" },
                            { title: "Autonomous Systems", Icon: Cpu, description: "Self-operating machines and robotics" }
                        ].map(({ title, Icon, description }, i) => (
                            <div key={i} className="bg-gray-900/50 rounded-xl p-6 sm:p-8">
                                <div className="flex flex-col items-center text-center">
                                    <Icon className="w-12 h-12 mb-4 text-green-400" />
                                    {/* Size 3: Component Headers */}
                                    <h3 className="text-md sm:text-lg md:text-xl font-bold mb-2">{title}</h3>
                                    {/* Size 4: Body Text */}
                                    <p className="text-base sm:text-md md:text-lg text-gray-400">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Get Started */}
            <section className="py-16 sm:py-24 md:py-32">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="max-w-[90%] sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                            <div className="bg-gray-900/50 rounded-xl p-8 sm:p-10 md:p-12 flex flex-col justify-between">
                                <div>
                                    <div className="aspect-video w-full mb-8 rounded-lg overflow-hidden bg-gray-900/5">
                                        <img
                                            src={devkit}
                                            alt="NudgeV AI Development Kit"
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="h-16 flex items-end">
                                        <h3 className="text-md sm:text-lg md:text-xl font-bold">Development Kit</h3>
                                    </div>
                                    <p className="text-md sm:text-md md:text-lg text-gray-400 mb-8 sm:mb-10 md:mb-12">
                                        Kickstart your AI projects with our comprehensive development kit.
                                    </p>
                                </div>
                                <ScrollLink
                                    to="contact"
                                    smooth={true}
                                    duration={800}
                                    offset={-70}
                                    className="cursor-pointer"
                                >
                                    <button className="bg-green-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium w-full text-md hover:bg-green-500 transition-colors">
                                        Order Now
                                    </button>
                                </ScrollLink>
                            </div>

                            <div className="bg-gray-900/50 rounded-xl p-8 sm:p-10 md:p-12 flex flex-col justify-between">
                                <div>
                                    <div className="aspect-video w-full mb-8 rounded-lg overflow-hidden bg-gray-900/5">
                                        <img
                                            src={fpga}
                                            alt="NudgeV Production Unit"
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="h-16 flex items-end">
                                        <h3 className="text-md sm:text-lg md:text-xl font-bold">Production Unit</h3>
                                    </div>
                                    <p className="text-md sm:text-md md:text-lg text-gray-400 mb-8 sm:mb-10 md:mb-12">
                                        Scale your AI infrastructure effortlessly with our production-ready units.
                                    </p>
                                </div>
                                <ScrollLink
                                    to="contact"
                                    smooth={true}
                                    duration={800}
                                    offset={-70}
                                    className="cursor-pointer"
                                >
                                    <button className="bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium w-full text-md hover:bg-gray-700 transition-colors">
                                        Pre-order
                                    </button>
                                </ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="w-full py-8 sm:py-12 md:py-24">
                <div className="w-full px-4 sm:px-6 md:px-8">
                    <div className="w-full max-w-[90%] sm:max-w-xl md:max-w-2xl mx-auto">
                        <div className="text-center mb-8">
                            {/* Size 2: Section Headers */}
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-12">
                                Ready to Transform Your AI Infrastructure?
                            </h2>
                            {/* Size 4: Body Text */}
                            <p className="text-base sm:text-md md:text-lg text-gray-400">
                                Let's discuss how our solutions can accelerate your AI initiatives
                            </p>
                        </div>

                        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-gray-900/50 rounded-xl px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 text-sm"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Company"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full bg-gray-900/50 rounded-xl px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 text-sm"
                                    required
                                />
                            </div>

                            <textarea
                                placeholder="Message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={4}
                                className="w-full bg-gray-900/50 rounded-xl px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 text-sm resize-none"
                                required
                            />

                            <div className="flex justify-center mt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-green-400 text-black px-8 sm:px-12 py-2 sm:py-3 md:py-4 rounded-xl font-medium text-md hover:bg-green-500 transition-colors disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Sending...' : 'Request a demo'}
                                </button>
                            </div>
                        </form>

                        {submissionResult && (
                            <div className={`mt-4 p-4 rounded-xl text-center ${submissionResult.success ? 'bg-green-800 text-green-100' : 'bg-red-800 text-red-100'}`}>
                                {submissionResult.message}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="container mx-auto px-4 sm:px-6 md:px-8 py-6 border-t border-gray-800">
                <div className="max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                        {/* Copyright Section */}
                        <div className="text-sm text-gray-400 text-center sm:text-left">
                            © NudgeV, Inc. 2025. All rights reserved.
                        </div>

                        {/* Contact Section with WhatsApp Icon */}
                        <div className="flex justify-center items-center gap-4">
                            <a
                                href="https://wa.me/971585883846"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                            >
                                <img
                                    src={WhatsAppIcon}
                                    alt="Contact us on WhatsApp"
                                    className="w-8 h-8"
                                />
                            </a>
                        </div>

                        {/* Privacy Policy */}
                        <div className="flex justify-center sm:justify-end">
                            <Link
                                to="/privacy-policy"
                                className="text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;