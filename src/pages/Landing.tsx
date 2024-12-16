// src/pages/Landing.tsx
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll'; // Alias Link come ScrollLink
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import logo from '../assets/nudevices_logo.png';
import fpga from '../assets/fpga.png';
import devkit from '../assets/devkit.png';
import WhatsAppIcon from '../assets/whatsapp.png';
import Nudgeai from '../assets/Nudgeai.png';
import '../components/AutoScrollingTiles.css';
import { Cloud, Server, ArrowLeft, ArrowRight, Building, Factory, Heart, BarChart2, Cpu, Cctv, BicepsFlexed } from 'lucide-react';

import { Helmet } from "react-helmet";

<Helmet>
    {/* Title più descrittivo */}
    <title>NuDevices - 20 TOPS Edge AI Processing | Low Power AI Accelerator</title>

    {/* Meta description più dettagliata e coinvolgente */}
    <meta name="description" content="Transform your AI infrastructure with NuDevices' 20 TOPS edge AI processor. Ultra-low power consumption, real-time processing, and enhanced data privacy for smart cities, healthcare, and industrial applications." />

    {/* Keywords più specifiche e rilevanti */}
    <meta name="keywords" content="edge AI processor, AI accelerator, low power AI, real-time AI processing, edge computing, AI chip, NuDevices, industrial AI, smart city solutions, healthcare AI" />

    {/* Tag aggiuntivi per social media */}
    <meta property="og:title" content="NuDevices - 20 TOPS Edge AI Processing | Low Power AI Accelerator" />
    <meta property="og:description" content="Transform your AI infrastructure with NuDevices' 20 TOPS edge AI processor. Ultra-low power consumption for smart cities, healthcare, and industrial applications." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://nudevices.ai/og-image.jpg" />
    <meta property="og:url" content="https://nudevices.ai" />

    {/* Tag aggiuntivi per SEO */}
    <meta name="author" content="NuDevices" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="canonical" href="https://nudevices.ai" />
</Helmet>


