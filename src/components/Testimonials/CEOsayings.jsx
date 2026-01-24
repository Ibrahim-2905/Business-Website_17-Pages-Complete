import React from 'react';
import TitleDescription from '../TitleDescription/TitleDescription';

export const CEOsayings = () => {
  return (
    <div className="w-full bg-white py-4 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-6 md:gap-8">
        
        {/* Quote Section */}
        <div className="flex-1">
          {/* Opening Quote */}
          <div className="text-teal-700 text-4xl sm:text-5xl md:text-6xl font-serif leading-none mb-2 md:mb-4">
            "
          </div>

          {/* Quote Text */}
          <TitleDescription
            description={
              <span className="text-charcoalGray text-sm sm:text-base md:text-lg lg:text-2xl leading-snug">
                Mirage Works has helped us optimize our financial system and reduce overhead costs by 15%. Their expertise in bookkeeping is unreached.
              </span>
            }
          />

          {/* Closing Quote */}
          <div className="text-teal-700 text-4xl sm:text-5xl md:text-6xl font-serif leading-none text-right mt-2 md:mt-4 mb-2 md:mb-4">
            "
          </div>

          {/* CEO Name */}
          <p className="font-semibold text-xs sm:text-sm md:text-base text-gray-900">
            John Doe, CEO
          </p>
        </div>

        {/* Images Section */}
        <div className="flex justify-start items-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-20 h-20 sm:w-20 sm:h-20 md:w-30 md:h-30 lg:w-50 lg:h-50 overflow-hidden rounded">
              <img
                src={`/logo/team${i}.png`}
                alt={`Person ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
