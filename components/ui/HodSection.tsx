"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { settleSpring, tactileSpring } from "@/components/motion/SpringPhysics";
import { openContactModal } from "./ContactModal";

export default function HodSection() {
  return (
    <section className="py-24 sm:py-32 border-b border-[#D9CAA8] bg-[#EFE3C3]/50 relative overflow-hidden">
      {/* Background Ambient Glow & Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #D9CAA8 1px, transparent 1px), linear-gradient(to bottom, #D9CAA8 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[550px] h-[550px] bg-[#7F011F]/10 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <p className="mono-label text-[#7F011F] mb-3">
            The Catalyst Behind Our Machine Culture
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#181113] font-heading tracking-tight leading-tight max-w-4xl">
            Where student projects <br />
            found their champion.
          </h2>
        </div>

        {/* Main Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Portrait Card & Credentials (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={settleSpring}
            className="lg:col-span-5 bg-[#F5EBD0] p-8 sm:p-10 relative overflow-hidden group border border-[#D9CAA8] shadow-[0_8px_30px_rgba(70,30,40,0.06)] rounded-2xl"
          >
            <div className="flex items-center justify-between gap-4 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#7F011F]/10 border border-[#7F011F]/30 text-[#7F011F] font-mono text-xs uppercase tracking-wider font-semibold">
                ★ HEAD OF THE DEPARTMENT
              </span>
              <span className="font-mono text-xs text-[#6E5D61]">ESTD. 1965</span>
            </div>

            {/* Photo Container */}
            <div className="relative aspect-square w-full border border-[#D9CAA8] bg-[#EAE0C5] mb-8 overflow-hidden rounded-xl">
              <Image
                src="/images/dr-phani-shree.jpg"
                alt="Dr. K. H. Phani Shree — Head of Department, EEE, JNTUH UCESTH"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Name & Designation */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#181113] font-heading tracking-tight mb-2">
              Dr. K. H. Phani Shree
            </h3>
            <p className="text-sm font-mono text-[#7F011F] mb-2 font-semibold">
              Professor &amp; Head of Department
            </p>
            <p className="text-xs text-[#3E3033] leading-relaxed mb-6">
              Department of Electrical &amp; Electronics Engineering<br />
              JNTUH University College of Engineering Science &amp; Technology
            </p>

            {/* Core Leadership Milestones */}
            <div className="space-y-2 pt-6 border-t border-[#D9CAA8] text-xs font-mono text-[#181113]">
              <div className="flex items-start gap-2">
                <span className="text-[#7F011F] font-bold">•</span>
                <span>Faculty Mentor — Hexawatts Racing Team (Formula Bharat)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#7F011F] font-bold">•</span>
                <span>Founding Patron — AËTOS Drone, AV Platform &amp; Rover Teams</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#7F011F] font-bold">•</span>
                <span>Distinguished Speaker — ICPS-2025 WIE Keynote, IIT Hyderabad</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Vision & Impact Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...settleSpring, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between h-full pt-2"
          >
            {/* The Quote Block */}
            <blockquote className="border-l-2 border-[#7F011F] pl-6 sm:pl-8 mb-10 py-1">
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#181113] font-heading tracking-tight leading-relaxed mb-4">
                &ldquo;Engineering education cannot remain confined to chalk and simulation screens.
                When our students solder battery management units, configure CAN-bus nodes,
                and tune flight dynamics for national arenas, that is where authentic engineers are forged.&rdquo;
              </p>
              <cite className="font-mono text-xs text-[#7F011F] uppercase tracking-wider not-italic block font-semibold">
                — Dr. K. H. Phani Shree, Address to Faculty &amp; Industry Advisory Board
              </cite>
            </blockquote>

            {/* Narrative Body */}
            <div className="space-y-6 text-[#3E3033] text-sm sm:text-base leading-relaxed mb-10">
              <p>
                Under Dr. Phani Shree&apos;s administration, the department executed a fundamental pivot
                toward student-led research and high-stakes competitive engineering.
                Recognizing that real industrial mastery requires physical hardware validation,
                she secured dedicated lab bays, equipment budgets, and faculty mentorship
                for four flagship multidisciplinary teams.
              </p>
              <p>
                From guiding <strong className="text-[#181113] font-semibold">Hexawatts Racing</strong> through
                rigorous Formula Bharat scrutineering to sanctioning autonomy testbeds for the{" "}
                <strong className="text-[#181113] font-semibold">AËTOS GNSS-denied drone</strong> and{" "}
                <strong className="text-[#181113] font-semibold">Planetary Rover</strong>, her stewardship
                has positioned JNTUH UCESTH as a premier crucible for electric vehicle mobility and field robotics.
              </p>
            </div>

            {/* Impact Metric Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 bg-[#F5EBD0] border border-[#D9CAA8] rounded-2xl shadow-[0_4px_20px_rgba(70,30,40,0.04)] mb-8">
              <div>
                <p className="font-mono text-2xl sm:text-3xl font-semibold text-[#181113] font-heading mb-1">
                  04
                </p>
                <p className="font-mono text-[11px] text-[#6E5D61] uppercase font-semibold">
                  Flagship Student Hardware Teams
                </p>
              </div>
              <div>
                <p className="font-mono text-2xl sm:text-3xl font-semibold text-[#7F011F] font-heading mb-1">
                  100%
                </p>
                <p className="font-mono text-[11px] text-[#6E5D61] uppercase font-semibold">
                  Student-Led Fabrication
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-mono text-2xl sm:text-3xl font-semibold text-[#181113] font-heading mb-1">
                  60 Yrs
                </p>
                <p className="font-mono text-[11px] text-[#6E5D61] uppercase font-semibold">
                  Departmental Pedigree
                </p>
              </div>
            </div>

            {/* Collaboration CTA Button */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                type="button"
                onClick={() => openContactModal("Industry & Alumni Technical Collaboration")}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={tactileSpring}
                className="px-6 py-3.5 bg-[#7F011F] hover:bg-[#9B1832] text-white font-mono text-xs uppercase tracking-wider flex items-center gap-4 group transition-all shadow-[0_4px_20px_rgba(127,1,31,0.25)] cursor-pointer"
              >
                <span>Propose Collaboration With The Department</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </motion.button>
              <a
                href="https://www.linkedin.com/company/department-of-electrical-and-electronics-engineering-jntuh-ucesth/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#D9CAA8] hover:border-[#7F011F] bg-[#F5EBD0] text-[#3E3033] hover:text-[#7F011F] font-mono text-xs uppercase tracking-wider flex items-center gap-4 transition-colors"
              >
                <span>Department LinkedIn</span>
                <span className="text-[#7F011F]">↗</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
