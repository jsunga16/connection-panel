import React from "react";

interface MicOffIconProps {
  bgColor: string;
  color: string;
}

export function MicOffIcon({ bgColor, color }: MicOffIconProps) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="16" fill={bgColor} />
      <path
        d="M18.4333 15.2499V10.5833C18.4333 9.19992 17.3167 8.08325 15.9333 8.08325C14.65 8.08325 13.6083 9.04992 13.4667 10.2916L18.4333 15.2499ZM21 15.5833C20.6583 15.5833 20.3583 15.8333 20.3083 16.1749C20.2667 16.4416 20.2083 16.7083 20.125 16.9499L21.1833 18.0083C21.4333 17.5083 21.6167 16.9666 21.7083 16.3916C21.7667 15.9666 21.4333 15.5833 21 15.5833ZM9.025 9.38325C8.7 9.70825 8.7 10.2333 9.025 10.5583L13.4333 14.9749V15.3333C13.4333 16.3249 13.9333 17.2666 14.7917 17.7583C15.4167 18.1166 15.9667 18.1249 16.475 18.0166L17.8583 19.3999C17.2667 19.6749 16.6083 19.8333 15.9333 19.8333C13.8167 19.8333 11.8667 18.3583 11.5583 16.1749C11.5083 15.8333 11.2083 15.5833 10.8667 15.5833C10.4333 15.5833 10.1 15.9666 10.1583 16.3916C10.5417 18.8583 12.625 20.8083 15.1 21.1833V23.0833C15.1 23.5416 15.475 23.9166 15.9333 23.9166C16.3917 23.9166 16.7667 23.5416 16.7667 23.0833V21.1833C17.525 21.0749 18.2417 20.8083 18.8917 20.4333L21.8 23.3416C22.125 23.6666 22.65 23.6666 22.975 23.3416C23.3 23.0166 23.3 22.4916 22.975 22.1666L10.2 9.38325C9.875 9.05825 9.35 9.05825 9.025 9.38325Z"
        fill={color}
      />
    </svg>
  );
}
