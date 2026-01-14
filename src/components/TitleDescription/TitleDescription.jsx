import React from 'react'

export default function TitleDescription({ 
  subtitle, 
  title, 
  description, 
  titleHighlight,
  subtitleColor = "text-primary",
  titleColor = "text-charcoalGray",
  highlightColor = "text-darkOrange",
  descriptionColor = "text-charcoalGray/70"
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 px-4">
      {subtitle && (
        <p style={{fontWeight:"500"}} className={`${subtitleColor} text-1xl  mb-3`}>
          {subtitle}
        </p>
      )}
      
      {title && (
        <h2 style={{fontWeight:"600"}} className={`text-3xl  ${titleColor} mb-3 leading-tight`}>
          {title.split(' ').map((word, index) => (
            word === titleHighlight ? (
              <span key={index} className={highlightColor}>{word} </span>
            ) : (
              <span key={index}>{word} </span>
            )
          ))}
        </h2>
      )}
      
      {description && (
        <p className={`${descriptionColor} text-sm  `}>
          {description}
        </p>
      )}
    </div>
  )
}