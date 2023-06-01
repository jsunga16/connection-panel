import React from "react";

interface MoreIconProps {
  bgColor: string;
  color: string;
}

export function MoreIcon({ bgColor, color }: MoreIconProps) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="16" fill={bgColor} />
      <path
        d="M15.9997 12.6666C16.9163 12.6666 17.6663 11.9166 17.6663 10.9999C17.6663 10.0833 16.9163 9.33325 15.9997 9.33325C15.083 9.33325 14.333 10.0833 14.333 10.9999C14.333 11.9166 15.083 12.6666 15.9997 12.6666ZM15.9997 14.3333C15.083 14.3333 14.333 15.0833 14.333 15.9999C14.333 16.9166 15.083 17.6666 15.9997 17.6666C16.9163 17.6666 17.6663 16.9166 17.6663 15.9999C17.6663 15.0833 16.9163 14.3333 15.9997 14.3333ZM15.9997 19.3333C15.083 19.3333 14.333 20.0833 14.333 20.9999C14.333 21.9166 15.083 22.6666 15.9997 22.6666C16.9163 22.6666 17.6663 21.9166 17.6663 20.9999C17.6663 20.0833 16.9163 19.3333 15.9997 19.3333Z"
        fill={color}
      />
    </svg>
  );
}