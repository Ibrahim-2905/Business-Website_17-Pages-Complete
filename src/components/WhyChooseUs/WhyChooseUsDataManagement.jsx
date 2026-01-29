import React from 'react';
import { Repeat, Settings, Wrench } from 'lucide-react';
import TitleDescription from '../TitleDescription/TitleDescription';

export default function WhyChooseUsDataManagement() {
    const sapServices = [
        {
            title: "Data Accuracy",
            description: "Ensure clean, consistent, and error-free data across systems"
        },
        {
            title: "Data Security",
            description: "Protect your data with advanced security measures and access control"
        },
        {
            title: "Scalable Solutions",
            description: "Easily scale data management as your business grows"
        },
        {
            title: "Cost Efficiency",
            description: "Reduce operational costs and improve overall efficiency"
        }
    ];



    return (
        <section
            style={{ background: "var(--bg-navy-gradient)" }}
            className="relative py-12 px-4 md:px-10 overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                {/* <img
                    src="/logo/pattern4.png"
                    alt=""
                    className="absolute top-0 rotate-180 left-0  md:w-[30%] opacity-30 "
                // style={{ clipPath: "inset(0 0 50% 0)" }} // top, right, bottom, left
                />

                <img
                    src="/logo/pattern4.png"
                    alt=""
                    className="absolute bottom-0 right-0  md:w-[30%] opacity-30"
                // style={{ clipPath: "inset(50% 0 0 0)" }} // top, right, bottom, left
                /> */}
            </div>
            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Title */}
                <div className='text-center md:text-start py-10'>
                    <TitleDescription
                        title={
                            <><span style={{ fontWeight: "600" }} className='text-white  '>Key Benefits of Our Data Management Solutions</span></>
                        }
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">



                    {/* LEFT SIDE - SAP Services */}
                    <div className="space-y-6">


                        {/* Service Items */}
                        <div className="space-y-5">
                            {sapServices.map((service, index) => (
                                <div key={index} className="flex gap-3 items-start">

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-white text-2xl font-medium mb-1"
                                            style={{ fontFamily: "'Poppins', sans-serif" }}>
                                            {service.title}
                                        </h3>
                                        <p className="text-lightGray text-md "
                                            style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: "500" }}>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE - Certifications Card */}
                    <div className="flex justify-center  lg:justify-end">
                        <img className='rounded-sm' src="/logo/dataManagementMan1.png" alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
}