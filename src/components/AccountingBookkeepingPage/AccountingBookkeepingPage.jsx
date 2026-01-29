import { DataAccountingBookkeepingDynamicHero } from "../DynamicHero/DataDynamicHero/DataAccountingBookkeepingDynamicHero";
import DynamicHero from "../DynamicHero/DynamicHero";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { DataOurValueCardAccounting } from "../OurValuesSection/DataOurValueCardSection/DataOurValueCardSAccounting";
import { OurValuesSection } from "../OurValuesSection/OurValuesSection";
import AccountingBookkeepingServicesSection from "../ServicesSection/AccountingBookkeepingServicesSection/AccountingBookkeepingServicesSection";
import { DataAccountingBookkeepingServicesSection } from "../ServicesSection/DataServicesScetion/DataAccountingBookkeepingServicesSection/DataAccountingBookkeepingServicesSection";
import WhyChooseUsAccounting from "../WhyChooseUs/WhyChooseUsAccounting";
import TransformBusinessBanner from "../TransformBusinessBanner/TransformBusinessBanner";
import { StatisticsAccountingSection } from "../Stats/StatisticsAccounting/StatisticsAccountingSection";
import { DataStatisticsAccounting } from "../Stats/StatisticsAccounting/DataStatisticsAccounting";
import { ProcessTimeline } from "../ProcessSection/ProcessTimeLine/ProcessTimeline";
import { DataProcessTimeline } from "../ProcessSection/ProcessTimeLine/DataProcessTimeline";
import { ButtonTitleBackground } from "../ButtonTitleBackground/ButtonTitleBackground";
import { DataAccountingButtonTitleBackground } from "../ButtonTitleBackground/DataAccountingButtonTitleBackground";
import { CEOsayings } from "../Testimonials/CEOsayings";

export default function AccountingBookkeepingPage() {
    return (
        <div>
           
            <div>
                <DynamicHero data={DataAccountingBookkeepingDynamicHero} />
            </div>

            <div className="">
                <AccountingBookkeepingServicesSection data={DataAccountingBookkeepingServicesSection} />
            </div>

            <div>
                <WhyChooseUsAccounting />
            </div>


            <div>
                <OurValuesSection title="Enhance Your Financial Strategy" titleColor="text-darkNavyBlue" data={DataOurValueCardAccounting} />
            </div>

            <div>
                <StatisticsAccountingSection data={DataStatisticsAccounting} />
            </div>

            <div className='px-8'>
                <TransformBusinessBanner />
            </div>

            <div>
                <ProcessTimeline data={DataProcessTimeline} />
            </div>

            <div>
                <ButtonTitleBackground  data={DataAccountingButtonTitleBackground}/>
            </div>

            <div>
                <CEOsayings />
            </div>

           
        </div>
    )
}