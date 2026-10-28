"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { settleSpring } from "@/components/motion/SpringPhysics";

const STEPS = [
  {
    num: "01",
    title: "Proposal & System Architecture",
    body: "Student teams formulate engineering problem statements, conduct technical feasibility studies, and secure faculty & departmental approvals with required bill of materials.",
  },
  {
    num: "02",
    title: "Rapid Prototyping & Lab Fabrication",
    body: "First working subsystems are designed, 3D modeled, and bench-tested early. Battery packs, BMS boards, flight controllers, and chassis frames are brought up hands-on.",
  },
  {
    num: "03",
    title: "Hardware-in-the-Loop & Rigorous Validation",
    body: "Measured bench results are benchmarked against national & international competition standards. Sensor fusion latency, thermal envelopes, and safety watchdogs are calibrated.",
  },
  {
    num: "04",
    title: "National Competition & Field Deployment",
    body: "Teams represent JNTUH at Formula Bharat, ISRO IROC-U, and the International Rover Challenge, transitioning knowledge and technical documentation to junior batches.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="border-t border-[#2D141A]">
      {STEPS.map((step, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={step.num} className="border-b border-[#2D141A]">
            <button
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full py-6 flex items-center justify-between text-left group cursor-pointer"
            >
              <div className="flex items-center gap-6 sm:gap-12">
                <span className="font-mono text-sm sm:text-base text-[#D4C4C8] font-medium">
                  {step.num}
                </span>
                <span className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[#FF4D6D] transition-colors font-heading">
                  {step.title}
                </span>
              </div>
              <span className="font-mono text-2xl text-[#FF4D6D] group-hover:text-white transition-colors">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={settleSpring}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pl-12 sm:pl-20 max-w-3xl text-sm sm:text-base text-[#E8DCE0] leading-relaxed font-normal">
                    {step.body}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
