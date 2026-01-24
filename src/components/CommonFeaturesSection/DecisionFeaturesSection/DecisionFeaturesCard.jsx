import React from 'react';

const DecisionFeaturesCard = ({ logo, title, description }) => {
  return (
    <div className="bg-lightGray rounded-xl p-12 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
      {/* Icon Container */}
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        <img 
          src={logo} 
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-poppins font-semibold text-charcoalGray mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-lg font-open-sans text-charcoalGray leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default DecisionFeaturesCard;