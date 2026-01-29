import react from 'react'
import Navbar from '../Navbar/Navbar'
import TransformBusinessBanner2 from '../TransformBusinessBanner/TransformBusinessBanner2'
import Footer from '../Footer/Footer'
import DynamicHero from '../DynamicHero/DynamicHero'
import { DataCaseStudyDynamicHero } from '../DynamicHero/DataDynamicHero/DataCaseStudyDynamicHero'
import CaseStudyArticle from '../CaseStudyArticle/CaseStudyArticle'
export default function CaseStudyPage(){
    return (
        <div>
           
               <div>
                <DynamicHero data={DataCaseStudyDynamicHero} />
            </div>

            <div>
                <CaseStudyArticle />
            </div>


            <div className=''>
                <TransformBusinessBanner2 />
            </div>

           
        </div>
    )
}