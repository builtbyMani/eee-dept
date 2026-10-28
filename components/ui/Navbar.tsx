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
      <header className="sticky top-0 z-40 w-full glass-header border-b border-[#2D141A]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand / Logo with Official JNTUH Emblem */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 text-white no-underline font-mono text-xs tracking-widest uppercase hover:opacity-90 transition-opacity cursor-pointer group"
          >
            <div className="relative w-8 h-8 flex-shrink-0 rounded-full bg-[#7F011F]/20 p-0.5 border border-[#7F011F]/40 group-hover:border-[#FF4D6D] transition-colors shadow-[0_0_15px_rgba(127,1,31,0.3)]">
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
              <span className="font-semibold tracking-wider text-white group-hover:text-[#E2B6BD] transition-colors">
                EEE · JNTUH
              </span>
              <span className="text-[9px] text-[#A0828A] tracking-normal -mt-0.5 hidden sm:inline">
                ESTD. 1965
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs uppercase tracking-wider text-[#A0828A]">
            <Link
              href={isHome ? "#projects" : "/#projects"}
              className="hover:text-white transition-colors"
            >
              Machines
            </Link>
            <Link
              href={isHome ? "#leadership" : "/#leadership"}
              className="hover:text-white transition-colors"
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
              className="hidden lg:inline hover:text-white transition-colors"
            >
              Methodology
            </Link>
            <a
              href="https://hexawatts-y8t9-flax.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#FF4D6D] hover:text-white transition-colors"
            >
              Hexawatts <span className="text-[10px]">↗</span>
            </a>
            <motion.button
              type="button"
              onClick={() => openContactModal()}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={tactileSpring}
              className="px-3.5 py-1.5 bg-[#7F011F] hover:bg-[#A31D36] text-white font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(127,1,31,0.35)] cursor-pointer"
            >
              Contact ↗
            </motion.button>
          </nav>

          {/* Mobile Right Controls: Contact Button + Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => openContactModal()}
              className="px-3 py-1.5 bg-[#7F011F] text-white font-mono text-xs uppercase tracking-wider cursor-pointer"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 border border-[#2D141A] bg-[#140A0D] text-white hover:border-[#7F011F] transition-colors cursor-pointer"
            >
              <span className="w-5 h-[1.5px] bg-[#E2B6BD]" />
              <span className="w-5 h-[1.5px] bg-[#E2B6BD]" />
              <span className="w-3.5 h-[1.5px] bg-[#FF4D6D] self-start ml-2.5" />
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
