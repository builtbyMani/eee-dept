"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { tactileSpring } from "@/components/motion/SpringPhysics";

interface ProjectCardProps {
  index: number;
  name: string;
  domain: string;
  headline: string;
  description: string;
  imageSrc: string;
  href: string;
  isExternal?: boolean;
  highlightBadge?: string;
}

export default function ProjectCard({
  index,
  name,
  domain,
  headline,
  description,
  imageSrc,
  href,
  isExternal = false,
  highlightBadge,
}: ProjectCardProps) {
  const paddedIndex = String(index + 1).padStart(2, "0");

  const Content = (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.985 }}
      transition={tactileSpring}
      className="border-t border-[#2D141A] pt-4 pb-8 flex flex-col justify-between h-full group cursor-pointer text-left"
    >
      <div>
        {/* Top Info Bar */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider mb-4">
          <span className="text-white font-medium">
            {paddedIndex} {name}
          </span>
          <span className="text-[#A0828A] flex items-center gap-2">
            {highlightBadge && (
              <span className="text-[#FF4D6D] border border-[#7F011F]/50 bg-[#7F011F]/15 px-1.5 py-0.5 text-[10px] font-medium">
                {highlightBadge}
              </span>
            )}
            <span>{domain}</span>
          </span>
        </div>

        {/* Visual Frame */}
        <div className="relative aspect-[16/9] w-full border border-[#2D141A] bg-[#0E0608] mb-5 overflow-hidden flex items-center justify-center p-6 group-hover:border-[#7F011F] transition-colors shadow-[inset_0_0_40px_rgba(127,1,31,0.05)]">
          <div
            className="absolute inset-0 opacity-[0.2]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #2D141A 1px, transparent 1px), linear-gradient(to bottom, #2D141A 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4 filter contrast-110 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Headline & Description */}
        <h3 className="text-xl sm:text-2xl font-normal text-white mb-2 leading-snug tracking-tight font-heading">
          {headline}
        </h3>
        <p className="text-sm text-[#A0828A] leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Action CTA */}
      <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#E2B6BD] group-hover:text-[#FF4D6D] transition-colors">
        <span>{isExternal ? "Visit Team Portal" : "Explore Machine & Team"}</span>
        <span className="transition-transform group-hover:translate-x-1 text-[#7F011F] group-hover:text-[#FF4D6D]">
          {isExternal ? "↗" : "→"}
        </span>
      </div>
    </motion.div>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
      >
        {Content}
      </a>
    );
  }

  return (
    <Link href={href} className="block no-underline">
      {Content}
    </Link>
  );
}
