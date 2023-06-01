import React from "react";

interface PreviousIconProps {
  color?: string;
  bgColor?: string;
}

export function PreviousIcon({
  bgColor = "#0091FF",
  color = "#151718",
}: PreviousIconProps) {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <rect x="0.5" width="24" height="24" rx="12" fill={bgColor} />
      <path
        d="M14.5 8.47039C14.24 8.21039 13.82 8.21039 13.56 8.47039L10.5 11.5304C10.24 11.7904 10.24 12.2104 10.5 12.4704L13.56 15.5304C13.82 15.7904 14.24 15.7904 14.5 15.5304C14.76 15.2704 14.76 14.8504 14.5 14.5904L11.9133 11.9971L14.5 9.41039C14.7533 9.15039 14.7533 8.72372 14.5 8.47039Z"
        fill={color}
      />
    </svg>
  );
}
