"use client";

import { useState } from "react";
import { FaArrowRight, FaFilePdf, FaPaperPlane } from "react-icons/fa6";
import ResumeModal from "./ResumeModal";

export default function HeroButtons() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap items-center gap-3.5">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-violet-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-700"
        >
          <span>View Projects</span>
          <FaArrowRight size={13} />
        </a>

        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-violet-400 dark:hover:text-white"
        >
          <FaFilePdf size={14} className="text-red-500" />
          <span>Resume</span>
        </button>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl border border-transparent px-4 py-3 text-sm font-semibold text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
        >
          <FaPaperPlane size={13} />
          <span>Get In Touch</span>
        </a>
      </div>

      <ResumeModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}