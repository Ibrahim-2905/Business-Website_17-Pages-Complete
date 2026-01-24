import React from 'react'
import TitleDescription from '../../TitleDescription/TitleDescription'
import AccountingBookkeepingServicesCard from './AccountingBookkeepingServicesCard'

export default function AccountingBookkeepingServicesSection({ data }) {
    return (
        <div  className=''>

        <section className="relative bg-lightGray py-20 px-4 sm:px-8 overflow-hidden">
            {/* Background Bubbles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Top Left Bubbles */}
                <img
                    src="/logo/pattern2.png"
                    alt=""
                    className="absolute top-0 left-0 w-[40vw] sm:w-[35vw] md:w-[30vw] h-auto opacity-80"
                />
               
                {/* Bottom Right Bubbles */}
                <img
                    src="/logo/pattern2.png"
                    alt=""
                    className="absolute bottom-0 right-0 w-[40vw] sm:w-[35vw] md:w-[30vw] h-auto opacity-80"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className='text-center'>
                    <TitleDescription
                         
                        title={
                            <>
                            <span className='text-darkNavyBlue'>Our</span>
                            <span className='text-peal'> Accounting & Bookkeeping </span>
                            <span className='text-darkNavyBlue'>Services</span>
                            </>
                        }
                        description="Our technology-driven Accounting & Bookkeeping services streamline financial management."
                        descriptionColor="text-charcoalGray"
                    />
                </div>

                {/* Cards Grid */}
                <div className={`flex flex-wrap ${data.length === 1 ? 'justify-center' : 'justify-center'} gap-8 mt-12 px-4 sm:px-0`}>
                    {data.map((item, index) => (
                        <div key={index}>
                            <AccountingBookkeepingServicesCard
                                data={item}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </div>
    )
}