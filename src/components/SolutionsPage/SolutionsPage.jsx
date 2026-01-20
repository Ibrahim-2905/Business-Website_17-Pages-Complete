import React from 'react'
import DynamicHero from '../DynamicHero/DynamicHero'
import { DataSolutionsDynamicHero } from '../DynamicHero/DataDynamicHero/DataSolutionsDynamicHero'
import { DataDynamicSolutionsSection } from '../DynamicSolutionsSection/DataDynamicSolutionsSection'
import { DynamicSolutionsSection } from '../DynamicSolutionsSection/DynamicSolutionsSection'
import TransformBusinessBanner from '../TransformBusinessBanner/TransformBusinessBanner'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ExploreSolutionSection from '../SolutionSection/ExploreSolutionSection'
import ExploreSolutionSection2 from '../SolutionSection/ExploreSolutionSection2'

const SolutionsPage = () => {
  return (
    <div>

      <div>
        <Navbar />
      </div>
      <div>
        <DynamicHero data={DataSolutionsDynamicHero} />
      </div>

      <div>
        {DataDynamicSolutionsSection.map((item, index) => (
          <DynamicSolutionsSection
            key={index}
            logo={item.logo}
            title={item.title}
            description={item.description}
            images={item.images}
            buttons={item.buttons}
            reverse={item.reverse}
          />
        ))}
      </div>

      <div className='px-8'>
        <TransformBusinessBanner />
      </div>

      <div>
        <ExploreSolutionSection2  />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default SolutionsPage