const sendEmailRequest = async (data: any) => {
    const apiUrl = 'https://api.nudevices.ai/v1/send_waitlist_email/';
    const payload = {
        subject: `${data.name} - ${data.company} - Contact Form`,
        body: data.message,
        metadata: {
            name: data.name,
            email: data.email || `${data.name.replace(/\s+/g, '.')}@${data.company.replace(/\s+/g, '')}.com`,
            company: data.company,
            job_title: data.jobTitle || 'Not Specified',
            country: data.country || 'Not Specified',
            message: data.message
        }
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

const AutoScrollingTiles = ({ tiles }: { tiles: { title: string; description: string }[] }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Gestione del mouse
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current!.offsetLeft);
        setScrollLeft(scrollRef.current!.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current!.offsetLeft;
        const walk = (x - startX) * 2;
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    // Gestione del touch
    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - scrollRef.current!.offsetLeft);
        setScrollLeft(scrollRef.current!.scrollLeft);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - scrollRef.current!.offsetLeft;
        const walk = (x - startX) * 2;
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const stopDragging = () => {
        setIsDragging(false);
    };

    return (
        <div className="overflow-hidden">
            <div
                ref={scrollRef}
                className="flex gap-4 md:gap-6 cursor-grab active:cursor-grabbing overflow-x-auto"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={stopDragging}
                onMouseLeave={stopDragging}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={stopDragging}
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                }}
            >
                {tiles.map((tile, i) => (
                    <div
                        key={i}
                        className="flex-none w-[280px] md:w-96 bg-gray-900/50 rounded-xl p-6 md:p-8 flex flex-col justify-between select-none"
                    >
                        <div>
                            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{tile.title}</h3>
                            <p className="text-sm md:text-base text-gray-400">{tile.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


const PerformanceComparison = () => {
    const data = [
        {
            name: 'Performance (TOPS)',
            'NU Devices': 20,
            'Cloud GPU': 15,
            'Edge GPU': 8,
        },
        {
            name: 'Power Usage (W)',
            'NU Devices': 5,
            'Cloud GPU': 300,
            'Edge GPU': 75,
        },
        {
            name: 'Latency (ms)',
            'NU Devices': 1,
            'Cloud GPU': 100,
            'Edge GPU': 10,
        },
    ];

    return (
        <div className="bg-gray-900/50 rounded-xl p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">Performance Comparison</h3>
            <div className="h-[250px] sm:h-[300px] md:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                        <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} />
                        <YAxis stroke="#9CA3AF" fontSize={12} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                            itemStyle={{ color: '#9CA3AF' }}
                        />
                        <Legend wrapperStyle={{ fontSize: '12px' }} />
                        <Bar dataKey="NU Devices" fill="#4ADE80" />
                        <Bar dataKey="Cloud GPU" fill="#6B7280" />
                        <Bar dataKey="Edge GPU" fill="#4B5563" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-3 sm:mt-4 md:mt-6 text-xs sm:text-sm text-gray-400 text-center">
                * Based on standard benchmarks under typical workloads
            </div>
        </div>
    );
};

const Landing: React.FC = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        company: '',
        message: '',
        email: '',
        jobTitle: 'Not Specified',
        country: 'Not Specified',
        privacyCheck: true
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submissionResult, setSubmissionResult] = React.useState<{ success: boolean; message: string } | null>(null);

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Hero Section */}
            <header className="relative min-h-screen overflow-hidden">
                {/* Background Image Container with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute -top-[10%] md:-top-[10%] inset-x-0 w-[130%] md:w-[150%] -right-[15%] md:-right-[25%] h-[110%] md:h-[120%]">
                        <img
                            src={Nudgeai}
                            alt=""
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </div>
                    {/* Gradient overlays ridotti e ammorbiditi */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent" />
                    {/* Gradiente inferiore molto più esteso e graduale */}
                    <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Logo in alto a sinistra */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-20 max-w-[100px] sm:max-w-[120px] md:max-w-[140px]">
                    <img
                        src={logo}
                        alt="NuDevices Edge AI Processor Logo"
                        className="w-full h-auto object-contain"
                        loading="eager"
                        width="140"
                        height="47"
                    />
                </div>

                {/* Content con padding responsivo */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="max-w-2xl pt-[80vh] md:pt-[75vh] lg:pt-[90vh] xl:pt-[45vh] ">
                        <h1 className="text-xl sm:text-5xl md:text-3xl lg:text-8xl font-bold text-green-400 mb-3 sm:mb-4">
                            Empower Your Edge AI
                        </h1>
                        <h2 className="text-base sm:text-lg md:text-2xl text-gray-400 mb-6 sm:mb-8 md:mb-16 max-w-xl">
                            20 TOPS of local AI processing power with ultra-low energy consumption
                        </h2>
                    </div>
                </div>
            </header>

            {/* Problem Statement */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-24">
                <div className="max-w-[90%] sm:max-w-2xl md:max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-2xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">
                        Are you tired of choosing between:
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-12">
                        <div className="bg-gray-900/50 rounded-xl p-4 sm:p-6 md:p-8">
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                                <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                                <h3 className="text-base sm:text-xl md:text-2xl font-bold">Cloud Limitations</h3>
                            </div>
                            <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
                                <li>• Ongoing subscription costs</li>
                                <li>• Increased latency for real-time applications</li>
                                <li>• Data privacy concerns</li>
                            </ul>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-4 sm:p-6 md:p-8">
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                                <Server className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                                <h3 className="text-base sm:text-xl md:text-2xl font-bold">On-Premise Drawbacks</h3>
                            </div>
                            <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
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
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">
                            Our chip gives you the best of both worlds
                        </h2>

                        {/* Performance Comparison */}
                        <div className="mt-6 sm:mt-8 md:mt-12 bg-gray-900/50 rounded-xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-12 flex items-center justify-center min-h-[150px] sm:min-h-[180px] md:min-h-[200px]">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-green-400">
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
                <div className="max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto">
                    <h2 className="text-3xl sm:text-2xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">
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
                                    <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2">{title}</h3>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-400">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Get Started */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-24 bg-gray-900/30">
                <div className="max-w-[90%] sm:max-w-2xl md:max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-gray-900/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <img
                                    src={devkit}
                                    alt="NuDevices AI Development Kit - Edge Computing Solution"
                                    className="rounded-lg h-48 w-full object-cover"
                                    loading="lazy"
                                    width="400"
                                    height="300"
                                />
                                <div className="h-16 flex items-end">
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold">Development Kit</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 md:mb-8">
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
                                <button className="bg-green-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium w-full text-sm sm:text-base hover:bg-green-500 transition-colors">
                                    Order Now
                                </button>
                            </ScrollLink>
                        </div>

                        <div className="bg-gray-900/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <img
                                    src={fpga}
                                    alt="NuDevices Production Unit - Enterprise AI Processor"
                                    className="rounded-lg h-48 w-full object-contain"
                                    loading="lazy"
                                    width="400"
                                    height="300"
                                />
                                <div className="h-16 flex items-end">
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold">Production Unit</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 md:mb-8">
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
                                <button className="bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium w-full text-sm sm:text-base hover:bg-gray-700 transition-colors">
                                    Pre-order
                                </button>
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="w-full py-8 sm:py-12 md:py-24">
                <div className="w-full px-4 sm:px-6 md:px-8">
                    <div className="w-full max-w-[90%] sm:max-w-xl md:max-w-2xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12">
                                Ready to Transform Your AI Infrastructure?
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-400">
                                Let's discuss how our solutions can accelerate your AI initiatives
                            </p>
                        </div>
                        <form className="space-y-4 sm:space-y-6" onSubmit={async (e) => {
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
                        }}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-gray-900/50 rounded-xl px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 text-sm sm:text-base"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Company"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full bg-gray-900/50 rounded-xl px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 text-sm sm:text-base"
                                    required
                                />
                            </div>
                            <textarea
                                placeholder="Message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={4}
                                className="w-full bg-gray-900/50 rounded-xl px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 text-sm sm:text-base resize-none"
                                required
                            />
                            <div className="flex justify-center mt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-green-400 text-black px-8 sm:px-12 py-2 sm:py-3 md:py-4 rounded-xl font-medium text-sm sm:text-base hover:bg-green-500 transition-colors"
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
                        {/* Sezione Copyright */}
                        <div className="text-sm text-gray-400 text-center sm:text-left">
                            © NuDevices, Inc. 2024. Tutti i diritti riservati.
                        </div>

                        {/* Sezione Contatto con Immagine WhatsApp */}
                        <div className="flex justify-center items-center gap-4">
                            <a
                                href="https://wa.me/971585883846"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                            >
                                <img
                                    src={WhatsAppIcon}
                                    alt="Contattaci su WhatsApp"
                                    className="w-8 h-8" // Regola la dimensione dell'immagine secondo necessità
                                />
                            </a>
                        </div>

                        {/* Sezione Privacy Policy */}
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
