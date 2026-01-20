// import React from 'react';
// import TitleDescription from '../TitleDescription/TitleDescription';
// import AnimatedButton from '../Button/Button';

// export default function TechStack() {
//   // Replace these paths with your actual image paths
//   const cards = [
//     { id: 1, image: '/logo/tech4.png', alt: 'Cloud' },
//     { id: 2, image: '/logo/tech2.png', alt: 'AI & Machine Learning' },
//     { id: 3, image: '/logo/tech3.png', alt: 'Development' },
//     { id: 4, image: '/logo/tech4.png', alt: 'ERP & Automation' }
//   ];

//   return (
//     <div
//       className="flex items-center justify-center p-8"
//       style={{
//         backgroundImage: 'url(logo/techHero.png)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center'
//       }}
//     >
//       <div className="w-full max-w-6xl">
//         {/* Title */}
//         <div className='text-center mb-10'>
//           <TitleDescription
//             title={<span className="text-darkNavyBlue">Our Tech Stack</span>}
//           />
//         </div>



//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {cards.map((card) => (
//             <div key={card.id} className="flex justify-center">
//               <img
//                 src={card.image}
//                 alt={card.alt}
//                 className="w-full h-auto object-contain"
//               />
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="flex justify-center">
         
//           <AnimatedButton
//             text="Learn More About Our Work"
//             textColor="text-white"
//             padding="px-8 "
//             rounded="rounded-md"
//             border="hover:border-b hover:border-white"
//             bgColor="bg-darkOrange"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }











import React from 'react';
import TitleDescription from '../TitleDescription/TitleDescription';
import AnimatedButton from '../Button/Button';

export default function TechStack() {
  const cards = [
    { id: 1, image: '/logo/tech4.png', alt: 'Cloud' },
    { id: 2, image: '/logo/tech2.png', alt: 'AI & Machine Learning' },
    { id: 3, image: '/logo/tech3.png', alt: 'Development' },
    { id: 4, image: '/logo/tech4.png', alt: 'ERP & Automation' }
  ];

  return (
    <div
      className="flex items-center justify-center"
      // style={{
      //   backgroundImage: 'url(logo/techHero.png)',
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center'
      // }}
    >
      <div className="w-full  mx-auto bg-gray-200 bg-opacity-90  p-8 lg:p-12">
        {/* Title */}
        <div className='text-center mb-12'>
          <TitleDescription
            title={<span className="text-darkNavyBlue">Our Tech Stack</span>}
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {cards.map((card) => (
            <div key={card.id} className="flex justify-center">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <AnimatedButton
            text="Learn More About Our Work"
            textColor="text-white"
            padding="px-8 py-3"
            rounded="rounded-md"
            border="hover:border-b hover:border-white"
            bgColor="bg-darkOrange"
          />
        </div>
      </div>
    </div>
  );
}

























