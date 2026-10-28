import Link from "next/link";
import type { Metadata } from "next";
import WatermarkBackground from "@/components/ui/WatermarkBackground";
import LeadCard from "@/components/ui/LeadCard";
import TeamRoster, { TeamMember } from "@/components/ui/TeamRoster";

export const metadata: Metadata = {
  title: "Autonomous Vehicle Platform — DBW & Perception",
  description:
    "Student engineering team developing drive-by-wire electric vehicle conversion, ROS2 perception, and LiDAR-guided navigation.",
};

const AV_LEADS = [
  {
    name: "M. Dharani",
    role: "Project Lead & Autonomy Architect",
    badge: "PROJECT LEAD",
    department: "Electrical & Electronics Engineering, JNTUH",
    linkedinUrl: "https://www.linkedin.com/in/madhamshetty-dharani-5899a0328/",
    achievements: [
      "2nd Prize — Ideathon SPOORTHI '26 (12-Lead Holter Monitor)",
      "Selected & Showcased — MSME Tech Connect @ IIT Hyderabad",
    ],
  },
];

const AV_MEMBERS: TeamMember[] = [
  {
    name: "Chakri Majji",
    role: "V2X Comms & Actuator Control",
    specialBadge: "BUILDATHON 2.0 TOP 5",
  },
  { name: "Shashi", role: "Drive-by-Wire Steering Integration" },
  { name: "Nazia", role: "Sensor Fusion & ROS2 Nodes" },
  { name: "Niyathi", role: "Trajectory Planning & Obstacle Costmaps" },
  { name: "Akhil", role: "Power Electronics & Motor Drive" },
  { name: "Jagrav", role: "LiDAR Pointcloud & SLAM" },
  {
    name: "Divya Dasari",
    role: "Telemetry & Safety Watchdog",
    specialBadge: "2ND PRIZE SPOORTHI '26",
  },
];

export default function AutonomousVehiclePage() {
  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden">
      {/* Background Watermark with the Autonomous Vehicle Schematic */}
      <WatermarkBackground
        imageSrc="/images/av-schematic.svg"
        altText="Autonomous Vehicle Wireframe"
        opacity={0.18}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 pt-12 pb-24">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#A0828A] hover:text-white transition-colors"
          >
            <span>←</span> Back to Department Projects
          </Link>
        </div>

        {/* Hero Briefing */}
        <div className="max-w-4xl mb-16">
          <p className="mono-label mb-3 text-[#FF4D6D]">
            Full-Stack Autonomous Mobility
          </p>
          <h1 className="text-4xl sm:text-6xl font-normal text-white font-heading tracking-tight leading-tight mb-6">
            Autonomous Vehicle <br />
            Development Platform
          </h1>
          <p className="text-lg sm:text-xl text-[#E2B6BD] leading-relaxed mb-4">
            <span className="text-white">
              Converting utility chassis into an intelligent, drive-by-wire testbed.
            </span>{" "}
            The team designs and tests real-time perception, localization, and trajectory
            planning algorithms to achieve level-dependent autonomous navigation in structured campus environments.
          </p>
          <p className="text-sm sm:text-base text-[#A0828A] leading-relaxed">
            By replacing mechanical steering and braking links with CAN-bus electronic actuators
            and integrating 360-degree LiDAR and stereo vision, the team creates an accessible,
            scalable platform for real-world autonomous robotics research.
          </p>
        </div>

        {/* Technical Specs Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 glass-card border-[#2D141A] mb-20">
          <div>
            <p className="font-mono text-[11px] text-[#A0828A] uppercase">Framework</p>
            <p className="text-base font-medium text-white mt-1">ROS2 Humble / Iron</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-[#A0828A] uppercase">Actuation Stack</p>
            <p className="text-base font-medium text-[#FF4D6D] mt-1">CAN-Bus Drive-by-Wire</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-[#A0828A] uppercase">Perception Rig</p>
            <p className="text-base font-medium text-white mt-1">3D LiDAR + Stereo Cameras</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-[#A0828A] uppercase">Safety Layer</p>
            <p className="text-base font-medium text-[#FF4D6D] mt-1">Hardwired E-Stop Relay</p>
          </div>
        </div>

        {/* Project Leadership Section */}
        <div className="mb-20">
          <div className="mb-8">
            <p className="mono-label mb-2 text-[#FF4D6D]">Autonomy &amp; Embedded Lead</p>
            <h2 className="text-2xl sm:text-4xl font-normal text-white font-heading tracking-tight">
              Project Leadership
            </h2>
          </div>
          <div className="max-w-xl">
            {AV_LEADS.map((lead) => (
              <LeadCard key={lead.name} {...lead} />
            ))}
          </div>
        </div>

        {/* Full Team Roster */}
        <div>
          <div className="mb-8">
            <p className="mono-label mb-2 text-[#A0828A]">Perception &amp; Controls Engineering</p>
            <h2 className="text-2xl sm:text-4xl font-normal text-white font-heading tracking-tight">
              Team Roster &amp; Subsystems
            </h2>
          </div>
          <TeamRoster members={AV_MEMBERS} />
        </div>
      </div>
    </div>
  );
}
