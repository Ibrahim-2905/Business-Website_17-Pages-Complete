import React from 'react';
import TitleDescription from '../TitleDescription/TitleDescription';
import AnimatedButton from '../Button/Button';

export default function TransformBusinessBanner2() {
    return (
        <section
            className="relative flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: 'url(/logo/business2.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '394px'
            }}
        >
            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkOrange">

                </h2>

                <div className='text-center'>
                    <TitleDescription title={
                        <>
                            <span className='text-darkOrange'>Ready to Transform Your Business?</span>
                        </>
                    } />
                </div>

                {/* CTA Button */}
                <div>
                    <AnimatedButton
                        text="Contact Sales"
                        bgColor="bg-darkNavyBlue"
                        textColor="text-white"
                        padding="px-10"
                        rounded="rounded-md"
                        hoverBgColor="bg-white"
                        hoverTextColor="text-darkNavyBlue"
                        border="border-none hover:border-b hover:border-darkNavyBlue"
                    />

                </div>

            </div>
        </section>
    );
}
