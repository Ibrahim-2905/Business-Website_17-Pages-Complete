import { DataSapSolutionsDynamicHero } from "../DynamicHero/DataDynamicHero/DataSapSolutionsDynamicHero";
import DynamicHero from "../DynamicHero/DynamicHero";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { DataPayrollProcessingTimeline } from "../ProcessSection/ProcessTimeLine/DataPayrollProcessingTimeline";
import { DataSapSolutionsTimeline } from "../ProcessSection/ProcessTimeLine/DataSapSolutionsTimeline";
import { ProcessTimeline } from "../ProcessSection/ProcessTimeLine/ProcessTimeline";
import { DataSapSolutionsSapAndErpAndCustomServicesSection } from "../ServicesSection/DataServicesScetion/DataSapAndErpAndCustomServicesSection/DataSapSolutionsSapAndErpAndCustomServicesSection";
import SapAndErpAndCustomServicesSection from "../ServicesSection/SapAndErpAndCustomServicesSection/SapAndErpAndCustomServicesSection";
import TransformBusinessBanner from "../TransformBusinessBanner/TransformBusinessBanner";
import WhyChooseUsSapSolutions from "../WhyChooseUs/WhyChooseUsSapSolutions";
import WhyChooseUsSapSolutions2 from "../WhyChooseUs/WhyChooseUsSapSolutions2";

export default function SapSolutionsPage() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <DynamicHero data={DataSapSolutionsDynamicHero} />
            </div >

            <div>
                <SapAndErpAndCustomServicesSection data={DataSapSolutionsSapAndErpAndCustomServicesSection} />
            </div>

        <div>
            <WhyChooseUsSapSolutions />
        </div>

        <div>
            <WhyChooseUsSapSolutions2 />
        </div>
            
            <div >
                <TransformBusinessBanner />
            </div>

            <div>
                <ProcessTimeline data={DataSapSolutionsTimeline} />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}