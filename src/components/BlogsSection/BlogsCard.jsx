"use client"
import React from 'react';
import TitleDescription from '../TitleDescription/TitleDescription';
import { useRouter } from 'next/navigation';

export default function BlogsCard({ 
  image, 
  tag,
  title, 
  description,
  buttonText,
  date = "",
  link,
}) {
  const router = useRouter()
  return (
    <div 
      className="rounded-lg overflow-hidden flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl w-full max-w-[400px] h-[500px]"
      style={{ background: "var(--bg-navy-gradient)" }} 
    >
      {/* Image Section */}
      <div className="relative w-full h-[400px] overflow-hidden p-4 pt-6">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 px-6 pb-6 justify-between">
        {/* Tag and Date */}
        <div className="flex items-center justify-between gap-3 mb-3 text-xs text-white/60">
          {tag && (
            <>
              <span className="text-xs  bg-gray-200 px-5 py-1 rounded-sm text-black">{tag}</span>
            </>
          )}
          <span>{date}</span>
        </div>
        
        <div>
        
          <div>
            <TitleDescription title={
              <>
              <span className='text-2xl text-white font-open-sans'>{title}</span>
              </>
            } />
          </div>

          {/* Description */}
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>

        {/* Button */}
        <button onClick={()=> router.push(link)} className="flex items-center gap-2 text-darkOrange font-medium text-sm hover:gap-3 transition-all duration-300 group mt-auto">
          <span>{buttonText || 'Read More'}</span>
          <svg 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}