import { Suspense } from "react";
import MagicBento from "../ui/magic-bento/MagicBento";
import { getStacks } from "@/app/data/get-skills";

async function Skills() {
  const stacks = await getStacks();
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <Suspense>
          <MagicBento
            enableStars={false}
            enableMagnetism
            stacks={stacks}
            glowColor="100, 104, 240"
          />
        </Suspense>

        <div className="flex w-full justify-center mt-14">
          <div className="mx-auto w-fit inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
              Continuously Learning New Standards
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}

export default Skills;
