import { Suspense } from "react";
import MagicBento from "../ui/magic-bento/MagicBento";
import { getStacks } from "@/app/data/get-skills";

async function Skills() {
  const stacks = await getStacks();
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-350 mx-auto px-6 lg:px-12 ">
        <Suspense>
          <MagicBento
            enableStars={false}
            enableMagnetism
            stacks={stacks}
            glowColor="100, 104, 240"
          />
        </Suspense>
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
    </section>
  );
}

export default Skills;
