"use client"
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { DynamicButton } from '../../Button/DynamicButton';

const SapAndErpAndCustomServicesCard = ({ logo, title, description, buttonProps }) => {
  const router = useRouter();

  return (
    <div 
      className="rounded-xl overflow-hidden p-6 px-10 flex flex-col items-center text-center h-full"
      style={{ 
        background: "var(--bg-navy-gradient)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Logo */}
      <div className="rounded-lg flex items-center justify-center ">
        <img 
          src={logo} 
          alt={title}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-white font-poppins text-xl sm:text-2xl md:text-2xl leading-tight mb-4">
        {title}
      </h3>

      {/* Description */}
      <div className="flex items-start  mb-3 justify-center">
        
       <div className="flex items-start  max-w-[90%] sm:max-w-[80%]">
  <Check className="w-5 h-5 text-darkOrange flex-shrink-0 mt-1" strokeWidth={3} />
  <p className="text-white/90 text-base sm:text-lg md:text-lg font-open-sans leading-relaxed">
    {description}
  </p>
</div>


      </div>

      {/* Button */}
      {buttonProps && (
        <DynamicButton
          {...buttonProps}
          onClick={() => router.push(buttonProps.link)}
          className="flex items-center gap-2 group mt-auto"
        >
          {buttonProps?.text}
          <ArrowRight strokeWidth={3} className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </DynamicButton>
      )}
    </div>
  );
};

export default SapAndErpAndCustomServicesCard;
