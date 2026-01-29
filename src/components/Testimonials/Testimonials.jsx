import React from 'react';
import TestimonialCard from './TestimonialCard';
import { DataTestimonials } from './DataTestimonials';
import TitleDescription from '../TitleDescription/TitleDescription';



// Example usage with multiple testimonials
const TestimonialsSection = ({data = []}) => {

  return (
    <div  style={{ background: "var(--bg-navy-gradient)" }} >
      <div className="w-full">
        {/* Title */}
        <div className='py-10 text-center'>
        <TitleDescription  title={"Testimonials"} titleColor='text-white'/>
        </div>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          {data.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              review={testimonial.review}
              picture={testimonial.picture}
              name={testimonial.name}
              jobTitle={testimonial.jobTitle}
              bgGradient={testimonial.bgGradient}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;