import DynamicHero from "../DynamicHero/DynamicHero";
import { DataAboutDynamicHero } from "../DynamicHero/DataDynamicHero/DataAboutDynamicHero";
import WhoAreWeSection from "../WhoAreWeSection/WhoAreWeSection";
import { DataWhoAreWeSection } from "../WhoAreWeSection/DataWhoAreWeSection/DataWhoAreWeSection";
import { OurValuesSection } from "../OurValuesSection/OurValuesSection";
import ExploreSolutionSection from "../SolutionSection/ExploreSolutionSection";
import { DataSolutionSection } from "../SolutionSection/DataSolutionSection/DataSolutionSection";

// ✅ Make sure this is a proper React component
const AboutPage = () => {
  return (
    <div>
        <div>
        <DynamicHero data={DataAboutDynamicHero} />
        </div>

        <div>
          <WhoAreWeSection data={DataWhoAreWeSection} />
        </div>

        <div>
          <OurValuesSection />
        </div>

        <div className="py-10">
          <ExploreSolutionSection data={DataSolutionSection} />
        </div>
       
    </div>
  );
}



export default AboutPage
