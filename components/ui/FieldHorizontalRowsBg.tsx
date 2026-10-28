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
  opacity = 0.42,
}: FieldHorizontalRowsBgProps) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
      style={{ minWidth: 0, maxWidth: "100vw", maxHeight: "100vh" }}
    >
      <div
        className="w-full h-full relative transition-opacity duration-1000"
        style={{ opacity }}
      >
        <FieldHorizontalRows
          background="#090909"
          baseColor="#3D131C"
          accentColor="#7F011F"
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

      {/* Radial and Linear Gradient Vignettes so rows blend into dark wine-red space */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#090909_82%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#090909] via-transparent to-[#090909] pointer-events-none opacity-80" />
    </div>
  );
}
