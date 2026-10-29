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
      className={`p-6 border transition-all flex flex-col justify-between rounded-xl ${
        featured
          ? "border-[#282B4A] bg-[#E6E2CC]/90 shadow-[0_4px_24px_rgba(40,43,74,0.08)]"
          : "border-[#CECAB3] bg-[#E6E2CC]/70 hover:border-[#282B4A] shadow-[0_2px_12px_rgba(38,40,62,0.03)]"
      }`}
    >
      <div>
        {/* Top Header: Category & Date */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider mb-3">
          <span className="text-[#282B4A] font-semibold">{category}</span>
          <span className="text-[#60616B]">{date}</span>
        </div>

        {/* Big Result Badge */}
        <div className="mb-4">
          <span
            className={`inline-block font-mono text-xs uppercase tracking-wider px-2.5 py-1 border rounded ${
              featured
                ? "bg-[#282B4A]/15 border-[#282B4A]/40 text-[#282B4A] font-medium"
                : "bg-[#E2DFCD] border-[#CECAB3] text-[#121317]"
            }`}
          >
            {resultBadge}
          </span>
        </div>

        {/* Title & Students */}
        <h4 className="text-lg sm:text-xl font-semibold text-[#121317] mb-2 tracking-tight font-heading">
          {title}
        </h4>
        <p className="text-xs font-mono text-[#282B4A] mb-3">{names}</p>

        {/* Summary Description */}
        <p className="text-xs sm:text-sm text-[#33343B] leading-relaxed mb-6">
          {context}
        </p>
      </div>

      {/* Link or LinkedIn indicator */}
      {link ? (
        <div className="pt-4 border-t border-[#CECAB3] flex items-center justify-between text-xs font-mono text-[#282B4A] hover:text-[#3F4474] transition-colors font-medium">
          <span>View on LinkedIn</span>
          <span className="text-[#282B4A]">↗</span>
        </div>
      ) : (
        <div className="pt-4 border-t border-[#CECAB3] text-[11px] font-mono text-[#60616B]">
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
