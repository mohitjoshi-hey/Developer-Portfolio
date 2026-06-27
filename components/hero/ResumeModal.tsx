"use client";

import { FaDownload, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeModal({
  open,
  onClose,
}: ResumeModalProps) {
  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-[999]
      flex
      items-center
      justify-center
      bg-black/70
      backdrop-blur-md
      "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
        h-[90vh]
        w-[90vw]
        max-w-5xl
        rounded-3xl
        border
        border-white/10
        bg-[#171A21]
        shadow-2xl
        overflow-hidden
        "
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">

          <h2 className="text-2xl font-bold">
            My Resume
          </h2>

          <div className="flex items-center gap-3">

            <a
              href="/resume.pdf"
              download="Mohit_Joshi_Resume.pdf"
              className="
              rounded-xl
              bg-violet-600
              px-4
              py-2
              transition
              hover:bg-violet-500
              "
            >
              <FaDownload />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
              rounded-xl
              border
              border-white/10
              px-4
              py-2
              transition
              hover:border-violet-500
              "
            >
              <FaExternalLinkAlt />
            </a>

            <button
              onClick={onClose}
              className="
              rounded-xl
              border
              border-white/10
              px-4
              py-2
              transition
              hover:border-red-500
              "
            >
              <FaTimes />
            </button>

          </div>

        </div>

        {/* PDF */}

        <iframe
          src="/resume.pdf"
          className="h-full w-full"
        />

      </div>
    </div>
  );
}