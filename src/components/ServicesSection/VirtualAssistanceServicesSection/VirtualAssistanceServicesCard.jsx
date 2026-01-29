"use client"
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { DynamicButton } from '../../Button/DynamicButton';

const VirtualAssistanceServicesCard = ({ logo, title, points, buttonProps }) => {
    const router = useRouter();

    return (
        <div
            className="rounded-md overflow-hidden p-6 px-10 flex flex-col items-center text-center h-full"
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
                   <ul className="list-disc list-inside text-center space-y-2">
  {points?.map((point, index) => (
    <li key={index} className="text-sm text-white">
      {point}
    </li>
  ))}
</ul>

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

export default VirtualAssistanceServicesCard;
