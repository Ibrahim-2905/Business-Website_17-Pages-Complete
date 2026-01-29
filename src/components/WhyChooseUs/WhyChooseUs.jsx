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
    <div className="w-full bg-white py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-30">
      <div className="max-w-[1438px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16 lg:gap-20 xl:gap-25 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Title */}
            <h2 
              className="text-darkNavyBlue"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(20px, 5vw, 32px)',
                lineHeight: 'clamp(28px, 6vw, 40px)',
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
                fontSize: 'clamp(13px, 2.5vw, 16px)',
                lineHeight: 'clamp(20px, 3vw, 26px)',
                letterSpacing: '0%'
              }}
            >
              {description || defaultDescription}
            </p>

            {/* Features List */}
            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-3 md:pt-4">
              {(features || defaultFeatures).map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-start text-charcoalGray"
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontWeight: 500,
                    fontSize: 'clamp(13px, 2.2vw, 15px)',
                    lineHeight: 'clamp(20px, 3vw, 24px)'
                  }}
                >
                  <span 
                    className="text-darkNavyBlue mr-2 sm:mr-3 flex-shrink-0"
                    style={{
                      fontSize: 'clamp(18px, 3vw, 24px)',
                      lineHeight: '1'
                    }}
                  >
                    •
                  </span>
                  <span className="flex-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div 
              className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[511px]"
              style={{
                aspectRatio: '511/341'
              }}
            >
              <img 
                src={image || '/logo/whyChooseUs.png'}
                alt="Why choose us"
                className="w-full h-full object-cover"
                style={{
                  borderRadius: 'clamp(6px, 1.5vw, 10px)',
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