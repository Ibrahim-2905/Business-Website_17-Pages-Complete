import React from 'react'
import Navbar from '../Navbar/Navbar'
import ExpertiseSection from '../ExpertiseSection/ExpertiseSection'
import { DataExpertiseSectionCard } from '../ExpertiseSection/DataExpertiseSection/DataExpertiseSectionCard'
import Footer from '../Footer/Footer'
import Stats from '../Stats/Stats'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import SolutionSection from '../SolutionSection/SolutionSection'
import SmallActionSection from '../SmallActionSection/SmallActionSection'
import { DataSolutionSection } from '../SolutionSection/DataSolutionSection/DataSolutionSection'
import TransformBusinessBanner from '../TransformBusinessBanner/TransformBusinessBanner'
import TestimonialsSection from '../Testimonials/Testimonials'
import { DataTestimonials } from '../Testimonials/DataTestimonials'

const HomePage = () => {
  return (
    <div>
    <Navbar />
    <ExpertiseSection data={DataExpertiseSectionCard} />

    <div>
          <Stats />
    </div>

    <div>
      <WhyChooseUs />
    </div>

    <div>
      <SmallActionSection />
    </div>

    <div>
      <SolutionSection data={DataSolutionSection}/>
    </div>

    <div className='px-8'>
      <TransformBusinessBanner />
    </div>

    <div className='px-4 py-5'>
      <TestimonialsSection data={DataTestimonials}  />
    </div>

    <Footer />
    
    </div>
  )
}

export default HomePage
