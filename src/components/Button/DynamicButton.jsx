// "use client";
// import { useState } from "react";

// export const DynamicButton = ({
//   text = "Submit",
//   bgColor = "",
//   hoverBgColor = "",
//   textColor = "",
//   hoverTextColor = "",
//   border = "",
//   padding = "px-7 py-3",
//   height = "h-[44px]",
//   onClick,
//   rounded,
//   className = "",
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <button
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className={`
//         font-medium
//         transition-all
//         cursor-pointer
//         duration-300
//         ${rounded}
//         ${height}
//         ${padding}
//         ${border}
//         ${isHovered ? hoverBgColor : bgColor}
//         ${isHovered ? hoverTextColor : textColor}
//         ${className}
//       `}
//     >
//       {text}
//     </button>
//   );
// };



"use client";
import { useState } from "react";

export const DynamicButton = ({
  text = "Submit",
  bgColor = "",
  hoverBgColor = "",
  textColor = "",
  hoverTextColor = "",
  border = "",
  padding = "px-7 py-3",
  height = "h-[44px]",
  onClick,
  rounded,
  className = "",
  children, // Add this to accept children
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        font-medium
        transition-all
        cursor-pointer
        duration-300
        ${rounded}
        ${height}
        ${padding}
        ${border}
        ${isHovered ? hoverBgColor : bgColor}
        ${isHovered ? hoverTextColor : textColor}
        ${className}
      `}
    >
      {children || text} {/* Render children if provided, otherwise render text */}
    </button>
  );
};