"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface WatermarkBackgroundProps {
  imageSrc: string;
  altText: string;
  opacity?: number;
  isSvg?: boolean;
}

export default function WatermarkBackground({
  imageSrc,
  altText,
  opacity = 0.16,
}: WatermarkBackgroundProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0 flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Background Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial Gradient Vignette so the logo fades into the dark borders */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#090909_85%)] z-10" />

      {/* Floating Animated Watermark Emblem */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[min(90vw,850px)] aspect-[16/10] z-0 flex items-center justify-center"
      >
        <Image
          src={imageSrc}
          alt={altText}
          fill
          priority
          sizes="(max-width: 1200px) 90vw, 850px"
          className="object-contain filter grayscale contrast-125 brightness-110 drop-shadow-[0_0_80px_rgba(31,63,255,0.15)]"
        />
      </motion.div>
    </div>
  );
}
