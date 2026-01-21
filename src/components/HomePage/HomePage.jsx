import React from 'react'
import Navbar from '../Navbar/Navbar'
import ExpertiseSection from '../ExpertiseSection/ExpertiseSection'
import { DataExpertiseSectionCard } from '../ExpertiseSection/DataExpertiseSection/DataExpertiseSectionCard'
import Stats from '../Stats/Stats'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import SmallActionSection from '../SmallActionSection/SmallActionSection'
import TestimonialsSection from '../Testimonials/Testimonials'
import { DataTestimonials } from '../Testimonials/DataTestimonials'
import Footer from '../Footer/Footer'
import MirageHero from '../MirageHero/MirageHero'
import TechStack from '../TechStack/TechStack'
import InnovationSection from '../InnovationSection/InnovationSection'
import SolutionSection from "../SolutionSection/ExploreSolutionSection";
import { DataSolutionSectionPoints } from "../SolutionSection/DataSolutionSection/DataSolutionSectionPoints";
import TransformBusinessBanner from "../TransformBusinessBanner/TransformBusinessBanner";


const HomePage = () => {
  return (
    <div>
      <Navbar />


      <div>
        <MirageHero />
      </div>

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
        <SolutionSection data={DataSolutionSectionPoints} />
      </div>
        

      <div className='px-8'>
        <TransformBusinessBanner />
      </div>

      <div>
        <TechStack />
      </div>

      <div className='px-4 '>
        <TestimonialsSection data={DataTestimonials} />
      </div>

      <div>
        <InnovationSection />
      </div>

      <Footer />

    </div>
  )
}

export default HomePage
