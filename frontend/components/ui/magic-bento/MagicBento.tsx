"use client";
import { Stack } from "@/app/types";
import React, { useRef } from "react";
import BentoCards from "./bento-card";
import { GlobalSpotlight } from "./bento-spotlight";
import { BentoCardGrid } from "./BentoGrid";
import { useMagicBento } from "./hook/useMagicBento";
import StackCard from "./StackCard";

export interface BentoProps {
  stacks: Stack[];
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

const DEFAULT_GLOW_COLOR = "218, 60, 40";

const MagicBento: React.FC<BentoProps> = (props) => {
  const {
    stacks,
    enableSpotlight,
    disableAnimations,
    spotlightRadius,
    glowColor = DEFAULT_GLOW_COLOR,
  } = props;

  const gridRef = useRef<HTMLDivElement>(null);
  const { cardRef: headerRef } = useMagicBento(props);
  const { cardRef: footerRef } = useMagicBento(props);

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
            --background-dark: var(--card-surface);
            --white: hsl(0, 0%, 100%);
            --purple-primary: rgba(132, 0, 255, 1);
            --purple-glow: rgba(132, 0, 255, 0.2);
            --purple-border: rgba(132, 0, 255, 0.8);
          }
          
          .card-responsive {
            width: 100%;
            margin: 0 auto;
          }
          

        
          @media (min-width: 1024px) {
            .card-responsive {
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
              width: 100%;
            }
            
            .card-responsive .card {
              width: 100%;
              min-height: 180px;
            }
          }
        `}
      </style>

      <GlobalSpotlight
        gridRef={gridRef}
        disableAnimations={disableAnimations}
        enabled={enableSpotlight}
        spotlightRadius={spotlightRadius}
        glowColor={glowColor}
      />

      <BentoCardGrid gridRef={gridRef}>
        {/* Heading | First Grid element */}
        <div
          className={
            "sm:col-span-2  card flex flex-col justify-center relative w-full max-w-full lg:p-8 md:rounded-4xl font-light lg:overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
          }
          ref={headerRef}
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
        {stacks && (
          <>
            <BentoCards
              stacksList={stacks.filter(
                (stack) =>
                  stack.stackId === "front-end" || stack.stackId === "back-end"
              )}
              {...props}
            />
            <BentoCards
              stacksList={stacks.filter(
                (stack) => stack.stackId === "tools-and-dev-ops"
              )}
              {...props}
            />
            <BentoCards
              stacksList={stacks.filter(
                (stack) => stack.stackId === "programming-languages"
              )}
              {...props}
            />
          </>
        )}

        {/* Last Card Grid element*/}
        <div
          className={
            "lg:col-span-2 px-8 lg:px-0 flex flex-col justify-between relative w-full max-w-full lg:pt-8 lg:pl-8 rounded-4xl  font-light lg:overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
          }
          ref={footerRef}
        >
          <div>
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mr-4">
              Other Skills
            </span>

            {(() => {
              const languageStack = stacks.find(
                (stack) => stack.stackId === "languages"
              );
              return languageStack ? (
                <div className="py-10">
                  <StackCard stackItem={languageStack} />
                </div>
              ) : null;
            })()}
          </div>
        </div>
      </BentoCardGrid>
    </>
  );
};

export default MagicBento;
