"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { tactileSpring } from "@/components/motion/SpringPhysics";
import MobileMenu from "./MobileMenu";
import { openContactModal } from "./ContactModal";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[min(94vw,1100px)] transition-all">
        <div className="w-full h-14 sm:h-16 px-4 sm:px-6 rounded-full bg-[#EEEBDA]/90 backdrop-blur-xl border border-[#CECAB3] shadow-[0_8px_30px_rgba(38,40,62,0.06),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-between gap-4">
          {/* Brand / Logo with Official JNTUH Emblem */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 text-[#121317] no-underline font-mono text-xs tracking-widest uppercase hover:opacity-90 transition-opacity cursor-pointer group shrink-0"
          >
            <div className="relative w-8 h-8 flex-shrink-0 rounded-full bg-[#282B4A]/10 p-0.5 border border-[#282B4A]/30 group-hover:border-[#282B4A] transition-colors shadow-[0_0_12px_rgba(40,43,74,0.15)]">
              <Image
                src="/images/jntuh-logo.png"
                alt="JNTU Hyderabad Official Emblem"
                fill
                priority
                sizes="32px"
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-wider text-[#121317] group-hover:text-[#282B4A] transition-colors">
                EEE · JNTUH
              </span>
              <span className="text-[9px] text-[#60616B] tracking-normal -mt-0.5 hidden sm:inline">
                ESTD. 1965
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 font-mono text-xs uppercase tracking-wider text-[#33343B]">
            <Link
              href={isHome ? "#projects" : "/#projects"}
              className="px-3 py-1.5 rounded-full hover:bg-[#E2DFCD] hover:text-[#282B4A] transition-colors"
            >
              Machines
            </Link>
            <Link
              href={isHome ? "#leadership" : "/#leadership"}
              className="px-3 py-1.5 rounded-full hover:bg-[#E2DFCD] hover:text-[#282B4A] transition-colors"
            >
              Leadership
            </Link>
            <Link
              href={isHome ? "#achievements" : "/#achievements"}
              className="px-3 py-1.5 rounded-full hover:bg-[#E2DFCD] hover:text-[#282B4A] transition-colors"
            >
              Achievements
            </Link>
            <Link
              href={isHome ? "#approach" : "/#approach"}
              className="hidden lg:inline px-3 py-1.5 rounded-full hover:bg-[#E2DFCD] hover:text-[#282B4A] transition-colors"
            >
              Methodology
            </Link>
            <a
              href="https://hexawatts-y8t9-flax.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full inline-flex items-center gap-1 text-[#282B4A] hover:bg-[#E2DFCD] transition-colors font-semibold"
            >
              Hexawatts <span className="text-[10px]">↗</span>
            </a>
          </nav>

          {/* Right Action: Pill Button & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <motion.button
              type="button"
              onClick={() => openContactModal()}
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={tactileSpring}
              className="px-4 sm:px-5 py-2 rounded-full bg-[#282B4A] hover:bg-[#3F4474] text-white font-mono text-xs uppercase tracking-wider transition-all shadow-[0_4px_16px_rgba(40,43,74,0.25)] cursor-pointer"
            >
              Contact ↗
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="md:hidden w-9 h-9 rounded-full bg-[#E2DFCD] border border-[#CECAB3] flex items-center justify-center text-[#121317] hover:bg-[#D7D3BE] transition-colors cursor-pointer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isHome={isHome}
      />
    </>
  );
}
