import { ArrowUpFromLine } from "lucide-react";

function BackToTop() {
  return (
    <button
      className="fixed bottom-24 right-6 z-40 w-10 h-10 flex items-center justify-center rounded-full bg-dark-card border border-white/10 text-gray-400 hover:text-white hover:bg-primary hover:border-primary shadow-lg backdrop-blur-sm transition-all duration-300 transform opacity-0 translate-y-4 pointer-events-none"
      aria-label="Back to Top"
    >
      <ArrowUpFromLine />
    </button>
  );
}

export default BackToTop;
