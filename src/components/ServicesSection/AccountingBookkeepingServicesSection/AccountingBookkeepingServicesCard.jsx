"use client";
import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import TitleDescription from "../../TitleDescription/TitleDescription";
import { DynamicButton } from "../../Button/DynamicButton";
import { useRouter } from "next/navigation";

export default function AccountingBookkeepingServicesCard({ data }) {
  const router = useRouter();

  const { logo, title, points = [], description, link, buttonProps,  } = data;

  return (
    

    <div
      style={{ background: "var(--bg-navy-gradient)" }}
    className="w-[430px] min-h-[520px] rounded-2xl   p-8 text-white shadow-md flex flex-col"
    >
      {/* Logo + Title */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-14 h-14  flex items-center justify-center">
          <img src={logo} alt="service logo" />
        </div>
        <TitleDescription
          title={
            <span className="text-xl font-poppins text-white">{title}</span>
          }
        />
      </div>

      {/* Points List - Centered */}
      <div className="bg-white p-6 rounded-md mb-4 flex-grow flex items-center justify-center">
        <div className="space-y-3">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-darkNavyBlue flex-shrink-0 mt-0.5" />
              <span className="text-sm text-charcoalGray">{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="text-center mb-6">
        <TitleDescription
          description={description}
          descriptionColor="text-sm text-white font-open-sans"
        />
      </div>

      {/* Centered Button with Arrow */}
      <div className="flex justify-center">
        <DynamicButton
          {...buttonProps}
          onClick={() => router.push(link)}
          className="flex items-center gap-2 group"
        >
          {buttonProps?.text}
          <ArrowRight strokeWidth={4}  className="w-4 h-4  transition-transform group-hover:translate-x-1" />
        </DynamicButton>
      </div>
    </div>
    
  );
}







