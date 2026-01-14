import React from 'react'
import Navbar from '../Navbar/Navbar'
import ExpertiseSection from '../ExpertiseSection/ExpertiseSection'
import { DataExpertiseSectionCard } from '../ExpertiseSection/DataExpertiseSection/DataExpertiseSectionCard'
import Footer from '../Footer/Footer'

const HomePage = () => {
  return (
    <div>
    <Navbar />
    <ExpertiseSection data={DataExpertiseSectionCard} />
    <Footer />
    </div>
  )
}

export default HomePage
