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
      className="border-t border-[#D9CAA8] pt-4 pb-8 flex flex-col justify-between h-full group cursor-pointer text-left"
    >
      <div>
        {/* Top Info Bar */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider mb-4">
          <span className="text-[#181113] font-semibold">
            {paddedIndex} {name}
          </span>
          <span className="text-[#6E5D61] flex items-center gap-2 font-medium">
            {highlightBadge && (
              <span className="text-[#7F011F] border border-[#7F011F]/30 bg-[#7F011F]/10 px-1.5 py-0.5 text-[10px] font-semibold">
                {highlightBadge}
              </span>
            )}
            <span>{domain}</span>
          </span>
        </div>

        {/* Visual Frame */}
        <div className="relative aspect-[16/9] w-full border border-[#D9CAA8] bg-[#EFE3C3]/60 mb-5 overflow-hidden flex items-center justify-center p-6 group-hover:border-[#7F011F] transition-colors shadow-[0_4px_20px_rgba(70,30,40,0.04)]">
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #D9CAA8 1px, transparent 1px), linear-gradient(to bottom, #D9CAA8 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4 filter contrast-105 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Headline & Description */}
        <h3 className="text-xl sm:text-2xl font-semibold text-[#181113] mb-2 leading-snug tracking-tight font-heading">
          {headline}
        </h3>
        <p className="text-sm text-[#3E3033] leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Action CTA */}
      <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#7F011F] group-hover:text-[#9B1832] transition-colors font-semibold">
        <span>{isExternal ? "Visit Team Portal" : "Explore Machine & Team"}</span>
        <span className="transition-transform group-hover:translate-x-1 text-[#7F011F]">
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
