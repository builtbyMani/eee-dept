"use client";

import Image from "next/image";
import { motion } from "motion/react";
import ProjectCard from "@/components/ui/ProjectCard";
import HodSection from "@/components/ui/HodSection";
import AchievementsShowcase from "@/components/ui/AchievementsShowcase";
import Accordion from "@/components/ui/Accordion";
import FieldHorizontalRowsBg from "@/components/ui/FieldHorizontalRowsBg";
import ElementalLightning from "@/components/ui/ElementalLightning";
import { openContactModal } from "@/components/ui/ContactModal";
import { tactileSpring, settleSpring } from "@/components/motion/SpringPhysics";

const PROJECTS = [
  {
    name: "Hexawatts Racing Team",
    domain: "Formula Student EV",
    headline: "Where Power Meets Geometry, We Drive With Ingenuity.",
    description:
      "Student Formula Student electric racing team designing an open-wheel formula race car from scratch — custom battery pack, BMS, and aero. Formula Bharat 2026 debut (23rd), FB2027 build in progress, autonomous by 2028.",
    imageSrc: "/images/hexawatts-logo.png",
    href: "https://hexawatts-y8t9-flax.vercel.app/",
    isExternal: true,
    highlightBadge: "FORMULA BHARAT",
  },
  {
    name: "AËTOS (ΑΕΤΟΣ)",
    domain: "Aerial Robotics",
    headline: "GNSS-Denied Autonomous Drone for ISRO IROC-U.",
    description:
      "Student aerospace robotics team advancing from functional UAV flight to fully autonomous visual-inertial navigation in GPS-denied environments for the national ISRO Robotics Challenge.",
    imageSrc: "/images/aetos-logo.jpg",
    href: "/aetos",
    isExternal: false,
    highlightBadge: "ISRO IROC-U",
  },
  {
    name: "Autonomous Vehicle",
    domain: "Autonomous Mobility",
    headline: "Drive-by-Wire Conversion & Perception Stack.",
    description:
      "Converting utility chassis into self-driving testbeds. Implementing ROS2 sensor fusion (LiDAR, stereo cameras, IMU), trajectory planning, and fail-safe steer/brake actuators.",
    imageSrc: "/images/av-schematic.svg",
    href: "/autonomous-vehicle",
    isExternal: false,
    highlightBadge: "ROS2 & LIDAR",
  },
  {
    name: "Planetary Rover Team",
    domain: "Ground Robotics",
    headline: "All-Terrain Planetary Rover for the IRC.",
    description:
      "Engineering a Mars/lunar analogue rover with rocker-bogie passive suspension, 5-DoF robotic manipulation arm, and science soil sampling cache for the International Rover Challenge.",
    imageSrc: "/images/rover-schematic.svg",
    href: "/rover",
    isExternal: false,
    highlightBadge: "IRC CHALLENGE",
  },
];

