import React from 'react';
import ProcessOptimizationServicesCard from './ProcessOptimizationServicesCard';
import TitleDescription from '../../TitleDescription/TitleDescription';

const ProcessOptimizationServicesSection = ({ data = [] }) => {
  return (
    <section className="relative py-12 md:py-14 px-4 md:px-6 overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-80"
        style={{ backgroundImage: 'url(/logo/gridBg.png)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className='flex flex-col justify-center items-center'>
          <div className='text-center mb-5'>
            <TitleDescription title={
              <><span style={{fontWeight:"600"}} className='text-darkNavyBlue font-poppins'>About Process Optimization solutions</span></>
            } />
          </div>

          <div className='max-w-3xl mb-10 text-center'>
            <TitleDescription description={
              <><span style={{fontWeight:"500", lineHeight:"2"}} className='text-charcoalGray font-open-sans text-md'>Process Optimization focuses on analyzing and improving business processes to achieve maximum efficiency, reduced costs, and better outcomes.
We help organizations eliminate bottlenecks, automate repetitive tasks, and align processes with business goals.</span></>
            } />
          </div>
        </div>

        <div className='text-center mb-8'>
          <TitleDescription
            {...data.titleProps}
            {...data.descriptionProps}
          />
        </div>

        {/* Updated grid with better spacing */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {data.services.map((service) => (
            <ProcessOptimizationServicesCard
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

export default ProcessOptimizationServicesSection;