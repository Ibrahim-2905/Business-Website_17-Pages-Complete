import { ButtonTitleBackground } from "../ButtonTitleBackground/ButtonTitleBackground";
import { DataDataManagementButtonTitleBackground } from "../ButtonTitleBackground/DataDataManagementButtonTitleBackground";
import { DataDataManagementDynamicHero } from "../DynamicHero/DataDynamicHero/DataDataManagementDynamicHero";
import DynamicHero from "../DynamicHero/DynamicHero";
import DataProcessTimeLineType3 from "../ProcessSection/ProcessTimeLineType2/DataProcessTimeLineType3";
import ProcessTimeLineType3 from "../ProcessSection/ProcessTimeLineType2/ProcessTimeLineType3";
import { DataDataManagementServicesSection } from "../ServicesSection/DataManagementServicesSection/DataDataManagementServicesSection";
import DataManagementServicesSection from "../ServicesSection/DataManagementServicesSection/DataManagementServicesSection";
import { DataDataManagementTechTools } from "../TechStack/DataDataManagementTechTools";
import { TechTools } from "../TechStack/TechTools";
import WhyChooseUsDataManagement from "../WhyChooseUs/WhyChooseUsDataManagement";

export default function DataManagementPage() {
    return (
        <div>
            <div>
                <DynamicHero data={DataDataManagementDynamicHero} />
            </div>
            <div>
                <DataManagementServicesSection data={DataDataManagementServicesSection} />
            </div>

            <div>
                <WhyChooseUsDataManagement />
            </div>
            <div>
                <TechTools tools={DataDataManagementTechTools} />
            </div>
            <div className="py-0">
                <ButtonTitleBackground data={DataDataManagementButtonTitleBackground} />
            </div>
            <div>
                <ProcessTimeLineType3
                    title={DataProcessTimeLineType3.title}
                    steps={DataProcessTimeLineType3.steps}
                />
            </div>
        </div>
    )
}