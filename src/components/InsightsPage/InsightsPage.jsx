import BlogsSection from "../BlogsSection/BlogsSection";
import { DataBlogsSection } from "../BlogsSection/DataBlogsSection/DataBlogsSection";
import CaseStudySection from "../CaseStudySection/CaseStudySection";
import { DataInsightDynamicHero } from "../DynamicHero/DataDynamicHero/DataInsightDynamicHero";
import DynamicHero from "../DynamicHero/DynamicHero";
import Footer from "../Footer/Footer";
import MoreInsightsSection from "../MoreInsightSection/MoreInsightSection";
import Navbar from "../Navbar/Navbar";
import TransformBusinessBanner2 from "../TransformBusinessBanner/TransformBusinessBanner2";

export default function InsightsPage(){
    return(
        <div>
           
            <div>
                 <DynamicHero data={DataInsightDynamicHero} />
                 
            </div>

            <div>
                <BlogsSection data={DataBlogsSection}/>
            </div>

            <div>
                <CaseStudySection />
            </div>
            <div>
                <MoreInsightsSection />
            </div>

            <div>
                <TransformBusinessBanner2 />
            </div>
           
        </div>
    )
}