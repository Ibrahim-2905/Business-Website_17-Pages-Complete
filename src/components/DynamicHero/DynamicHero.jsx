// "use client"
// import React from "react";
// import TitleDescription from "../TitleDescription/TitleDescription";
// import { DynamicButton } from "../Button/DynamicButton";
// import { useRouter } from "next/navigation";

// const DynamicHero = ({ data = {} }) => {
//   const router = useRouter()
//   const {
//     image,
//     height,
//     position,
//     align = "items-center text-center",
//     contentWidth = "max-w-3xl",
//     titleProps,
//     descriptionProps,
//     horizontalLine,
//     button1,
//     button2,

//   } = data;

//   return (
//     <div className="relative w-full overflow-hidden">
//       {/* Background */}
//       <div className={`relative w-full ${height}`}>
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${image})` }}
//         />
//        <div className="absolute z-10 inset-0 bg-darkNavyBlue opacity-70" />

//       </div>

//       {/* Content Wrapper */}
//       <div
//         className={`
//           absolute
//           ${position || "inset-0"}
//           flex
//           flex-col
//           justify-center
//           ${align}
//           px-4 sm:px-6
//           z-10
//         `}
//       >
//         <div className={contentWidth}>
//           {titleProps && (
//             <div className="mb-3 sm:mb-4">
//               <TitleDescription {...titleProps} />
//             </div>
//           )}

//           {horizontalLine && (
//             <div className="w-16 sm:w-24 md:w-32 h-[1px] mb-3 sm:mb-4 bg-white/80 mx-auto" />
//           )}

//           {descriptionProps && (
//             <div className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto mb-6">
//               <TitleDescription {...descriptionProps} />
//             </div>
//           )}

//           {/* 🔘 Buttons Row */}
//           {(button1 || button2) && (
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
//               {button1 && (
//                 <div className="w-full sm:w-auto min-w-[160px]">
//                   <DynamicButton onClick={()=> router.push(button1.link)} {...button1} />
//                 </div>
//               )}

//               {button2 && (
//                 <div className="w-full sm:w-auto min-w-[160px]">
//                   <DynamicButton onClick={()=> router.push(button2.link)} {...button2} />
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Bottom Curve */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
//         <svg
//           viewBox="0 0 1438 651"
//           preserveAspectRatio="none"
//           className="w-full h-[160px] md:h-[220px] lg:h-[280px] xl:h-[320px]"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M958 649.043C471 574.627 125.04 608.21 0 628.771V0H1440V493.74C1330.82 616.311 1081 661.352 958 649.043Z"
//             fill="url(#heroGradient)"
//             fillOpacity="0.6"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default DynamicHero;







"use client"
import React from "react";
import TitleDescription from "../TitleDescription/TitleDescription";
import { DynamicButton } from "../Button/DynamicButton";
import { useRouter } from "next/navigation";

const DynamicHero = ({ data = {} }) => {
  const router = useRouter()

  const {
    image,
    height = "h-[70vh] sm:h-[80vh] md:h-[90vh]",
    titleProps,
    descriptionProps,
    horizontalLine,
    button1,
    button2,
  } = data;

  return (
    <div className="relative w-full overflow-hidden">

      {/* Background */}
      <div className={`relative w-full ${height}`}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-darkNavyBlue opacity-70" />
      </div>

      {/* CONTENT - TRUE CENTER */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 z-10">
        <div className="max-w-3xl w-full mx-auto">

          {/* Title */}
          {titleProps && (
            <div className="mb-3 sm:mb-4">
              <TitleDescription {...titleProps} />
            </div>
          )}

          {/* Line */}
          {horizontalLine && (
            <div className="w-16 sm:w-24 md:w-32 h-[1px] mb-4 bg-white/80 mx-auto" />
          )}

          {/* Description */}
          {descriptionProps && (
            <div className="max-w-xl mx-auto mb-6">
              <TitleDescription {...descriptionProps} />
            </div>
          )}

          {/* BUTTONS - PERFECT CENTER */}
          {(button1 || button2) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {button1 && (
                <DynamicButton
                  onClick={() => router.push(button1.link)}
                  {...button1}
                />
              )}
              {button2 && (
                <DynamicButton
                  onClick={() => router.push(button2.link)}
                  {...button2}
                />
              )}
            </div>
          )}

        </div>
      </div>

      {/* Bottom Curve */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          viewBox="0 0 1438 651"
          preserveAspectRatio="none"
          className="w-full h-[80px] sm:h-[140px] md:h-[220px] lg:h-[280px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M958 649.043C471 574.627 125.04 608.21 0 628.771V0H1440V493.74C1330.82 616.311 1081 661.352 958 649.043Z"
            fill="url(#heroGradient)"
            fillOpacity="0.6"
          />
        </svg>
      </div> */}

    </div>
  );
};

export default DynamicHero;
