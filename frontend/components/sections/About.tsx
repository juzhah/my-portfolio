"use server";
import Image from "next/image";
import Stack from "../ui/image-stack/stack";
import { Suspense } from "react";
import { Cpu, Database, GraduationCap } from "lucide-react";
import { getStackImages } from "@/app/data/get-image-stack";
import { EnvConfig } from "@/lib/utils";
const images = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
];

async function About() {
  const cards = await getStackImages();

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky top-32 bg-(--card-surface)">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className=" bg-dark-card border border-white/5 p-8 rounded-2xl overflow-hidden group">
              {/* ABOUT CARD */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <div className="col-span-1 relative h-64 md:h-auto min-h-62.5 w-full -ml-6">
                  <Suspense>
                    <Stack
                      randomRotation
                      autoplay
                      pauseOnHover
                      cards={cards.map((card, idx) => {
                        return (
                          <Image
                            src={
                              EnvConfig().strapi_url + card.formats.large.url
                            }
                            key={idx}
                            alt={card.alternativeText}
                            width={208}
                            height={208}
                            className="w-full h-full object-cover rounded-2xl "
                          />
                        );
                      })}
                    />
                  </Suspense>
                </div>

                <div className="col-span-1">
                  <h2 className=" text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                    J. Esteban Lozada{" "}
                    <span className="text-sm text-gray-500 block mt-2">
                      Software Developer
                    </span>
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">
                    Passionate about traveling, learning, music, books, &
                    coding.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white/5 p-8 border border-white/10 rounded-2xl relative overflow-hidden mt-8 hover:bg-white/10 transition-colors duration-300">
                <div className=" flex justify-between">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Education
                  </h3>
                  <GraduationCap size={36} className="text-primary" />
                </div>
                <div className="mb-6">
                  <h4 className="text-gray-200 text-md font-medium leading-relaxed">
                    UMECIT | Bachelor of Science in Systems and Programming
                  </h4>
                  <span className="text-xs text-gray-500 block mt-1">
                    Panama City, Panama
                  </span>
                </div>
                <p className="mb-4 text-gray-200 ">Expected Dates</p>
                <div className="flex flex-col sm:flex-row gap-8">
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-400">AS Degree:</p>
                    <span className="text-xs text-primary font-bold bg-primary/10 px-3 py-1 rounded-full border border-primary/20 w-fit">
                      February 2026
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-400">BS Degree:</p>
                    <span className="text-xs text-primary font-bold bg-primary/10 px-3 py-1 rounded-full border border-primary/20 w-fit">
                      February 2028
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex items-center mb-6">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase mr-4">
                About Me
              </span>
              <div className="w-16 h-0.5 bg-primary"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-12">
              Driven by passion, sustained by discipline
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I&apos;m passionate about my work and disciplined towards
                  accomplishing my goals. This has been like this since I was 17
                  and started making my way through life. Since then, Ive been
                  gaining experience in diverse environments, constantly
                  shifting towards my goal of fully transitioning into my
                  dreamed software development career.
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I currently domain multiple web development tools, aiming to
                  expand my skills and explore more opportunities.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-12 bg-white/5 p-6 rounded-2xl border border-white/5 w-fit">
              <span className="text-6xl font-bold text-primary">3+</span>
              <span className="text-white font-medium leading-tight">
                Year Of <br />
                Global Experience
              </span>
            </div>
            <div className="pt-8 border-t border-white/5 space-y-8">
              <div>
                <p className="text-gray-500 mb-6 uppercase tracking-widest text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Professional Experience
                </p>
              </div>

              {/* Work experience Timeline */}
              <div className="relative border-l border-white/10 ml-3 space-y-12 pb-4">
                {/* Job 1 */}
                <div className="pl-8 relative group">
                  <div className="absolute -left-1.25 top-2 w-2.5 h-2.5 rounded-full bg-gray-700 group-hover:bg-primary transition-colors border border-dark-bg"></div>
                  <div className="w-full inline-flex flex-col sm:flex-row sm:items-center justify-between text-xl font-bold text-primary hover:text-white transition-colors group mb-4">
                    <p className="transition-colors">
                      Freelance Software Developer | Self-Employed
                    </p>
                    <span className="text-gray-500 text-sm bg-white/5 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                      2025 - Current
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed bg-white/5 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                    As a Full Stack Developer, I deliver end-to-end digital
                    solutions by aligning business requirements with robust
                    technical execution. I specialize in building scalable web
                    applications using TypeScript, React.js, and Laravel,
                    ensuring high performance through optimized database design
                    and RESTful API integration. This role has allowed me to
                    master the application of SOLID principles and OOP patterns,
                    producing clean and maintainable code for diverse client
                    needs.
                  </p>
                </div>

                {/* Job 2 */}
                <div className="pl-8 relative group">
                  <div className="absolute -left-1.25 top-2 w-2.5 h-2.5 rounded-full bg-gray-700 group-hover:bg-primary transition-colors border border-dark-bg"></div>
                  <div className="w-full inline-flex flex-col sm:flex-row sm:items-center justify-between text-xl font-bold text-primary hover:text-white transition-colors group mb-4">
                    <p className="transition-colors">
                      Jr Software Developer | Minusjobs
                    </p>
                    <span className="text-gray-500 text-sm bg-white/5 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                      2024 - 2025
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed bg-white/5 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                    As a Full Stack Developer, I deliver end-to-end digital
                    solutions by aligning business requirements with robust
                    technical execution. I specialize in building scalable web
                    applications using TypeScript, React.js, and Laravel,
                    ensuring high performance through optimized database design
                    and RESTful API integration. This role has allowed me to
                    master the application of SOLID principles and OOP patterns,
                    producing clean and maintainable code for diverse client
                    needs.
                  </p>
                </div>

                {/* Job 3 */}
                <div className="pl-8 relative group">
                  <div className="absolute -left-1.25 top-2 w-2.5 h-2.5 rounded-full bg-gray-700 group-hover:bg-primary transition-colors border border-dark-bg"></div>
                  <div className="w-full inline-flex flex-col sm:flex-row sm:items-center justify-between text-xl font-bold text-primary hover:text-white transition-colors group mb-4">
                    <p className="transition-colors">
                      Flight Attendant | Copa Airlines
                    </p>
                    <span className="text-gray-500 text-sm bg-white/5 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                      Approx. 3 Years
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed bg-white/5 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                    In this high-stakes aviation environment, I provided
                    critical value by ensuring operational safety and delivering
                    exceptional service to international passengers. This
                    experience was foundational in developing my professional
                    soft skills, specifically in crisis management and
                    cross-functional team collaboration under pressure. I gained
                    a unique perspective on user-centric service and active
                    listening, which I now apply to understanding and solving
                    complex technical problems for my software clients.
                  </p>
                </div>
              </div>

              {/*  <div className="bg-white/5 p-8 border border-white/10 rounded-2xl relative overflow-hidden mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Professional Ethics &amp; Security
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  As an Analyst and PM, I treat data integrity and system
                  security as non-negotiable pillars. Whether managing M&amp;A
                  intelligence or retail POS databases, I prioritize
                  industry-standard encryption, SSL protocols, and data
                  compliance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 bg-dark-bg/50 px-4 py-2 rounded-lg border border-white/5">
                    <Database size={16} />
                    <span className="text-xs text-gray-300 font-medium">
                      Data Encryption
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-dark-bg/50 px-4 py-2 rounded-lg border border-white/5">
                    <Cpu size={16} />
                    <span className="text-xs text-gray-300 font-medium">
                      Compliance Oversight
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
