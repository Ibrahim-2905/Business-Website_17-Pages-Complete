import React from 'react'
import TitleDescription from '../TitleDescription/TitleDescription'

const ProgressGridSection = ({gridImages }) => {
    return (
        <div>
            <div className='relative w-full min-h-screen py-10 overflow-hidden'>
                <div className='absolute inset-0'>
                    <img src="/logo/gridBg.png" alt="gridBg" />
                </div>

                <div className=' absolute  inset-0 text-center py-15 '>
                    <TitleDescription
                        title={
                            <>
                                <span className="block text-darkNavyBlue mb-2">Achieving sustainable progress through </span>
                                <span className="block text-peal mb-2">collaborative innovation and shared</span>
                                <span className="block text-darkNavyBlue">expertise</span>
                            </>
                        } />

                </div>



               
 






                {/* description */}
                <div className='absolute w-full bottom-0 text-center py-15 text-2xl '>
                    <TitleDescription

                        description={
                            <>
                                <span className='text-lg  text-black'> Our diverse team combines global expertise and</span>

                                <span className='text-darkOrange text-lg'> innovative thinking</span>
                                <span className='text-lg text-black'>to deliver successful,</span>
                                <span className='text-darkOrange text-lg'>tech-driven solutions.</span>
                                <span className='text-lg text-black'>We work together to create</span>
                                <span className='text-darkOrange text-lg'>impactful</span>
                                <span className='text-lg text-black'>results that align with your business needs.</span>
                            </>
                        }
                    />
                </div>


            </div>
        </div>
    )
}

export default ProgressGridSection