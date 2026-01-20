// import React from 'react'
// import TitleDescription from '../TitleDescription/TitleDescription'

// const ProgressGridSection = ({gridImages }) => {
//     return (
//         <div>
//             <div className='relative w-full min-h-screen py-10 overflow-hidden'>
//                 <div className='absolute inset-0'>
//                     <img src="/logo/gridBg.png" alt="gridBg" />
//                 </div>

//                 <div className=' absolute  inset-0 text-center py-15 '>
//                     <TitleDescription
//                         title={
//                             <>
//                                 <span className="block text-darkNavyBlue mb-2">Achieving sustainable progress through </span>
//                                 <span className="block text-peal mb-2">collaborative innovation and shared</span>
//                                 <span className="block text-darkNavyBlue">expertise</span>
//                             </>
//                         } />

//                 </div>



               
 






//                 {/* description */}
//                 <div className='absolute w-full bottom-0 text-center py-15 text-2xl '>
//                     <TitleDescription

//                         description={
//                             <>
//                                 <span className='text-lg  text-black'> Our diverse team combines global expertise and</span>

//                                 <span className='text-darkOrange text-lg'> innovative thinking</span>
//                                 <span className='text-lg text-black'>to deliver successful,</span>
//                                 <span className='text-darkOrange text-lg'>tech-driven solutions.</span>
//                                 <span className='text-lg text-black'>We work together to create</span>
//                                 <span className='text-darkOrange text-lg'>impactful</span>
//                                 <span className='text-lg text-black'>results that align with your business needs.</span>
//                             </>
//                         }
//                     />
//                 </div>


//             </div>
//         </div>
//     )
// }

// export default ProgressGridSection
















// import React from 'react'
// import TitleDescription from '../TitleDescription/TitleDescription'

// const ProgressGridSection = ({ gridImages }) => {
//     return (
//         <div>
//             <div className='relative w-full min-h-screen py-10 overflow-hidden'>
//                 <div className='absolute inset-0'>
//                     <img src="/logo/gridBg.png" alt="gridBg" />
//                 </div>

//                 <div className='absolute inset-0 text-center py-15'>
//                     <TitleDescription
//                         title={
//                             <>
//                                 <span className="block text-darkNavyBlue mb-2">Achieving sustainable progress through </span>
//                                 <span className="block text-peal mb-2">collaborative innovation and shared</span>
//                                 <span className="block text-darkNavyBlue">expertise</span>
//                             </>
//                         } 
//                     />
//                 </div>

//                 {/* Image Grid */}
//                 <div className='absolute inset-0 flex items-center justify-center px-10'>
//                     <div className='relative max-w-6xl w-full'>
//                         <div className='grid grid-cols-5 grid-rows-2 gap-4 h-[450px]'>
//                             {/* Item 1 - Top Left */}
//                             <div className='col-span-1 row-span-1 rounded-lg overflow-hidden shadow-lg'>
//                                 <img src={gridImages?.[0] || ''} alt="Team 1" className='w-full h-full object-cover' />
//                             </div>
                            
//                             {/* Item 2 - Tall Middle Left (spans 2 rows) */}
//                             <div className='col-span-1 row-span-2 rounded-lg overflow-hidden shadow-lg'>
//                                 <img src={gridImages?.[1] || ''} alt="Team 2" className='w-full h-full object-cover' />
//                             </div>
                            
//                             {/* Item 3 - Top Center */}
//                             <div className='col-span-1 row-span-1 rounded-lg overflow-hidden shadow-lg'>
//                                 <img src={gridImages?.[2] || ''} alt="Team 3" className='w-full h-full object-cover' />
//                             </div>
                            
//                             {/* Item 4 - Top Center Right */}
//                             <div className='col-span-1 row-span-1 rounded-lg overflow-hidden shadow-lg'>
//                                 <img src={gridImages?.[3] || ''} alt="Team 4" className='w-full h-full object-cover' />
//                             </div>
                            
//                             {/* Item 5 - Top Right */}
//                             <div className='col-span-1 row-span-1 rounded-lg overflow-hidden shadow-lg'>
//                                 <img src={gridImages?.[4] || ''} alt="Team 5" className='w-full h-full object-cover' />
//                             </div>
                            
