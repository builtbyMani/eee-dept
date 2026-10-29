"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { settleSpring, tactileSpring } from "@/components/motion/SpringPhysics";
import { openContactModal } from "./ContactModal";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isHome: boolean;
}

const MACHINE_LINKS = [
  {
    name: "Hexawatts Racing",
    sub: "Formula Student Electric",
    href: "https://hexawatts-y8t9-flax.vercel.app/",
    isExternal: true,
    badge: "FB2026",
  },
  {
    name: "AËTOS (ΑΕΤΟΣ)",
    sub: "GNSS-Denied Autonomous Drone",
    href: "/aetos",
    isExternal: false,
    badge: "ISRO IROC-U",
  },
  {
    name: "Autonomous Vehicle",
    sub: "Drive-by-Wire & LiDAR SLAM",
    href: "/autonomous-vehicle",
    isExternal: false,
    badge: "ROS2 DBW",
  },
  {
    name: "Planetary Rover",
    sub: "6-Wheel Rocker-Bogie & Arm",
    href: "/rover",
    isExternal: false,
    badge: "IRC CHALLENGE",
  },
];

export default function MobileMenu({ isOpen, onClose, isHome }: MobileMenuProps) {
  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#181113]/60 backdrop-blur-md"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={settleSpring}
            className="fixed top-0 right-0 bottom-0 w-[min(380px,88vw)] bg-[#F5EBD0] border-l border-[#D9CAA8] shadow-[0_0_50px_rgba(70,25,35,0.15)] flex flex-col justify-between p-6 z-10 overflow-y-auto"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#D9CAA8] mb-6">
                <div className="mono-label text-[#7F011F] font-semibold">
                  EEE GRID // NAVIGATION
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="w-10 h-10 flex items-center justify-center text-[#6E5D61] hover:text-[#181113] transition-colors cursor-pointer text-lg font-mono"
                >
                  ✕
                </button>
              </div>

              {/* Machine Pages Section */}
              <div className="mb-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#7F011F] mb-3 font-semibold">
                  Student Machines
                </p>
                <div className="space-y-2">
                  {MACHINE_LINKS.map((item) => {
                    const inner = (
                      <div className="p-3 border border-[#D9CAA8] bg-[#EFE3C3]/75 hover:border-[#7F011F] hover:bg-[#EAE0C5] transition-colors rounded-xl">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-[#181113]">
                            {item.name}
                          </span>
                          <span className="font-mono text-[10px] text-[#7F011F] border border-[#7F011F]/30 bg-[#7F011F]/10 px-1 py-0.5 rounded font-medium">
                            {item.badge}
                          </span>
                        </div>
                        <p className="font-mono text-[11px] text-[#6E5D61]">
                          {item.sub} {item.isExternal ? "↗" : "→"}
                        </p>
                      </div>
                    );

                    return item.isExternal ? (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        className="block no-underline"
                      >
                        {inner}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={onClose}
                        className="block no-underline"
                      >
                        {inner}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Department Anchors */}
              <div className="mb-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#7F011F] mb-2 font-semibold">
                  Department
                </p>
                <nav className="space-y-1">
                  <Link
                    href={isHome ? "#leadership" : "/#leadership"}
                    onClick={onClose}
                    className="flex items-center justify-between py-2.5 px-3 text-sm text-[#181113] hover:text-[#7F011F] hover:bg-[#EAE0C5] rounded-lg transition-colors font-medium"
                  >
                    <span>Head of Department</span>
                    <span className="font-mono text-xs text-[#7F011F]">→</span>
                  </Link>
                  <Link
                    href={isHome ? "#achievements" : "/#achievements"}
                    onClick={onClose}
                    className="flex items-center justify-between py-2.5 px-3 text-sm text-[#3E3033] hover:text-[#7F011F] hover:bg-[#EAE0C5] rounded-lg transition-colors font-medium"
                  >
                    <span>Achievements &amp; MSME Grant</span>
                    <span className="font-mono text-xs text-[#7F011F]">→</span>
                  </Link>
                  <Link
                    href={isHome ? "#approach" : "/#approach"}
                    onClick={onClose}
                    className="flex items-center justify-between py-2.5 px-3 text-sm text-[#3E3033] hover:text-[#7F011F] hover:bg-[#EAE0C5] rounded-lg transition-colors font-medium"
                  >
                    <span>Engineering Methodology</span>
                    <span className="font-mono text-xs text-[#7F011F]">→</span>
                  </Link>
                </nav>
              </div>
            </div>

            {/* Bottom Action Button */}
            <div className="pt-4 border-t border-[#D9CAA8]">
              <motion.button
                onClick={() => {
                  onClose();
                  openContactModal();
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={tactileSpring}
                className="w-full py-3.5 bg-[#7F011F] hover:bg-[#9B1832] text-white font-mono text-xs uppercase tracking-widest transition-all shadow-[0_4px_16px_rgba(127,1,31,0.25)] flex items-center justify-center gap-2 cursor-pointer rounded-xl"
              >
                <span>Propose Collaboration / Join</span>
                <span>↗</span>
              </motion.button>
              <p className="mt-3 text-center font-mono text-[10px] text-[#6E5D61]">
                JNTUH University College of Engineering
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
