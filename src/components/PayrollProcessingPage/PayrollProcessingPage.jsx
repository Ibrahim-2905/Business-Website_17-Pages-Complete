import { ButtonTitleBackground } from "../ButtonTitleBackground/ButtonTitleBackground";
import { DataFinancialButtonTitleBackground } from "../ButtonTitleBackground/DataFinancialButtonTitleBackground";
import { DataPayrollButtonTitleBackground } from "../ButtonTitleBackground/DataPayrollButtonTitleBackground";
import DataDecisionFeatures from "../CommonFeaturesSection/DecisionFeaturesSection/DataDecisionFeatures";
import { DataPayrollProcessingDecisionFeatures } from "../CommonFeaturesSection/DecisionFeaturesSection/DataPayrollProcessingDecisionFeatures";
import DecisionFeaturesSection from "../CommonFeaturesSection/DecisionFeaturesSection/DecisionFeaturesSection";
import { DataFinancialReportingDynamicHero } from "../DynamicHero/DataDynamicHero/DataFinancialReportingDynamicHero";
import { DataPayrollProcessingDynamicHero } from "../DynamicHero/DataDynamicHero/DataPayrollProcessingDynamicHero";
import DynamicHero from "../DynamicHero/DynamicHero";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { DataPayrollProcessingTimeline } from "../ProcessSection/ProcessTimeLine/DataPayrollProcessingTimeline";
import { DataProcessTimeline } from "../ProcessSection/ProcessTimeLine/DataProcessTimeline";
import { ProcessTimeline } from "../ProcessSection/ProcessTimeLine/ProcessTimeline";
import { DataFinancialReportingServicesSection } from "../ServicesSection/DataServicesScetion/DataFinancialReportingServicesSection/DataFinancialReportingServicesSection";
import { DataPayrollProcessingServicesSection } from "../ServicesSection/DataServicesScetion/DataPayrollProcessingServicesSection/DataPayrollProcessingServicesSection";
import { DataTaxConsultancyServicesSection } from "../ServicesSection/DataServicesScetion/DataTaxConsultancyServicesSection/DataTaxConsultancyServicesSection";
import FinancialReportingServicesSection from "../ServicesSection/FinancialReportingServicesSection/FinancialReportingServicesSection";
import TaxAndPayrollServicesCard from "../ServicesSection/TaxAndPayrollServicesSection/TaxAndPayrollServicesCard";
import TaxAndPayrollServicesSection from "../ServicesSection/TaxAndPayrollServicesSection/TaxAndPayrollServicesSection";
import TransformBusinessBanner from "../TransformBusinessBanner/TransformBusinessBanner";
import { DataWhyChooseUsFinancialReporting } from "../WhyChooseUs/DataWhyChooseUs/DataWhyChooseUsFinancialReporting";
import { DataWhyChooseUsPayrollProcessing } from "../WhyChooseUs/DataWhyChooseUs/DataWhyChooseUsPayrollProcessing";
import WhyChooseUs2 from "../WhyChooseUs/WhyChooseUs2";

export default function PayrollProcessingPage(){
    return(
         <div>
                   
                   <div>
                       <DynamicHero data={DataPayrollProcessingDynamicHero} />
                   </div>
       
                  <div>
                          <TaxAndPayrollServicesSection data={DataPayrollProcessingServicesSection}/>
                      </div>

       
                   <div>
                   <DecisionFeaturesSection  data={DataPayrollProcessingDecisionFeatures}/>
                   </div>
       
                   <div>
                       <WhyChooseUs2 data={DataWhyChooseUsPayrollProcessing}/>
                   </div>
       
                  
       
                     <div>
                       <ButtonTitleBackground  data={DataPayrollButtonTitleBackground}/>
                   </div>
                 
                  
       
                   <div>
                       <ProcessTimeline data={DataPayrollProcessingTimeline} />
                   </div>
       
               </div>
    )
}