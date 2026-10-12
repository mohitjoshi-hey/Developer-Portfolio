"use client";

import {
  SiGit,
  SiJavascript,
  SiCplusplus,
  SiGo,
  SiPostgresql,
  SiHtml5,
  SiVercel,
} from "react-icons/si";
import { FaCode, FaJava, FaDatabase } from "react-icons/fa6";

interface Skill {
  name: string;
  icon: React.ReactNode;
  brandHoverClass: string;
  isInvertedInitially?: boolean;
}

const skills: Skill[] = [
  {
    name: "Git",
    icon: <SiGit size={28} />,
    brandHoverClass: "group-hover:text-[#F05032]", // Git Red
  },
  {
    name: "Go (Golang)",
    isInvertedInitially: true, // Matches template's featured card
    icon: <SiGo size={34} />,
    brandHoverClass: "group-hover:text-[#00ADD8]", // Go Light Blue
  },
  {
    name: "C++",
    icon: <SiCplusplus size={28} />,
    brandHoverClass: "group-hover:text-[#00599C]", // C++ Blue
  },
  {
    name: "C",
    icon: <FaCode size={26} />,
    brandHoverClass: "group-hover:text-[#A8B9CC]", // C Silver-Blue
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={28} />,
    brandHoverClass: "group-hover:text-[#4169E1]", // PostgreSQL Royal Blue
  },
  {
    name: "SQL",
    icon: <FaDatabase size={26} />,
    brandHoverClass: "group-hover:text-[#F29111]", // SQL Amber
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={28} />,
    brandHoverClass: "group-hover:text-[#F7DF1E]", // JavaScript Yellow
  },
  {
    name: "Java",
    icon: <FaJava size={28} />,
    brandHoverClass: "group-hover:text-[#ED8B00]", // Java Orange
  },
  {
    name: "HTML / CSS",
    icon: <SiHtml5 size={28} />,
    brandHoverClass: "group-hover:text-[#E34F26]", // HTML5 Orange-Red
  },
  {
    name: "Vercel / Cloud",
    icon: <SiVercel size={26} />,
    brandHoverClass: "group-hover:text-[#000000]", // Vercel Black
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full bg-white py-12 lg:py-16 border-t border-zinc-100">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Title matching Figma: My Skills */}
        <h2 className="text-center text-3xl sm:text-4xl font-normal text-black tracking-tight">
          My <span className="font-extrabold">Skills</span>
        </h2>
        <p className="mx-auto mt-2 text-center text-xs sm:text-sm text-zinc-500">
          Core languages, data structures, and technologies from my development experience.
        </p>

        {/* Compact 2 Rows of 5 Cards on desktop — fits cleanly within one screen viewport */}
        <div className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill) => {
            const isInitialInverted = Boolean(skill.isInvertedInitially);
            return (
              <div
                key={skill.name}
                className={`group flex h-28 flex-col items-center justify-center rounded-sm border-2 border-black p-3 text-center transition-all duration-200 cursor-default shadow-xs hover:-translate-y-1 hover:shadow-md ${
                  isInitialInverted
                    ? "bg-black text-white hover:bg-zinc-900"
                    : "bg-white text-black hover:bg-zinc-50"
                }`}
              >
                <div
                  className={`mb-2 transition-transform duration-200 group-hover:scale-115 ${
                    isInitialInverted
                      ? "text-white"
                      : "text-black"
                  } ${skill.brandHoverClass}`}
                >
                  {skill.icon}
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-tight line-clamp-1">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
