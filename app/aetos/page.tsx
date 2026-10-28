import Link from "next/link";
import WatermarkBackground from "@/components/ui/WatermarkBackground";
import LeadCard from "@/components/ui/LeadCard";
import TeamRoster, { TeamMember } from "@/components/ui/TeamRoster";

export const metadata = {
  title: "AËTOS (Αετός) — GNSS-Denied Autonomous Drone | EEE JNTUH",
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
    <div className="relative min-h-[100dvh]">
      {/* Background Watermark with the AËTOS Eagle Logo */}
      <WatermarkBackground
        imageSrc="/images/aetos-logo.jpg"
        altText="Aëtos Eagle Logo"
        opacity={0.16}
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
          <p className="mono-label mb-3 text-[#00e5ff]">
            ISRO Robotics Challenge — URSC (IROC-U)
          </p>
          <h1 className="text-4xl sm:text-6xl font-normal text-white tracking-tighter leading-tight mb-6">
            AËTOS (ΑΕΤΟΣ) <br />
            Autonomous Drone Team
          </h1>
          <p className="text-lg sm:text-xl text-[#c4c4c4] leading-relaxed mb-4">
            <span className="text-white">
              Following the successful design and flight testing of their first custom UAV,
            </span>{" "}
            Team AËTOS is now engineering a next-generation GNSS-denied autonomous aerial vehicle
            specifically designed for ISRO&apos;s IROC-U competition.
          </p>
          <p className="text-sm sm:text-base text-[#808080] leading-relaxed">
            Operating in GPS-denied environments requires zero reliance on satellite positioning.
            The vehicle localizes itself using visual-inertial odometry (VIO), high-rate optical flow,
            and 2D/3D LiDAR SLAM, executing real-time obstacle avoidance and precision landing
            on dynamic platforms.
          </p>
        </div>

        {/* Technical Specs Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 glass-card mb-20">
          <div>
            <p className="font-mono text-[11px] text-[#808080] uppercase">Target Competition</p>
            <p className="text-base font-medium text-white mt-1">ISRO IROC-U</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-[#808080] uppercase">Autonomy Level</p>
            <p className="text-base font-medium text-[#00e5ff] mt-1">GNSS-Denied VIO</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-[#808080] uppercase">Compute Subsystem</p>
            <p className="text-base font-medium text-white mt-1">Companion SBC + PX4</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-[#808080] uppercase">Core Team Strength</p>
            <p className="text-base font-medium text-[#f5a623] mt-1">13 Engineers</p>
          </div>
        </div>

        {/* Team Leadership Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#262626]">
            <div>
              <p className="mono-label text-[#f5a623]">Team Leadership</p>
              <h2 className="text-2xl sm:text-3xl font-normal text-white mt-1">
                Leads &amp; System Architects
              </h2>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-[#808080]">
              VERIFIED APPOINTMENT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {AETOS_LEADS.map((lead) => (
              <LeadCard key={lead.name} {...lead} />
            ))}
          </div>
        </div>

        {/* Full Team Roster */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#262626]">
            <div>
              <p className="mono-label text-[#808080]">Cross-Disciplinary Roster</p>
              <h2 className="text-2xl sm:text-3xl font-normal text-white mt-1">
                Core Engineering Team
              </h2>
            </div>
            <span className="font-mono text-xs text-[#00e5ff]">
              11 SPECIALISTS
            </span>
          </div>

          <TeamRoster members={AETOS_MEMBERS} domainName="Aerial Robotics" />
        </div>
      </div>
    </div>
  );
}
