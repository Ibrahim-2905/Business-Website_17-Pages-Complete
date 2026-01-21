import ContactForm from "../ContactForm/ContactForm";
import { DataContactDynamicHero } from "../DynamicHero/DataDynamicHero/DataContactDynamicHero";
import DynamicHero from "../DynamicHero/DynamicHero";
import Footer from "../Footer/Footer";
import MapSection from "../MapSection/MapSection";
import Navbar from "../Navbar/Navbar";
import { DataSolutionSectionPoints } from "../SolutionSection/DataSolutionSection/DataSolutionSectionPoints";
import ExploreSolutionSection from "../SolutionSection/ExploreSolutionSection";
import TransformBusinessBanner2 from "../TransformBusinessBanner/TransformBusinessBanner2";

export default function ContactPage() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <DynamicHero data={DataContactDynamicHero} />
            </div>

            <div>
                <ContactForm />
            </div>


            <div className="py-10">
                <MapSection />
            </div>



            <div className="">
                <ExploreSolutionSection data={DataSolutionSectionPoints} />
            </div>


            <div className=''>
                <TransformBusinessBanner2 />
            </div>

            <div>
                <Footer />
            </div>


        </div>
    )
}