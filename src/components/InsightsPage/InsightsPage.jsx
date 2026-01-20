import BlogsSection from "../BlogsSection/BlogsSection";
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
                <Navbar />
            </div>
            <div>
                 <DynamicHero data={DataInsightDynamicHero} />
                 
            </div>

            <div>
                <BlogsSection />
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
            <div>
                <Footer />
            </div>
        </div>
    )
}