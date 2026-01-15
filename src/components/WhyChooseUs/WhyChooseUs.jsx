import React from 'react';

const WhyChooseUs = ({ 
  title,
  description,
  features,
  image
}) => {
  const defaultTitle = "Why leading companies choose Mirage Works";
  const defaultDescription = "We combine industry expertise with cutting-edge technology to deliver results that matter. Our dedicated team ensures your business objectives are met with precision and excellence.";
  const defaultFeatures = [
    "Industry-leading expertise and certification",
    "Customized solutions for your specific needs",
    "24/7 dedicated support and maintenance",
    "Proven track record of success"
  ];

  return (
    <div className="w-full bg-white py-20 px-30">
      <div className="max-w-[1438px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-25 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Title */}
            <h2 
              className="text-darkNavyBlue"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(24px, 4vw, 32px)',
                lineHeight: '35px',
                letterSpacing: '0%'
              }}
            >
              {title || defaultTitle}
            </h2>

            {/* Description */}
            <p 
              className="text-charcoalGray"
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(12px, 2vw, 14px)',
                lineHeight: '22px',
                letterSpacing: '0%'
              }}
            >
              {description || defaultDescription}
            </p>

            {/* Features List */}
            <ul className="space-y-3">
              {(features || defaultFeatures).map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-start text-charcoalGray"
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontWeight: 500,
                    fontSize: 'clamp(12px, 1.5vw, 14px)',
                    lineHeight: '7px'
                  }}
                >
                  <span className="text-darkNavyBlue mr-3 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div 
              className="relative w-full max-w-[400px]"
              style={{
                aspectRatio: '511/341'
              }}
            >
              <img 
                src={image || '/logo/WhyChooseUs.png'}
                alt="Why choose us"
                className="w-full h-full object-cover"
                style={{
                  borderRadius: '10px',
                  boxShadow: '0 10px 25px -8px rgba(0, 0, 0, 0.15)',


                  opacity: 1
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;