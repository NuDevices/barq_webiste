// import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const SpontaneousApplication = () => {
  return (
    <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow pt-32 px-4"> {/* ← padding added here */}
        <h1 className="section-title text-center mt-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
            Spontaneous Application
        </h1>
        <p className="section-subtitle text-center text-xl text-gray-600 mt-8">
        We're always happy to hear from passionate people. Send us your CV and tell us why you'd like to work with us.
        </p>
        <formester-standard-form
        set-auto-height="true"
        height="100%"
        id="FFH67MWRx"
        url="https://mvjkvrkq.formester.com/f/FFH67MWRx"
        ></formester-standard-form>
    </main>
    <Footer />
    </div>
  );
};

export default SpontaneousApplication;
