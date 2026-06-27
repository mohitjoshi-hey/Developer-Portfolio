"use client";

import { useState } from "react";

import {
  FaArrowRight,
  FaFileAlt,
} from "react-icons/fa";

import ResumeModal from "./ResumeModal";

export default function HeroButtons() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-4">

        <a
          href="#projects"
          className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-violet-600
          px-7
          py-3
          font-semibold
          transition
          hover:bg-violet-500
          "
        >
          View Projects

          <FaArrowRight />

        </a>

        <button
          onClick={() => setOpen(true)}
          className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          border
          border-white/10
          px-7
          py-3
          font-semibold
          transition
          hover:border-violet-500
          hover:bg-violet-500/10
          "
        >
          <FaFileAlt />

          Resume

        </button>

      </div>

      <ResumeModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}