//                             {/* Item 6 - Bottom Left */}
//                             <div className='col-span-1 row-span-1 rounded-lg overflow-hidden shadow-lg'>
//                                 <img src={gridImages?.[5] || ''} alt="Team 6" className='w-full h-full object-cover' />
//                             </div>
                            
//                             {/* Item 7 - Bottom Center */}
//                             <div className='col-span-1 row-span-1 rounded-lg overflow-hidden shadow-lg'>
//                                 <img src={gridImages?.[6] || ''} alt="Team 7" className='w-full h-full object-cover' />
//                             </div>
                            
//                             {/* Item 8 - Bottom Center Right */}
//                             <div className='col-span-1 row-span-1 rounded-lg overflow-hidden shadow-lg'>
//                                 <img src={gridImages?.[7] || ''} alt="Team 8" className='w-full h-full object-cover' />
//                             </div>
                            
//                             {/* Item 9 - Bottom Right */}
//                             <div className='col-span-1 row-span-1 rounded-lg overflow-hidden shadow-lg'>
//                                 <img src={gridImages?.[8] || ''} alt="Team 9" className='w-full h-full object-cover' />
//                             </div>
//                         </div>
                        
//                         {/* Vertical Dotted Line */}
//                         <div className='absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 pointer-events-none'>
//                             <div className='w-full h-full border-l-2 border-dashed border-blue-500'></div>
//                         </div>
                        
//                         {/* "expertise" label at top */}
//                         <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1 text-sm text-gray-700'>
//                             expertise
//                         </div>
//                     </div>
//                 </div>

//                 {/* description */}
//                 <div className='absolute w-full bottom-0 text-center py-15 text-2xl'>
//                     <TitleDescription
//                         description={
//                             <>
//                                 <span className='text-lg text-black'> Our diverse team combines global expertise and</span>
//                                 <span className='text-darkOrange text-lg'> innovative thinking</span>
//                                 <span className='text-lg text-black'> to deliver successful,</span>
//                                 <span className='text-darkOrange text-lg'> tech-driven solutions.</span>
//                                 <span className='text-lg text-black'> We work together to create</span>
//                                 <span className='text-darkOrange text-lg'> impactful</span>
//                                 <span className='text-lg text-black'> results that align with your business needs.</span>
//                             </>
//                         }
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProgressGridSection











'use client';
import React from 'react';
import TitleDescription from '../TitleDescription/TitleDescription';

const ProgressGridSection = ({ gridImages }) => {
    return (
        <section className="relative w-full py-20 bg-lightGray">
            <img
                src="/logo/gridBg.png"
                alt="gridBg"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center gap-12 px-5">
                {/* Heading */}
                <TitleDescription
                    title={
                        <>
                            <span className="block text-darkNavyBlue text-3xl md:text-4xl mb-2 text-center">
                                Achieving sustainable progress through
                            </span>
                            <span className="block text-peal text-3xl md:text-4xl mb-2 text-center">
                                collaborative innovation and shared
                            </span>
                            <span className="block text-darkNavyBlue text-3xl md:text-4xl text-center">
                                expertise
                            </span>
                        </>
                    }
                />

                {/* Image Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
                    {gridImages?.slice(0, 10).map((img, idx) => (
                        <div
                            key={idx}
                            className="rounded-lg overflow-hidden shadow-lg bg-gray-200"
                            style={{ 
                                height: '240px',
                                minHeight: '200px'
                            }}
                        >
                            <img
                                src={img}
                                alt={`Team ${idx + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Description */}
                <TitleDescription
                    description={
                        <p className="text-center text-lg md:text-xl max-w-3xl">
                            <span className='text-black'>Our diverse team combines global expertise and </span>
                            <span className='text-darkOrange'>innovative thinking</span>
                            <span className='text-black'> to deliver successful, </span>
                            <span className='text-darkOrange'>tech-driven solutions.</span>
                            <span className='text-black'> We work together to create </span>
                            <span className='text-darkOrange'>impactful </span>
                            <span className='text-black'>results that align with your business needs.</span>
                        </p>
                    }
                />
            </div>
        </section>
    );
};

export default ProgressGridSection;