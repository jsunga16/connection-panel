import React from "react";

interface CamOnIconProps {
  bgColor: string;
  color: string;
}

export function CamOnIcon({ bgColor, color }: CamOnIconProps) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="16" fill={bgColor} />
      <path
        d="M20.1667 14.75V11.8333C20.1667 11.375 19.7917 11 19.3333 11L9.33333 11C8.875 11 8.5 11.375 8.5 11.8333L8.5 20.1667C8.5 20.625 8.875 21 9.33333 21H19.3333C19.7917 21 20.1667 20.625 20.1667 20.1667V17.25L22.075 19.1583C22.6 19.6833 23.5 19.3083 23.5 18.5667V13.425C23.5 12.6833 22.6 12.3083 22.075 12.8333L20.1667 14.75Z"
        fill={color}
      />
    </svg>
  );
}
