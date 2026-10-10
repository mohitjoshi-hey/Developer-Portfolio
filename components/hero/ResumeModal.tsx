"use client";

import { FaDownload, FaArrowUpRightFromSquare, FaXmark } from "react-icons/fa6";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-2xl text-black"
      >
        {/* Header matching template */}
        <div className="flex items-center justify-between border-b-2 border-black px-6 py-4 bg-white">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-black tracking-tight">
              Mohit Joshi — Curriculum Vitae
            </h2>
            <p className="text-xs font-medium text-zinc-600">
              Computer Science &amp; Engineering • IIIT Una
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Mohit_Joshi_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-sm bg-black px-4 py-2 text-xs font-bold text-white transition hover:bg-zinc-800"
            >
              <FaDownload size={11} />
              <span className="hidden sm:inline">Download</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm border-2 border-black bg-white px-3.5 py-1.5 text-xs font-bold text-black transition hover:bg-zinc-100"
              title="Open in new tab"
            >
              <FaArrowUpRightFromSquare size={11} />
            </a>

            <button
              onClick={onClose}
              aria-label="Close"
              className="flex h-8 w-8 items-center justify-center rounded-sm border border-zinc-300 text-black transition hover:bg-black hover:text-white"
            >
              <FaXmark size={15} />
            </button>
          </div>
        </div>

        {/* PDF Iframe */}
        <div className="flex-1 bg-zinc-100">
          <iframe
            src="/resume.pdf#view=FitH"
            title="Mohit Joshi Resume"
            className="h-full w-full border-none"
          />
        </div>
      </div>
    </div>
  );
}