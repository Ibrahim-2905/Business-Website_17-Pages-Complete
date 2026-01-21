import DynamicHero from "../DynamicHero/DynamicHero";
import { DataAboutDynamicHero } from "../DynamicHero/DataDynamicHero/DataAboutDynamicHero";
import WhoAreWeSection from "../WhoAreWeSection/WhoAreWeSection";
import { DataWhoAreWeSection } from "../WhoAreWeSection/DataWhoAreWeSection/DataWhoAreWeSection";
import { OurValuesSection } from "../OurValuesSection/OurValuesSection";
import { TeamSection } from "../TeamSection/TeamSection";
import { DataTeamCard } from "../TeamSection/DataTeamCard/DataTeamCard";
import ProgressGridSection from "../ProgressGridSection/ProgressGridSection";
import { DataProgressSection } from "../ProgressGridSection/DataProgressSection/DataProgressSection";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import WhyChooseUs2 from "../WhyChooseUs/WhyChooseUs2";
import TransformBusinessBanner2 from "../TransformBusinessBanner/TransformBusinessBanner2";
import ExploreSolutionSection from "../SolutionSection/ExploreSolutionSection";
import { DataSolutionSectionPoints } from "../SolutionSection/DataSolutionSection/DataSolutionSectionPoints";

// ✅ Make sure this is a proper React component
const AboutPage = () => {
  return (
    <div>

       <div>
        <DynamicHero data={DataAboutDynamicHero} />
        </div>
      <div>
        <Navbar />
      </div>

      <div>

      </div>
       
        <div>
          <WhoAreWeSection data={DataWhoAreWeSection} />
        </div>

        <div>
          <OurValuesSection />
        </div>

        <div className="py-10">
          <ExploreSolutionSection data={DataSolutionSectionPoints} />
        </div>

        <div>
          <TeamSection teamMembers={DataTeamCard} />
        </div>

        <div>
          <ProgressGridSection gridImages={DataProgressSection} />
        </div>

        <div>
          <WhyChooseUs2 />
        </div>
        <TransformBusinessBanner2 />
        <div>
          <Footer />
        </div>
       
    </div>
  );
}



export default AboutPage
