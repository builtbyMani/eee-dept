"use client";

import dynamic from "next/dynamic";

const FieldHorizontalRows = dynamic(
  () => import("@/components/originkit/ui/field-horizontal-rows-custom-style-3"),
  { ssr: false }
);

interface FieldHorizontalRowsBgProps {
  className?: string;
  opacity?: number;
}

export default function FieldHorizontalRowsBg({
  className = "",
  opacity = 0.6,
}: FieldHorizontalRowsBgProps) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
      style={{ minWidth: 0, maxWidth: "100vw", maxHeight: "100vh" }}
    >
      <div
        className="w-full h-full relative"
        style={{ opacity }}
      >
        <FieldHorizontalRows
          background="transparent"
          baseColor="transparent"
          accentColor="#3F4474"
          speed={32}
          scale={42.5}
          hover={167}
          activity={100}
          slant={45}
          ripple={22}
          advanced={{
            seed: 10,
            grain: 0,
            easeMs: 70,
            gapMax: 110,
            gapMin: 45,
            crawlMax: 400,
            crawlMin: 240,
            lowDepth: 100,
            rampFade: 110,
            rowCount: 8,
            vignette: 100,
            hoverGlow: 200,
            maxCrawls: 6,
            rightward: 85,
            rowOffset: 0,
            tickPitch: 2,
            tickWidth: 29,
            crawlSpeed: 640,
            plateauMax: 480,
            plateauMin: 80,
            rippleTail: 400,
            rippleTint: 100,
            rippleWave: 200,
            tickLength: 25,
            crawlsPerMin: 120,
            pointerPress: 45,
            rippleFadeMs: 100,
            shoulderLeft: 45,
            shoulderRight: 60,
          }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            minWidth: 0,
            minHeight: 0,
          }}
        />
      </div>

      {/* Gentle top & bottom fade so rows gracefully dissolve under the pill navbar and footer */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#EEEBDA] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#EEEBDA] to-transparent pointer-events-none" />
    </div>
  );
}
