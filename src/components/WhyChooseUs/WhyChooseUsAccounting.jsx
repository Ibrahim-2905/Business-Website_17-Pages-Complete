import React from 'react';
import { Check } from 'lucide-react';
import TitleDescription from '../TitleDescription/TitleDescription';

export default function WhyChooseUsAccounting() {
  const features = [
    "Daily transaction recording and reconciliation",
    "Accounts payable and receivable management",
    "General ledger maintenance",
    "Monthly, quarterly, and annual financial statements",
    "Bank and credit card reconciliation"
  ];

  return (
    <section
      style={{ background: "var(--bg-navy-gradient)" }}
      className="relative py-16 sm:py-20 px-6 sm:px-10 lg:px-20 overflow-hidden"
    >
       {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
               
                <img
                    src="/logo/pattern3.png"
                    alt=""
                    className="absolute top-0  left-0  md:w-[40%] opacity-40"
                    style={{ clipPath: "inset(0 0 50% 0)" }} // top, right, bottom, left
                />

                <img
                    src="/logo/pattern3.png"
                    alt=""
                    className="absolute bottom-0 right-0  md:w-[40%] opacity-40"
                    style={{ clipPath: "inset(50% 0 0 0)" }} // top, right, bottom, left
                />
            </div>
      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <TitleDescription
              title={
                <span className="text-darkOrange">
                  Streamline Your Financial Operations
                </span>
              }
            />

            <div className="w-full sm:w-[85%] lg:w-[75%]">
              <TitleDescription
                description={
                  <span className="text-sm text-white font-open-sans leading-relaxed">
                    Our comprehensive accounting and bookkeeping services ensure that
                    your financial records are accurate, up-to-date, and compliant
                    with all regulatory standards. We handle the numbers so you can
                    focus on growing your business.
                  </span>
                }
              />
            </div>

            {/* Feature List */}
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-darkOrange flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-white font-open-sans text-sm sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SIDE – GRAY CARD */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative bg-lightGray px-8 py-10 rounded-md w-full max-w-sm sm:max-w-md lg:max-w-lg
                            flex flex-col space-y-3">

              {/* Card Title */}
              <TitleDescription
                title={
                  <span className="text-darkNavyBlue font-poopins">
                    Why Outsource Accounting?
                  </span>
                }
              />

              {/* Item 1 */}
              <div>
                <TitleDescription
                  titleMargin="mb-1"
                  title={
                    <span className="text-peal text-xl font-poopins">
                      Cost Efficiency
                    </span>
                  }
                />
                <TitleDescription
                  description={
                    <span className="text-charcoalGray font-open-sans text-sm leading-relaxed">
                      Reduce overhead costs associated with hiring in-house staff.
                    </span>
                  }
                />
              </div>

              {/* Item 2 */}
              <div>
                <TitleDescription
                  titleMargin="mb-1"
                  title={
                    <span className="text-peal text-xl font-poopins">
                      Expertise Access
                    </span>
                  }
                />
                <TitleDescription
                  description={
                    <span className="text-charcoalGray font-open-sans text-sm leading-relaxed">
                      Gain access to a team of certified professionals and CPAs.
                    </span>
                  }
                />
              </div>

              {/* Item 3 */}
              <div>
                <TitleDescription
                  titleMargin="mb-1"
                  title={
                    <span className="text-peal text-xl font-poopins">
                      Scalability
                    </span>
                  }
                />
                <TitleDescription
                  description={
                    <span className="text-charcoalGray font-open-sans text-sm leading-relaxed">
                      Easily scale services up or down based on business needs.
                    </span>
                  }
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
