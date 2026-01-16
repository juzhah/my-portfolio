"use client";

import { gsap } from "gsap";
import React, { useRef } from "react";
import { Badge } from "../badge";
import { GlobalSpotlight } from "./bento-spotlight";
import { BentoCardGrid } from "./BentoGrid";
import { useMobileDetection } from "./hooks";

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  textAutoHide?: boolean;
  disableAnimations?: boolean;
}

export interface BentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";

const cardData: any[] = [
  [
    {
      color: "#060010",
      title: "Back End & Databases",
      tools: [
        "React Router 7",
        "Next.js",
        "SQLite",
        "Strapi (CMS)",
        "Laravel",
        "Astro.js",
        "PostgreSQL",
      ],
      description: "Hello",
    },

    {
      color: "#060010",
      title: "Front End",
      tools: [
        "React.js",
        "Tailwind CSS",
        "Mantine UI",
        "Shadcn",
        "Zustand",
        "React Bits",
      ],
      description: "Hello",
    },
  ],
  [
    {
      color: "#060010",
      title: "Programming Languages",
      tools: ["JavaScript", "TypeScript", "Python", "PHP", "C++"],
      description: "Hello",
    },
  ],
  [
    {
      color: "#060010",
      title: "DevOps & Tools",
      tools: ["Docker", "Git", "pnpm", "GitHub", "Vite", "Vitest"],
      description: "Hello",
    },
  ],
];

const lastCardData = [
  {
    color: "#060010",
    title: "Languages",
    tools: [
      "Fluent English",
      "Native Spanish",
      "Advanced Portuguese",
      "Basic German",
    ],
    description: "Hello",
  },
];

