import React from "react";

interface ExitIconProps {
  color?: string;
}

export function ExitIcon({ color = "#ECEDEE" }: ExitIconProps) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M9.66634 1.27325L8.72634 0.333252L4.99967 4.05992L1.27301 0.333252L0.333008 1.27325L4.05967 4.99992L0.333008 8.72659L1.27301 9.66659L4.99967 5.93992L8.72634 9.66659L9.66634 8.72659L5.93967 4.99992L9.66634 1.27325Z"
        fill={color}
      />
    </svg>
  );
}
