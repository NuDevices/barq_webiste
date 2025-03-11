import React from "react";

const SplitSection: React.FC<{ title: string; description: string; image: string; reverse?: boolean }> = ({
  title,
  description,
  image,
  reverse = false,
}) => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className={`grid grid-cols-1 md:grid-cols-2 items-center gap-12 ${reverse ? "md:flex-row-reverse" : ""}`}>
        <img src={image} alt={title} className="w-full rounded-lg shadow-lg" />
        <div>
          <h2 className="text-4xl font-semibold">{title}</h2>
          <p className="text-2xl text-gray-600 mt-4">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
