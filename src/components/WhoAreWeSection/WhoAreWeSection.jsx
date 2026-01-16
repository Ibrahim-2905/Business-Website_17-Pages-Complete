import React from 'react';
import TitleDescription from '../TitleDescription/TitleDescription';

const WhoAreWeSection = () => {
  const data = {
    missionImage: "/logo/mission.png",
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">

      {/* Background decoration - top left */}
      <div className="absolute top-0 left-0 w-24 sm:w-32 md:w-56 opacity-40 pointer-events-none">
        <img src="/logo/pattern2.png" alt="" className="w-full h-auto" />
      </div>

      {/* Background decoration - bottom right */}
      <div className="absolute bottom-0 right-0 w-24 sm:w-32 md:w-56 opacity-40 pointer-events-none">
        <img src="/logo/pattern2.png" alt="" className="w-full h-auto" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">

        {/* Who are we */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <TitleDescription
              title="Who are we?"
              titleColor="text-darkNavyBlue"
            />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <TitleDescription
              description="Founded in 2010, CorpSolution has grown from a small consultancy firm to a global provider of comprehensive business solutions. Our journey has been defined by a relentless pursuit of excellence and a deep commitment to our clients' success."
            />
            <TitleDescription
              description="We believe that every business, regardless of its size, deserves access to top-tier financial, technical, and operational expertise. That's why we've built a diverse team of specialists across accounting, ERP implementation, and business process outsourcing."
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="text-center space-y-4">
            <TitleDescription
              title="Our Mission"
              titleColor="text-peal"
            />
            <TitleDescription
              description="To empower businesses with the tools, insights, and support they need to navigate complexity and achieve sustainable growth in a rapidly evolving global marketplace."
            />
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <img
                src={data.missionImage}
                alt="Mission"
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoAreWeSection;
