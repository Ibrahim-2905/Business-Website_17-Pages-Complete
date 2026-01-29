"use client"
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { DynamicButton } from '../../Button/DynamicButton';
import { useRouter } from 'next/navigation';

const FinancialReportingServicesCard = ({ logo, title, description, buttonProps }) => {
  const router = useRouter();

  return (
    <div 
      className="flex justify-center items-center rounded-lg overflow-hidden p-3  h-full flex flex-col"
      style={{ background: "var(--bg-navy-gradient)" }}
    >
      {/* Content */}
      <div className="relative z-10  flex flex-col">
        {/* Logo and Title Row */}
        <div className="flex justify-center items-center gap-3 mb-3">
          {/* Logo */}
          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
            <img 
              src={logo} 
              alt={title}
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="text-white font-semibold font-poppins text-2xl leading-tight flex-1">
            {title}
          </h3>
        </div>

        {/* Check Icon and Description */}
        <div className="flex items-start gap-2 mb-2 flex-1">
          <Check className="w-5 h-5 text-darkOrange flex-shrink-0 mt-0.5" />
          <p className="text-white/90  text-md font-open-sans leading-relaxed">
            {description}
          </p>
        </div>

        {/* Button - Optional */}
        {buttonProps && (
          <div className="flex justify-center mt-auto pt-4">
            <DynamicButton
              {...buttonProps}
              onClick={() => router.push(buttonProps.link)}
              className="flex items-center gap-2 group"
            >
              {buttonProps?.text}
              <ArrowRight strokeWidth={4} className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </DynamicButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialReportingServicesCard;