import DynamicHero from "../DynamicHero/DynamicHero";
import { DataAboutDynamicHero } from "../DynamicHero/DataDynamicHero/DataAboutDynamicHero";
import WhoAreWeSection from "../WhoAreWeSection/WhoAreWeSection";
import { DataWhoAreWeSection } from "../WhoAreWeSection/DataWhoAreWeSection/DataWhoAreWeSection";
import { OurValuesSection } from "../OurValuesSection/OurValuesSection";
import ExploreSolutionSection from "../SolutionSection/ExploreSolutionSection";
import { DataSolutionSection } from "../SolutionSection/DataSolutionSection/DataSolutionSection";
import { TeamSection } from "../TeamSection/TeamSection";
import { DataTeamCard } from "../TeamSection/DataTeamCard/DataTeamCard";
import ProgressGridSection from "../ProgressGridSection/ProgressGridSection";
import { DataProgressSection } from "../ProgressGridSection/DataProgressSection/DataProgressSection";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

// ✅ Make sure this is a proper React component
const AboutPage = () => {
  return (
    <div>
      <div>
        <Navbar />
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

        <div>
          <TeamSection teamMembers={DataTeamCard} />
        </div>

        <div>
          <ProgressGridSection gridImages={DataProgressSection} />
        </div>
        <div>
          <Footer />
        </div>
       
    </div>
  );
}



export default AboutPage
