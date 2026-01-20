import { title } from "process";
import TitleDescription from "../TitleDescription/TitleDescription";
import CaseStudyCard from "./CaseStudyCard";
import { DataCaseStudyCard } from "./DataCaseStudyCard/DataCaseStudyCard";

// CaseStudySection Component
export default function CaseStudySection({ data = DataCaseStudyCard }) {
  const itemCount = data.length;
  
  // Determine grid layout based on item count
  const getGridClass = () => {
    if (itemCount <= 2) {
      return 'flex justify-center';
    }
    return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  };

  return (
    <section className="w-full py-10 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
        <TitleDescription 
        title={
                <>
                <span className="text-darkNavyBlue text-4xl">Case Study</span>
                    </>
        }
            />
        </div>

        {/* Case Study Cards */}
        <div className={`${getGridClass()} gap-6 ${itemCount <= 2 ? 'flex-wrap' : ''}`}>
          {data.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              backgroundImage={caseStudy.backgroundImage}
              title={caseStudy.title}
              description={caseStudy.description}
              buttonText={caseStudy.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

