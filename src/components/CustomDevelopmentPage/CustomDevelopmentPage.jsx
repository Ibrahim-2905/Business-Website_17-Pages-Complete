import { ButtonTitleBackground } from "../ButtonTitleBackground/ButtonTitleBackground";
import { DataCustomDevelopmentButtonTitleBackground } from "../ButtonTitleBackground/DataCustomDevelopmentButtonTitleBackground";
import { DataCustomDevelopmentDynamicHero } from "../DynamicHero/DataDynamicHero/DataCustomDevelopmentDynamicHero";
import DynamicHero from "../DynamicHero/DynamicHero";
import { DataProcessTimeLineType2 } from "../ProcessSection/ProcessTimeLineType2/DataProcessTimeLineType2";
import ProcessTimeLineType2 from "../ProcessSection/ProcessTimeLineType2/ProcessTimeLineType2";
import { DataCustomDevelopmentServicesSection } from "../ServicesSection/DataServicesScetion/DataCustomDevelopmentServicesSection/DataCustomDevelopmentServicesSection";
import SapAndErpAndCustomServicesSection from "../ServicesSection/SapAndErpAndCustomServicesSection/SapAndErpAndCustomServicesSection";
import TechStackCustomDevelopment from "../TechStack/TechStackCustomDevelopment";
import WhyChooseUsCustomDevelopment from "../WhyChooseUs/WhyChooseUsCustomDevelopment";

export default function CustomDevelopmentPage() {
    return (
        <div>
            <div>
                <DynamicHero data={DataCustomDevelopmentDynamicHero} />
            </div>
            <div>
                <SapAndErpAndCustomServicesSection data={DataCustomDevelopmentServicesSection} />
            </div>
            <div>
                <TechStackCustomDevelopment />
            </div>
            <div>
                <WhyChooseUsCustomDevelopment />
            </div>
            <div className="py-0">
                <ButtonTitleBackground data={DataCustomDevelopmentButtonTitleBackground} />
            </div>
            <div>
                <ProcessTimeLineType2
                    title={DataProcessTimeLineType2.mainTitle}
                    steps={DataProcessTimeLineType2.steps} />
            </div>
        </div>
    )
}