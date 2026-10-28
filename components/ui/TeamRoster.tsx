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
            className="p-4 border border-[#262626] bg-[#0d0d0d]/80 hover:border-[#383838] transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] text-[#808080] mb-2">
                <span>{paddedIndex}</span>
                {member.specialBadge ? (
                  <span className="text-[#f5a623] border border-[#f5a623]/30 px-1 py-0.5 bg-[#f5a623]/5">
                    {member.specialBadge}
                  </span>
                ) : (
                  <span>ENGINEER</span>
                )}
              </div>
              <h4 className="text-base font-normal text-white mb-1 tracking-tight">
                {member.name}
              </h4>
            </div>
            {member.role && (
              <p className="text-xs font-mono text-[#808080] mt-2">
                {member.role}
              </p>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
