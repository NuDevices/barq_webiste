import React from "react";
const GridSection: React.FC<{ children: React.ReactNode; title: string; subtitle?: string }> = ({ children, title, subtitle }) => {
    return (
      <section className="container mx-auto px-4 md:px-10 lg:px-14 py-20">
      <h2 className="text-8xl font-bold text-center mb-6">{title}</h2>
      {subtitle && <p className="text-4xl text-gray-600 text-center mb-12">{subtitle}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">{children}</div>
      </section>
    );
  };
  
  export default GridSection;
  