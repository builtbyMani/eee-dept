import Link from "next/link";
import WatermarkBackground from "@/components/ui/WatermarkBackground";
import LeadCard from "@/components/ui/LeadCard";
import TeamRoster, { TeamMember } from "@/components/ui/TeamRoster";

export const metadata = {
  title: "Planetary Rover Team — International Rover Challenge (IRC) | EEE JNTUH",
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
    <div className="relative min-h-[100dvh]">
      {/* Background Watermark with the Planetary Rover Schematic */}
      <WatermarkBackground
        imageSrc="/images/rover-schematic.svg"
        altText="Planetary Rover Schematic"
        opacity={0.18}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 pt-12 pb-24">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#808080] hover:text-white transition-colors"
          >
            <span>←</span> Back to Department Projects
          </Link>
        </div>

        {/* Hero Briefing */}
        <div className="max-w-4xl mb-16">
          <p className="mono-label mb-3 text-[#f5a623]">
            International Rover Challenge (IRC)
          </p>
          <h1 className="text-4xl sm:text-6xl font-normal text-white tracking-tighter leading-tight mb-6">
            Planetary Rover <br />
            Engineering Team
          </h1>
          <p className="text-lg sm:text-xl text-[#c4c4c4] leading-relaxed mb-4">
            <span className="text-white">
              Engineering an all-terrain planetary exploration rover from the ground up.
            </span>{" "}
            The team designs and builds a 6-wheeled robotic vehicle to tackle the demanding operational tasks of the{" "}
            <a
              href="https://roverchallenge.org/irc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00e5ff] underline underline-offset-4 hover:text-white transition-colors"
            >
              International Rover Challenge (IRC) ↗
            </a>
            .
          </p>
          <p className="text-sm sm:text-base text-[#808080] leading-relaxed">
            From negotiating boulder fields and loose regolith slopes with a passive rocker-bogie suspension,
            to performing delicate instrumentation switches and soil core extraction with a custom 5-DoF robotic arm,
            every mechanical and electrical assembly is engineered for extreme environment reliability.
          </p>
        </div>

        {/* Technical Specs Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 glass-card mb-20">
          <div>
            <p className="font-mono text-[11px] text-[#808080] uppercase">Target Competition</p>
            <p className="text-base font-medium text-white mt-1">IRC Challenge</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-[#808080] uppercase">Suspension Linkage</p>
            <p className="text-base font-medium text-[#f5a623] mt-1">6-Wheel Rocker-Bogie</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-[#808080] uppercase">Manipulator Freedom</p>
            <p className="text-base font-medium text-[#00e5ff] mt-1">5-DoF Robotic Arm</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-[#808080] uppercase">Control Telemetry</p>
            <p className="text-base font-medium text-white mt-1">Dual-Band 2.4/5.8GHz</p>
          </div>
        </div>

        {/* Team Leadership Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#262626]">
            <div>
              <p className="mono-label text-[#f5a623]">Team Leadership</p>
              <h2 className="text-2xl sm:text-3xl font-normal text-white mt-1">
                Project Lead
              </h2>
            </div>
            <span className="font-mono text-xs text-[#808080]">
              VERIFIED APPOINTMENT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {ROVER_LEADS.map((lead) => (
              <LeadCard key={lead.name} {...lead} />
            ))}
          </div>
        </div>

        {/* Competition Mission Disciplines */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#262626]">
            <div>
              <p className="mono-label text-[#808080]">Engineering Sub-Teams</p>
              <h2 className="text-2xl sm:text-3xl font-normal text-white mt-1">
                Subsystems &amp; Core Disciplines
              </h2>
            </div>
            <a
              href="https://roverchallenge.org/irc/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#00e5ff] hover:underline"
            >
              IRC RULES ↗
            </a>
          </div>

          <TeamRoster members={ROVER_MEMBERS} domainName="Planetary Robotics" />
        </div>
      </div>
    </div>
  );
}
