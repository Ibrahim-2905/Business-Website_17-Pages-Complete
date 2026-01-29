import React from 'react'
import TitleDescription from '../TitleDescription/TitleDescription'

const HeadingAndTitleSection = ({title, description}) => {
  return (
    <div className='py-20 px-4 text-center   flex justify-center items-center flex-col'>
        <div className='mb-4' >
            <TitleDescription title={title} />
        </div>

        <div className='max-w-3xl'>
            <TitleDescription description={description}/>
        </div>

        </div>
  )
}

export default HeadingAndTitleSection