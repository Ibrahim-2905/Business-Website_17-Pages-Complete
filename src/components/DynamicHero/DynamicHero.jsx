import React from 'react';
import TitleDescription from '../TitleDescription/TitleDescription';

const DynamicHero = ({ data = {} }) => {
  return (
    <div className="relative w-full overflow-hidden">
      
      {/* Background Image */}
      <div className={`relative w-full ${data.height}`}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              data.image ||
              'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200'
            })`,
          }}
        />
        {/* Optional overlay */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 z-10">
        
        {data.titleProps && (
          <div className="mb-3 sm:mb-4">
            <TitleDescription {...data.titleProps} />
          </div>
        )}

        {data.horizontalLine && (
          <div className="w-16 sm:w-24 md:w-32 h-[1px] mb-3 sm:mb-4 bg-white/80" />
        )}

        {data.descriptionProps && (
          <div className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl">
            <TitleDescription {...data.descriptionProps} />
          </div>
        )}
      </div>

      {/* Figma Curve (Exact) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          viewBox="0 0 1438 651"
          preserveAspectRatio="none"
          // className="w-full h-[120px] sm:h-[160px] md:h-[220px]"
            className="w-full h-[160px] md:h-[220px] lg:h-[280px] xl:h-[320px]"
          xmlns="http://www.w3.org/2000/svg"
        >
         
          <path
            d="M958 649.043C471 574.627 125.04 608.21 0 628.771V0H1440V493.74C1330.82 616.311 1081 661.352 958 649.043Z"
            fill="url(#heroGradient)"
            fillOpacity="0.6"
          />
        </svg>
      </div>
    </div>
  );
};

export default DynamicHero;













