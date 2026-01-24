// import { title } from "process";
// import TitleDescription from "../TitleDescription/TitleDescription";
// import { DataOurValueCard } from "./DataOurValueCardSection/DataOurValueCard";
// import { CardsWrapper, ValueCard } from "./ValueCard";

// export const OurValuesSection = ({data = [], title = "", titleColor =  ""}) => {
//   return (
//     <section className="w-full  px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Title */}
//        <div className="max-w-7xl mx-auto text-center mb-12">
//          <TitleDescription title={{title} || "Our Values"} titleColor={{titleColor} || "text-peal"} />
//       </div>
        
//         {/* Cards Grid */}
//         <CardsWrapper>
//           {data.map((card) => (
//             <ValueCard
//               key={card.id}
//               image={card.image}
//               title={card.title}
//               description={card.description}
//             />
//           ))}
//         </CardsWrapper>
//       </div>
//     </section>
//   );
// };












import TitleDescription from "../TitleDescription/TitleDescription";
import { DataOurValueCard } from "./DataOurValueCardSection/DataOurValueCard";
import { CardsWrapper, ValueCard } from "./ValueCard";

export const OurValuesSection = ({ data = [], title = "Our Values", titleColor = "text-peal" }) => {
  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <TitleDescription 
            title={title}
            titleColor={titleColor}
          />
        </div>

        {/* Cards Grid */}
        <CardsWrapper>
          {data.map((card) => (
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
