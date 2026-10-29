import Link from "next/link";
import type { Metadata } from "next";
import WatermarkBackground from "@/components/ui/WatermarkBackground";
import LeadCard from "@/components/ui/LeadCard";
import TeamRoster, { TeamMember } from "@/components/ui/TeamRoster";

export const metadata: Metadata = {
  title: "Planetary Rover Team — International Rover Challenge (IRC)",
  description:
    "Student ground robotics team designing all-terrain planetary rovers with rocker-bogie mobility and robotic arms for the International Rover Challenge.",
};

const ROVER_LEADS = [
  {
    name: "P. Amal",
    role: "Project Lead & Systems Engineer",
    badge: "PROJECT LEAD",
    department: "Electrical & Electronics Engineering, JNTUH",
    linkedinUrl: "https://www.linkedin.com/in/amal-p-ba0044386/",
    achievements: [
      "Systems Lead — International Rover Challenge (IRC) Architecture",
      "Lead Designer — Rocker-Bogie Chassis & Drive Kinematics",
    ],
  },
];

const ROVER_MEMBERS: TeamMember[] = [
  { name: "Mobility Sub-Team", role: "Rocker-Bogie Dynamics, High-Torque Hubs & Cleated Wheels" },
  { name: "Manipulator Sub-Team", role: "5-DoF Robotic Arm, Precision Gripper & Inverse Kinematics" },
  { name: "Autonomous Navigation", role: "Visual Odometry, Terrain Costmaps & Waypoint Traversal" },
  { name: "Power & BMS Sub-Team", role: "High-Discharge LiFePO4 Battery Pack, Buck Regulators" },
  { name: "RF Telemetry Sub-Team", role: "Long-Range 2.4/5.8GHz Link & Dual Base Station GCS" },
  { name: "Science Payload Sub-Team", role: "Hermetic Soil Chamber, Spectrometer & Micro-Sensors" },
];

export default function RoverPage() {
  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden">
      {/* Background Watermark with the Planetary Rover Schematic */}
      <WatermarkBackground
        imageSrc="/images/rover-schematic.svg"
        altText="Planetary Rover Schematic"
        opacity={0.18}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 pt-28 sm:pt-32 pb-24">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#7F011F] hover:text-[#9B1832] transition-colors font-medium"
          >
            <span>←</span> Back to Department Projects
          </Link>
        </div>

        {/* Hero Briefing */}
        <div className="max-w-4xl mb-16">
          <p className="mono-label mb-3 text-[#7F011F] font-semibold">
            International Rover Challenge (IRC)
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold text-[#181113] font-heading tracking-tight leading-tight mb-6">
            Planetary Rover <br />
            Engineering Team
          </h1>
          <p className="text-lg sm:text-xl text-[#181113] leading-relaxed mb-4">
            <span className="text-[#181113] font-semibold">
              Engineering an all-terrain planetary exploration rover from the ground up.
            </span>{" "}
            The team designs and builds a 6-wheeled robotic vehicle to tackle the demanding operational tasks of the{" "}
            <a
              href="https://roverchallenge.org/irc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7F011F] underline underline-offset-4 hover:text-[#9B1832] transition-colors font-semibold"
            >
              International Rover Challenge (IRC) ↗
            </a>
            .
          </p>
          <p className="text-sm sm:text-base text-[#3E3033] leading-relaxed">
            From negotiating boulder fields and loose regolith slopes with a passive rocker-bogie suspension,
            to performing delicate instrumentation switches and soil core extraction with a custom 5-DoF robotic arm,
            every mechanical and electrical assembly is engineered for extreme environment reliability.
          </p>
        </div>

        {/* Technical Specs Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 glass-card border-[#D9CAA8] bg-[#EFE3C3]/80 rounded-2xl mb-20 shadow-sm">
          <div>
            <p className="font-mono text-[11px] text-[#6E5D61] uppercase font-semibold">Target Competition</p>
            <p className="text-base font-semibold text-[#181113] mt-1">IRC Challenge</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-[#6E5D61] uppercase font-semibold">Suspension Linkage</p>
            <p className="text-base font-semibold text-[#7F011F] mt-1">6-Wheel Rocker-Bogie</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-[#6E5D61] uppercase font-semibold">Manipulator Freedom</p>
            <p className="text-base font-semibold text-[#181113] mt-1">5-DoF Robotic Arm</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-[#6E5D61] uppercase font-semibold">Power Architecture</p>
            <p className="text-base font-semibold text-[#7F011F] mt-1">High-Rate LiFePO4</p>
          </div>
        </div>

        {/* Project Leadership Section */}
        <div className="mb-20">
          <div className="mb-8">
            <p className="mono-label mb-2 text-[#7F011F] font-semibold">Systems &amp; Kinematics Lead</p>
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#181113] font-heading tracking-tight">
              Project Leadership
            </h2>
          </div>
          <div className="max-w-xl">
            {ROVER_LEADS.map((lead) => (
              <LeadCard key={lead.name} {...lead} />
            ))}
          </div>
        </div>

        {/* Full Team Roster */}
        <div>
          <div className="mb-8">
            <p className="mono-label mb-2 text-[#7F011F] font-semibold">Mechanical &amp; Electronics Subsystems</p>
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#181113] font-heading tracking-tight">
              Team Subsystems
            </h2>
          </div>
          <TeamRoster members={ROVER_MEMBERS} />
        </div>
      </div>
    </div>
  );
}
