import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Circuit Open — Power Grid Node Not Located",
  description:
    "The requested electrical node or route does not exist on the Department of Electrical & Electronics Engineering portal at JNTUH.",
};

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-8 py-20 overflow-hidden">
      {/* Background Subtle Schematic Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #2D141A 1px, transparent 1px), linear-gradient(to bottom, #2D141A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Wine Red Radial Glow */}
      <div
        className="pointer-events-none absolute w-[450px] h-[450px] rounded-full bg-[#7F011F]/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl w-full text-center">
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7F011F]/15 border border-[#7F011F]/40 text-[#FF4D6D] font-mono text-xs uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FF4D6D] animate-ping" />
          <span>STATUS: 404 // CIRCUIT OPEN</span>
        </div>

        {/* Big Glitch Headline */}
        <h1 className="text-4xl sm:text-6xl font-normal text-white font-heading tracking-tight leading-none mb-4">
          Power Grid Node <br />
          <span className="text-[#E2B6BD]">Not Located.</span>
        </h1>

        {/* Technical Telemetry Diagnostics Box */}
        <div className="my-8 p-5 rounded border border-[#2D141A] bg-[#120A0C]/80 font-mono text-left text-xs space-y-2 text-[#A0828A]">
          <div className="flex justify-between border-b border-[#2D141A] pb-1.5">
            <span className="text-[#E2B6BD]">DIAGNOSTIC BUS:</span>
            <span className="text-[#FF4D6D]">SIGNAL LOSS DETECTED</span>
          </div>
          <div className="flex justify-between">
            <span>GRID POTENTIAL:</span>
            <span className="text-white">0.00 V AC</span>
          </div>
          <div className="flex justify-between">
            <span>TERMINATION IMPEDANCE:</span>
            <span className="text-white">∞ MΩ (OPEN NODE)</span>
          </div>
          <div className="flex justify-between">
            <span>CARRIER FREQUENCY:</span>
            <span className="text-white">0.00 Hz (DE-ENERGIZED)</span>
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#A0828A] leading-relaxed mb-8">
          The transmission line you requested is not connected to any active student machine, lab apparatus, or department resource.
        </p>

        {/* CTA Button */}
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#7F011F] hover:bg-[#A31D36] text-white font-mono text-xs uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(127,1,31,0.4)] hover:shadow-[0_0_40px_rgba(255,77,109,0.5)] cursor-pointer"
        >
          <span>← Reconnect To Department Grid</span>
        </Link>
      </div>
    </div>
  );
}
