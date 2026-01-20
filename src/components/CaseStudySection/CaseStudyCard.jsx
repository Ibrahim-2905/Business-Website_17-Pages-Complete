import React from 'react';
import TitleDescription from '../TitleDescription/TitleDescription';

// CaseStudyCard Component
export default function CaseStudyCard({
    backgroundImage,
    title,
    description,
    buttonText = "Read Case Study"
}) {
    return (
        <div
            className="relative rounded-md border border-4 border-darkOrange overflow-hidden w-full max-w-[380px] h-[480px] group cursor-pointer transition-all duration-500 hover:shadow-2xl"
        >
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            />


            {/* Content */}
            <div className="relative h-full flex flex-col  justify-end  px-4  ">




                <div
                    className=" p-5"
                    style={{
                        background: 'linear-gradient(to top, #041435E5, rgba(4, 20, 53, 0.4))',
                        boxShadow: '0 -20px 40px rgba(4, 20, 53, 0.5)'
                    }}
                >
                    {/* Title */}
                    <div>
                        <TitleDescription
                            title={
                                <>
                                    <span className='text-darkOrange text-xl font-open-sans'>{title}</span>
                                </>
                            }
                        />
                    </div>

                    {/* Description */}
                    <p className="text-white/90 text-sm font-open-sans leading-relaxed mb-3">
                        {description}
                    </p>

                    {/* Button */}
                    <button className="flex items-center text-darkOrange gap-2 font-medium text-sm hover:gap-3 transition-all duration-300 group/btn">
                        <span>{buttonText}</span>
                        <svg
                            className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}