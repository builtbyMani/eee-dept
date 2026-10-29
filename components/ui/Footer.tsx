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
    <footer id="contact" className="border-t border-[#CECAB3] bg-[#DBD7BD]/90 pt-16 pb-12 relative overflow-hidden">
      {/* Background Wine Red Glow */}
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#282B4A]/5 blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#CECAB3]">
          {/* Col 1: Projects */}
          <div>
            <p className="mono-label mb-4 text-[#282B4A] font-semibold">Student Machines</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://hexawatts-y8t9-flax.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#282B4A] transition-colors inline-flex items-center gap-1.5 text-[#33343B]"
                >
                  Hexawatts Racing Team <span className="font-mono text-xs text-[#282B4A]">↗</span>
                </a>
              </li>
              <li>
                <Link href="/aetos" className="hover:text-[#282B4A] transition-colors text-[#33343B]">
                  AËTOS — Autonomous Drone (ISRO IROC-U)
                </Link>
              </li>
              <li>
                <Link href="/autonomous-vehicle" className="hover:text-[#282B4A] transition-colors text-[#33343B]">
                  Autonomous Vehicle Platform (DBW &amp; ROS2)
                </Link>
              </li>
              <li>
                <Link href="/rover" className="hover:text-[#282B4A] transition-colors text-[#33343B]">
                  Planetary Rover Team (IRC)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Department */}
          <div>
            <p className="mono-label mb-4 text-[#282B4A] font-semibold">Department</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#leadership" className="hover:text-[#282B4A] transition-colors text-[#33343B]">
                  Head of Department (Dr. Phani Shree)
                </Link>
              </li>
              <li>
                <Link href="/#achievements" className="hover:text-[#282B4A] transition-colors text-[#33343B]">
                  MSME 5.0 Grant &amp; Hackathon Wins
                </Link>
              </li>
              <li>
                <Link href="/#approach" className="hover:text-[#282B4A] transition-colors text-[#33343B]">
                  Project-Based Learning Lifecycle
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openContactModal("Industry & Alumni Technical Collaboration")}
                  className="hover:text-[#282B4A] transition-colors text-[#33343B] cursor-pointer text-left"
                >
                  Industry &amp; Alumni Collaborations ↗
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Location */}
          <div>
            <p className="mono-label mb-4 text-[#282B4A] font-semibold">Location &amp; Lab</p>
            <p className="text-sm text-[#33343B] leading-relaxed">
              Department of Electrical &amp; Electronics Engineering<br />
              JNTUH University College of Engineering Science &amp; Technology<br />
              Kukatpally, Hyderabad, Telangana — 500085
            </p>
            <p className="mt-3 font-mono text-xs text-[#60616B]">
              Head of Department: Dr. K. H. Phani Shree
            </p>
          </div>

          {/* Col 4: Official Handles */}
          <div>
            <p className="mono-label mb-4 text-[#282B4A] font-semibold">Connect &amp; Follow</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/company/department-of-electrical-and-electronics-engineering-jntuh-ucesth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#282B4A] transition-colors inline-flex items-center gap-1.5 text-[#33343B]"
                >
                  Department LinkedIn <span className="font-mono text-xs text-[#282B4A]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://hexawatts-y8t9-flax.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#282B4A] transition-colors inline-flex items-center gap-1.5 text-[#33343B]"
                >
                  Hexawatts Racing Portal <span className="font-mono text-xs text-[#282B4A]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://roverchallenge.org/irc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#282B4A] transition-colors inline-flex items-center gap-1.5 text-[#33343B]"
                >
                  International Rover Challenge (IRC) <span className="font-mono text-xs text-[#282B4A]">↗</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openContactModal()}
                  className="hover:text-[#3F4474] transition-colors inline-flex items-center gap-1.5 text-[#282B4A] font-medium cursor-pointer"
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
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 opacity-90 group-hover:opacity-100 transition-opacity">
              <Image
                src="/images/jntuh-logo.png"
                alt="JNTU Hyderabad Official University Crest"
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-mono text-xs text-[#60616B] uppercase tracking-widest group-hover:text-[#282B4A] transition-colors">
                JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY HYDERABAD
              </p>
              <p className="text-sm font-mono text-[#121317] group-hover:text-[#282B4A] transition-colors font-medium">
                Department of Electrical &amp; Electronics Engineering
              </p>
            </div>
          </Link>
          <div className="font-heading font-bold text-[clamp(2.5rem,8vw,6.5rem)] leading-none tracking-tighter text-[#CECAB3]/70 select-none">
            EEE · JNTUH
          </div>
        </div>

        {/* Legal & Dynamic Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#CECAB3] text-xs font-mono text-[#60616B]">
          <p>© {currentYear} Department of Electrical &amp; Electronics Engineering, JNTUH UCESTH.</p>
          <p className="tracking-widest uppercase text-[#282B4A] font-medium">
            Spec-Driven Hardware &amp; Robotics · Estd. 1965
          </p>
        </div>
      </div>
    </footer>
  );
}
