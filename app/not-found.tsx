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
            "linear-gradient(to right, #CECAB3 1px, transparent 1px), linear-gradient(to bottom, #CECAB3 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Wine Red Radial Glow */}
      <div
        className="pointer-events-none absolute w-[450px] h-[450px] rounded-full bg-[#282B4A]/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl w-full text-center">
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#282B4A]/10 border border-[#282B4A]/30 text-[#282B4A] font-mono text-xs uppercase tracking-widest mb-6 rounded-full font-medium">
          <span className="w-2 h-2 rounded-full bg-[#282B4A] animate-ping" />
          <span>STATUS: 404 // CIRCUIT OPEN</span>
        </div>

        {/* Big Glitch Headline */}
        <h1 className="text-4xl sm:text-6xl font-semibold text-[#121317] font-heading tracking-tight leading-none mb-4">
          Power Grid Node <br />
          <span className="text-[#282B4A]">Not Located.</span>
        </h1>

        {/* Technical Telemetry Diagnostics Box */}
        <div className="my-8 p-5 rounded-xl border border-[#CECAB3] bg-[#E6E2CC]/80 font-mono text-left text-xs space-y-2 text-[#474851] shadow-sm">
          <div className="flex justify-between border-b border-[#CECAB3] pb-1.5 font-medium">
            <span className="text-[#121317]">DIAGNOSTIC BUS:</span>
            <span className="text-[#282B4A]">SIGNAL LOSS DETECTED</span>
          </div>
          <div className="flex justify-between">
            <span>GRID POTENTIAL:</span>
            <span className="text-[#121317] font-semibold">0.00 V AC</span>
          </div>
          <div className="flex justify-between">
            <span>TERMINATION IMPEDANCE:</span>
            <span className="text-[#121317] font-semibold">∞ MΩ (OPEN NODE)</span>
          </div>
          <div className="flex justify-between">
            <span>CARRIER FREQUENCY:</span>
            <span className="text-[#121317] font-semibold">0.00 Hz (DE-ENERGIZED)</span>
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#33343B] leading-relaxed mb-8">
          The transmission line you requested is not connected to any active student machine, lab apparatus, or department resource.
        </p>

        {/* CTA Button */}
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#282B4A] hover:bg-[#3F4474] text-white font-mono text-xs uppercase tracking-widest transition-all shadow-[0_4px_16px_rgba(40,43,74,0.25)] cursor-pointer rounded-xl font-medium"
        >
          <span>← Reconnect To Department Grid</span>
        </Link>
      </div>
    </div>
  );
}
