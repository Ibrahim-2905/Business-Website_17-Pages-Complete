import AnimatedButton from "../Button/Button";
import TitleDescription from "../TitleDescription/TitleDescription";

const TransformBusinessBanner = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-10">
      <div className="max-w-[1438px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Gradient Container */}
        <div
          className="rounded-lg overflow-hidden"
          style={{ background: "var(--bg-navy-gradient)" }}
        >
          <div className="flex flex-col lg:flex-row items-center">
            
            {/* Left Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/logo/business1.png"
                alt="Business meeting"
                className="w-full h-[220px] sm:h-[300px] lg:h-[320px] object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 text-center lg:text-left">
              <TitleDescription
                titleColor="text-darkOrange"
                descriptionColor="text-white"
                title="Ready to Transform Your Business?"
                description="Let's discuss how our solutions can help you achieve your goals"
              />

              {/* Buttons */}
           <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">

                <AnimatedButton
                  text="Get Started"
                  bgColor="bg-[#F58508]"
                  textColor="text-white"
                  hoverBgColor="bg-white"
                  hoverTextColor="text-[#F58508]"
                  border="border-2 border-[#F58508]"
                  padding="px-6 sm:px-8"
                  rounded="rounded-md"
                />

                <AnimatedButton
                  text="Learn more about us"
                  bgColor="bg-white"
                  textColor="text-[#1a2d4d]"
                  hoverBgColor="bg-transparent"
                  hoverTextColor="text-darkNavyBlue"
                  border="border-2 border-white"
                  padding="px-6 sm:px-8"
                  rounded="rounded-md"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformBusinessBanner;
