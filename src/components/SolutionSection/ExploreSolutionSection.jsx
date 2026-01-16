import React from 'react'
import Card from '../Card/Card'
import TitleDescription from '../TitleDescription/TitleDescription'

const ExploreSolutionSection = ({ data = [] }) => {
  return (
    <section className="py-12 sm:py-12 lg:py-8">
      
      {/* Title Section */}
      <div className="w-full text-center bg-white px-4 sm:px-8 lg:px-16">
        <TitleDescription
          titleColor="text-darkNavyBlue"
          title={
            <>
             <span className="text-peal">Explore</span>  <span className="text-darkOrange">Our Solutions</span>
            </>
          }
          description="Discover how our comprehensive services can help transform your business operations"
        />
      </div>

      {/* Cards Grid */}
      <div className="
        max-w-7xl mx-auto
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6 sm:gap-8
        px-4 sm:px-8 lg:px-16
        mt-10
      ">
        {data.map((item, index) => (
          <Card
            key={index}
            gradientFrom={item.gradientFrom}
            gradientTo={item.gradientTo}
            image={item.image}
            title={item.title}
            description={item.description}
            horizontalLine={item.horizontalLine}
            buttonProps={item.buttonProps}
          />
        ))}
      </div>

    </section>
  )
}

export default ExploreSolutionSection
