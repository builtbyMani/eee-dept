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
          ? "border-[#7F011F] bg-[#EFE3C3]/90 shadow-[0_4px_24px_rgba(127,1,31,0.08)]"
          : "border-[#D9CAA8] bg-[#EFE3C3]/70 hover:border-[#7F011F] shadow-[0_2px_12px_rgba(70,30,40,0.03)]"
      }`}
    >
      <div>
        {/* Top Header: Category & Date */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider mb-3">
          <span className="text-[#7F011F] font-semibold">{category}</span>
          <span className="text-[#6E5D61]">{date}</span>
        </div>

        {/* Big Result Badge */}
        <div className="mb-4">
          <span
            className={`inline-block font-mono text-xs uppercase tracking-wider px-2.5 py-1 border rounded ${
              featured
                ? "bg-[#7F011F]/15 border-[#7F011F]/40 text-[#7F011F] font-medium"
                : "bg-[#EAE0C5] border-[#D9CAA8] text-[#181113]"
            }`}
          >
            {resultBadge}
          </span>
        </div>

        {/* Title & Students */}
        <h4 className="text-lg sm:text-xl font-semibold text-[#181113] mb-2 tracking-tight font-heading">
          {title}
        </h4>
        <p className="text-xs font-mono text-[#7F011F] mb-3">{names}</p>

        {/* Summary Description */}
        <p className="text-xs sm:text-sm text-[#3E3033] leading-relaxed mb-6">
          {context}
        </p>
      </div>

      {/* Link or LinkedIn indicator */}
      {link ? (
        <div className="pt-4 border-t border-[#D9CAA8] flex items-center justify-between text-xs font-mono text-[#7F011F] hover:text-[#9B1832] transition-colors font-medium">
          <span>View on LinkedIn</span>
          <span className="text-[#7F011F]">↗</span>
        </div>
      ) : (
        <div className="pt-4 border-t border-[#D9CAA8] text-[11px] font-mono text-[#6E5D61]">
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
