import React from 'react';
import TitleDescription from '../TitleDescription/TitleDescription';

export default function WhyChooseUsSapSolutions2() {
    const cards = [
        {
            title: "Proven SAP Expertise",
            description: "Result-driven SAP expertise across industries",
            icon: "/logo/sapLogo1.png"
        },
        {
            title: "Tailored Solutions",
            description: "Customized SAP solutions aligned with your business needs",
            icon: "/logo/sapLogo2.png"
        },
        {
            title: "End-to-End Support",
            description: "Complete SAP implementation, support & optimization",
            icon: "/logo/sapLogo3.png"
        },
        {
            title: "Cost-Effective Results",
            description: "Reduce SAP solutions that reduce costs and Return & ROI",
            icon: "/logo/sapLogo4.png"
        }
    ];

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}

                <div className='text-center mb-5'>
                    <TitleDescription title={
                        <>
                            <span className='text-darkNavyBlue'>
                                Why Choose Mirage Works for SAP Solutions
                            </span>
                        </>
                    } />
                </div>
                {/* 50/50 Split Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Side - Cards (50%) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-lightGray rounded-md p-6 sm:p-8 shadow-[0_4px_4px_rgba(0,0,0,0.20)] flex flex-col justify-center"
                            >
                                {/* Icon */}
                                <div className="flex justify-start">
                                    <img
                                        src={card.icon}
                                        alt={card.title}
                                        className=""
                                    />
                                </div>

                                {/* Title */}
                                <TitleDescription
                                    title={
                                        <span className="text-darkNavyBlue text-lg font-open-sans">
                                            {card.title}
                                        </span>
                                    }
                                />

                                {/* Description */}
                                <p className="text-charcoalGray font-open-sans leading-relaxed mt-2">
                                    {card.description}
                                </p>
                            </div>

                        ))}
                    </div>

                    {/* Right Side - Hero Image (50%) */}
                    <div className="rounded-md shadow-[3px_8px_2px_rgba(0,0,0,0.22)] overflow-hidden  max-h-[600px]">
                        <img
                            src="/logo/sapManImage.jpg"
                            alt="SAP Solutions Dashboard"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}