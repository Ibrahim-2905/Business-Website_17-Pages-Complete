import { DataOdooErpDecisionFeatures } from "../CommonFeaturesSection/DecisionFeaturesSection/DataOdooErpDecisionFeatures";
import DecisionFeaturesSection from "../CommonFeaturesSection/DecisionFeaturesSection/DecisionFeaturesSection";
import { DataOdooErpDynamicHero } from "../DynamicHero/DataDynamicHero/DataOdooErpDynamicHero";
import DynamicHero from "../DynamicHero/DynamicHero";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { DataSapSolutionsTimeline } from "../ProcessSection/ProcessTimeLine/DataSapSolutionsTimeline";
import { ProcessTimeline } from "../ProcessSection/ProcessTimeLine/ProcessTimeline";
import { DataOdooErpServicesSection } from "../ServicesSection/DataServicesScetion/DataOdooErpServicesSection/DataOdooErpServicesSection";
import SapAndErpAndCustomServicesSection from "../ServicesSection/SapAndErpAndCustomServicesSection/SapAndErpAndCustomServicesSection";
import TransformBusinessBanner from "../TransformBusinessBanner/TransformBusinessBanner";

export default function OdooErpPage() {
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div>
                <DynamicHero data={DataOdooErpDynamicHero} />
            </div>

            <div>
                <SapAndErpAndCustomServicesSection data={DataOdooErpServicesSection} />
            </div>

            <div>
                <DecisionFeaturesSection data={DataOdooErpDecisionFeatures} />
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