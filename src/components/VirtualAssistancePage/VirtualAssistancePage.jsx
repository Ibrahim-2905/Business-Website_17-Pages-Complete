import { ButtonTitleBackground } from "../ButtonTitleBackground/ButtonTitleBackground";
import { DataVirtualAssistanceTitleBackgroundButton } from "../ButtonTitleBackground/DataVirtualAssistanceTitleBackgroundButton";
import { DataVirtualAssistanceDynamicHero } from "../DynamicHero/DataDynamicHero/DataVirtualAssistanceDynamicHero";
import DynamicHero from "../DynamicHero/DynamicHero";
import HeadingAndTitleSection from "../HeadingAndTitleSection/HeadingAndTitleSection";
import DataVirtualAssistanceProcessTimelineType3 from "../ProcessSection/ProcessTimeLineType2/DataVirtualAssistanceProcessTimelineType3";
import ProcessTimeLineType3 from "../ProcessSection/ProcessTimeLineType2/ProcessTimeLineType3";
import { DataVirtualAssistanceServicesSection } from "../ServicesSection/VirtualAssistanceServicesSection/DataVirtualAssistanceServicesSection";
import VirtualAssistanceServicesSection from "../ServicesSection/VirtualAssistanceServicesSection/VirtualAssistanceServicesSection";
import WhyChooseUsVirtualAssistance from "../WhyChooseUs/WhyChooseUsVirtualAssistance";

export default function VirtualAssistancePage() {
    return (
        <div>
            <div>
                <DynamicHero data={DataVirtualAssistanceDynamicHero} />
            </div>
            <div>
                <VirtualAssistanceServicesSection data={DataVirtualAssistanceServicesSection} />
            </div>
            <div>
                <HeadingAndTitleSection
                    title={<>
                        <span style={{ fontWeight: "600" }} className="text-darkNavyBlue font-poppins">About Virtual Assistance</span>
                    </>}
                    description={
                        <><span style={{ lineHeight: "2" }} className="text-charcoalGray font-medium text-md text-medium font-open-sans">Virtual Assistance allows you to delegate routine, administrative, and operational tasks to trained professionals—so you can focus on growing your business.
                            Our virtual assistants work as an extension of your team, delivering accuracy, confidentiality, and flexibility.</span></>
                    }
                />

            </div>

            <div>
                <WhyChooseUsVirtualAssistance />
            </div>
            <div>
                <ProcessTimeLineType3
                    title={DataVirtualAssistanceProcessTimelineType3.title}
                    steps={DataVirtualAssistanceProcessTimelineType3.steps}
                />
            </div>

            <div className="py-0">
                <ButtonTitleBackground data={DataVirtualAssistanceTitleBackgroundButton} />
            </div>
        </div>
    )
}