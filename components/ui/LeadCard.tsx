"use client";

import { motion } from "motion/react";
import { tactileSpring } from "@/components/motion/SpringPhysics";

interface LeadCardProps {
  name: string;
  role: string;
  badge?: string;
  department?: string;
  linkedinUrl?: string;
  achievements?: string[];
  avatarFallback?: string;
}

export default function LeadCard({
  name,
  role,
  badge = "TEAM LEAD",
  department = "Electrical & Electronics Engineering, JNTUH",
  linkedinUrl,
  achievements = [],
}: LeadCardProps) {
  // Generate monogram initials
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={tactileSpring}
      className="glass-card glass-card-hover p-6 sm:p-7 flex flex-col justify-between relative group border-[#D9CAA8] bg-[#EFE3C3]/70 rounded-2xl"
    >
      <div>
        {/* Top Badge & Initials */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#7F011F]/10 border border-[#7F011F]/30 text-[#7F011F] font-mono text-[11px] uppercase tracking-wider font-semibold rounded">
            ★ {badge}
          </span>
          <div className="w-10 h-10 border border-[#D9CAA8] bg-[#EAE0C5] text-[#181113] flex items-center justify-center font-mono text-xs font-semibold rounded-lg shadow-sm">
            {initials}
          </div>
        </div>

        {/* Name and Designation */}
        <h3 className="text-xl sm:text-2xl font-semibold text-[#181113] font-heading tracking-tight mb-1">
          {name}
        </h3>
        <p className="text-sm text-[#7F011F] font-mono mb-1 font-semibold">{role}</p>
        <p className="text-xs text-[#554347] mb-5">{department}</p>

        {/* Accolades / Hackathon Win Badges if any */}
        {achievements.length > 0 && (
          <div className="space-y-1.5 mb-6 pt-4 border-t border-[#D9CAA8]">
            {achievements.map((ach, idx) => (
              <div
                key={idx}
                className="text-[11px] font-mono text-[#3E3033] flex items-start gap-2"
              >
                <span className="text-[#7F011F] mt-0.5 font-bold">•</span>
                <span>{ach}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* LinkedIn Profile Action */}
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 pt-4 border-t border-[#D9CAA8] flex items-center justify-between text-xs font-mono text-[#7F011F] hover:text-[#9B1832] transition-colors font-medium"
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#7F011F]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
            </svg>
            LinkedIn Profile
          </span>
          <span className="text-[#7F011F] group-hover:text-[#9B1832] transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      )}
    </motion.div>
  );
}
