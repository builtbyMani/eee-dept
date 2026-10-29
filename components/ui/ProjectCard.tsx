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
      className="border-t border-[#CECAB3] pt-4 pb-8 flex flex-col justify-between h-full group cursor-pointer text-left"
    >
      <div>
        {/* Top Info Bar */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider mb-4">
          <span className="text-[#121317] font-semibold">
            {paddedIndex} {name}
          </span>
          <span className="text-[#60616B] flex items-center gap-2 font-medium">
            {highlightBadge && (
              <span className="text-[#282B4A] border border-[#282B4A]/30 bg-[#282B4A]/10 px-1.5 py-0.5 text-[10px] font-semibold">
                {highlightBadge}
              </span>
            )}
            <span>{domain}</span>
          </span>
        </div>

        {/* Visual Frame */}
        <div className="relative aspect-[16/9] w-full border border-[#CECAB3] bg-[#E6E2CC]/60 mb-5 overflow-hidden flex items-center justify-center p-6 group-hover:border-[#282B4A] transition-colors shadow-[0_4px_20px_rgba(38,40,62,0.04)]">
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #CECAB3 1px, transparent 1px), linear-gradient(to bottom, #CECAB3 1px, transparent 1px)",
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
        <h3 className="text-xl sm:text-2xl font-semibold text-[#121317] mb-2 leading-snug tracking-tight font-heading">
          {headline}
        </h3>
        <p className="text-sm text-[#33343B] leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Action CTA */}
      <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#282B4A] group-hover:text-[#3F4474] transition-colors font-semibold">
        <span>{isExternal ? "Visit Team Portal" : "Explore Machine & Team"}</span>
        <span className="transition-transform group-hover:translate-x-1 text-[#282B4A]">
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
