"use server";
import Image from "next/image";
import Stack from "../ui/image-stack/stack";
import { Suspense } from "react";
import { Cpu, Database, GraduationCap } from "lucide-react";
const images = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
];

async function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-32">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className=" bg-dark-card border border-white/5 p-8 rounded-2xl overflow-hidden group">
              {/* ABOUT CARD */}
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <Suspense>
                    <Stack
                      randomRotation
                      autoplay
                      pauseOnHover
                      cards={images.map((image, idx) => {
                        return (
                          <Image
                            src={image}
                            key={idx}
                            alt="i1"
                            width={208}
                            height={208}
                          />
                        );
                      })}
                    />
                  </Suspense>
                </div>

                <div className="col-span-1">
                  <h2 className=" text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                    J. Esteban Lozada{" "}
                    <span className="text-sm text-gray-500">22y/o</span>
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">
                    Passionate about traveling, learning, music, books, &
                    coding.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white/5 p-8 border border-white/10 rounded-2xl relative overflow-hidden mt-8">
                <div className=" flex justify-between">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Education
                  </h3>
                  <GraduationCap size={36} />
                </div>
                <div className="mb-6">
                  <h4 className="text-gray-400 text-md  leading-relaxed">
                    UMECIT | Bachelor of Science in Systems and Programming
                  </h4>
                  <span className="text-xs text-gray-500">
                    Panama City, Panama
                  </span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 ">
                    {/* TODO: add svg here */}
                    <div className="flex gap-2">
                      <p className="text-sm text-gray-400">
                        Expected Associate Degree:
                      </p>
                    </div>
                    <span className="text-xs text-gray-300 font-medium bg-dark-bg/50 px-4 py-2 rounded-lg border border-white/5">
                      February 2026
                    </span>
                  </div>
                  <div className="flex items-center gap-3 ">
                    {/* TODO: add svg here */}
                    <div className="flex gap-2">
                      <p className="text-sm text-gray-400">
                        Expected Bachelor’s Degree:{" "}
                      </p>
                    </div>
                    <span className="text-xs text-gray-300 font-medium bg-dark-bg/50 px-4 py-2 rounded-lg border border-white/5">
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
            <div className="flex items-center gap-4 mb-12">
              <span className="text-6xl font-bold text-primary">1+</span>
              <span className="text-white font-medium leading-tight">
                Year Of <br />
                Global Experience
              </span>
            </div>
            <div className="pt-8 border-t border-white/5 space-y-8">
              <div>
                <p className="text-gray-500 mb-6 uppercase tracking-widest text-xs font-bold">
                  Professional Experience
                </p>
              </div>

              {/* Work experience */}
              <div className="lg:pl-2 space-y-8">
                <div>
                  <div className="w-full inline-flex items-center justify-between text-xl font-bold text-primary hover:text-white transition-colors group mb-8">
                    <p className="transition-colors">
                      Freelance Software Developer | Self-Employed
                    </p>
                    <span className="text-gray-500 text-sm">
                      2025 - Current
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">
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

                <div>
                  <div className="w-full inline-flex items-center justify-between text-xl font-bold text-primary hover:text-white transition-colors group mb-8">
                    <p className="transition-colors">
                      Jr Software Developer | Minusjobs
                    </p>
                    <span className="text-gray-500 text-sm">2024 - 2025</span>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">
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

                <div>
                  <div className="w-full inline-flex items-center justify-between text-xl font-bold text-primary hover:text-white transition-colors group mb-8">
                    <p className="transition-colors">
                      Flight Attendant | Copa Airlines
                    </p>
                    <span className="text-gray-500 text-sm">
                      Approx. 3 Years
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">
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

              <div className="bg-white/5 p-8 border border-white/10 rounded-2xl relative overflow-hidden mt-8">
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
                    <Database />
                    <span className="text-xs text-gray-300 font-medium">
                      Data Encryption
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-dark-bg/50 px-4 py-2 rounded-lg border border-white/5">
                    <Cpu />
                    <span className="text-xs text-gray-300 font-medium">
                      Compliance Oversight
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
