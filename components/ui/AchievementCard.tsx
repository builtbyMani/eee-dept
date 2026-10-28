"use client";

import { motion } from "motion/react";
import { tactileSpring } from "@/components/motion/SpringPhysics";

interface AchievementCardProps {
  category: "GRANT" | "HACKATHON" | "INSTITUTIONAL" | "EXPO";
  title: string;
  resultBadge: string;
  names: string;
  context: string;
  date: string;
  link?: string;
  featured?: boolean;
}

export default function AchievementCard({
  category,
  title,
  resultBadge,
  names,
  context,
  date,
  link,
  featured = false,
}: AchievementCardProps) {
  const CardContent = (
    <motion.div
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.985 }}
      transition={tactileSpring}
      className={`p-6 border transition-all flex flex-col justify-between ${
        featured
          ? "border-[#7F011F]/60 bg-[#14080B]/90 shadow-[0_0_40px_rgba(127,1,31,0.2)]"
          : "border-[#2D141A] bg-[#0E0608] hover:border-[#7F011F]"
      }`}
    >
      <div>
        {/* Top Header: Category & Date */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider mb-3">
          <span className="text-[#A0828A]">{category}</span>
          <span className="text-[#A0828A]">{date}</span>
        </div>

        {/* Big Result Badge */}
        <div className="mb-4">
          <span
            className={`inline-block font-mono text-xs uppercase tracking-wider px-2.5 py-1 border ${
              featured
                ? "bg-[#7F011F]/20 border-[#7F011F]/50 text-[#FF4D6D] font-medium"
                : "bg-white/5 border-white/20 text-[#E2B6BD]"
            }`}
          >
            {resultBadge}
          </span>
        </div>

        {/* Title & Students */}
        <h4 className="text-lg sm:text-xl font-normal text-white mb-2 tracking-tight font-heading">
          {title}
        </h4>
        <p className="text-xs font-mono text-[#E2B6BD] mb-3">{names}</p>

        {/* Summary Description */}
        <p className="text-xs sm:text-sm text-[#A0828A] leading-relaxed mb-6">
          {context}
        </p>
      </div>

      {/* Link or LinkedIn indicator */}
      {link ? (
        <div className="pt-4 border-t border-[#2D141A] flex items-center justify-between text-xs font-mono text-[#E2B6BD] hover:text-white transition-colors">
          <span>View on LinkedIn</span>
          <span className="text-[#FF4D6D]">↗</span>
        </div>
      ) : (
        <div className="pt-4 border-t border-[#2D141A] text-[11px] font-mono text-[#6B4E54]">
          VERIFIED DEPARTMENT RECORD
        </div>
      )}
    </motion.div>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
