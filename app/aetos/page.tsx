import Link from "next/link";
import type { Metadata } from "next";
import WatermarkBackground from "@/components/ui/WatermarkBackground";
import LeadCard from "@/components/ui/LeadCard";
import TeamRoster, { TeamMember } from "@/components/ui/TeamRoster";

export const metadata: Metadata = {
  title: "AËTOS (ΑΕΤΟΣ) — GNSS-Denied Autonomous Drone",
  description:
    "Student aerial robotics team engineering autonomous visual-inertial drones for ISRO IROC-U in GPS-denied environments.",
};

const AETOS_LEADS = [
  {
    name: "Manasa Patra",
    role: "Co-Lead & Autonomous Systems",
    badge: "CO-LEAD",
    department: "Electrical & Electronics Engineering, JNTUH",
    linkedinUrl: "https://www.linkedin.com/in/manasa-patra-3036a233b/",
    achievements: [
      "3rd Place — Smart Powerathon (Agri-tech Automation)",
      "Top 5 / 50 Teams — Buildathon 2.0 (Green Corridor V2X)",
    ],
  },
  {
    name: "Manikanta Srigade",
    role: "Co-Lead & Avionics Hardware",
    badge: "CO-LEAD",
    department: "Electrical & Electronics Engineering, JNTUH",
    linkedinUrl: "https://www.linkedin.com/in/manikanta-srigade-072011333/",
    achievements: [
      "3rd Place — Smart Powerathon (Agri-tech Automation)",
      "Top 5 / 50 Teams — Buildathon 2.0 (Green Corridor V2X)",
    ],
  },
];

const AETOS_MEMBERS: TeamMember[] = [
  { name: "K. Deepika", role: "Avionics & Power Distribution" },
  { name: "Charan", role: "Flight Dynamics & Propulsion" },
  { name: "Deborah", role: "Embedded Firmware & Telemetry" },
  {
    name: "Koustubh (N. S.)",
    role: "Perception & Onboard AI",
    specialBadge: "1ST PLACE AHCSSC '26",
  },
  { name: "Manisai", role: "Visual-Inertial Odometry" },
  { name: "Rajan", role: "Structural Airframe & CAD" },
  { name: "Samarth", role: "Optical Flow & Sensor Calibration" },
  { name: "Ayeman", role: "RF Comms & Fail-Safe Logic" },
  { name: "Ramya", role: "State Estimation & Filtering" },
  { name: "Sri Prajna", role: "Ground Control Station (GCS)" },
  { name: "Krishna", role: "Flight Testing & Safety Operations" },
];

export default function AetosPage() {
  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden">
      {/* Background Watermark with the AËTOS Eagle Logo */}
      <WatermarkBackground
        imageSrc="/images/aetos-logo.jpg"
        altText="Aëtos Eagle Logo"
        opacity={0.16}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 pt-28 sm:pt-32 pb-24">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#D4C4C8] hover:text-white transition-colors"
          >
            <span>←</span> Back to Department Projects
          </Link>
        </div>

        {/* Hero Briefing */}
        <div className="max-w-4xl mb-16">
          <p className="mono-label mb-3 text-[#FF4D6D]">
            ISRO Robotics Challenge — URSC (IROC-U)
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold text-white font-heading tracking-tight leading-tight mb-6">
            AËTOS (ΑΕΤΟΣ) <br />
            Autonomous Drone Team
          </h1>
          <p className="text-lg sm:text-xl text-[#F0E6E9] leading-relaxed mb-4">
            <span className="text-white font-medium">
              Following the successful design and flight testing of their first custom UAV,
            </span>{" "}
            Team AËTOS is now engineering a next-generation GNSS-denied autonomous aerial vehicle
            specifically designed for ISRO&apos;s IROC-U competition.
          </p>
          <p className="text-sm sm:text-base text-[#E8DCE0] leading-relaxed">
            Operating in GPS-denied environments requires zero reliance on satellite positioning.
            The vehicle localizes itself using visual-inertial odometry (VIO), high-rate optical flow,
            and 2D/3D LiDAR SLAM, executing real-time obstacle avoidance and precision landing
            on dynamic platforms.
          </p>
        </div>

        {/* Technical Specs Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 glass-card border-[#2D141A] mb-20">
          <div>
            <p className="font-mono text-[11px] text-[#D4C4C8] uppercase font-medium">Navigation Paradigm</p>
            <p className="text-base font-semibold text-white mt-1">GNSS-Denied VIO</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-[#D4C4C8] uppercase font-medium">Target Competition</p>
            <p className="text-base font-semibold text-[#FF4D6D] mt-1">ISRO IROC-U</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-[#D4C4C8] uppercase font-medium">Compute Payload</p>
            <p className="text-base font-semibold text-white mt-1">NVIDIA Jetson / PX4</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-[#D4C4C8] uppercase font-medium">Airframe Class</p>
            <p className="text-base font-semibold text-[#FF4D6D] mt-1">Custom Carbon Quad</p>
          </div>
        </div>

        {/* Project Leadership Section */}
        <div className="mb-20">
          <div className="mb-8">
            <p className="mono-label mb-2 text-[#FF4D6D]">Avionics &amp; Systems Leads</p>
            <h2 className="text-2xl sm:text-4xl font-semibold text-white font-heading tracking-tight">
              Project Leadership
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AETOS_LEADS.map((lead) => (
              <LeadCard key={lead.name} {...lead} />
            ))}
          </div>
        </div>

        {/* Full Team Roster */}
        <div>
          <div className="mb-8">
            <p className="mono-label mb-2 text-[#FF4D6D]">Engineering Subsystems</p>
            <h2 className="text-2xl sm:text-4xl font-semibold text-white font-heading tracking-tight">
              Team Roster &amp; Subsystems
            </h2>
          </div>
          <TeamRoster members={AETOS_MEMBERS} />
        </div>
      </div>
    </div>
  );
}
