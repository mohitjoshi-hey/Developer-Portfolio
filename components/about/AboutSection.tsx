"use client";

import { useState } from "react";
import Image from "next/image";
import AboutBoySvg from "./AboutBoySvg";

export default function AboutSection() {
  const [usePhoto, setUsePhoto] = useState(false);

  return (
    <section id="about" className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Illustration Card in Rounded Black Border Frame matching Figma */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[400px] overflow-hidden rounded-3xl border-2 border-black bg-white shadow-sm flex items-center justify-center">
              {usePhoto ? (
                <div className="relative aspect-[4/4.8] w-full">
                  <Image
                    src="/images/profile.jpg"
                    alt="Mohit Joshi"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <AboutBoySvg />
              )}

              {/* Minimal toggle pill in bottom corner */}
              <button
                onClick={() => setUsePhoto(!usePhoto)}
                className="absolute bottom-3 right-3 rounded-sm border border-black bg-white px-2.5 py-1 text-[11px] font-bold text-black shadow-xs hover:bg-black hover:text-white transition"
              >
                {usePhoto ? "View Illustration" : "View Photo"}
              </button>
            </div>
          </div>

          {/* Right: Text Content matching Figma */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl font-normal text-black tracking-tight">
              About <span className="font-extrabold">Me</span>
            </h2>

            <div className="mt-8 space-y-6 text-sm sm:text-base leading-relaxed text-zinc-600">
              <p>
                I am an undergraduate Computer Science and Engineering student at the{" "}
                <strong className="text-black font-bold">
                  Indian Institute of Information Technology Una (IIIT Una)
                </strong>
                , Himachal Pradesh (Batch 2025–2029). Driven by how memory, compilers, and distributed architectures work under the hood, I focus on building efficient, high-performance software.
              </p>

              <p>
                My core technical expertise centers on systems programming in{" "}
                <strong className="text-black font-bold">Go (Golang)</strong> and{" "}
                <strong className="text-black font-bold">C++</strong>. I have authored{" "}
                <strong className="text-black font-bold">stlgo</strong>, a high-performance generic container and algorithms library for Go engineered for CPU cache locality and minimal memory allocations, alongside context-aware mathematical parsers in C++.
              </p>

              <p>
                Beyond individual engineering, I am an active open-source contributor to the{" "}
                <strong className="text-black font-bold">Apache Software Foundation</strong> with 5 merged pull requests across frontend and infrastructure systems, and a competitive hackathon builder (4th Runner-Up at Inter-IIIT Hackathon Udbhav 2025).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}