import TitleDescription from "../TitleDescription/TitleDescription";

export const ValueCard = ({ image, title, description }) => {
  return (
    <div
      className="w-full bg-white rounded-lg p-6 transition-shadow duration-300 border border-gray-100
                 shadow-md hover:shadow-lg
                 flex flex-col sm:flex-col md:flex-row items-start gap-4"
    >
      

       <div className="flex-1 flex flex-col justify-center items-start gap-2">
        <div>

         <TitleDescription title={title} />
        </div>
        <div>

         <TitleDescription description={description} />
        </div>
       </div>
      
      {/* Image */}
      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export const CardsWrapper = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
      {children}
    </div>
  );
};