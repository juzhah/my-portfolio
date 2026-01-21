"use client";
import { Stack } from "@/app/types";
import { useMagicBento } from "./hook/useMagicBento";
import StackCard from "./StackCard";

export interface BentoItem {
  title: string;
  description?: string;
  label?: string;
  tools?: (string | { name: string })[];
  color?: string;
}

interface BentoCardsProps {
  stacksList: Stack[];
  textAutoHide?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

export default function BentoCards({
  stacksList,
  textAutoHide,
  enableSpotlight,
  enableBorderGlow,
  disableAnimations,
  spotlightRadius,
  enableTilt,
  glowColor,
  clickEffect,
  enableMagnetism,
}: BentoCardsProps) {
  const { cardRef, enableBorderGlow: borderGlow } = useMagicBento({
    textAutoHide,
    enableSpotlight,
    enableBorderGlow,
    disableAnimations,
    spotlightRadius,
    enableTilt,
    glowColor,
    clickEffect,
    enableMagnetism,
  });

  return (
    <div
      className={` card flex flex-col gap-y-12 relative min-h-10rem w-full max-w-full p-8  rounded-2xl border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${
        borderGlow ? "card--border-glow" : ""
      }`}
      style={
        {
          backgroundColor: /* card.color || */ "var(--background-dark)",
          borderColor: "var(--border-color)",
          color: "var(--white)",
          "--glow-x": "50%",
          "--glow-y": "50%",
          "--glow-intensity": "0",
          "--glow-radius": "200px",
        } as React.CSSProperties
      }
      ref={cardRef}
    >
      {stacksList.map((stack, idx) => {
        return <StackCard stackItem={stack} key={idx} />;
      })}
    </div>
  );
}
