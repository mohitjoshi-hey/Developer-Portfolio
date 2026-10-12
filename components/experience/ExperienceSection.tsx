"use client";

import { FaGraduationCap, FaTrophy, FaCodeBranch } from "react-icons/fa6";

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  isHighlighted?: boolean;
}

const experiences: Experience[] = [
  {
    id: "apache",
    role: "Open Source Contributor (Remote)",
    company: "Apache Software Foundation (Infrastructure)",
    period: "Oct 2025 - Present",
    isHighlighted: true, // Matches highlighted card in Figma
    description:
      "Merged 5 pull requests (#274, #286, #288, #289, #294) addressing frontend consistency, sticky navigation bar implementation with Bootstrap, and technical documentation refinements across services pages.",
  },
  {
    id: "iiit-una",
    role: "B.Tech in Computer Science and Engineering",
    company: "Indian Institute of Information Technology Una",
    period: "2025 - 2029",
    description:
      "Undergraduate student in Computer Science & Engineering. Specializing in Systems Programming, Generic Data Structures in Go, and Core Algorithm Design.",
  },
  {
    id: "nirmala",
    role: "Senior Secondary (Class XII) — 92.5%",
    company: "Nirmala Convent Inter College, Lucknow",
    period: "2024",
    description:
      "Graduated with 92.5% distinction in Science & Mathematics, establishing a robust foundation in algorithmic thinking and mathematical problem solving.",
  },
  {
    id: "achievements",
    role: "Hackathon Competitor & Award Winner",
    company: "Inter-IIIT Udbhav 2025 & PixelForge",
    period: "2025",
    description:
      "Awarded 4th Runner-Up at Inter-IIIT Hackathon Udbhav 2025, and clinched 3rd Position at PixelForge, IIIT Una.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full bg-black py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        {/* Title matching Figma: My Experience */}
        <h2 className="text-center text-4xl sm:text-5xl font-normal text-white tracking-tight">
          My <span className="font-extrabold">Experience</span>
        </h2>

        {/* Timeline Layout */}
        <div className="mt-16 relative">
          <div className="absolute left-[11px] sm:left-[19px] top-6 bottom-6 w-[2px] bg-zinc-800"></div>
          
          <div className="space-y-8 relative">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-10 sm:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-1 sm:left-[11px] top-7 w-[18px] h-[18px] bg-black border-2 border-zinc-500 rounded-full z-10 flex items-center justify-center">
                   <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Card Content */}
                <div
                  className={`rounded-xl border p-6 sm:p-8 transition-all duration-200 ${
                    exp.isHighlighted
                      ? "border-zinc-500 bg-[#1c1c1f]"
                      : "border-zinc-800 bg-[#0d0d0f] hover:border-zinc-700"
                  }`}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-normal text-zinc-400 mt-1">
                         at {exp.company}
                      </p>
                    </div>

                    {/* Period */}
                    <span className="font-mono text-xs sm:text-sm text-zinc-400 sm:text-right shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-400">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
