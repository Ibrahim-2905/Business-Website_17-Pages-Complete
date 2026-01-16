import TitleDescription from "../TitleDescription/TitleDescription";
import { DataOurValueCard } from "./DataOurValueCardSection/DataOurValueCard";
import { CardsWrapper, ValueCard } from "./ValueCard";

export const OurValuesSection = () => {
  return (
    <section className="w-full  px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
       <div className="max-w-7xl mx-auto text-center mb-12">
         <TitleDescription title="Our Values" titleColor="text-peal" />
      </div>
        
        {/* Cards Grid */}
        <CardsWrapper>
          {DataOurValueCard.map((card) => (
            <ValueCard
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </CardsWrapper>
      </div>
    </section>
  );
};
