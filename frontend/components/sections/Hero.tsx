import { ArrowDownToLine, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import AnimatedContent from "../ui/animate-section/AnimateSection";
import RotatingText from "../ui/rotating-text/RotatingText";
import MeInJapan from "@/assets/me-in-japan.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-32 lg:pt-20 pb-12 overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-accent-teal/5 rounded-full blur-[120px]"></div>
      <div className="max-w-350 mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* SECTION 1 */}
          <div className="lg:col-span-5 relative z-20 order-1 lg:order-1">
            <h1 className="sr-only">J. Esteban Lozada - Software Developer</h1>
            <div
              className="text-5xl md:text-6xl xl:text-8xl font-bold text-white leading-[1.1] md:leading-[0.9] tracking-tight mb-6 min-h-30 lg:min-h-50"
              aria-hidden="true"
            >
              J. Esteban
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">
                Lozada
              </span>
              <span className="animate-pulse text-primary">|</span>
            </div>
            <div
              className="mt-8 lg:mt-16 hidden lg:flex items-center space-x-6 text-xs font-bold tracking-widest text-gray-500 animate-fade-in-up"
              style={{ animationDelay: "2s" }}
            >
              <Link
                href="https://www.linkedin.com/in/juan-lozada/"
                className="hover:text-primary transition-colors"
              >
                LINKEDIN
              </Link>
              <Link
                href="https://github.com/juzhah"
                className="hover:text-primary transition-colors"
              >
                GITHUB
              </Link>
            </div>
          </div>

          {/* SECTION 2 */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-center order-2 lg:order-2">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <div className="absolute top-10 right-10 w-20 h-20 border-10 border-dark-card rounded-full z-0 hidden md:block"></div>
              <div className="absolute top-20 -right-10 w-4 h-4 bg-accent-teal rounded-full animate-pulse z-30"></div>
              <div className="absolute bottom-20 -left-10 w-0 h-0 border-l-15 border-l-transparent border-t-25 border-t-dark-card border-r-15 border-r-transparent transform -rotate-45 z-0"></div>
              <div
                className="relative z-10 w-64 h-80 md:w-96 md:h-125 transition-transform duration-75 ease-out will-change-transform"
                style={{ transform: "translateY(0px)" }}
              >
                <div className="absolute inset-0 bg-dark-card rounded-t-[100px] rounded-b-4xl transform rotate-3 border border-white/5"></div>
                <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={
                      "https://drive.google.com/uc?export=view&id=1LZU6U4sPZhoNsEYHAAvA_LlXaR-gJazP"
                    }
                    alt="Esteban Lozada standing confidently in professional attire, representing his role as a Technical Product Manager"
                    width="500"
                    height="600"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 will-change-transform"
                    style={{ transform: "scale(1)" }}
                  />
                </div>
              </div>
            </AnimatedContent>
          </div>

          {/* SECTION 3 */}
          <div
            className="lg:col-span-3 flex flex-col justify-center lg:items-start animate-fade-in-up order-3 lg:order-3"
            style={{ animationDelay: "1s" }}
          >
            <div className="mb-8">
              <span className="inline-block text-primary font-semibold mb-2 tracking-wider text-sm uppercase">
                Software Developer
              </span>
              <div className="w-12 h-0.5 bg-primary mb-6"></div>
              <h2 className="text-2xl font-bold text-white mb-4">
                <span className="flex align-middle gap-2">
                  Open to
                  <Suspense>
                    <RotatingText
                      texts={["Remote", "On-Site", "Relocation"]}
                      mainClassName="text-2xl px-2 sm:px-2 md:px-3 overflow-hidden bg-primary justify-center  rounded-lg "
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={3000}
                    />
                  </Suspense>
                </span>
                oportunities
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                I transform concepts into digital products. Known for building
                scalable and maintainable SaaS solutions with modern tools.
              </p>
              <div className="space-y-2">
                <p className="text-primary font-medium">+507 6309-9430</p>
                <Link href="mailto:juanlozadahe@gmail.com">
                  <p className="text-gray-400 text-sm">
                    estebanlozadah@gmail.com
                  </p>
                </Link>
              </div>
            </div>
            <div>
              <Link
                href="https://drive.google.com/file/d/107QF2BAttNw-Hf-SUmj4c5HLcsbUGMJh/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-widest text-white transition-all duration-300 rounded-lg active:scale-95 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-primary/50 shadow-lg hover:shadow-[0_0_30px_rgba(100,104,240,0.4)] hover:-translate-y-1"
              >
                <ArrowDownToLine className="lucide lucide-download w-5 h-5 transition-transform group-hover:-translate-y-1 text-primary group-hover:text-white" />
                <span className="text-gray-200 group-hover:text-white transition-colors">
                  Download Resume
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
