"use client"

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import TitleDescription from "../TitleDescription/TitleDescription";

export const DynamicSolutionsSection = ({
  logo,
  title,
  description,
  images = [],
  buttons = [],
  reverse = false,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-change image every 3 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} 
                      items-center lg:items-start gap-10 lg:gap-12`}
        >
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
            {logo && (
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
              </div>
            )}

            <div>
              <TitleDescription title={title} titleColor="text-darkNavyBlue" />
            </div>

            <p className="text-charcoalGray font-open-sans sm:text-lg leading-relaxed font-medium">
              {description}
            </p>

            {buttons.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {buttons.map((button, index) => (
                  <a
                    key={index}
                    href={button.link}
                    className="group flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg 
                               hover:border-blue-500 hover:shadow-md transition-all duration-200 text-#33333366"
                  >
                    <span className="text-gray-800 font-medium">{button.text}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="rounded-lg overflow-hidden  relative h-[300px] sm:h-[400px] lg:h-[450px]">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );  
};
