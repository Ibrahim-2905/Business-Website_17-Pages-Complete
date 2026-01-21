"use client"
import { useState } from "react";

// Dynamic Button Component
export const DynamicButton = ({
  text = "Submit",
  bgColor = "darkNavyBlue",
  hoverBgColor = "#1e40af",
  textColor = "#ffffff",
  hoverTextColor = "#ffffff",
  border = "none",
  padding = "0.75rem 2rem",
  height = "44px",
  onClick,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`font-medium transition-all duration-300 ${className}`}
      style={{
        backgroundColor: isHovered ? hoverBgColor : bgColor,
        color: isHovered ? hoverTextColor : textColor,
        padding: padding,
        height: height,
        cursor: 'pointer',
        borderRadius: '4px',
        width: '100%'
      }}
    >
      {text}
    </button>
  );
};