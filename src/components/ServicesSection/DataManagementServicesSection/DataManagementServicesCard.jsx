"use client"
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { DynamicButton } from '../../Button/DynamicButton';
import { useRouter } from 'next/navigation';

const DataManagementServicesCard = ({ logo, title, description, buttonProps }) => {
  const router = useRouter();

  return (
    <div 
      className="flex justify-center items-center rounded-lg overflow-hidden p-4 w-full sm:w-64 md:w-90 lg:w-96 mx-auto  h-full flex flex-col"
      style={{ background: "var(--bg-navy-flipped-gradient)" }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col">

    <div className='flex justify-center  items-center'>
        {/* Logo */}
          <div className="w-25 h-25 rounded-lg flex items-center justify-center flex-shrink-0">
            <img 
              src={logo} 
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
        <div>
        {/* Logo and Title Row */}
        <div className="flex justify-center items-center gap-3 mb-3">
          

          {/* Title */}
          <h3 className="text-white font-semibold font-poppins text-1xl leading-tight flex-1">
            {title}
          </h3>
        </div>

        {/* Check Icon and Description */}
        <div className="flex items-start gap-2 mb-2 flex-1">
         
          <p className="text-white/90  text-md font-open-sans leading-relaxed">
            {description}
          </p>
        </div>
        </div>
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

export default DataManagementServicesCard;










