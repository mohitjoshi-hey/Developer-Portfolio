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
  icon: (isInverted: boolean) => React.ReactNode;
  isInvertedInitially?: boolean;
}

const skills: Skill[] = [
  {
    name: "Git",
    icon: (inv) => <SiGit size={36} className={inv ? "text-white" : "text-black"} />,
  },
  {
    name: "Go (Golang)",
    isInvertedInitially: true, // Matches the inverted card from Figma template
    icon: (inv) => <SiGo size={36} className={inv ? "text-white" : "text-black"} />,
  },
  {
    name: "C++",
    icon: (inv) => <SiCplusplus size={36} className={inv ? "text-white" : "text-black"} />,
  },
  {
    name: "C",
    icon: (inv) => <FaCode size={36} className={inv ? "text-white" : "text-black"} />,
  },
  {
    name: "PostgreSQL",
    icon: (inv) => <SiPostgresql size={36} className={inv ? "text-white" : "text-black"} />,
  },
  {
    name: "SQL",
    icon: (inv) => <FaDatabase size={36} className={inv ? "text-white" : "text-black"} />,
  },
  {
    name: "JavaScript",
    icon: (inv) => <SiJavascript size={36} className={inv ? "text-white" : "text-black"} />,
  },
  {
    name: "Java",
    icon: (inv) => <FaJava size={36} className={inv ? "text-white" : "text-black"} />,
  },
  {
    name: "HTML / CSS",
    icon: (inv) => <SiHtml5 size={36} className={inv ? "text-white" : "text-black"} />,
  },
  {
    name: "Vercel / Cloud",
    icon: (inv) => <SiVercel size={36} className={inv ? "text-white" : "text-black"} />,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Title matching Figma: My Skills */}
        <h2 className="text-center text-4xl sm:text-5xl font-normal text-black tracking-tight">
          My <span className="font-extrabold">Skills</span>
        </h2>

        {/* 2 Rows of 5 Square Cards on Desktop matching Figma template */}
        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill) => {
            const isInitialInverted = Boolean(skill.isInvertedInitially);
            return (
              <div
                key={skill.name}
                className={`group flex aspect-[3/4] flex-col items-center justify-center rounded-sm border-2 border-black p-4 text-center transition-all duration-200 cursor-default ${
                  isInitialInverted
                    ? "bg-black text-white hover:bg-zinc-800"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                <div className="mb-4 transition-transform duration-200 group-hover:scale-110">
                  {skill.icon(isInitialInverted)}
                </div>
                <span className="text-sm sm:text-base font-bold tracking-tight">
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
