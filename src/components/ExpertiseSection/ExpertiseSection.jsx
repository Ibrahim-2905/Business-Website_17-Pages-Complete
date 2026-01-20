import React from 'react'
import Card from '../Card/Card'
import TitleDescription from '../TitleDescription/TitleDescription'

export default function ExpertiseSection({ data }) {
    return (
        <section className="relative bg-lightGray py-20 px-8 overflow-hidden">
            {/* Background Bubbles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Top Left Bubbles */}
                <img
                    src="/logo/pattern2.png"
                    alt=""
                    className="absolute top-0 left-0 w-[40vw] sm:w-[35vw] md:w-[30vw]  h-auto opacity-80"
                />
               
                {/* Bottom Right Bubbles */}
                <img
                    src="/logo/pattern2.png"
                    alt=""
                    className="absolute bottom-0 right-0 w-[40vw] sm:w-[35vw] md:w-[30vw] h-auto opacity-80"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className='text-center'>
                    <TitleDescription
                        subtitle="Our Expertise"
                        title="Comprehensive Business Solutions"
                        titleHighlight="Business"
                        description="From financial management to process optimization, we have the tools and expertise to drive your success."
                        subtitleColor="text-peal"
                        titleColor="text-charcoalGray"
                        highlightColor="text-darkOrange"
                        descriptionColor="text-charcoalGray"
                    />
                </div>

                {/* Cards Grid */}
                <div className={`flex flex-wrap ${data.length === 1 ? 'justify-center' : 'justify-center'} gap-8 mt-12`}>
                    {data.map((item, index) => (
                        <div 
                            key={index}
                            className={`
                                w-full 
                                md:w-[calc(50%-1rem)] 
                                lg:w-[calc(33.333%-1.334rem)]
                                ${data.length === 1 ? 'max-w-md' : ''}
                            `}
                        >
                            <Card
                                gradientFrom={item.gradientFrom}
                                gradientTo={item.gradientTo}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                buttonText={item.buttonText}
                                buttonLink={item.buttonLink}
                                horizontalLine={item.horizontalLine}
                                buttonProps={item.buttonProps}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}