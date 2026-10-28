"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { settleSpring, tactileSpring } from "@/components/motion/SpringPhysics";

export default function HodSection() {
  return (
    <section className="py-24 sm:py-32 border-b border-[#262626] bg-[#0c0c0c] relative overflow-hidden">
      {/* Background Ambient Glow & Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-[#f5a623]/5 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <p className="mono-label text-[#f5a623] mb-3">
            The Catalyst Behind Our Machine Culture
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tighter leading-tight max-w-4xl">
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
            className="lg:col-span-5 glass-card p-8 sm:p-10 relative overflow-hidden group"
          >
            <div className="flex items-center justify-between gap-4 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f5a623]/15 border border-[#f5a623]/40 text-[#f5a623] font-mono text-xs uppercase tracking-wider font-medium">
                ★ HEAD OF THE DEPARTMENT
              </span>
              <span className="font-mono text-xs text-[#808080]">ESTD. 1965</span>
            </div>

            {/* Photo Container */}
            <div className="relative aspect-square w-full border border-[#262626] bg-[#141414] mb-8 overflow-hidden">
              <Image
                src="/images/dr-phani-shree.png"
                alt="Dr. K. H. Phani Shree — Head of Department, EEE, JNTUH UCESTH"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Name & Designation */}
            <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight mb-2">
              Dr. K. H. Phani Shree
            </h3>
            <p className="text-sm font-mono text-[#00e5ff] mb-2">
              Professor &amp; Head of Department
            </p>
            <p className="text-xs text-[#808080] leading-relaxed mb-6">
              Department of Electrical &amp; Electronics Engineering<br />
              JNTUH University College of Engineering Science &amp; Technology
            </p>

            {/* Core Leadership Milestones */}
            <div className="space-y-2 pt-6 border-t border-[#262626] text-xs font-mono text-[#c4c4c4]">
              <div className="flex items-start gap-2">
                <span className="text-[#f5a623]">•</span>
                <span>Faculty Mentor — Hexawatts Racing Team (Formula Bharat)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#f5a623]">•</span>
                <span>Founding Patron — AËTOS Drone, AV Platform &amp; Rover Teams</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#f5a623]">•</span>
                <span>Distinguished Speaker — ICPS-2025 WIE Keynote, IIT Hyderabad</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Vision & Impact Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...settleSpring, delay: 0.15 }}
            className="lg:col-span-7 space-y-10"
          >
            {/* The Vision Statement / Pull-Quote */}
            <div className="border-l-2 border-[#1f3fff] pl-6 sm:pl-8 py-2">
              <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white leading-relaxed tracking-tight">
                &ldquo;Engineering education stops being abstract the moment a student
                smells solder, designs an inverter from silicon up, and watches their own
                machine compete on the national stage.&rdquo;
              </p>
              <p className="font-mono text-xs text-[#00e5ff] uppercase tracking-wider mt-4">
                — Dr. K. H. Phani Shree · Guiding Philosophy
              </p>
            </div>

            {/* The Narrative Story of How the Teams Took Birth */}
            <div className="space-y-5 text-base sm:text-lg text-[#c4c4c4] leading-relaxed">
              <p>
                Every active student hardware project featured on this portal was born
                under the direct encouragement, administrative backing, and mentorship of
                our Head of the Department, <span className="text-white font-medium">Dr. K. H. Phani Shree</span>.
              </p>
              <p className="text-[#808080] text-sm sm:text-base">
                Recognizing that classical textbook learning cannot substitute for hands-on
                design challenges, she broke departmental silos to create dedicated lab spaces,
                facilitated MoUs with industry leaders like Varcas EV, and championed student
                autonomy to build real Formula race cars, ISRO-bound autonomous drones,
                drive-by-wire vehicles, and planetary rovers.
              </p>
              <p className="text-[#808080] text-sm sm:text-base">
                Her leadership spearheaded the department&apos;s Diamond Jubilee (60 years
                of engineering excellence), inspired the winning of the landmark{" "}
                <span className="text-white">₹15 Lakh central MSME 5.0 grant</span>, and
                cemented JNTUH EEE as a powerhouse of student-led innovation across India.
              </p>
            </div>

            {/* 3 Strategic Pillars of Leadership */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#262626]">
              <div className="p-5 border border-[#262626] bg-[#090909]">
                <span className="font-mono text-xs text-[#f5a623] block mb-2">01 // CULTURE</span>
                <h4 className="text-base text-white font-medium mb-1.5">Project-First Learning</h4>
                <p className="text-xs text-[#808080] leading-relaxed">
                  Moving from rote academic exercises to national competition standards.
                </p>
              </div>

              <div className="p-5 border border-[#262626] bg-[#090909]">
                <span className="font-mono text-xs text-[#00e5ff] block mb-2">02 // ALLIANCES</span>
                <h4 className="text-base text-white font-medium mb-1.5">Cross-Dept Synergies</h4>
                <p className="text-xs text-[#808080] leading-relaxed">
                  Seamless collaboration between Electrical, Mechanical, and Industry partners.
                </p>
              </div>

              <div className="p-5 border border-[#262626] bg-[#090909]">
                <span className="font-mono text-xs text-white block mb-2">03 // GRANTS</span>
                <h4 className="text-base text-white font-medium mb-1.5">MSME &amp; Research</h4>
                <p className="text-xs text-[#808080] leading-relaxed">
                  Empowering student patents, start-ups, and ₹15 Lakh central grant funding.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
