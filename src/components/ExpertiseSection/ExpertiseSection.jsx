import React from 'react'
import Card from '../Card/Card'
import TitleDescription from '../TitleDescription/TitleDescription'

export default function ExpertiseSection({ data }) {
    return (
        <section className="relative bg-lightGray py-20 px-8 overflow-hidden">
            {/* Background Bubbles */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top Left Bubbles */}
                <img
                    src="/bubbles.png"
                    alt=""
                    className="absolute top-10 left-10 w-32 h-32 opacity-20"
                />
                <img
                    src="/bubbles.png"
                    alt=""
                    className="absolute top-32 left-32 w-24 h-24 opacity-15"
                />

                {/* Top Right Bubbles */}
                <img
                    src="/bubbles.png"
                    alt=""
                    className="absolute top-20 right-20 w-28 h-28 opacity-20"
                />
                <img
                    src="/bubbles.png"
                    alt=""
                    className="absolute top-48 right-48 w-20 h-20 opacity-10"
                />

                {/* Bottom Left Bubbles */}
                <img
                    src="/bubbles.png"
                    alt=""
                    className="absolute bottom-32 left-24 w-24 h-24 opacity-15"
                />

                {/* Bottom Right Bubbles */}
                <img
                    src="/bubbles.png"
                    alt=""
                    className="absolute bottom-20 right-32 w-32 h-32 opacity-20"
                />
                <img
                    src="/bubbles.png"
                    alt=""
                    className="absolute bottom-48 right-16 w-20 h-20 opacity-10"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
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

                {/* Cards Grid */}
                <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {data.map((item, index) => (
                        <Card
                            key={index}
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
                    ))}
                </div>
            </div>
        </section>
    )
}