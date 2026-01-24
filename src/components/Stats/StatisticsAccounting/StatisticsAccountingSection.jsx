import TitleDescription from "../../TitleDescription/TitleDescription";
import { StatisticsAccountingCard } from "./StatisticsAccountingCard";

export const StatisticsAccountingSection = ({ data = [], title = "Explore Our Statistics", titleColor = "text-darkNavyBlue" }) => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-5">
                <TitleDescription
                    title={title}
                    titleColor={titleColor}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.map((item) => (
                    <StatisticsAccountingCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};