import { ButtonTitleBackground } from "../ButtonTitleBackground/ButtonTitleBackground";
import { DataAccountingButtonTitleBackground } from "../ButtonTitleBackground/DataAccountingButtonTitleBackground";
import { DataFinancialButtonTitleBackground } from "../ButtonTitleBackground/DataFinancialButtonTitleBackground";
import DataDecisionFeatures from "../CommonFeaturesSection/DecisionFeaturesSection/DataDecisionFeatures";
import DecisionFeaturesSection from "../CommonFeaturesSection/DecisionFeaturesSection/DecisionFeaturesSection";
import { DataFinancialReportingDynamicHero } from "../DynamicHero/DataDynamicHero/DataFinancialReportingDynamicHero";
import DynamicHero from "../DynamicHero/DynamicHero";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { DataProcessTimeline } from "../ProcessSection/ProcessTimeLine/DataProcessTimeline";
import { ProcessTimeline } from "../ProcessSection/ProcessTimeLine/ProcessTimeline";
import { DataFinancialReportingServicesSection } from "../ServicesSection/DataServicesScetion/DataFinancialReportingServicesSection/DataFinancialReportingServicesSection";
import FinancialReportingServicesSection from "../ServicesSection/FinancialReportingServicesSection/FinancialReportingServicesSection";
import TransformBusinessBanner from "../TransformBusinessBanner/TransformBusinessBanner";
import { DataWhyChooseUsFinancialReporting } from "../WhyChooseUs/DataWhyChooseUs/DataWhyChooseUsFinancialReporting";
import WhyChooseUs2 from "../WhyChooseUs/WhyChooseUs2";

export default function FinancialReportingPage(){
    return(
        <div>
           
            <div>
                <DynamicHero data={DataFinancialReportingDynamicHero} />
            </div>

            <div>
                <FinancialReportingServicesSection data={DataFinancialReportingServicesSection}/>
            </div>

            <div>
            <DecisionFeaturesSection  data={DataDecisionFeatures}/>
            </div>

            <div>
                <WhyChooseUs2 data={DataWhyChooseUsFinancialReporting}/>
            </div>

           

              <div>
                <ButtonTitleBackground  data={DataFinancialButtonTitleBackground}/>
            </div>
          
            <div className='px-8'>
                <TransformBusinessBanner />
            </div>

            <div>
                <ProcessTimeline data={DataProcessTimeline} />
            </div>

        </div>
    )
}