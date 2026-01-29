import { ButtonTitleBackground } from "../ButtonTitleBackground/ButtonTitleBackground";
import { DataProcessOptimizationTitleBackgroundButton } from "../ButtonTitleBackground/DataProcessOptimizationTitleBackgroundButton";
import { DataProcessOptimizationDynamicHero } from "../DynamicHero/DataDynamicHero/DataProcessOptimizationDynamicHero";
import DynamicHero from "../DynamicHero/DynamicHero";
import DataProcessOptimizationProcessTimelineType3 from "../ProcessSection/ProcessTimeLineType2/DataProcessOptimizationProcessTimelineType3";
import ProcessTimeLineType3 from "../ProcessSection/ProcessTimeLineType2/ProcessTimeLineType3";
import { DataProcessOptimizationServicesSection } from "../ServicesSection/ProcessOptimizationServicesSection/DataProcessOptimizationServicesSection";
import ProcessOptimizationServicesSection from "../ServicesSection/ProcessOptimizationServicesSection/ProcessOptimizationServicesSection";
import WhyChooseUsProcessOptimization from "../WhyChooseUs/WhyChooseUsProcessOptimization";

export default function ProcessOptimizationPage() {
    return (
        <div>
            <div>
                <DynamicHero data={DataProcessOptimizationDynamicHero} />
            </div>

            <div>
                <ProcessOptimizationServicesSection data={DataProcessOptimizationServicesSection} />
            </div>

            <div>
                <WhyChooseUsProcessOptimization />
            </div>
            <div>
                <ProcessTimeLineType3
                    title={DataProcessOptimizationProcessTimelineType3.title}
                    steps={DataProcessOptimizationProcessTimelineType3.steps}
                />
            </div>
            <div>
                <ButtonTitleBackground data={DataProcessOptimizationTitleBackgroundButton} />
            </div>
        </div>
    )
}