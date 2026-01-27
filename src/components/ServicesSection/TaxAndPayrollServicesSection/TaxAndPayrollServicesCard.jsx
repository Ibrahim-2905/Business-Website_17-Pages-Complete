// "use client"
// import React from 'react';
// import { Check, ArrowRight } from 'lucide-react';
// import { DynamicButton } from '../../Button/DynamicButton';
// import { useRouter } from 'next/navigation';

// const TaxAndPayrollServicesCard = ({ logo, title, description, buttonProps }) => {
//   const router = useRouter();

//   return (
//     <div 
//       className="rounded-lg overflow-hidden p-3 h-full flex flex-col items-center"
//       style={{ background: "var(--bg-navy-gradient)" }}
//     >
//       {/* Logo and Title in ROW - Centered */}
//       <div className="flex items-center justify-center gap-3 mb-4 w-full">
//         {/* Logo with teal background */}
//         <div className="w-20 h-20 bg-teal-400 rounded-lg flex items-center justify-center">
//           <img 
//             src={logo} 
//             alt={title}
//             className="w-full h-full object-contain"
//           />
//         </div>

//         {/* Title */}
//         <h3 className="text-white font-semibold whitespace-pre-line font-poppins text-2xl leading-tight">
//           {title}
//         </h3>
//       </div>

//       {/* Description with Check Icon - Centered */}
//       <div className="flex items-start gap-2 mb-6 flex-1 justify-center">
//         <Check className="w-5 h-5 text-darkOrange flex-shrink-0 mt-0.5" strokeWidth={3} />
//         <p className="text-white/90 text-lg font-open-sans leading-relaxed text-left">
//           {description}
//         </p>
//       </div>

//       {/* Button - Centered */}
//       {buttonProps && (
//         <div className="mt-auto">
//           <DynamicButton
//             {...buttonProps}
//             onClick={() => router.push(buttonProps.link)}
//             className="flex items-center gap-2 group"
//           >
//             {buttonProps?.text}
//             <ArrowRight strokeWidth={3} className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//           </DynamicButton>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaxAndPayrollServicesCard;












// TaxAndPayrollServicesCard.jsx
"use client"
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { DynamicButton } from '../../Button/DynamicButton';

const TaxAndPayrollServicesCard = ({ logo, title, description, buttonProps }) => {
  const router = useRouter();

  return (
    <div 
      className="rounded-xl overflow-hidden p-6 sm:p-8 md:p-10 flex flex-col items-center text-center h-full"
      style={{ 
        background: "var(--bg-navy-gradient)",
        // Optional: add 70% overlay on top of gradient for better readability
        backgroundBlendMode: "overlay",
      }}
    >

        <div className='flex items-start justify-start gap-1 mb-2 w-full'>
      {/* Logo */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg flex items-center justify-center ">
        <img 
          src={logo} 
          alt={title}
          className="w-3/4 h-3/4 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-white text-left  font-poppins text-xl sm:text-2xl md:text-2xl leading-tight ">
        {title}
      </h3>
        </div>
      

      {/* Description */}
      <div className="flex items-start gap-2 mb-5 flex-1 justify-center max-w-[90%] sm:max-w-[80%] ">
        <Check className="w-5 h-5 text-darkOrange flex-shrink-0 mt-1" strokeWidth={3} />
        <p className="text-white/90 text-base sm:text-lg md:text-xl font-open-sans leading-relaxed text-left">
          {description}
        </p>
      </div>

      {/* Button */}
      {buttonProps && (
        <div className="mt-auto">
          <DynamicButton
            {...buttonProps}
            onClick={() => router.push(buttonProps.link)}
            className="flex items-center gap-2 group"
          >
            {buttonProps?.text}
            <ArrowRight strokeWidth={3} className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </DynamicButton>
        </div>
      )}
    </div>
  );
};

export default TaxAndPayrollServicesCard;

