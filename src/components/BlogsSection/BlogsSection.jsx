import React from 'react';
import { DataBlogsSection } from './DataBlogsSection/DataBlogsSection';
import BlogsCard from './BlogsCard';
import TitleDescription from '../TitleDescription/TitleDescription';

export default function BlogsSection() {
    const cardCount = DataBlogsSection.length;

    // Determine layout class based on card count
    const getContainerClass = () => {
        if (cardCount <= 3) {
            return 'flex justify-center items-center flex-wrap gap-6';
        }
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 justify-items-center';
    };

    return (
        <div className="w-full mx-auto px-4 py-12">
            {/* Optional Header */}
            <div className='text-center my-4'>
                <TitleDescription
                    title={
                        <>
                            <span className='text-darkNavyBlue text-5xl'>Blogs</span>
                        </>
                    }
                />
            </div>

            {/* Cards Grid/Flex Container */}
            <div className={getContainerClass()}>
                {DataBlogsSection.map((card) => (
                    <BlogsCard
                        key={card.id}
                        image={card.image}
                        tag={card.tag}
                        title={card.title}
                        description={card.description}
                        buttonText={card.buttonText}
                        date={card.date}
                    />
                ))}
            </div>
        </div>
    );
}