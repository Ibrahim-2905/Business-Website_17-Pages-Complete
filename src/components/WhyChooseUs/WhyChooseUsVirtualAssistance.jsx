import React from 'react';
import TitleDescription from '../TitleDescription/TitleDescription';

export default function WhyChooseUsVirtualAssistance() {
    const sapServices = [
        { description: "CRM: HubSpot, Salesforce, Zoho" },
        { description: "Project Management: Trello, Asana" },
        { description: "Microsoft Office Suite: Outlook, Excel, Word" },
        { description: "Communication & Collaboration: Gmail" }
    ];

    return (
        <section
            style={{ background: "var(--bg-navy-gradient)" }}
            className="relative py-8 px-4 md:px-10 overflow-hidden"
        >
            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Title */}
                <div className='text-center md:text-start py-10'>
                    <TitleDescription
                        title={
                            <span style={{ fontWeight: "500" }} className='text-white font-poppins'>
                                Tech-Enabled Virtual Assistance
                            </span>
                        }
                    />
                    <TitleDescription
                        description={
                            <span className='text-white font-medium font-open-sans'>
                                We combine human expertise with technology for better results.
                            </span>
                        }
                    />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-1 items-center">

                    {/* LEFT SIDE - SAP Services */}
                    <div className="space-y-6 text-center md:text-left">
                        {sapServices.map((service, index) => (
                            <p
                                key={index}
                                className="text-lightGray text-md"
                                style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}
                            >
                                {service.description}
                            </p>
                        ))}
                    </div>

                    {/* RIGHT SIDE - Image */}
                    <div className="flex justify-center items-center text-center lg:justify-end">
                        <img
                            className="rounded-sm max-w-full h-auto"
                            src="/logo/virtualAssistanceLady.png"
                            alt="virtualAssistanceLady"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
