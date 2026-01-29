import React from 'react';
import { Repeat, Settings, Wrench } from 'lucide-react';
import TitleDescription from '../TitleDescription/TitleDescription';

export default function TechStackCustomDevelopment() {
    const sapServices = [
        {
            image: "/logo/customDevelopmentIcon1.png",
            title: "Web Applications",
            description: "Scalable, secure, and responsive web apps built with modern frameworks."
        },
        {
            image: "/logo/customDevelopmentIcon2.png",
            title: "Mobile Solutions",
            description: "Native and cross-platform mobile apps for iOS and Android."
        },
        {
            image: "/logo/customDevelopmentIcon3.png",
            title: "API Integration",
            description: "Connecting disparate systems to ensure seamless data flow across your organization."
        }
    ];

    const techStack = [
        "React / Next.js",
        "Node.js",
        "Python / Django",
        "PostgreSQL",
        "AWS / Azure",
        "Docker / Kubernetes"
    ]


    return (
        <section
            style={{ background: "var(--bg-navy-gradient)" }}
            className="relative py-12 px-4 md:px-10 overflow-hidden"
        >

            <div className='text-center '>
                <TitleDescription
                    title={
                        <><span className='text-darkOrange  font-medium'>Beyond Off-the-Shelf Solutions</span></>
                    }
                />
            </div>

            {/* Description */}
            <p className="text-lightGray text-center text-md max-w-5xl mx-auto leading-relaxed mb-6"
                style={{ fontFamily: "'Open Sans', sans-serif" }}>
                When standard software doesn't meet your specific requirements, our team of expert developers builds custom applications that align perfectly with your workflows.
            </p>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mt-10 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">




                    {/* LEFT SIDE - SAP Services */}
                    <div className="space-y-6">
                        {/* Title */}


                        {/* Service Items */}
                        <div className="space-y-5">
                            {sapServices.map((service, index) => (
                                <div key={index} className="flex gap-3 items-start">
                                    {/* Icon */}
                                    <div className="flex-shrink-0 mt-1">
                                        {/* <service.Icon className="w-6 h-6 text-lightGray" strokeWidth={2} /> */}
                                        <img className='className="w-6 h-6 text-lightGray"' src={service.image} />
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
                        <div className="bg-darkNavyBlue px-4 md:px-10 py-7 rounded-md shadow-md w-full max-w-lg">

                            {/* Card Title */}
                            <h3 className="text-lg text-center md:text-start mg:text-2xl  font-medium text-white mb-5"
                                style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Our Tech Sack
                            </h3>

                            {/* Certifications List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {techStack.map((tech, index) => (
                                    <div key={index} className="flex justify-center">
                                        <div
                                            className="  w-full max-w-[200px] sm:max-w-[220px] py-3 px-4  bg-darkOrange text-white  font-poppins  text-center  flex items-center justify-center  whitespace-nowrap  overflow-hidden  text-ellipsis  rounded-sm"
                                            title={tech}
                                        >
                                            {tech}
                                        </div>
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