
import React from 'react';

// InsightCard Component
export default function CardMoreInsightSection({ title, description, buttonText = "Read More", isLastInRow, isLastRow }) {
  return (
    <div className={`pt-6 pb-6 px-6 ${!isLastInRow ? 'border-r border-white/20' : ''} ${!isLastRow ? 'border-b border-white/20' : ''}`}>
      {/* Title */}
      <h3 className="text-white font-open-sans text-lg mb-3 leading-tight">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-white/80 text-sm leading-relaxed mb-4">
        {description}
      </p>
      
      {/* Read More Button */}
      <button className="flex items-center gap-2 text-orange-500 font-medium text-sm hover:gap-3 transition-all duration-300 group">
        <span>{buttonText}</span>
        <svg 
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}