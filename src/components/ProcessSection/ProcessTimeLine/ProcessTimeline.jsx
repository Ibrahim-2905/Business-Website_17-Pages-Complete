import TitleDescription from "../../TitleDescription/TitleDescription";
import { ProcessTimelineStep } from "./ProcessTimelineStep";

export const ProcessTimeline = ({ data, heading = "Our Process" }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center">
        <TitleDescription title={heading} titleColor="text-darkNavyBlue"/>
      </div>
      
      {/* Timeline Container */}
      <div className="relative">
        {/* Desktop View */}
        <div className="hidden md:flex items-start justify-between">
          {data.map((item, index) => (
            <ProcessTimelineStep
              key={item.id}
              step={item.step}
              title={item.title}
              isFirst={index === 0}
              isLast={index === data.length - 1}
            />
          ))}
        </div>
        
        {/* Mobile View - Vertical */}
        <div className="md:hidden space-y-8">
          {data.map((item, index) => (
            <div key={item.id} className="flex items-start gap-4">
              {/* Circle and Line */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-700 text-white font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                {index !== data.length - 1 && (
                  <div className="w-1 h-16 bg-teal-700 mt-2"></div>
                )}
              </div>
              
              {/* Title */}
              <div className="pt-2 flex-1">
                <p className="text-base font-medium text-gray-800 leading-tight">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};