export default function HomePage() {
  return (
    <div className="relative w-full max-w-[100vw] overflow-x-hidden">
      {/* WebGL2 Crawling Rows Background Effect (Background Only) */}
      <FieldHorizontalRowsBg />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[min(90vh,880px)] flex items-center pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 border-b border-[#2D141A]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading, Subhead & Action CTAs (7 cols) */}
            <div className="lg:col-span-7">
              {/* Department Title — Bigger, Bolder, Magari/Raleway, No Rectangle Box */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={settleSpring}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF2E5B] shadow-[0_0_12px_#FF2E5B] animate-pulse shrink-0" />
                <span className="font-heading font-bold text-base sm:text-lg md:text-xl uppercase tracking-wider text-[#FF3358]">
                  Department of Electrical &amp; Electronics Engineering
                </span>
              </motion.div>

              {/* Elemental Lightning Heading */}
              <ElementalLightning className="max-w-3xl mb-6">
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...settleSpring, delay: 0.1 }}
                  className="text-4xl sm:text-6xl lg:text-7xl font-normal text-white font-heading tracking-tight sm:tracking-tighter leading-[1.04]"
                >
                  We learn by building <br className="hidden sm:inline" />
                  machines that work.
                </motion.h1>
              </ElementalLightning>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...settleSpring, delay: 0.15 }}
                className="text-lg sm:text-xl text-[#F0E6E9] max-w-2xl leading-relaxed mb-10"
              >
                <span className="text-white font-medium">
                  Four student teams, four machines in progress.
                </span>{" "}
                Our department puts project-based learning first, so classroom
                electromagnetic and control theory gets battle-tested on real hardware.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...settleSpring, delay: 0.2 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={tactileSpring}
                  className="px-6 py-3.5 bg-[#7F011F] hover:bg-[#A31D36] text-white font-mono text-xs uppercase tracking-wider flex items-center gap-4 group transition-all shadow-[0_0_20px_rgba(127,1,31,0.4)] cursor-pointer"
                >
                  <span>Explore The Machines</span>
                  <span className="transition-transform group-hover:translate-y-0.5">
                    ↓
                  </span>
                </motion.a>
                <motion.a
                  href="#leadership"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={tactileSpring}
                  className="px-6 py-3.5 bg-[#160A0D] text-[#E2B6BD] hover:text-white hover:bg-[#250F15] border border-[#2D141A] font-mono text-xs uppercase tracking-wider flex items-center gap-4 group transition-colors cursor-pointer"
                >
                  <span>Head of Department</span>
                  <span className="transition-transform group-hover:translate-x-1 text-[#FF4D6D]">
                    →
                  </span>
                </motion.a>
                <motion.button
                  type="button"
                  onClick={() => openContactModal("Student Project Team Slot")}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={tactileSpring}
                  className="px-6 py-3.5 border border-[#2D141A] hover:border-[#7F011F] text-[#E2B6BD] hover:text-white font-mono text-xs uppercase tracking-wider flex items-center gap-4 group transition-colors cursor-pointer"
                >
                  <span>Join A Machine Team</span>
                  <span className="transition-transform group-hover:translate-x-1 text-[#FF4D6D]">
                    ↗
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column: Seamless High-Voltage Discharge Image (Enlarged, Zero Borders, No Text) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              {/* Soft Ambient Wine Red Glow Behind Coil */}
              <div
                className="pointer-events-none absolute w-[420px] h-[420px] rounded-full bg-[#7F011F]/25 blur-[120px] z-0"
                aria-hidden="true"
              />

              {/* Masked High-Resolution Transparent Discharge */}
              <div className="relative w-full max-w-[460px] lg:max-w-[520px] aspect-[868/1024] flex items-center justify-center z-10 group">
                <Image
                  src="/images/high-voltage-arc.png"
                  alt="High-Voltage Laboratory Arc Discharge"
                  fill
                  priority
                  sizes="(max-width: 1024px) 440px, 520px"
                  className="object-contain filter contrast-110 brightness-105 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Numerical Spec Strip */}
      <section className="relative z-10 border-b border-[#2D141A] bg-[#0C0608]/95 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#2D141A]">
            <div className="py-8 sm:py-10 pr-6">
              <div className="font-mono text-4xl sm:text-6xl text-white font-light tracking-tight mb-2 font-heading">
                04
              </div>
              <p className="mono-label text-[#D4C4C8]">Active Student Machines</p>
            </div>
            <div className="py-8 sm:py-10 sm:px-6">
              <div className="font-mono text-4xl sm:text-6xl text-[#FF4D6D] font-light tracking-tight mb-2 font-heading">
                ₹15L
              </div>
              <p className="mono-label text-[#D4C4C8]">MSME 5.0 Grant Won</p>
            </div>
            <div className="py-8 sm:py-10 sm:px-6">
              <div className="font-mono text-4xl sm:text-6xl text-[#F0E6E9] font-light tracking-tight mb-2 font-heading">
                60
              </div>
              <p className="mono-label text-[#D4C4C8]">Years of Legacy (1965-2025)</p>
            </div>
            <div className="py-8 sm:py-10 sm:pl-6">
              <div className="font-mono text-4xl sm:text-6xl text-white font-light tracking-tight mb-2 font-heading">
                03
              </div>
              <p className="mono-label text-[#D4C4C8]">National Arenas (FB, ISRO, IRC)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section id="projects" className="relative z-10 py-20 sm:py-28 border-b border-[#2D141A] bg-[#090909]/92 backdrop-blur-[2px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-16">
            <div>
              <p className="mono-label mb-3 text-[#FF4D6D]">Engineering In The Metal</p>
              <h2 className="text-3xl sm:text-5xl font-semibold text-white font-heading tracking-tight leading-tight">
                Four machines, <br />
                built by students.
              </h2>
            </div>
            <p className="text-base sm:text-lg text-[#E8DCE0] leading-relaxed">
              <span className="text-white font-medium">
                Each team owns a real engineering challenge from first sketch to live competition.
              </span>{" "}
              Select a project to explore its architecture, leadership, and team roster.
            </p>
          </div>

          {/* 2x2 Grid of Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {PROJECTS.map((proj, idx) => (
              <ProjectCard key={proj.name} index={idx} {...proj} />
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Head of Department Section */}
      <div id="leadership" className="relative z-10">
        <HodSection />
      </div>

      {/* Upgraded Achievements & MSME Showcase */}
      <section id="achievements" className="relative z-10 py-20 sm:py-28 border-b border-[#2D141A] bg-[#090909]/95 backdrop-blur-[2px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-12">
            <div>
              <p className="mono-label mb-3 text-[#FF4D6D]">Department Record of Excellence</p>
              <h2 className="text-3xl sm:text-5xl font-semibold text-white font-heading tracking-tight leading-tight">
                Achievements, Grants &amp; <br />
                National Podiums.
              </h2>
            </div>
            <p className="text-base sm:text-lg text-[#E8DCE0] leading-relaxed">
              <span className="text-white font-medium">Real hardware produces real results.</span> From central government grants
              to national robotics podiums and 60 years of institutional leadership, explore our verified milestones.
            </p>
          </div>

          {/* Filterable Vertical Card Grid */}
          <AchievementsShowcase />
        </div>
      </section>

      {/* How a Project Runs (Accordion) */}
      <section id="approach" className="relative z-10 py-20 sm:py-28 border-b border-[#2D141A] bg-[#090909]/92 backdrop-blur-[2px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-16">
            <div>
              <p className="mono-label mb-3 text-[#FF4D6D]">Engineering Methodology</p>
              <h2 className="text-3xl sm:text-5xl font-semibold text-white font-heading tracking-tight leading-tight">
                How a project runs.
              </h2>
            </div>
            <p className="text-base sm:text-lg text-[#E8DCE0] leading-relaxed">
              Every team adheres to a structured four-phase development lifecycle.
              What changes is the physical domain and the engineering problem being solved.
            </p>
          </div>

          <Accordion />
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="join" className="relative z-10 py-24 sm:py-32 overflow-hidden bg-[#090909]/95">
        {/* Ambient Wine Red Glow */}
        <div
          className="pointer-events-none absolute -bottom-40 right-10 w-[600px] h-[400px] bg-[#7F011F]/15 blur-[140px]"
          aria-hidden="true"
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="mono-label mb-4 text-[#FF4D6D]">
              Open To Students, Alumni &amp; Industry
            </p>
            <h2 className="text-3xl sm:text-6xl font-semibold text-white font-heading tracking-tight leading-tight mb-6">
              Want to build with us <br />
              or back a machine?
            </h2>
            <p className="text-base sm:text-xl text-[#E8DCE0] leading-relaxed mb-10">
              <span className="text-white font-medium">
                Undergraduate students can inquire with team leads for domain openings.
              </span>{" "}
              Industry partners, alumni, and sponsors can propose technical collaborations,
              mentorship, or lab equipment sponsorships.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <motion.button
                type="button"
                onClick={() => openContactModal("Industry & Alumni Technical Collaboration")}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={tactileSpring}
                className="px-6 py-3.5 bg-[#7F011F] hover:bg-[#A31D36] text-white font-mono text-xs uppercase tracking-wider flex items-center gap-4 group transition-all shadow-[0_0_20px_rgba(127,1,31,0.35)] cursor-pointer"
              >
                <span>Propose Technical Collaboration</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </motion.button>
              <motion.a
                href="https://hexawatts-y8t9-flax.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={tactileSpring}
                className="px-6 py-3.5 bg-[#160A0D] text-[#E2B6BD] hover:text-white hover:bg-[#250F15] border border-[#2D141A] font-mono text-xs uppercase tracking-wider flex items-center gap-4 group transition-colors cursor-pointer"
              >
                <span>Sponsor Hexawatts Racing</span>
                <span className="transition-transform group-hover:translate-x-1 text-[#FF4D6D]">↗</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/department-of-electrical-and-electronics-engineering-jntuh-ucesth/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={tactileSpring}
                className="px-6 py-3.5 border border-[#2D141A] hover:border-[#7F011F] text-[#E8DCE0] hover:text-white font-mono text-xs uppercase tracking-wider flex items-center gap-4 group transition-colors cursor-pointer"
              >
                <span>Department LinkedIn</span>
                <span className="transition-transform group-hover:translate-x-1 text-[#FF4D6D]">↗</span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
