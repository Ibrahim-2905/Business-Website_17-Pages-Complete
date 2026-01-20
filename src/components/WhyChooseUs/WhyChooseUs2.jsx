import React from 'react';
import { Check } from 'lucide-react';
import TitleDescription from '../TitleDescription/TitleDescription';

export default function WhyChooseUs2() {
  const features = [
    "Technology-first accounting approach",
    "ERP & automation expertise",
    "Reduced manual errors",
    "Real-time financial insights",
    "Scalable solutions as your business grows"
  ];

  return (
    <section
      style={{ background: "var(--bg-navy-gradient)" }}
      className="relative py-16 sm:py-20 px-6 sm:px-10 lg:px-20 overflow-hidden"
    >
      {/* Background Pattern Images */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Pattern */}
        <img
          src="/logo/pattern3.png"
          alt=""
          className="absolute top-0 left-0 w-[60%] sm:w-[40%] md:w-[30%] max-w-xs md:max-w-sm lg:max-w-md opacity-40"
        />
        
        {/* Bottom Right Pattern */}
        <img
          src="/logo/pattern3.png"
          alt=""
          className="absolute bottom-0 right-0 w-[60%] sm:w-[40%] md:w-[30%] max-w-xs md:max-w-sm lg:max-w-md opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <TitleDescription
              title={
                <span className="text-darkOrange">
                  Why Choose Mirage Works
                </span>
              }
            />

            {/* Feature List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-darkOrange flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-white text-base md:text-lg">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <img
                src="/logo/why1.png"
                alt="Business professional"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
