// import AnimatedButton from "../Button/Button";
// import TitleDescription from "../TitleDescription/TitleDescription";
// import { DynamicButton } from "../Button/DynamicButton";

// export default function MirageHero() {
//   return (
//     <section className="relative bg-lightGray min-h-[110vh] mb-15 overflow-hidden">

//       {/* Background image */}
//       <img
//         src="/logo/bgHero.png"
//         alt=""
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Content grid */}
//       <div className="relative z-10 container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen">

//         {/* LEFT CONTENT */}
//         <div className="flex justify-center flex-col max-w-xl">

//           <TitleDescription
//             title={
//               <>
//                 <span className="text-white text-4xl ">Strategic Solutions</span>
//                 <span className="text-white text-4xl ">for</span>
//                 <span className="text-darkOrange text-4xl block">
//                   Modern Business
//                 </span>
//               </>
//             }
//           />

//           <p className="text-gray-300 mb-8 text-lg">
//             We provide comprehensive financial, ERP, and outsourcing services
//             to help your organization thrive in a complex global market.
//           </p>

//           <div className="flex gap-4">
           
//             <DynamicButton
//               text="Get Started"
//               bgColor="bg-darkOrange"
//               hoverBgColor="bg-transparent"
//               hoverTextColor="text-darkOrange"
//               textColor="text-white"
//               border="border-2 border-transparent hover:border-darkOrange"
//               link="/contact"
//               rounded="rounded-md"
//             />

//             <DynamicButton
//               text="Get Started"
//               bgColor="bg-darkNavyBlue"
//               textColor="text-white"
//               padding="px-10"
//               border="border-b-2 border-white"
//               hoverBgColor="bg-white"
//               hoverTextColor="text-darkNavyBlue"
//               rounded="rounded-md"
//             />
//           </div>
//         </div>

//         {/* RIGHT IMAGE (BOTTOM ALIGNED) */}
//         <div className="relative">
//           <img
//             src="/logo/laptop.png"
//             alt="Dashboard Analytics"
//             className="absolute bottom-0 right-0 w-[155%] max-w-[750px] drop-shadow-2xl"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }









import TitleDescription from "../TitleDescription/TitleDescription";
import { DynamicButton } from "../Button/DynamicButton";

export default function MirageHero() {
  return (
    <section className="relative bg-lightGray min-h-[100vh] sm:min-h-[110vh] mb-8 sm:mb-10 md:mb-12 lg:mb-15 overflow-hidden">

      {/* Background image */}
      <img
        src="/logo/bgHero.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center lg:object-left"
      />

      {/* Overlay for better text readability on mobile */}
      <div className="absolute inset-0 bg-darkNavyBlue/30 lg:bg-transparent z-[5]" />

      {/* Content grid */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 min-h-[100vh] sm:min-h-screen">

        {/* LEFT CONTENT */}
        <div className="flex justify-center flex-col max-w-xl pt-20 sm:pt-24 md:pt-28 lg:pt-0">

          <TitleDescription
            title={
              <>
                <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mb-1 sm:mb-2">
                  Strategic Solutions
                </span>
                <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mb-1 sm:mb-2">
                  for
                </span>
                <span className="text-darkOrange text-2xl sm:text-3xl md:text-4xl lg:text-5xl block">
                  Modern Business
                </span>
              </>
            }
          />

          <p className="text-gray-300 mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed mt-4 sm:mt-5 md:mt-6">
            We provide comprehensive financial, ERP, and outsourcing services
            to help your organization thrive in a complex global market.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
           
            <DynamicButton
              text="Get Started"
              bgColor="bg-darkOrange"
              hoverBgColor="bg-transparent"
              hoverTextColor="text-darkOrange"
              textColor="text-white"
              border="border-2 border-transparent hover:border-darkOrange"
              link="/contact"
              rounded="rounded-md"
              padding="px-6 sm:px-8 py-2.5 sm:py-3"
              className="text-center"
            />

            <DynamicButton
              text="Learn More"
              bgColor="bg-darkNavyBlue"
              textColor="text-white"
              padding="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3"
              border="border-2 border-white"
              hoverBgColor="bg-white"
              hoverTextColor="text-darkNavyBlue"
              rounded="rounded-md"
              className="text-center"
            />
          </div>
        </div>

        {/* RIGHT IMAGE (BOTTOM ALIGNED) - Desktop Only */}
        <div className="relative hidden lg:block">
          <img
            src="/logo/laptop.png"
            alt="Dashboard Analytics"
            className="absolute bottom-0 right-0 w-[155%] max-w-[750px] drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}