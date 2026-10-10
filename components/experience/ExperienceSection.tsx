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
    id: "iiit-una",
    role: "Computer Science Engineering Student",
    company: "Indian Institute of Information Technology Una",
    period: "Aug 2024 - Present",
    description:
      "Pursuing Bachelor of Technology in Computer Science & Engineering. Mastering Data Structures & Algorithms, Operating Systems, Database Management, and building concurrent backend applications in Go and C++.",
  },
  {
    id: "techtatva",
    role: "1st Prize Winner — Robo-Soccer Champion",
    company: "TechTatva 2k24 National Robotics Event",
    period: "Nov 2024",
    isHighlighted: true, // Matches highlighted middle card in Figma
    description:
      "Engineered an agile, high-torque remote-controlled soccer vehicle using Arduino, dual H-Bridge motor drivers, and 2.4GHz RF communication. Won 1st Prize competing against collegiate engineering teams.",
  },
  {
    id: "apache",
    role: "Open Source Contributor",
    company: "Apache Software Foundation",
    period: "2024 - Present",
    description:
      "Actively contributing bug fixes, performance improvements, and documentation pull requests to real-world repositories within the Apache ecosystem, following strict open-source review pipelines.",
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
