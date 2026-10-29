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
            className="fixed inset-0 bg-[#121317]/60 backdrop-blur-md"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={settleSpring}
            className="fixed top-0 right-0 bottom-0 w-[min(380px,88vw)] bg-[#EEEBDA] border-l border-[#CECAB3] shadow-[0_0_50px_rgba(34,36,61,0.15)] flex flex-col justify-between p-6 z-10 overflow-y-auto"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#CECAB3] mb-6">
                <div className="mono-label text-[#282B4A] font-semibold">
                  EEE GRID // NAVIGATION
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="w-10 h-10 flex items-center justify-center text-[#60616B] hover:text-[#121317] transition-colors cursor-pointer text-lg font-mono"
                >
                  ✕
                </button>
              </div>

              {/* Machine Pages Section */}
              <div className="mb-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#282B4A] mb-3 font-semibold">
                  Student Machines
                </p>
                <div className="space-y-2">
                  {MACHINE_LINKS.map((item) => {
                    const inner = (
                      <div className="p-3 border border-[#CECAB3] bg-[#E6E2CC]/75 hover:border-[#282B4A] hover:bg-[#E2DFCD] transition-colors rounded-xl">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-[#121317]">
                            {item.name}
                          </span>
                          <span className="font-mono text-[10px] text-[#282B4A] border border-[#282B4A]/30 bg-[#282B4A]/10 px-1 py-0.5 rounded font-medium">
                            {item.badge}
                          </span>
                        </div>
                        <p className="font-mono text-[11px] text-[#60616B]">
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
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#282B4A] mb-2 font-semibold">
                  Department
                </p>
                <nav className="space-y-1">
                  <Link
                    href={isHome ? "#leadership" : "/#leadership"}
                    onClick={onClose}
                    className="flex items-center justify-between py-2.5 px-3 text-sm text-[#121317] hover:text-[#282B4A] hover:bg-[#E2DFCD] rounded-lg transition-colors font-medium"
                  >
                    <span>Head of Department</span>
                    <span className="font-mono text-xs text-[#282B4A]">→</span>
                  </Link>
                  <Link
                    href={isHome ? "#achievements" : "/#achievements"}
                    onClick={onClose}
                    className="flex items-center justify-between py-2.5 px-3 text-sm text-[#33343B] hover:text-[#282B4A] hover:bg-[#E2DFCD] rounded-lg transition-colors font-medium"
                  >
                    <span>Achievements &amp; MSME Grant</span>
                    <span className="font-mono text-xs text-[#282B4A]">→</span>
                  </Link>
                  <Link
                    href={isHome ? "#approach" : "/#approach"}
                    onClick={onClose}
                    className="flex items-center justify-between py-2.5 px-3 text-sm text-[#33343B] hover:text-[#282B4A] hover:bg-[#E2DFCD] rounded-lg transition-colors font-medium"
                  >
                    <span>Engineering Methodology</span>
                    <span className="font-mono text-xs text-[#282B4A]">→</span>
                  </Link>
                </nav>
              </div>
            </div>

            {/* Bottom Action Button */}
            <div className="pt-4 border-t border-[#CECAB3]">
              <motion.button
                onClick={() => {
                  onClose();
                  openContactModal();
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={tactileSpring}
                className="w-full py-3.5 bg-[#282B4A] hover:bg-[#3F4474] text-white font-mono text-xs uppercase tracking-widest transition-all shadow-[0_4px_16px_rgba(40,43,74,0.25)] flex items-center justify-center gap-2 cursor-pointer rounded-xl"
              >
                <span>Propose Collaboration / Join</span>
                <span>↗</span>
              </motion.button>
              <p className="mt-3 text-center font-mono text-[10px] text-[#60616B]">
                JNTUH University College of Engineering
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
