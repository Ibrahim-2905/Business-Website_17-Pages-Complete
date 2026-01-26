import React from 'react';
import DecisionFeaturesCard from './DecisionFeaturesCard';

const DecisionFeaturesSection = ({ data }) => {
  return (
    <section
      style={{ background: "var(--bg-navy-gradient)" }}
      className="relative py-16 sm:py-20 px-6 sm:px-10 lg:px-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/logo/pattern3.png"
          alt=""
          className="absolute top-0 left-0 w-[60%] sm:w-[40%] md:w-[30%] opacity-40"
        />
        <img
          src="/logo/pattern3.png"
          alt=""
          className="absolute bottom-0 right-0 w-[60%] sm:w-[40%] md:w-[30%] opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold font-poppins text-darkOrange mb-4">
            {data.title}
          </h2>
          <p className="text-white text-base sm:text-lg font-open-sans max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.features.map((feature) => (
            <DecisionFeaturesCard
              key={feature.id}
              logo={feature.logo}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DecisionFeaturesSection;