// import React from 'react';
// import { ShieldCheck, Lightbulb, Globe } from 'lucide-react';

// const TaxFeaturesSection = () => {
//   return (
//     <section
//       style={{ background: "var(--bg-navy-gradient)" }}
//       className="relative py-16 sm:py-20 px-6 sm:px-10 lg:px-20 overflow-hidden"
//     >
//        {/* Background Pattern */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <img
//           src="/logo/pattern3.png"
//           alt=""
//           className="absolute top-0 left-0 w-[60%] sm:w-[40%] md:w-[30%] opacity-40"
//         />
//         <img
//           src="/logo/pattern3.png"
//           alt=""
//           className="absolute bottom-0 right-0 w-[60%] sm:w-[40%] md:w-[30%] opacity-40"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-medium font-poppins text-darkOrange mb-4">
//             Navigate Complex Tax Landscapes
//           </h2>
//           <p className="text-white text-base sm:text-lg font-open-sans max-w-3xl mx-auto leading-relaxed">
//             Our tax experts help you minimize liability while ensuring full compliance with local, state,
//             and federal regulations. We stay ahead of changing tax laws so you don't have to.
//           </p>
//         </div>

//         {/* Main Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
//           {/* Left Features */}
//           <div className="space-y-6 text-white">
//             {/* Feature 1 */}
//             <div className="flex items-start gap-4">
//               <div className="w-10 h-10 rounded-full bg-darkOrange flex items-center justify-center flex-shrink-0">
//                 <ShieldCheck className="w-5 h-5 text-white" />
//               </div>
//               <div>
//                 <h4 className="font-semibold text-lg">Compliance & Filing</h4>
//                 <p className="text-sm text-gray-200">
//                   Accurate and timely preparation of all tax returns to avoid penalties.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 2 */}
//             <div className="flex items-start gap-4">
//               <div className="w-10 h-10 rounded-full bg-darkOrange flex items-center justify-center flex-shrink-0">
//                 <Lightbulb className="w-5 h-5 text-white" />
//               </div>
//               <div>
//                 <h4 className="font-semibold text-lg">Strategic Planning</h4>
//                 <p className="text-sm text-gray-200">
//                   Proactive strategies to optimize your tax position and improve cash flow.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 3 */}
//             <div className="flex items-start gap-4">
//               <div className="w-10 h-10 rounded-full bg-darkOrange flex items-center justify-center flex-shrink-0">
//                 <Globe className="w-5 h-5 text-white" />
//               </div>
//               <div>
//                 <h4 className="font-semibold text-lg">International Tax</h4>
//                 <p className="text-sm text-gray-200">
//                   Expertise in cross-border taxation and transfer pricing for global entities.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Card */}
// <div className="relative    max-w-sm ml-auto rounded-xl overflow-hidden">
  
//   {/* Background Image */}
//   <img
//     src="/logo/taxFeature2.jpg"
//     alt=""
//     className="w-full h-full object-cover"
//   />

//   {/* Overlay */}
//   <div className="absolute   inset-0 bg-white/20  flex items-center p-6">
//     <div className='flex justify-center flex-col gap-2 items-center'>
//       <h3 className="text-4xl font-bold text-darkNavyBlue">100%</h3>
//       <p className="font-bold texxt-lg text-charcoalGray mb-2">
//         Compliance Rate
//       </p>
//       <p className="text-sm text-charcoalGray">
//         We pride ourselves on our flawless record of regulatory compliance for our clients.
//       </p>
//     </div>
//   </div>

// </div>


//         </div>
//       </div>
//     </section>
//   );
// };

// export default TaxFeaturesSection;













import React from 'react';
import { ShieldCheck, Lightbulb, Globe } from 'lucide-react';

const TaxFeaturesSection = () => {
  return (
    <section
      style={{ background: 'var(--bg-navy-gradient)' }}
      className="relative py-10 sm:py-20 px-6 sm:px-10 lg:px-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/logo/pattern3.png"
          alt=""
          className="absolute top-0 left-0 w-2/3  sm:w-1/2 md:w-1/3  opacity-40"
        />
        <img
          src="/logo/pattern3.png"
          alt=""
          className="absolute bottom-0 right-0 w-2/3 sm:w-1/2 md:w-1/3 opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-medium font-poppins text-darkOrange mb-4">
            Navigate Complex Tax Landscapes
          </h2>
          <p className="text-white text-base sm:text-lg font-open-sans max-w-3xl mx-auto leading-relaxed">
            Our tax experts help you minimize liability while ensuring full compliance with local, state,
            and federal regulations. We stay ahead of changing tax laws so you don't have to.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-darkOrange flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Compliance & Filing</h4>
                <p className="text-sm text-gray-200">
                  Accurate and timely preparation of all tax returns to avoid penalties.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-darkOrange flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Strategic Planning</h4>
                <p className="text-sm text-gray-200">
                  Proactive strategies to optimize your tax position and improve cash flow.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-darkOrange flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">International Tax</h4>
                <p className="text-sm text-gray-200">
                  Expertise in cross-border taxation and transfer pricing for global entities.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden">
              <img
                src="/logo/taxFeature2.jpg"
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-white/80 flex items-center justify-center p-6">
                <div className="text-center space-y-2">
                  <h3 className="text-4xl font-bold text-darkNavyBlue">100%</h3>
                  <p className="font-bold text-lg text-charcoalGray">
                    Compliance Rate
                  </p>
                  <p className="text-sm text-charcoalGray">
                    We pride ourselves on our flawless record of regulatory compliance for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxFeaturesSection;
