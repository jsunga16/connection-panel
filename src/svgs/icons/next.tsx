import React from "react";

interface NextIconProps {
  color?: string;
  bgColor?: string;
}

export function NextIcon({
  bgColor = "#0091FF",
  color = "#151718",
}: NextIconProps) {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <rect x="0.5" width="24" height="24" rx="12" fill={bgColor} />
      <path
        d="M10.5001 8.47416C10.2401 8.73416 10.2401 9.15416 10.5001 9.41416L13.0867 12.0008L10.5001 14.5875C10.2401 14.8475 10.2401 15.2675 10.5001 15.5275C10.7601 15.7875 11.1801 15.7875 11.4401 15.5275L14.5001 12.4675C14.7601 12.2075 14.7601 11.7875 14.5001 11.5275L11.4401 8.4675C11.1867 8.21416 10.7601 8.21416 10.5001 8.47416Z"
        fill={color}
      />
    </svg>
  );
}
