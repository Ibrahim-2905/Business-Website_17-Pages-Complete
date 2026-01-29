import React from 'react';
import TitleDescription from '../../TitleDescription/TitleDescription';
import VirtualAssistanceServicesCard from './VirtualAssistanceServicesCard';

const VirtualAssistanceServicesSection = ({ data }) => {
  return (
    <section className="relative bg-lightGray py-12 sm:py-16 md:py-20  px-4 sm:px-6 md:px-8  overflow-hidden">
    
      {/* Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-80"
        style={{ backgroundImage: 'url(/logo/gridBg.png)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Title & Description */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16  px-2 sm:px-0">
          <TitleDescription
            {...data.titleProps}
            {...data.descriptionProps}
          />
        </div>

        {/* Services Grid */}
     <div className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-2
  xl:grid-cols-4
  gap-6 sm:gap-8 md:gap-5
">

  {data.services.map((service) => (
    <VirtualAssistanceServicesCard
      key={service.id}
      logo={service.logo}
      title={service.title}
      points={service.points}
      buttonProps={service.buttonProps}
    />
  ))}
</div>

      </div>
    </section>
  );
};

export default VirtualAssistanceServicesSection;















