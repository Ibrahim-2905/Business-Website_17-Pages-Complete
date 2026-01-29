"use client"
import React from 'react';
import AnimatedButton from '../Button/Button';
import { useRouter } from 'next/navigation';

const SmallActionSection = ({
  title = "Ready to get started?",
  subtitle = "Get in touch with us today.",
  buttonText = "Contact Sales",
  onButtonClick
}) => {
  const router = useRouter()
  return (
    <section
      style={{ background: "var(--bg-navy-gradient)" }}
      className="w-full py-8 sm:py-10 lg:py-12"
    >
      <div className="max-w-[1438px] mx-auto px-4 sm:px-8 lg:px-16">
        
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h3
              className="text-white mb-1"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(20px, 3vw, 28px)',
                lineHeight: '1.3',
              }}
            >
              {title}
            </h3>

            <p
              className="text-[#F58508]"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(18px, 3vw, 24px)',
                lineHeight: '1.3',
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Right Button */}
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <AnimatedButton
              text={buttonText}
              bgColor="bg-darkNavyBlue"
              textColor="text-white"
              onClick={onButtonClick || (()=> router.push("/contact"))}
              padding="px-7 py-3"
              border="border-b-2 border-white"
              rounded="rounded-md"
              hoverBgColor="bg-white"
              hoverTextColor="text-darkNavyBlue"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmallActionSection;
