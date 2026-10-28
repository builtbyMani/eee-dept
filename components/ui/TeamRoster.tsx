"use client";

import { motion } from "motion/react";
import { staggerContainer, fadeInUp, tactileSpring } from "@/components/motion/SpringPhysics";

export interface TeamMember {
  name: string;
  role?: string;
  specialBadge?: string;
}

interface TeamRosterProps {
  members: TeamMember[];
  domainName?: string;
}

export default function TeamRoster({ members }: TeamRosterProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {members.map((member, index) => {
        const paddedIndex = String(index + 1).padStart(2, "0");
        return (
          <motion.div
            key={member.name}
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            transition={tactileSpring}
            className="p-4 border border-[#2D141A] bg-[#0E0608]/90 hover:border-[#7F011F] transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] text-[#D4C4C8] mb-2 font-medium">
                <span>{paddedIndex}</span>
                {member.specialBadge ? (
                  <span className="text-[#FF4D6D] border border-[#7F011F]/50 px-1 py-0.5 bg-[#7F011F]/15 font-medium">
                    {member.specialBadge}
                  </span>
                ) : (
                  <span>ENGINEER</span>
                )}
              </div>
              <h4 className="text-base font-semibold text-white mb-1 tracking-tight font-heading">
                {member.name}
              </h4>
            </div>
            {member.role && (
              <p className="text-xs font-mono text-[#E8DCE0] mt-2">
                {member.role}
              </p>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
