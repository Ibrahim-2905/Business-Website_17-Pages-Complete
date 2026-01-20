import React from 'react';
import TitleDescription from '../TitleDescription/TitleDescription';
import AnimatedButton from '../Button/Button';

export default function TechStack() {
  const cards = [
    { id: 1, image: '/logo/innovation1.png', alt: 'Cloud' },
    { id: 2, image: '/logo/innovation2.png', alt: 'AI & Machine Learning' },
    { id: 3, image: '/logo/innovation3.png', alt: 'Development' },
  ];

  return (
    <div
      className="flex items-center justify-center"
    >
      <div className="w-full mx-auto bg-gray-200 bg-opacity-90 p-8 lg:p-12">
        {/* Title */}
        <div className='text-center mb-12'>
          <TitleDescription
            title={<span className="text-darkNavyBlue">Our Tech Stack</span>}
          />
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-12">
          {cards.map((card) => (
            <div key={card.id} className="w-full sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] max-w-xs">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <AnimatedButton
            text="Learn More About Our Work"
            textColor="text-white"
            padding="px-8 py-3"
            rounded="rounded-md"
            border="hover:border-b hover:border-white"
            bgColor="bg-darkOrange"
          />
        </div>
      </div>
    </div>
  );
}