import React from "react";

function BackToTop() {
  return (
    <button
      className="fixed bottom-24 right-6 z-40 w-10 h-10 flex items-center justify-center rounded-full bg-dark-card border border-white/10 text-gray-400 hover:text-white hover:bg-primary hover:border-primary shadow-lg backdrop-blur-sm transition-all duration-300 transform opacity-0 translate-y-4 pointer-events-none"
      aria-label="Back to Top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-arrow-up w-5 h-5"
      >
        <path d="m5 12 7-7 7 7"></path>
        <path d="M12 19V5"></path>
      </svg>
    </button>
  );
}

export default BackToTop;
