import React from 'react'
import Image from 'next/image'
import AnimatedButton from '../Button/Button'

export default function Card({ 
  gradientFrom, 
  gradientTo, 
  image, 
  title, 
  description,
  buttonProps,
  horizontalLine,
 
}) {
  return (
    <div 
      className="rounded-lg py-4   flex flex-col items-center justify-between gap-1 text-center shadow-lg transition-shadow duration-300 w-full max-w-[360px] min-h-[459px]"
      style={{
        background: `linear-gradient(180deg, ${gradientFrom} 0%, ${gradientTo} 100%)`
      }}
    >
      {/* Image */}
      <div className="mb  px-2">
        <Image 
          src={image} 
          alt={title} 
          width={400} 
          height={140} 
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-white text-center text-2xl mt-4">
        {title}
      </h3>

      {/* Horizontal Line */}
      {horizontalLine &&(

      <div className="w-75 mx-auto h-[1px] bg-white mb-4"></div>
      )}

      {/* Description */}
      <p style={{fontWeight:"400"} } className="text-white text-center text-lg tracking-wider max-w-[280px] mx-auto mb-6">
        {description}
      </p>

      {/* Button */}
      <AnimatedButton
       
        {...buttonProps}
      />
    </div>
  )
}