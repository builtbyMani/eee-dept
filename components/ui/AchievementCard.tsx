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
          ? "border-[#f5a623]/40 bg-[#141209]/80 shadow-[0_0_40px_rgba(245,166,35,0.06)]"
          : "border-[#262626] bg-[#0d0d0d] hover:border-[#383838]"
      }`}
    >
      <div>
        {/* Top Header: Category & Date */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider mb-3">
          <span className="text-[#808080]">{category}</span>
          <span className="text-[#808080]">{date}</span>
        </div>

        {/* Big Result Badge */}
        <div className="mb-4">
          <span
            className={`inline-block font-mono text-xs uppercase tracking-wider px-2.5 py-1 border ${
              featured
                ? "bg-[#f5a623]/10 border-[#f5a623]/40 text-[#f5a623] font-medium"
                : "bg-white/5 border-white/20 text-white"
            }`}
          >
            {resultBadge}
          </span>
        </div>

        {/* Title & Students */}
        <h4 className="text-lg sm:text-xl font-normal text-white mb-2 tracking-tight">
          {title}
        </h4>
        <p className="text-xs font-mono text-[#00e5ff] mb-3">{names}</p>

        {/* Summary Description */}
        <p className="text-xs sm:text-sm text-[#808080] leading-relaxed mb-6">
          {context}
        </p>
      </div>

      {/* Link or LinkedIn indicator */}
      {link ? (
        <div className="pt-4 border-t border-[#1f1f1f] flex items-center justify-between text-xs font-mono text-[#c4c4c4] hover:text-white transition-colors">
          <span>View on LinkedIn</span>
          <span>↗</span>
        </div>
      ) : (
        <div className="pt-4 border-t border-[#1f1f1f] text-[11px] font-mono text-[#525252]">
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
