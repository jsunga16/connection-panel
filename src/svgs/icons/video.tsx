import React from "react";

interface VideoIconProps {
  color: string;
  width?: number;
  height?: number;
}

export function VideoIcon({ color, width = 12, height = 8 }: VideoIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 12 8" fill="none">
      <path
        d="M8 1.33333V6.66667H1.33333V1.33333H8ZM8.66667 0H0.666667C0.3 0 0 0.3 0 0.666667V7.33333C0 7.7 0.3 8 0.666667 8H8.66667C9.03333 8 9.33333 7.7 9.33333 7.33333V5L12 7.66667V0.333333L9.33333 3V0.666667C9.33333 0.3 9.03333 0 8.66667 0Z"
        fill={color}
      />
    </svg>
  );
}
