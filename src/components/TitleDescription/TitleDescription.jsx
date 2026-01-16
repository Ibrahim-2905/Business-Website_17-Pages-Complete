import React from 'react'

export default function TitleDescription({ 
  subtitle, 
  title, 
  description, 
  subtitleColor = "text-primary",
  titleColor = "text-charcoalGray",
  descriptionColor = "text-charcoalGray"
}) {
  return (
    <div className="max-w-3xl mx-auto  px-4">
      {subtitle && (
        <p style={{fontWeight:"500"}} className={`${subtitleColor} text-1xl  mb-3`}>
          {subtitle}
        </p>
      )}
      
      {title && (
        <h2 style={{fontWeight:"600"}} className={`text-3xl  ${titleColor} mb-3 leading-tight`}>
         {title}
        </h2>
      )}
      
      {description && (
        <p className={`${descriptionColor} text-sm`}>
          {description}
        </p>
      )}
    </div>
  )
}