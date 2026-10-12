"use client";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectItem {
  number: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  mockup: React.ReactNode;
}

const projectsList: ProjectItem[] = [
  {
    number: "01",
    title: "stlgo — High-Performance Generic Data Structures & Algorithms",
    description:
      "A high-performance generic algorithms and containers library for Go (Golang). Implements slice-backed Stack, Queue, and Deque containers alongside binary search, sorting, numeric, and permutation algorithms designed around CPU cache locality and zero interface boxing.",
    tech: ["Go (Golang)", "Generics", "Data Structures", "Algorithms", "Benchmarking"],
    github: "https://github.com/mohitjoshi-hey",
    mockup: (
      <div className="w-full h-full min-h-[260px] rounded-2xl border border-zinc-800 bg-[#0d0f17] p-5 font-mono text-xs text-zinc-300 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            </div>
            <span className="text-[11px] text-zinc-500">container_test.go • Go 1.22+</span>
          </div>
          <p className="text-zinc-500">// Cache-friendly generic algorithms</p>
          <p className="mt-1 text-zinc-400">$ go test -bench=. -benchmem ./...</p>
          <p className="text-cyan-400">&gt; BenchmarkDeque_PushBack-8: 42.1 ns/op (0 B/op, 0 allocs/op)</p>
          <p className="text-cyan-400">&gt; BenchmarkBinarySearch-8: 14.8 ns/op</p>
          <p className="text-emerald-400 font-bold">✓ PASS: All unit tests and race detectors passed</p>
        </div>
        <div className="mt-4 pt-3 border-t border-zinc-800 flex justify-between text-[11px] text-zinc-500">
          <span>Go Generics</span>
          <span className="text-emerald-400">Zero-Boxing Allocations</span>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Smart Calculator System — Context-Aware Expression Engine",
    description:
      "A stack-based C++ expression evaluation engine supporting operator precedence, nested parentheses, floating-point arithmetic, exponentiation, and chained unary operators. Features shunting-yard parsing and robust handling for divide-by-zero.",
    tech: ["C++", "Shunting-Yard", "STL", "DSA", "Algorithms"],
    github: "https://github.com/mohitjoshi-hey/Smart-Calculator-CPP",
    mockup: (
      <div className="w-full h-full min-h-[260px] rounded-2xl border border-zinc-800 bg-[#0d0f17] p-5 font-mono text-xs text-zinc-300 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            </div>
            <span className="text-[11px] text-zinc-500">calcforge.cpp • C++20</span>
          </div>
          <p className="text-zinc-500">// Stack evaluation engine</p>
          <p className="mt-1 text-zinc-400">$ g++ -O3 calcforge.cpp -o calcforge</p>
          <p className="text-zinc-400">$ ./calcforge</p>
          <p className="text-violet-400">&gt; Expression: ((15 * 3) + 200) / 2</p>
          <p className="text-emerald-400 font-bold">✓ Computed Result = 122.50 [0.002ms]</p>
        </div>
        <div className="mt-4 pt-3 border-t border-zinc-800 flex justify-between text-[11px] text-zinc-500">
          <span>STL Stack</span>
          <span className="text-emerald-400">Memory: 4.2 MB</span>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Leads Tracker — Persistent Chrome Productivity Extension",
    description:
      "A lightweight Chrome browser extension for capturing, organizing, and persisting web links and leads. Implements active-tab URL capture via Chrome Tabs API and client-side localStorage synchronization with individual and batch deletions.",
    tech: ["JavaScript", "Chrome Extensions API", "HTML5", "CSS3", "localStorage"],
    github: "https://github.com/mohitjoshi-hey",
    mockup: (
      <div className="w-full h-full min-h-[260px] rounded-2xl border border-zinc-800 bg-[#0d0f17] p-5 font-mono text-xs text-zinc-300 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            </div>
            <span className="text-[11px] text-zinc-500">manifest.json • Chrome MV3</span>
          </div>
          <p className="text-zinc-500">// Chrome Tabs API Lead Storage</p>
          <p className="mt-1 text-zinc-400">&gt; chrome.tabs.query(&#123; active: true &#125;)</p>
          <p className="text-amber-400">&gt; URL captured: https://github.com/apache/infrastructure</p>
          <p className="text-zinc-400">&gt; Synchronizing with localStorage...</p>
          <p className="text-emerald-400 font-bold">✓ Saved 1 lead • Active session restored</p>
        </div>
        <div className="mt-4 pt-3 border-t border-zinc-800 flex justify-between text-[11px] text-zinc-500">
          <span>Chrome API</span>
          <span className="text-amber-400">Persistent Storage</span>
        </div>
      </div>
    ),
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-black py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Title matching Figma: My Projects */}
        <h2 className="text-center text-4xl sm:text-5xl font-normal text-white tracking-tight">
          My <span className="font-extrabold">Projects</span>
        </h2>

        {/* Alternating Z-pattern Projects matching Figma */}
        <div className="mt-20 space-y-24">
          {projectsList.map((project, idx) => {
            const isReversed = idx % 2 === 1; // Alternates: 01 Left img/Right text, 02 Left text/Right img, 03 Left img/Right text

            return (
              <div
                key={project.number}
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image/Mockup Column */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border-2 border-zinc-800 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                    {project.mockup}
                  </div>
                </div>

                {/* Text & Number Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Big Number matching Figma */}
                  <span className="text-5xl sm:text-6xl font-black text-white tracking-tighter">
                    {project.number}
                  </span>

                  {/* Title */}
                  <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-sm border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-semibold text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Icon Button matching Figma */}
                  <div className="mt-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm border-2 border-white bg-transparent px-4 py-2 text-xs font-bold text-white transition hover:bg-white hover:text-black"
                    >
                      <FaGithub size={14} />
                      <span>View Repository</span>
                      <FaExternalLinkAlt size={11} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}