import React from "react";

const GridSection: React.FC<{ children: React.ReactNode; title: string; subtitle?: string }> = ({ children, title, subtitle }) => {
    return (
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6">{title}</h2>
        {subtitle && <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 text-center mb-6 md:mb-12">{subtitle}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">{children}</div>
      </section>
    );
};

export default GridSection;