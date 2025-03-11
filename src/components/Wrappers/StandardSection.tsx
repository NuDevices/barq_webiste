const StandardSection: React.FC<{ children: React.ReactNode; className?: string; title: string; subtitle?: string }> = ({ children, className = "", title, subtitle }) => {
  return (
    <section className={`container mx-auto px-4 md:px-10 lg:px-14 py-20 ${className}`}>
      <h2 className="text-8xl font-bold text-center mb-6">{title}</h2>
      {subtitle && <p className="text-4xl text-gray-600 text-center mb-12">{subtitle}</p>}
      <div className="space-y-12">{children}</div> {/* Ensures spacing between elements */}
    </section>
  );
};

export default StandardSection;
