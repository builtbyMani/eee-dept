"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { tactileSpring } from "@/components/motion/SpringPhysics";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 w-full glass-header">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-white no-underline font-mono text-xs tracking-widest uppercase hover:opacity-90 transition-opacity"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-white"
          >
            <rect x="1" y="1" width="20" height="20" />
            <path d="M4 11h3l2-4 4 8 2-4h3" />
          </svg>
          <span className="font-semibold tracking-wider">EEE · JNTUH</span>
        </Link>

        {/* Navigation links */}
        <nav className="flex items-center gap-6 sm:gap-8 font-mono text-xs uppercase tracking-wider text-[#c4c4c4]">
          <Link
            href={isHome ? "#projects" : "/#projects"}
            className="hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            href={isHome ? "#leadership" : "/#leadership"}
            className="hidden sm:inline hover:text-white transition-colors"
          >
            Leadership
          </Link>
          <Link
            href={isHome ? "#achievements" : "/#achievements"}
            className="hover:text-white transition-colors"
          >
            Achievements
          </Link>
          <Link
            href={isHome ? "#approach" : "/#approach"}
            className="hidden md:inline hover:text-white transition-colors"
          >
            How We Work
          </Link>
          <a
            href="https://hexawatts-y8t9-flax.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1 text-[#00e5ff] hover:text-white transition-colors"
          >
            Hexawatts <span className="text-[10px]">↗</span>
          </a>
          <motion.a
            href={isHome ? "#contact" : "/#contact"}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.96 }}
            transition={tactileSpring}
            className="px-3 py-1.5 bg-[#262626] text-white hover:bg-white hover:text-black transition-colors"
          >
            Contact ↗
          </motion.a>
        </nav>
      </div>
    </header>
  );
}
