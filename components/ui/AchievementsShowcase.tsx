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
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-[#D9CAA8]">
        {FILTER_TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer rounded-full ${
                isActive ? "text-white font-medium" : "text-[#554347] hover:text-[#181113]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 bg-[#7F011F] rounded-full shadow-[0_4px_16px_rgba(127,1,31,0.25)]"
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
                className="w-full p-8 sm:p-10 border border-[#D9CAA8] bg-[#EFE3C3]/75 hover:border-[#7F011F] transition-all flex flex-col justify-between relative group overflow-hidden shadow-[0_4px_24px_rgba(70,30,40,0.04)] rounded-2xl"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7F011F] to-transparent opacity-80" />

                <div>
                  {/* Top Header: Tag & Date */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="font-mono text-[11px] text-[#7F011F] uppercase tracking-wider font-semibold">
                      {item.categoryLabel}
                    </span>
                    <span className="font-mono text-xs text-[#554347] border border-[#D9CAA8] bg-[#EAE0C5] px-2.5 py-0.5 rounded">
                      {item.date}
                    </span>
                  </div>

                  {/* Main Callout & Badge Row */}
                  <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                    <div className="font-mono text-3xl sm:text-5xl font-semibold tracking-tight text-[#181113] font-heading">
                      {item.statCallout}
                    </div>
                    <span className="font-mono text-xs uppercase px-2.5 py-1 border bg-[#7F011F]/10 border-[#7F011F]/30 text-[#7F011F] font-medium rounded shadow-[0_2px_8px_rgba(127,1,31,0.08)]">
                      ★ {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#181113] font-heading tracking-tight mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Student & Faculty Names */}
                  <p className="font-mono text-xs text-[#7F011F] mb-4 font-medium">
                    {item.students}
                  </p>

                  {/* Narrative Context (High Contrast & Legible) */}
                  <p className="text-sm sm:text-base text-[#3E3033] leading-relaxed mb-6 font-normal">
                    {item.summary}
                  </p>
                </div>

                {/* Bottom Verified Status or LinkedIn Link */}
                <div className="pt-6 border-t border-[#D9CAA8] flex items-center justify-between font-mono text-xs">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7F011F] hover:text-[#9B1832] inline-flex items-center gap-2 transition-colors group/link font-medium"
                    >
                      <span>Verified Post on Department LinkedIn</span>
                      <span className="text-[#7F011F] transition-transform group-hover/link:translate-x-1">↗</span>
                    </a>
                  ) : (
                    <span className="text-[#6E5D61]">
                      OFFICIAL DEPARTMENT ARCHIVE · 2026
                    </span>
                  )}
                  <span className="text-[#6E5D61]">
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
