"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { openContactModal } from "./ContactModal";

const subscribeNoop = () => () => {};

export default function Footer() {
  const currentYear = useSyncExternalStore(
    subscribeNoop,
    () => new Date().getFullYear(),
    () => 2026
  );

  const handleLogoClick = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="border-t border-[#2D141A] bg-[#090909] pt-16 pb-12 relative overflow-hidden">
      {/* Background Wine Red Glow */}
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#7F011F]/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#2D141A]">
          {/* Col 1: Projects */}
          <div>
            <p className="mono-label mb-4 text-[#FF4D6D]">Student Machines</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://hexawatts-y8t9-flax.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-[#E2B6BD]"
                >
                  Hexawatts Racing Team <span className="font-mono text-xs text-[#FF4D6D]">↗</span>
                </a>
              </li>
              <li>
                <Link href="/aetos" className="hover:text-white transition-colors text-[#D4C4C8]">
                  AËTOS — Autonomous Drone (ISRO IROC-U)
                </Link>
              </li>
              <li>
                <Link href="/autonomous-vehicle" className="hover:text-white transition-colors text-[#D4C4C8]">
                  Autonomous Vehicle Platform (DBW &amp; ROS2)
                </Link>
              </li>
              <li>
                <Link href="/rover" className="hover:text-white transition-colors text-[#D4C4C8]">
                  Planetary Rover Team (IRC)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Department */}
          <div>
            <p className="mono-label mb-4 text-[#FF4D6D]">Department</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#leadership" className="hover:text-white transition-colors text-[#D4C4C8]">
                  Head of Department (Dr. Phani Shree)
                </Link>
              </li>
              <li>
                <Link href="/#achievements" className="hover:text-white transition-colors text-[#D4C4C8]">
                  MSME 5.0 Grant &amp; Hackathon Wins
                </Link>
              </li>
              <li>
                <Link href="/#approach" className="hover:text-white transition-colors text-[#D4C4C8]">
                  Project-Based Learning Lifecycle
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openContactModal("Industry & Alumni Technical Collaboration")}
                  className="hover:text-white transition-colors text-[#D4C4C8] cursor-pointer text-left"
                >
                  Industry &amp; Alumni Collaborations ↗
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Location */}
          <div>
            <p className="mono-label mb-4 text-[#FF4D6D]">Location &amp; Lab</p>
            <p className="text-sm text-[#E2B6BD] leading-relaxed">
              Department of Electrical &amp; Electronics Engineering<br />
              JNTUH University College of Engineering Science &amp; Technology<br />
              Kukatpally, Hyderabad, Telangana — 500085
            </p>
            <p className="mt-3 font-mono text-xs text-[#A0828A]">
              Head of Department: Dr. K. H. Phani Shree
            </p>
          </div>

          {/* Col 4: Official Handles */}
          <div>
            <p className="mono-label mb-4 text-[#FF4D6D]">Connect &amp; Follow</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/company/department-of-electrical-and-electronics-engineering-jntuh-ucesth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-[#E2B6BD]"
                >
                  Department LinkedIn <span className="font-mono text-xs text-[#7F011F]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://hexawatts-y8t9-flax.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-[#E2B6BD]"
                >
                  Hexawatts Racing Portal <span className="font-mono text-xs text-[#7F011F]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://roverchallenge.org/irc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-[#E2B6BD]"
                >
                  International Rover Challenge (IRC) <span className="font-mono text-xs text-[#7F011F]">↗</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openContactModal()}
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-[#FF4D6D] cursor-pointer"
                >
                  Open Telemetry Contact Desk ↗
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Big Brand Watermark with Official Clickable Emblem */}
        <div className="py-12 select-none flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-6 group cursor-pointer"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
              <Image
                src="/images/jntuh-logo.png"
                alt="JNTU Hyderabad Official University Crest"
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-mono text-xs text-[#D4C4C8] uppercase tracking-widest group-hover:text-white transition-colors">
                JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY HYDERABAD
              </p>
              <p className="text-sm font-mono text-[#F0E6E9] group-hover:text-white transition-colors">
                Department of Electrical &amp; Electronics Engineering
              </p>
            </div>
          </Link>
          <div className="font-heading font-bold text-[clamp(2.5rem,8vw,6.5rem)] leading-none tracking-tighter text-[#1C0D11] select-none">
            EEE · JNTUH
          </div>
        </div>

        {/* Legal & Dynamic Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#2D141A] text-xs font-mono text-[#D4C4C8]">
          <p>© {currentYear} Department of Electrical &amp; Electronics Engineering, JNTUH UCESTH.</p>
          <p className="tracking-widest uppercase text-[#FF4D6D]">
            Spec-Driven Hardware &amp; Robotics · Estd. 1965
          </p>
        </div>
      </div>
    </footer>
  );
}
