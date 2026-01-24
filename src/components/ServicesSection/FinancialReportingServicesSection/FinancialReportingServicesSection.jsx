import React from 'react';
import FinancialReportingServicesCard from './FinancialReportingServicesCard';
import TitleDescription from '../../TitleDescription/TitleDescription';

const FinancialReportingServicesSection = ({ data }) => {
  return (
    <section className="relative bg-lightGray py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-80"
        style={{ backgroundImage: 'url(/logo/gridBg.png)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className='text-center   mb-8 sm:mb-10 md:mb-12'>
          <TitleDescription
            {...data.titleProps}
            {...data.descriptionProps}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {data.services.map((service) => (
            <FinancialReportingServicesCard
              key={service.id}
              logo={service.logo}
              title={service.title}
              description={service.description}
              buttonProps={service.buttonProps}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialReportingServicesSection;