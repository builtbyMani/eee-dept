"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { settleSpring } from "@/components/motion/SpringPhysics";

interface AchievementItem {
  id: string;
  category: "GRANT" | "HACKATHON" | "EXPO" | "INSTITUTIONAL";
  categoryLabel: string;
  badge: string;
  statCallout: string;
  title: string;
  students: string;
  summary: string;
  date: string;
  link?: string;
  accentColor: "wine" | "crimson" | "white" | "rose";
}

const ALL_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "msme-grant",
    category: "GRANT",
    categoryLabel: "CENTRAL GOVT RESEARCH GRANT",
    badge: "MSME IDEA HACKATHON 5.0",
    statCallout: "₹15,00,000",
    title: "National Grant for Smart IoT & Solar Home Automation",
    students: "Ms. Lollati Jeevana (3rd Year EEE) · Mentor: Dr. M. Surya Kalavathi",
    summary:
      "Selected for ₹15 Lakh national financial assistance under MSME Idea Hackathon 5.0. Project integrates IoT smart home automation with intelligent solar PV power scheduling. Felicitated in the presence of Principal Dr. G. V. Narasimha Reddy and Dr. K. Naga Sujatha.",
    date: "2026",
    accentColor: "crimson",
  },
  {
    id: "smart-powerathon",
    category: "HACKATHON",
    categoryLabel: "NATIONAL POWERATHON",
    badge: "3RD PLACE PODIUM",
    statCallout: "PODIUM WIN",
    title: "Smart Agri-Tech Automated Telemetry Platform",
    students: "Manasa Patra & Manikanta Srigade (AËTOS Drone Leads)",
    summary:
      "Developed a sensor-guided automated precision irrigation and soil-health telemetry system at Anurag University's Smart Powerathon, beating dozens of collegiate teams to secure third place.",
    date: "2026",
    accentColor: "wine",
  },
  {
    id: "buildathon",
    category: "HACKATHON",
    categoryLabel: "ENGINEERS' DAY BUILDATHON 2.0",
    badge: "TOP 5 FINALIST",
    statCallout: "TOP 5 / 50",
    title: "Green Corridor Ambulance Network with V2V & V2I Priority",
    students: "Manikanta Srigade, Manasa Patra, Chakri Majji",
    summary:
      "Engineered an automated emergency transit corridor system using Vehicle-to-Vehicle (V2V) and Vehicle-to-Infrastructure (V2I) RF signalling to dynamically clear traffic intersections for ambulances.",
    date: "2026",
    accentColor: "crimson",
  },
  {
    id: "team-nino",
    category: "EXPO",
    categoryLabel: "AHCSSC '26 PROJECT EXPO",
    badge: "FIRST PLACE",
    statCallout: "1ST PRIZE",
    title: "Team NINO — Expressive Interactive AI Companion Robot",
    students: "N. S. Koustubh (AËTOS Drone Team) & Deavanssh Bhhati",
    summary:
      "Won First Place at the Anurag University Project Expo for Team NINO, an expressive robotic companion that combines multi-axis facial kinematics, computer vision emotion tracking, and onboard neural inference.",
    date: "2026",
    accentColor: "rose",
  },
  {
    id: "spoorthi-holter",
    category: "HACKATHON",
    categoryLabel: "IDEATHON SPOORTHI 2026",
    badge: "2ND PRIZE",
    statCallout: "2ND PRIZE",
    title: "12-Lead Ambulatory Holter ECG Monitoring System",
    students: "M. Dharani (AV Lead) & Divya Dasari (AV Team)",
    summary:
      "Awarded Second Prize at the National Level Technical Symposium for developing a compact, ultra-low-noise 12-lead ambulatory ECG acquisition circuit with onboard telemetry.",
    date: "2026",
    accentColor: "crimson",
  },
  {
    id: "icps-keynote",
    category: "INSTITUTIONAL",
    categoryLabel: "IEEE ICPS-2025 AT IIT HYDERABAD",
    badge: "WIE DISTINGUISHED SPEAKER",
    statCallout: "KEYNOTE",
    title: "Dr. K. H. Phani Shree Keynote Address at IIT Hyderabad",
    students: "Prof. & HOD Dr. K. H. Phani Shree (EEE, JNTUH)",
    summary:
      "Delivered the Women In Engineering (WIE) keynote at the 11th IEEE International Conference on Power Systems (ICPS-2025) on grid integration, intelligent microgrids, and the future of power systems.",
    date: "Dec 2025",
    link: "https://www.linkedin.com/posts/ieee-pes-ias-hyderabad-section-606ba3128_icps2025-ieee-powerandenergy-activity-7393282245781987328-iK2I/",
    accentColor: "wine",
  },
  {
    id: "diamond-jubilee",
    category: "INSTITUTIONAL",
    categoryLabel: "GLOBAL ALUMNI DIAMOND JUBILEE",
    badge: "1965 – 2025",
    statCallout: "60 YEARS",
    title: "Diamond Jubilee Celebrations & Faculty Felicitation",
    students: "Department of EEE · JNTUH UCESTH",
    summary:
      "Celebrated six decades of foundational engineering. HOD Dr. K. H. Phani Shree presented the department's technological roadmaps; retired doyens Dr. C.H. Radhakrishna, Dr. S.V. Jayaram Kumar, Dr. S.S. Tulasi Ram, Dr. G. Tulasi Ram Das & Dr. N. Yadaiah were felicitated.",
    date: "24 Nov 2025",
    link: "https://www.linkedin.com/posts/diamond-jubilee-celebrations-of-jntuh-ucesth-ugcPost-7398737329240145920-yx7A/",
    accentColor: "crimson",
  },
  {
    id: "tedx-jntu",
    category: "INSTITUTIONAL",
    categoryLabel: "GLOBAL IDEAS CONVENING",
    badge: "TEDxJNTU HYDERABAD",
    statCallout: "TEDx EVENT",
    title: "TEDxJNTU Hyderabad: 'Delta — Change is Constant'",
    students: "Faculty Coord: Dr. K. Naga Sujatha · Student Leads: Saathvik V. & Sri Nithya E.",
    summary:
      "Successfully organized the official TEDx conference on campus under university leadership, welcoming prominent thinkers, technologists, and entrepreneurs with extensive state-wide media coverage.",
    date: "27 Dec 2025",
    link: "https://www.linkedin.com/posts/tedxjntuhyderabad-eeejntuh-departmentpride-ugcPost-7410599425556971520-yZ98/",
    accentColor: "white",
  },
];

const FILTER_TABS = [
  { key: "ALL", label: "All Milestones (8)" },
  { key: "GRANT", label: "Grants & Research" },
  { key: "HACKATHON", label: "Hackathon Podiums" },
  { key: "INSTITUTIONAL", label: "Institutional" },
];

export default function AchievementsShowcase() {
  const [activeTab, setActiveTab] = useState<string>("ALL");

  const filteredItems = ALL_ACHIEVEMENTS.filter((item) => {
    if (activeTab === "ALL") return true;
    if (activeTab === "GRANT") return item.category === "GRANT" || item.category === "EXPO";
    if (activeTab === "HACKATHON") return item.category === "HACKATHON";
    if (activeTab === "INSTITUTIONAL") return item.category === "INSTITUTIONAL";
    return true;
  });

  return (
    <div className="relative">
      {/* Top Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-[#2D141A]">
        {FILTER_TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                isActive ? "text-white font-medium" : "text-[#D4C4C8] hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 bg-[#7F011F] border border-[#A31D36] shadow-[0_0_15px_rgba(127,1,31,0.4)]"
                  transition={settleSpring}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Large Responsive Vertical Grid — NO Horizontal Scrolling */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={settleSpring}
                className="w-full p-8 sm:p-10 border border-[#2D141A] bg-[#0E0608]/95 hover:border-[#7F011F] transition-all flex flex-col justify-between relative group overflow-hidden shadow-[inset_0_0_30px_rgba(127,1,31,0.04)]"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF4D6D] to-transparent opacity-80" />

                <div>
                  {/* Top Header: Tag & Date */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="font-mono text-[11px] text-[#FF5A7A] uppercase tracking-wider font-medium">
                      {item.categoryLabel}
                    </span>
                    <span className="font-mono text-xs text-[#E2D4D8] border border-[#3D1A22] bg-[#1A0A0E] px-2.5 py-0.5">
                      {item.date}
                    </span>
                  </div>

                  {/* Main Callout & Badge Row */}
                  <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                    <div className="font-mono text-3xl sm:text-5xl font-semibold tracking-tight text-white font-heading">
                      {item.statCallout}
                    </div>
                    <span className="font-mono text-xs uppercase px-2.5 py-1 border bg-[#7F011F]/25 border-[#7F011F]/60 text-[#FF4D6D] font-medium shadow-[0_0_12px_rgba(127,1,31,0.3)]">
                      ★ {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white font-heading tracking-tight mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Student & Faculty Names */}
                  <p className="font-mono text-xs text-[#FF85A0] mb-4">
                    {item.students}
                  </p>

                  {/* Narrative Context (High Contrast & Legible) */}
                  <p className="text-sm sm:text-base text-[#E8DCE0] leading-relaxed mb-6 font-normal">
                    {item.summary}
                  </p>
                </div>

                {/* Bottom Verified Status or LinkedIn Link */}
                <div className="pt-6 border-t border-[#2D141A] flex items-center justify-between font-mono text-xs">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F0E6E9] hover:text-white inline-flex items-center gap-2 transition-colors group/link font-medium"
                    >
                      <span>Verified Post on Department LinkedIn</span>
                      <span className="text-[#FF4D6D] transition-transform group-hover/link:translate-x-1">↗</span>
                    </a>
                  ) : (
                    <span className="text-[#A38890]">
                      OFFICIAL DEPARTMENT ARCHIVE · 2026
                    </span>
                  )}
                  <span className="text-[#D4C4C8]">
                    #{String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
