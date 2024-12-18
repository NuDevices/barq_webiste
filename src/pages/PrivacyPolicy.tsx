// src/pages/PrivacyPolicy.tsx
import React from 'react';
import { Shield, Lock, Eye, FileText, Calendar } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16">
                {/* Header Section */}
                <section className="mb-24 text-center">
                    <Shield className="mx-auto mb-4 text-green-400" size={48} />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        Privacy <span className="text-green-400">Policy</span>
                    </h1>
                    <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
                        At NuDevices, your privacy and data security are paramount. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website and services.
                    </p>
                </section>

                {/* Last Updated */}
                <section className="mb-12 text-center">
                    <Calendar className="inline-block mb-2 text-green-400" size={24} />
                    <p className="text-sm sm:text-base text-gray-400">
                        Last Updated: December 18, 2024
                    </p>
                </section>

                {/* Features Section */}
                <section className="mb-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <div className="bg-gray-900/50 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center">
                            <Shield className="text-green-400 mb-4" size={32} />
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Data Protection</h3>
                            <p className="text-sm sm:text-base">
                                We implement robust security measures to protect your personal information from unauthorized access or disclosure.
                            </p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center">
                            <Lock className="text-green-400 mb-4" size={32} />
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Limited Collection</h3>
                            <p className="text-sm sm:text-base">
                                We only collect information that is necessary for providing our services and improving your experience.
                            </p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center">
                            <Eye className="text-green-400 mb-4" size={32} />
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Transparency</h3>
                            <p className="text-sm sm:text-base">
                                We are committed to being transparent about our data practices and your rights regarding your personal information.
                            </p>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center">
                            <FileText className="text-green-400 mb-4" size={32} />
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Compliance</h3>
                            <p className="text-sm sm:text-base">
                                We adhere to applicable data protection laws and regulations to ensure your privacy rights are respected.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Information We Collect */}
                <section className="mb-24">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Information We Collect</h2>
                    <p className="text-lg sm:text-xl leading-relaxed mb-6">
                        We collect information that you provide directly to us when you use our contact form or subscribe to our newsletter. This may include:
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-base sm:text-lg">
                        <li>Your name</li>
                        <li>Email address</li>
                        <li>Company name</li>
                        <li>Job title</li>
                        <li>Any other information you choose to provide</li>
                    </ul>
                    <p className="text-lg sm:text-xl leading-relaxed">
                        We do not collect any sensitive personal information or use cookies for tracking purposes.
                    </p>
                </section>

                {/* How We Use Your Information */}
                <section className="mb-24">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">How We Use Your Information</h2>
                    <p className="text-lg sm:text-xl leading-relaxed mb-6">
                        We use the information we collect for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-base sm:text-lg">
                        <li>To respond to your inquiries and provide customer support</li>
                        <li>To send you updates about our products and services, if you've opted in to receive such communications</li>
                        <li>To improve our website and services</li>
                        <li>To comply with legal obligations</li>
                    </ul>
                </section>

                {/* Data Security */}
                <section className="mb-24">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Data Security</h2>
                    <p className="text-lg sm:text-xl leading-relaxed">
                        We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
                    </p>
                </section>

                {/* Your Rights */}
                <section className="mb-24">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Your Rights</h2>
                    <p className="text-lg sm:text-xl leading-relaxed mb-6">
                        You have the right to:
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-base sm:text-lg">
                        <li>Access the personal information we hold about you</li>
                        <li>Request correction of any inaccurate personal information</li>
                        <li>Request deletion of your personal information</li>
                        <li>Object to processing of your personal information</li>
                        <li>Request restriction of processing your personal information</li>
                        <li>Request transfer of your personal information</li>
                    </ul>
                    <p className="text-lg sm:text-xl leading-relaxed">
                        To exercise any of these rights, please contact us using the information provided below.
                    </p>
                </section>

                {/* Changes to This Policy */}
                <section className="mb-24">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Changes to This Policy</h2>
                    <p className="text-lg sm:text-xl leading-relaxed">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
                    </p>
                </section>

                {/* Contact Us */}
                <section className="mb-24">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact Us</h2>
                    <p className="text-lg sm:text-xl leading-relaxed mb-6">
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <p className="text-lg sm:text-xl leading-relaxed mb-8">
                        Email: <a href="mailto:info@nudevices.ai" className="text-green-400 hover:underline">info@nudevices.ai</a><br />
                        Telephone: <a href="https://wa.me/971585883846" className="text-green-400 hover:underline">+971 585883846</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
