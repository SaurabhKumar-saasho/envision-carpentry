import React from "react";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

export function EnvisionLogo({
  className = "",
  size = "md",
  alt = "Envision Carpentry LLC Logo",
  ...props
}: LogoProps) {
  const sizeMap = {
    xs: "h-8",
    sm: "h-12",
    md: "h-16",
    lg: "h-22",
    xl: "h-28",
    "2xl": "h-36",
  };

  const hasCustomHeight = className.includes("h-");
  const sizeClass = hasCustomHeight ? "" : sizeMap[size];

  return (
    <img
      src="/logo.png"
      alt={alt}
      className={`w-auto object-contain transition-all duration-200 ${sizeClass} ${className}`.trim()}
      {...props}
    />
  );
}
