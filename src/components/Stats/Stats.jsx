// import React from 'react';
// import { stats } from './DataStats';

// const Stats = ({ 
//   patternImage = '/logo/pattern1.png',
// }) => {
 

//   return (
//     <div style={{ background: "var(--bg-navy-gradient)" }} className="w-full py-20  relative overflow-hidden">
      
//         <div 
//           className="absolute top-0 left-0 pointer-events-none overflow-hidden"
//           style={{
//             width: '',
//             height: '470px',
//           }}
//         >
//           <img 
//             src={patternImage} 
//             alt="" 
//             className="w-full h-full object-contain"
//             style={{
//               opacity: 1
//             }}
//           />
//         </div>
      
//         <div 
//           className="absolute bottom-0 right-0 pointer-events-none overflow-hidden"
//           style={{
//             width: '',
//             height: '470',
//           }}
//         >
//           <img 
//             src={patternImage} 
//             alt="" 
//             className="w-full h-full object-contain"
//             style={{
//               transform: 'rotate(180deg)',
//               opacity: 1
//             }}
//           />
//         </div>
      

//       {/* Stats Container */}
//       <div className="max-w-[1438px] mx-auto relative z-10">
//         <div className="bg-white rounded-lg shadow-xl px-8 md:px-16 py-12 max-w-[1055px] mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div 
//                   className="text-charcoalGray mb-2"
//                   style={{
//                     fontFamily: 'Poppins, sans-serif',
//                     fontWeight: 600,
//                     fontSize: 'clamp(28px, 4vw, 36px)',
//                     lineHeight: '44px'
//                   }}
//                 >
//                   {stat.value}
//                 </div>
//                 <div 
//                   className="text-charcoalGray"
//                   style={{
//                     fontFamily: 'Open Sans, sans-serif',
//                     fontWeight: 500,
//                     fontSize: 'clamp(12px, 2vw, 16px)',
//                     lineHeight: '22px'
//                   }}
//                 >
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stats;






"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { stats } from './DataStats';

const Stats = ({ 
  patternImage = '/logo/pattern1.png',
}) => {

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      style={{ background: "var(--bg-navy-gradient)" }} 
      className="w-full py-20 relative overflow-hidden"
    >

      {/* ✅ animated peal background overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ background: "var(--color-peal)" }}
        animate={{ opacity: toggle ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* ✅ TOP PATTERN IMAGE (left → right full) */}
      <motion.div 
        className="absolute top-0 left-0 pointer-events-none overflow-hidden z-10"
        style={{ height: '470px' }}
        animate={{
          x: toggle ? "calc(100vw - 100%)" : "0px",
        }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
      >
        <img 
          src={patternImage} 
          alt="" 
          className="w-full h-full object-contain"
          style={{ opacity: 1, clipPath: "inset(0 0 50% 0)" }}
        />
      </motion.div>
      
      {/* ✅ BOTTOM PATTERN IMAGE (right → left full) */}
      <motion.div 
        className="absolute bottom-0 right-0 pointer-events-none overflow-hidden z-10"
        style={{ height: '470px' }}
        animate={{
          x: toggle ? "calc(-100vw + 100%)" : "0px",
        }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
      >
        <img 
          src={patternImage} 
          alt="" 
          className="w-full h-full object-contain"
          style={{
            transform: 'rotate(180deg)',
            opacity: 1,
            clipPath: "inset(0 0 50% 0)"
          }}
        />
      </motion.div>

      {/* Stats Container (UNCHANGED) */}
      <div className="max-w-[1438px] mx-auto relative z-20">
        <div className="bg-white rounded-lg shadow-xl px-8 md:px-16 py-12 max-w-[1055px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-charcoalGray mb-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(28px, 4vw, 36px)',
                    lineHeight: '44px'
                  }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-charcoalGray"
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontWeight: 500,
                    fontSize: 'clamp(12px, 2vw, 16px)',
                    lineHeight: '22px'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Stats;
