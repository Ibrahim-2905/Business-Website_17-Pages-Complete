import React from "react";

const ProcessTimeLineType2 = ({ 
  title = "Our Process", 
  steps = [] 
}) => {
  // Ensure steps is always an array
  const stepsArray = Array.isArray(steps) ? steps : Object.values(steps);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Title */}
      <h2  style={{fontWeight:"600"}} className="text-3xl md:text-4xl text-center text-charcoalGray mb-12">
        {title}
      </h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stepsArray.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            {/* Card */}
            <div className="bg-lightGray  p-6 w-64 h-40 flex flex-col items-center justify-center shadow-md">
            

              {/* Step Title */}
              <h3 className="text-2xl font-semibold text-darkNavyBlue text-center mb-2">
                {step.number} {step.title}
              </h3>

              {/* Description */}
              <p className="text-center text-charcoalGray text-md font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeLineType2;
