import React from 'react';
import TitleDescription from '../TitleDescription/TitleDescription';
import { Check } from 'lucide-react';

const WhyChooseUsCustomDevelopment = () => {
    const benefits = [
        "Fully customized solutions",
        "Scalable & future-ready architecture",
        "Secure & performance-optimized code",
        "ERP, SAP & Odoo expertise",
        "Dedicated development & support team"
    ];

    const industries = [
        { name: "Manufacturing" },
        { name: "Healthcare" },
        { name: "IT & Software Companies" },
        { name: "Retail & E-Commerce" },
        { name: "Real Estate" },
        { name: "SMEs & Enterprises" }
    ];

    return (
        <div className="w-full   px-4">
            <div className="max-w-6xl mx-auto">
                {/* Main Heading */}
                <div className='text-center py-6'>
                    <TitleDescription
                        title={
                            <>
                                <span style={{ fontWeight: "600" }} className='text-darkNavyBlue  font-poppins'>Why Choose our Custom Development</span>
                            </>
                        }
                    />

                </div>

                {/* Benefits List */}
                <div className="flex flex-col md:items-center space-y-3 mb-12">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex  text-charcoalGray">
                            <Check className="w-5 h-5  text-peal" strokeWidth={3} />
                            <span className="text-base font-medium md:text-lg">{benefit}</span>
                        </div>
                    ))}
                </div>

                {/* Industries Section */}
                <div className="text-center mb-3">
                    <h3 style={{ fontWeight: "600" }} className="text-2xl md:text-3xl font-poppins  text-darkNavyBlue">
                        Industries we Serve
                    </h3>
                </div>

               {/* Industries Grid */}
<div
  style={{ background: "var(--bg-teal-gradient)" }}
  className="p-8 flex justify-center"
>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
    {industries.map((industry, index) => (
      <div
        key={index}
        className="flex items-center text-charcoalGray"
      >
        <span className="mr-2 text-xl flex-shrink-0">•</span>
        <span className="text-base md:text-lg truncate">{industry.name}</span>
      </div>
    ))}
  </div>
</div>

            </div>
        </div>
    );
};

export default WhyChooseUsCustomDevelopment;