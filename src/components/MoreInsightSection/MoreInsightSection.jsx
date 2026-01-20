import TitleDescription from "../TitleDescription/TitleDescription.jsx";
import CardMoreInsightSection from "./CardMoreInsightSection.jsx";
import { DataMoreInsightSection } from "./DataMoreInsightSection/DataMoreInsightSection";

export default function MoreInsightsSection({ data = DataMoreInsightSection ,  title = "More insights" }) {
  return (
    <section className="w-full py-16 px-4" style={{ background: "var(--bg-navy-gradient)" }} >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
       
       <div className="text-center mb-6">
        <TitleDescription title={title} titleColor="text-white "/>
       </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((insight, index) => {
            const totalCols = 4;
            const isLastInRow = (index + 1) % totalCols === 0 || index === data.length - 1;
            const isLastRow = index >= data.length - totalCols;
            
            return (
              <CardMoreInsightSection
                key={insight.id}
                title={insight.title}
                description={insight.description}
                buttonText={insight.buttonText}
                isLastInRow={isLastInRow}
                isLastRow={isLastRow}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

