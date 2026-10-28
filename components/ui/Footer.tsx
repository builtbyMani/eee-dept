import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#262626] bg-[#090909] pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#262626]">
          {/* Col 1: Projects */}
          <div>
            <p className="mono-label mb-4 text-[#808080]">Engineering Teams</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://hexawatts-y8t9-flax.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  Hexawatts Racing Team <span className="font-mono text-xs text-[#00e5ff]">↗</span>
                </a>
              </li>
              <li>
                <Link href="/aetos" className="hover:text-white transition-colors">
                  AËTOS — Autonomous Drone (ISRO IROC-U)
                </Link>
              </li>
              <li>
                <Link href="/autonomous-vehicle" className="hover:text-white transition-colors">
                  Autonomous Vehicle Platform (DBW)
                </Link>
              </li>
              <li>
                <Link href="/rover" className="hover:text-white transition-colors">
                  Planetary Rover Team (IRC)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Research & Department */}
          <div>
            <p className="mono-label mb-4 text-[#808080]">Department</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#achievements" className="hover:text-white transition-colors">
                  MSME & Hackathon Wins
                </Link>
              </li>
              <li>
                <Link href="/#approach" className="hover:text-white transition-colors">
                  Project-Based Learning
                </Link>
              </li>
              <li>
                <Link href="/#achievements" className="hover:text-white transition-colors">
                  Diamond Jubilee (60 Years)
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Industry & Alumni Collaborations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <p className="mono-label mb-4 text-[#808080]">Location & Lab</p>
            <p className="text-sm text-[#c4c4c4] leading-relaxed">
              Department of Electrical &amp; Electronics Engineering<br />
              JNTUH University College of Engineering Science &amp; Technology<br />
              Kukatpally, Hyderabad, Telangana — 500085
            </p>
            <p className="mt-3 font-mono text-xs text-[#808080]">
              Head of Department: Dr. K. H. Phani Shree
            </p>
          </div>

          {/* Col 4: Official Handles */}
          <div>
            <p className="mono-label mb-4 text-[#808080]">Connect &amp; Follow</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/company/department-of-electrical-and-electronics-engineering-jntuh-ucesth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  Department LinkedIn <span className="font-mono text-xs text-[#808080]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://hexawatts-y8t9-flax.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  Hexawatts Portal <span className="font-mono text-xs text-[#808080]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://roverchallenge.org/irc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  International Rover Challenge (IRC) <span className="font-mono text-xs text-[#808080]">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Big Brand Watermark with Official Emblem */}
        <div className="py-12 select-none flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
          <div className="flex items-center gap-6">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 opacity-80">
              <Image
                src="/images/jntuh-logo.png"
                alt="JNTU Hyderabad Official University Crest"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-mono text-xs text-[#808080] uppercase tracking-widest">
                JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY HYDERABAD
              </p>
              <p className="text-sm font-mono text-[#c4c4c4]">
                Department of Electrical &amp; Electronics Engineering
              </p>
            </div>
          </div>
          <div className="font-sans font-light text-[clamp(2.5rem,10vw,8rem)] leading-none tracking-tighter text-[#1c1c1c] truncate">
            EEE · JNTUH
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#1c1c1c] text-xs font-mono text-[#808080]">
          <p>© 2026 Department of Electrical &amp; Electronics Engineering, JNTUH UCESTH.</p>
          <p className="tracking-widest uppercase">Spec-Driven Hardware &amp; Robotics</p>
        </div>
      </div>
    </footer>
  );
}
