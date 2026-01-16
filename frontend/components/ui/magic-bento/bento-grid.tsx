"use client";

import React, { useRef } from "react";
import { Badge } from "../badge";
import { GlobalSpotlight } from "./bento-spotlight";
import { BentoCardGrid } from "./BentoGrid";
import { useMagicBento } from "./hook/useMagicBento";
import BentoCards, { BentoItem } from "./bento-card";
import StackCard from "./StackCard";
import { getStacks } from "@/app/data/get-skills";
import { Stack } from "@/app/types";

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

const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";

const MagicBento: React.FC<BentoProps> = async (props) => {
  const {
    stacks,
    textAutoHide,
    enableSpotlight,
    enableBorderGlow,
    disableAnimations,
    spotlightRadius,
    enableTilt,
    glowColor = DEFAULT_GLOW_COLOR,
    clickEffect,
    enableMagnetism,
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
            "col-span-2 card flex flex-col relative w-full max-w-full p-5 rounded-4xl  font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
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
                  stack.stackId === "front-end" || stack.stackId === "back-end",
              )}
              {...props}
            />
            <BentoCards
              stacksList={stacks.filter(
                (stack) => stack.stackId === "tools-and-dev-ops",
              )}
              {...props}
            />
            <BentoCards
              stacksList={stacks.filter(
                (stack) => stack.stackId === "programming-languages",
              )}
              {...props}
            />
          </>
        )}

        {/* Last Card Grid element*/}
        <div
          className={
            "col-span-2 flex flex-col justify-between relative w-full max-w-full pt-5 pl-5 rounded-4xl  font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
          }
          ref={footerRef}
        >
          <div>
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mr-4">
              Other Skills
            </span>
            {/* {lastCardData.map((toolSet, index) => {
              return (
                <div key={index}>
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
                        <li key={index}>
                          <Badge variant={"secondary"}>
                            {typeof tool === "string" ? tool : tool.name}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })} */}
            {(() => {
              const languageStack = stacks.find(
                (stack) => stack.stackId === "languages",
              );
              return languageStack ? (
                <div className="py-10">
                  <StackCard stackItem={languageStack} />
                </div>
              ) : null;
            })()}
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
