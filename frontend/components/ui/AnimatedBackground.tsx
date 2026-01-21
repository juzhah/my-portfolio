"use client";

import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full bg-background">
        {/* Morphing Square 1 */}
        <div className="absolute top-[20%] left-[15%] w-72 h-72 bg-primary/10 rounded-3xl blur-3xl animate-blob mix-blend-multiply filter"></div>

        {/* Morphing Square 2 */}
        <div className="absolute top-[40%] right-[20%] w-96 h-96 bg-accent-teal/10 rounded-3xl blur-3xl animate-blob animation-delay-2000 mix-blend-multiply filter"></div>

        {/* Morphing Square 3 */}
        <div className="absolute bottom-[20%] left-[35%] w-80 h-80 bg-purple-500/10 rounded-3xl blur-3xl animate-blob animation-delay-4000 mix-blend-multiply filter"></div>

        {/* Squares Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
    </div>
  );
}
