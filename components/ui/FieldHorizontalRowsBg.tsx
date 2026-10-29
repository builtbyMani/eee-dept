"use client";

import dynamic from "next/dynamic";

const FieldHorizontalRows = dynamic(
  () => import("@/components/originkit/ui/field-horizontal-rows-custom-style"),
  { ssr: false }
);

interface FieldHorizontalRowsBgProps {
  className?: string;
  opacity?: number;
}

export default function FieldHorizontalRowsBg({
  className = "",
  opacity = 0.38,
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
          background="#070707"
          baseColor="#E2E2E2"
          accentColor="#FF2A55"
          speed={24}
          scale={23}
          hover={120}
          activity={75}
          slant={45}
          advanced={{
            rowCount: 12,
            tickPitch: 2,
            tickWidth: 30,
            tickLength: 20,
            maxCrawls: 8,
            crawlSpeed: 480,
            pointerRadius: 90,
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
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#090909] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#090909] to-transparent pointer-events-none" />
    </div>
  );
}
