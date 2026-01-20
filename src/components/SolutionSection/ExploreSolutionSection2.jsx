import React from 'react';
import TitleDescription from '../TitleDescription/TitleDescription';

export default function ExploreSolutionSection2() {
  const cards = [
    { id: 1, image: '/logo/innovation1.png', alt: 'Cloud' },
    { id: 2, image: '/logo/innovation2.png', alt: 'AI & Machine Learning' },
    { id: 3, image: '/logo/innovation3.png', alt: 'Development' },
  ];

  return (
    <section
      style={{ background: "var(--bg-navy-gradient)" }}
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden"
    >
      {/* Background Pattern Images */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Pattern */}
        <img
          src="/logo/pattern3.png"
          alt=""
          className="absolute top-0 left-0 w-[60%] sm:w-[50%] md:w-[40%] lg:w-[40%] h-[120%] opacity-40 pointer-events-none"
        />

        {/* Bottom Right Pattern */}
        <img
          src="/logo/pattern3.png"
          alt=""
           className="absolute bottom-0 right-0 w-[60%] sm:w-[50%] md:w-[40%] lg:w-[40%] h-[120%] opacity-40 pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Title */}
        <div className="mb-4 sm:mb-6">
          <TitleDescription
            title={<span className="text-white ">Explore Our Solutions</span>}
          />
        </div>

        {/* Description */}
        <div className="mb-12 sm:mb-16  mx-auto">
          <TitleDescription
            description={
              <span className="text-white text-base ">
                Discover how Mirage work can transform your business with cutting-edge technologies
              </span>
            }
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
          {cards.map((card) => (
            <div key={card.id} className="w-full max-w-xs flex justify-center">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
