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
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #D9CAA8 1px, transparent 1px), linear-gradient(to bottom, #D9CAA8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Wine Red Radial Glow */}
      <div
        className="pointer-events-none absolute w-[450px] h-[450px] rounded-full bg-[#7F011F]/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl w-full text-center">
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#7F011F]/10 border border-[#7F011F]/30 text-[#7F011F] font-mono text-xs uppercase tracking-widest mb-6 rounded-full font-medium">
          <span className="w-2 h-2 rounded-full bg-[#7F011F] animate-ping" />
          <span>STATUS: 404 // CIRCUIT OPEN</span>
        </div>

        {/* Big Glitch Headline */}
        <h1 className="text-4xl sm:text-6xl font-semibold text-[#181113] font-heading tracking-tight leading-none mb-4">
          Power Grid Node <br />
          <span className="text-[#7F011F]">Not Located.</span>
        </h1>

        {/* Technical Telemetry Diagnostics Box */}
        <div className="my-8 p-5 rounded-xl border border-[#D9CAA8] bg-[#EFE3C3]/80 font-mono text-left text-xs space-y-2 text-[#554347] shadow-sm">
          <div className="flex justify-between border-b border-[#D9CAA8] pb-1.5 font-medium">
            <span className="text-[#181113]">DIAGNOSTIC BUS:</span>
            <span className="text-[#7F011F]">SIGNAL LOSS DETECTED</span>
          </div>
          <div className="flex justify-between">
            <span>GRID POTENTIAL:</span>
            <span className="text-[#181113] font-semibold">0.00 V AC</span>
          </div>
          <div className="flex justify-between">
            <span>TERMINATION IMPEDANCE:</span>
            <span className="text-[#181113] font-semibold">∞ MΩ (OPEN NODE)</span>
          </div>
          <div className="flex justify-between">
            <span>CARRIER FREQUENCY:</span>
            <span className="text-[#181113] font-semibold">0.00 Hz (DE-ENERGIZED)</span>
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#3E3033] leading-relaxed mb-8">
          The transmission line you requested is not connected to any active student machine, lab apparatus, or department resource.
        </p>

        {/* CTA Button */}
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#7F011F] hover:bg-[#9B1832] text-white font-mono text-xs uppercase tracking-widest transition-all shadow-[0_4px_16px_rgba(127,1,31,0.25)] cursor-pointer rounded-xl font-medium"
        >
          <span>← Reconnect To Department Grid</span>
        </Link>
      </div>
    </div>
  );
}
