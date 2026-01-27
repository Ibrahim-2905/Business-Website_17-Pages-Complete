import React from 'react';
import { Repeat, Settings, Wrench } from 'lucide-react';
import TitleDescription from '../TitleDescription/TitleDescription';

export default function WhyChooseUsSapSolutions() {
    const sapServices = [
        {
            Icon: Repeat,
            title: "S/4HANA Migration",
            description: "Seamless transition to the intelligent ERP suite for the digital age."
        },
        {
            Icon: Settings,
            title: "Implementation & Rollout",
            description: "Global template and local rollouts ensuring standardization and compliance."
        },
        {
            Icon: Wrench,
            title: "Application Management",
            description: "24/7 support and maintenance to keep your mission-critical systems running."
        }
    ];

    const certifications = [
        "SAP S/4HANA",
        "SAP Business One",
        "SAP SuccessFactors",
        "SAP Ariba",
        "SAP Analytics Cloud"
    ];

    return (
        <section
            style={{ background: "var(--bg-navy-gradient)" }}
            className="relative py-12 px-4 md:px-10 overflow-hidden"
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
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                    {/* LEFT SIDE - SAP Services */}
                    <div className="space-y-6">
                        {/* Title */}

                        <div className='text-center md:text-start'>
                            <TitleDescription
                                title={
                                    <><span className='text-darkOrange  font-medium'>Unlock the Power of SAP</span></>
                                }
                            />
                        </div>

                        {/* Description */}
                        <p className="text-lightGray text-md leading-relaxed mb-6"
                            style={{ fontFamily: "'Open Sans', sans-serif" }}>
                            As a certified SAP partner, we provide end-to-end services from initial consultation and licensing to implementation, customization, and ongoing support.
                        </p>

                        {/* Service Items */}
                        <div className="space-y-5">
                            {sapServices.map((service, index) => (
                                <div key={index} className="flex gap-3 items-start">
                                    {/* Icon */}
                                    <div className="flex-shrink-0 mt-1">
                                        <service.Icon className="w-6 h-6 text-lightGray" strokeWidth={2} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-lightGray text-lg font-medium mb-1"
                                            style={{ fontFamily: "'Poppins', sans-serif" }}>
                                            {service.title}
                                        </h3>
                                        <p className="text-lightGray text-md leading-relaxed"
                                            style={{ fontFamily: "'Open Sans', sans-serif" }}>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE - Certifications Card */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="bg-lightestGray px-4 md:px-10 py-7 rounded-md shadow-md w-full max-w-lg">

                            {/* Card Title */}
                            <h3 className="text-lg text-center md:text-start mg:text-2xl  font-semibold text-darkNavyBlue mb-5"
                                style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Our SAP Expertise
                            </h3>

                            {/* Certifications List */}
                            <div className="space-y-4">
                                {certifications.map((cert, index) => (
                                    <div key={index}
                                        className="flex items-center justify-between py-2.5 px-3 
                                  bg-white/70 shadow-[0_3px_2px_rgba(0,0,0,0.35)]">
                                        <span className="text-charcoalGray  text-md"
                                            style={{ fontFamily: "'Open Sans', sans-serif" }}>
                                            {cert}
                                        </span>

                                        <span className="text-peal text-sm"
                                            style={{ fontFamily: "open-sans', sans-serif" }}>
                                            Certified
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}