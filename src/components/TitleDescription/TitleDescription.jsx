// import React from 'react'

// export default function TitleDescription({ 
//   subtitle, 
//   title, 
//   description, 
//   subtitleColor = "text-primary",
//   titleColor = "text-charcoalGray",
//   descriptionColor = "text-charcoalGray",
//   titleMargin = "mb-3",       // 👈 default
//   subtitleMargin = "mb-3"    // 👈 default
// }) {
//   return (
//     <div className="flex flex-col">
//       {subtitle && (
//         <p
//           style={{ fontWeight: "500" }}
//           className={`${subtitleColor} text-xl ${subtitleMargin}`}
//         >
//           {subtitle}
//         </p>
//       )}
      
//       {title && (
//         <h2
//           style={{ fontWeight: "600" }}
//           className={`text-3xl ${titleColor} leading-none ${titleMargin}`}
//         >
//           {title}
//         </h2>
//       )}
      
//       {description && (
//         <p className={`${descriptionColor} text-sm`}>
//           {description}
//         </p>
//       )}
//     </div>
//   )
// }
















import React from 'react'

export default function TitleDescription({ 
  subtitle, 
  title, 
  description, 
  subtitleColor = "text-primary",
  titleColor = "text-charcoalGray",
  descriptionColor = "text-charcoalGray",
  titleMargin = "mb-3",
  subtitleMargin = "mb-3"
}) {
  return (
    <div className="flex flex-col">
      {subtitle && (
        <p
          style={{ fontWeight: "500" }}
          className={`${subtitleColor} text-xl ${subtitleMargin}`}
        >
          {subtitle}
        </p>
      )}
      
      {title && (
        <h2
          style={{ fontWeight: "600" }}
          className={`text-3xl leading-none ${titleMargin} ${typeof title === 'string' ? titleColor : ''}`}
        >
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