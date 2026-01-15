import React from "react";
import MagicBento from "../ui/magic-bento/bento-grid";

function Skills() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-350 mx-auto px-6 lg:px-12 ">
        <MagicBento enableStars={false} enableMagnetism />
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
    </section>
  );
}

export default Skills;
