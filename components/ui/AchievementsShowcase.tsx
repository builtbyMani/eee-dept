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
  accentColor: "gold" | "cyan" | "white" | "brand";
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
    accentColor: "gold",
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
    accentColor: "cyan",
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
    accentColor: "cyan",
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
    accentColor: "gold",
  },
  {
    id: "spoorthi-holter",
    category: "HACKATHON",
    categoryLabel: "IDEATHON SPOORTHI 2026",
    badge: "2ND PRIZE",
    statCallout: "2ND PRIZE",
    title: "12-Lead Ambulatory Holter ECG Monitoring System",
    students: "M. Dharani (Autonomous Vehicle Lead) & Divya Dasari (AV Team)",
    summary:
      "Designed a wearable, high-fidelity 12-lead cardiac monitoring instrument with continuous wireless anomaly transmission. Selected as one of three flagship hardware projects showcased at MSME Tech Connect, IIT Hyderabad.",
    date: "2026",
    accentColor: "cyan",
  },
  {
    id: "iit-tech-connect",
    category: "EXPO",
    categoryLabel: "MSME TECH CONNECT @ IIT HYDERABAD",
    badge: "3 TEAMS SELECTED",
    statCallout: "IIT HYDERABAD",
    title: "Triple Hardware Showcase at MSME Tech Connect",
    students: "Hybrid Two-Wheeler · 12-Lead Holter Monitor · FARMFI",
    summary:
      "Three undergraduate student hardware inventions represented JNTUH EEE at IIT Hyderabad's MSME Tech Connect 2026, receiving widespread acclaim and industrial collaboration interest across 144+ verified industry reactions.",
    date: "2026",
    accentColor: "white",
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
    accentColor: "gold",
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
      {/* Top Filter Tabs (Clean vertical page layout, no horizontal scroll) */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-[#262626]">
        {FILTER_TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                isActive ? "text-white" : "text-[#808080] hover:text-[#c4c4c4]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 bg-[#262626] border border-[#383838]"
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
            const isGold = item.accentColor === "gold";
            const isCyan = item.accentColor === "cyan";

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={settleSpring}
                className="w-full p-8 sm:p-10 border border-[#262626] bg-[#0e0e0e] hover:border-[#383838] transition-all flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Accent Top Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] ${
                    isGold
                      ? "bg-gradient-to-r from-transparent via-[#f5a623] to-transparent"
                      : isCyan
                      ? "bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent"
                      : "bg-gradient-to-r from-transparent via-[#1f3fff] to-transparent"
                  }`}
                />

                <div>
                  {/* Top Header: Tag & Date */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="font-mono text-[11px] text-[#808080] uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                    <span className="font-mono text-xs text-[#808080] border border-[#262626] px-2.5 py-0.5">
                      {item.date}
                    </span>
                  </div>

                  {/* Main Callout & Badge Row */}
                  <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                    <div
                      className={`font-mono text-3xl sm:text-5xl font-light tracking-tight ${
                        isGold ? "text-[#f5a623]" : isCyan ? "text-[#00e5ff]" : "text-white"
                      }`}
                    >
                      {item.statCallout}
                    </div>
                    <span
                      className={`font-mono text-xs uppercase px-2.5 py-1 border ${
                        isGold
                          ? "bg-[#f5a623]/10 border-[#f5a623]/40 text-[#f5a623]"
                          : isCyan
                          ? "bg-[#00e5ff]/10 border-[#00e5ff]/40 text-[#00e5ff]"
                          : "bg-white/5 border-white/20 text-white"
                      }`}
                    >
                      ★ {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Student & Faculty Names */}
                  <p className="font-mono text-xs text-[#00e5ff] mb-4">
                    {item.students}
                  </p>

                  {/* Narrative Context */}
                  <p className="text-sm sm:text-base text-[#808080] leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                {/* Bottom Verified Status or LinkedIn Link */}
                <div className="pt-6 border-t border-[#1c1c1c] flex items-center justify-between font-mono text-xs">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#00e5ff] inline-flex items-center gap-2 transition-colors"
                    >
                      <span>Verified Post on Department LinkedIn</span>
                      <span className="transition-transform group-hover:translate-x-1">↗</span>
                    </a>
                  ) : (
                    <span className="text-[#555555]">
                      OFFICIAL DEPARTMENT ARCHIVE · 2026
                    </span>
                  )}
                  <span className="text-[#808080]">
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
