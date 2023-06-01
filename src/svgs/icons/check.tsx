import React from "react";

interface CheckIconProps {
  color: string;
}

export function CheckIcon({ color }: CheckIconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM13.88 6.29L8 12.17L6.12 10.29C5.73 9.9 5.1 9.9 4.71 10.29C4.32 10.68 4.32 11.31 4.71 11.7L7.3 14.29C7.69 14.68 8.32 14.68 8.71 14.29L15.3 7.7C15.69 7.31 15.69 6.68 15.3 6.29C14.91 5.9 14.27 5.9 13.88 6.29Z"
        fill={color}
      />
    </svg>
  );
}