const MagicBento: React.FC<BentoProps> = ({
  textAutoHide = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  return (
    <>
      <style>
        {`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${glowColor};
            --border-color: #392e4e;
            --background-dark: #060010;
            --white: hsl(0, 0%, 100%);
            --purple-primary: rgba(132, 0, 255, 1);
            --purple-glow: rgba(132, 0, 255, 0.2);
            --purple-border: rgba(132, 0, 255, 0.8);
          }
          
          .card-responsive {
            grid-template-columns: 1fr;
            width: 100%;
            margin: 0 auto;
            padding: 0.5rem;
          }
          
          @media (min-width: 600px) {
            .card-responsive {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (min-width: 1024px) {
            .card-responsive {
              grid-template-columns: repeat(4, 1fr);
            }

            .card-responsive .card:nth-child(2) {
              grid-column: span 2;
            }
            .card-responsive .card:nth-child(3) {
              grid-column: span 1;
            }
            .card-responsive .card:nth-child(4) {
              grid-column: span 1;
            }
            .card-responsive .card:nth-child(5) {
              grid-column: span 1;
            }

          }
          
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
            opacity: 1;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
          }
          
          .card--border-glow:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${glowColor}, 0.2);
          }
          
          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${glowColor}, 0.2);
            border-radius: 50%;
            z-index: -1;
          }
          
          .particle-container:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(${glowColor}, 0.2);
          }
          
          .text-clamp-1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .text-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          @media (max-width: 599px) {
            .card-responsive {
              grid-template-columns: 1fr;
              width: 90%;
              margin: 0 auto;
              padding: 0.5rem;
            }
            
            .card-responsive .card {
              width: 100%;
              min-height: 180px;
            }
          }
        `}
      </style>

      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        {/* First Grid element */}
        <div
          className={
            "col-span-2 card flex flex-col relative w-full max-w-full p-5 rounded-4xl  font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
          }
          ref={(el) => {
            if (!el) return;

            const handleMouseMove = (e: MouseEvent) => {
              if (shouldDisableAnimations) return;

              const rect = el.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;

              if (enableTilt) {
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;

                gsap.to(el, {
                  rotateX,
                  rotateY,
                  duration: 0.1,
                  ease: "power2.out",
                  transformPerspective: 1000,
                });
              }

              if (enableMagnetism) {
                const magnetX = (x - centerX) * 0.05;
                const magnetY = (y - centerY) * 0.05;

                gsap.to(el, {
                  x: magnetX,
                  y: magnetY,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }
            };

            const handleMouseLeave = () => {
              if (shouldDisableAnimations) return;

              if (enableTilt) {
                gsap.to(el, {
                  rotateX: 0,
                  rotateY: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }

              if (enableMagnetism) {
                gsap.to(el, {
                  x: 0,
                  y: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }
            };

            const handleClick = (e: MouseEvent) => {
              if (!clickEffect || shouldDisableAnimations) return;

              const rect = el.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              const maxDistance = Math.max(
                Math.hypot(x, y),
                Math.hypot(x - rect.width, y),
                Math.hypot(x, y - rect.height),
                Math.hypot(x - rect.width, y - rect.height),
              );

              const ripple = document.createElement("div");
              ripple.style.cssText = `
                      position: absolute;
                      width: ${maxDistance * 2}px;
                      height: ${maxDistance * 2}px;
                      border-radius: 50%;
                      background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                      left: ${x - maxDistance}px;
                      top: ${y - maxDistance}px;
                      pointer-events: none;
                      z-index: 1000;
                    `;

              el.appendChild(ripple);

              gsap.fromTo(
                ripple,
                {
                  scale: 0,
                  opacity: 1,
                },
                {
                  scale: 1,
                  opacity: 0,
                  duration: 0.8,
                  ease: "power2.out",
                  onComplete: () => ripple.remove(),
                },
              );
            };

            el.addEventListener("mousemove", handleMouseMove);
            el.addEventListener("mouseleave", handleMouseLeave);
            el.addEventListener("click", handleClick);
          }}
        >
          <div className="flex items-center ">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mr-4">
              Skills
            </span>
            <div className="w-16 h-0.5 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight ">
            Evolving Technical Stack & Core Competencies
          </h2>
        </div>

        {/* CARD DATA */}
        {cardData.map((card, index) => {
          const baseClassName = ` card flex flex-col justify-between relative min-h-10rem w-full max-w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${
            enableBorderGlow ? "card--border-glow" : ""
          }`;

          const cardStyle = {
            backgroundColor: card.color || "var(--background-dark)",
            borderColor: "var(--border-color)",
            color: "var(--white)",
            "--glow-x": "50%",
            "--glow-y": "50%",
            "--glow-intensity": "0",
            "--glow-radius": "200px",
          } as React.CSSProperties;

          return (
            <div
              key={index}
              className={baseClassName}
              style={cardStyle}
              ref={(el) => {
                if (!el) return;

                const handleMouseMove = (e: MouseEvent) => {
                  if (shouldDisableAnimations) return;

                  const rect = el.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;

                  if (enableTilt) {
                    const rotateX = ((y - centerY) / centerY) * -10;
                    const rotateY = ((x - centerX) / centerX) * 10;

                    gsap.to(el, {
                      rotateX,
                      rotateY,
                      duration: 0.1,
                      ease: "power2.out",
                      transformPerspective: 1000,
                    });
                  }

                  if (enableMagnetism) {
                    const magnetX = (x - centerX) * 0.05;
                    const magnetY = (y - centerY) * 0.05;

                    gsap.to(el, {
                      x: magnetX,
                      y: magnetY,
                      duration: 0.3,
                      ease: "power2.out",
                    });
                  }
                };

                const handleMouseLeave = () => {
                  if (shouldDisableAnimations) return;

                  if (enableTilt) {
                    gsap.to(el, {
                      rotateX: 0,
                      rotateY: 0,
                      duration: 0.3,
                      ease: "power2.out",
                    });
                  }

                  if (enableMagnetism) {
                    gsap.to(el, {
                      x: 0,
                      y: 0,
                      duration: 0.3,
                      ease: "power2.out",
                    });
                  }
                };

                const handleClick = (e: MouseEvent) => {
                  if (!clickEffect || shouldDisableAnimations) return;

                  const rect = el.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  const maxDistance = Math.max(
                    Math.hypot(x, y),
                    Math.hypot(x - rect.width, y),
                    Math.hypot(x, y - rect.height),
                    Math.hypot(x - rect.width, y - rect.height),
                  );

                  const ripple = document.createElement("div");
                  ripple.style.cssText = `
                      position: absolute;
                      width: ${maxDistance * 2}px;
                      height: ${maxDistance * 2}px;
                      border-radius: 50%;
                      background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                      left: ${x - maxDistance}px;
                      top: ${y - maxDistance}px;
                      pointer-events: none;
                      z-index: 1000;
                    `;

                  el.appendChild(ripple);

                  gsap.fromTo(
                    ripple,
                    {
                      scale: 0,
                      opacity: 1,
                    },
                    {
                      scale: 1,
                      opacity: 0,
                      duration: 0.8,
                      ease: "power2.out",
                      onComplete: () => ripple.remove(),
                    },
                  );
                };

                el.addEventListener("mousemove", handleMouseMove);
                el.addEventListener("mouseleave", handleMouseLeave);
                el.addEventListener("click", handleClick);
              }}
            >
              {card.map((toolSet, index) => {
                return (
                  <>
                    <div className="card__header flex justify-between gap-3 relative text-white ">
                      <span className="card__label text-base">
                        {toolSet.label}
                      </span>
                    </div>
                    <div className="card__content flex flex-col relative text-white">
                      <h3
                        className={`card__title font-normal text-base m-0 mb-1 ${
                          textAutoHide ? "text-clamp-1" : ""
                        }`}
                      >
                        {toolSet.title}
                      </h3>
                      <p
                        className={`card__description text-xs leading-5 opacity-90 ${
                          textAutoHide ? "text-clamp-2" : ""
                        }`}
                      >
                        {toolSet.description}
                      </p>

                      <ul className="flex flex-wrap gap-2">
                        {toolSet.tools?.map((tool, index) => (
                          <li>
                            <Badge variant={"default"}>{tool}</Badge>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                );
              })}
            </div>
          );
        })}

        {/* Last Grid  element*/}
        <div
          className={
            "col-span-2 flex flex-col justify-between relative w-full max-w-full pt-5 pl-5 rounded-4xl  font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
          }
          ref={(el) => {
            if (!el) return;

            const handleMouseMove = (e: MouseEvent) => {
              if (shouldDisableAnimations) return;

              const rect = el.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;

              if (enableTilt) {
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;

                gsap.to(el, {
                  rotateX,
                  rotateY,
                  duration: 0.1,
                  ease: "power2.out",
                  transformPerspective: 1000,
                });
              }

              if (enableMagnetism) {
                const magnetX = (x - centerX) * 0.05;
                const magnetY = (y - centerY) * 0.05;

                gsap.to(el, {
                  x: magnetX,
                  y: magnetY,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }
            };

            const handleMouseLeave = () => {
              if (shouldDisableAnimations) return;

              if (enableTilt) {
                gsap.to(el, {
                  rotateX: 0,
                  rotateY: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }

              if (enableMagnetism) {
                gsap.to(el, {
                  x: 0,
                  y: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }
            };

            const handleClick = (e: MouseEvent) => {
              if (!clickEffect || shouldDisableAnimations) return;

              const rect = el.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              const maxDistance = Math.max(
                Math.hypot(x, y),
                Math.hypot(x - rect.width, y),
                Math.hypot(x, y - rect.height),
                Math.hypot(x - rect.width, y - rect.height),
              );

              const ripple = document.createElement("div");
              ripple.style.cssText = `
                      position: absolute;
                      width: ${maxDistance * 2}px;
                      height: ${maxDistance * 2}px;
                      border-radius: 50%;
                      background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                      left: ${x - maxDistance}px;
                      top: ${y - maxDistance}px;
                      pointer-events: none;
                      z-index: 1000;
                    `;

              el.appendChild(ripple);

              gsap.fromTo(
                ripple,
                {
                  scale: 0,
                  opacity: 1,
                },
                {
                  scale: 1,
                  opacity: 0,
                  duration: 0.8,
                  ease: "power2.out",
                  onComplete: () => ripple.remove(),
                },
              );
            };

            el.addEventListener("mousemove", handleMouseMove);
            el.addEventListener("mouseleave", handleMouseLeave);
            el.addEventListener("click", handleClick);
          }}
        >
          <div>
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mr-4">
              Other Skills
            </span>
            {lastCardData.map((toolSet, index) => {
              return (
                <>
                  <div className="card__header flex justify-between gap-3 relative text-white ">
                    <span className="card__label text-base">
                      {toolSet.label}
                    </span>
                  </div>
                  <div className="card__content flex flex-col relative text-white">
                    <h3
                      className={`card__title font-normal text-base m-0 mb-1 ${
                        textAutoHide ? "text-clamp-1" : ""
                      }`}
                    >
                      {toolSet.title}
                    </h3>
                    <p
                      className={`card__description text-xs leading-5 opacity-90 ${
                        textAutoHide ? "text-clamp-2" : ""
                      }`}
                    >
                      {toolSet.description}
                    </p>

                    <ul className="flex flex-wrap gap-2">
                      {toolSet.tools?.map((tool, index) => (
                        <li>
                          <Badge variant={"secondary"}>{tool}</Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              );
            })}
          </div>
          <div className="mx-auto w-fit inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
              Continuously Learning New Standards
            </span>
          </div>
        </div>
      </BentoCardGrid>
    </>
  );
};

export default MagicBento;
