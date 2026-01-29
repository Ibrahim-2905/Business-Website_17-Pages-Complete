"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DynamicButton } from '../../Button/DynamicButton';
import { useRouter } from 'next/navigation';

const ProcessOptimizationServicesCard = ({ logo, title, description, buttonProps }) => {
  const router = useRouter();

  return (
    <div 
      className="rounded-lg overflow-hidden p-5 py-7 w-full mx-auto h-full"
      style={{ background: "var(--bg-navy-flipped-gradient)" }}
    >
      {/* Main content wrapper with image and text side by side */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        
        {/* Logo - Left side on larger screens, top on mobile */}
        <div className="w-30 h-30  md:w-28 md:h-28 rounded-lg flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
          <img 
            src={logo} 
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text content and button column - Right side */}
        <div className="flex flex-col gap-3 text-center sm:text-left flex-1 w-full">
          {/* Title */}
          <h3 className="text-white font-semibold font-poppins text-base md:text-lg leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/90 text-sm md:text-base font-open-sans leading-relaxed">
            {description}
          </p>

          {/* Button - Below description */}
          {buttonProps && (
            <div className="flex justify-center sm:justify-start mt-2">
              <DynamicButton
                {...buttonProps}
                onClick={() => router.push(buttonProps.link)}
                className="flex items-center gap-2 group px-6 py-2"
              >
                {buttonProps?.text}
                <ArrowRight strokeWidth={3} className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </DynamicButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProcessOptimizationServicesCard;