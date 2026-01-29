import { ButtonTitleBackground } from "../ButtonTitleBackground/ButtonTitleBackground";
import { DataFinancialButtonTitleBackground } from "../ButtonTitleBackground/DataFinancialButtonTitleBackground";
import { DataTaxFeaturesSection } from "../CommonFeaturesSection/TaxFeaturesSection/DataTaxFeaturesSection";
import TaxFeaturesSection from "../CommonFeaturesSection/TaxFeaturesSection/TaxFeaturesSection";
import { DataTaxConsultancyDynamicHero } from "../DynamicHero/DataDynamicHero/DataTaxConsultancyDynamicHero";
import DynamicHero from "../DynamicHero/DynamicHero";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { DataProcessTimeline } from "../ProcessSection/ProcessTimeLine/DataProcessTimeline";
import { ProcessTimeline } from "../ProcessSection/ProcessTimeLine/ProcessTimeline";
import { DataTaxConsultancyServicesSection } from "../ServicesSection/DataServicesScetion/DataTaxConsultancyServicesSection/DataTaxConsultancyServicesSection";
import TaxAndPayrollServicesSection from "../ServicesSection/TaxAndPayrollServicesSection/TaxAndPayrollServicesSection";
import TransformBusinessBanner from "../TransformBusinessBanner/TransformBusinessBanner";
import { DataWhyChooseUsFinancialReporting } from "../WhyChooseUs/DataWhyChooseUs/DataWhyChooseUsFinancialReporting";
import WhyChooseUs2 from "../WhyChooseUs/WhyChooseUs2";

export default function TaxConsultancyPage(){
    return(
        <div>
          <div>
                      
                      <div>
                          <DynamicHero data={DataTaxConsultancyDynamicHero} />
                      </div>
          
                      <div>
                          <TaxAndPayrollServicesSection data={DataTaxConsultancyServicesSection}/>
                      </div>

                      <div>
                        <TaxFeaturesSection data={DataTaxFeaturesSection}/>
                      </div>
          
                     
                      <div>
                          <WhyChooseUs2 data={DataWhyChooseUsFinancialReporting}/>
                      </div>
          
                     
          
                        <div>
                          <ButtonTitleBackground  data={DataFinancialButtonTitleBackground}/>
                      </div>
                    
                      <div>
                          <TransformBusinessBanner />
                      </div>
          
                      <div>
                          <ProcessTimeline data={DataProcessTimeline} />
                      </div>
    
                     
                  </div>
        </div>
    )
}