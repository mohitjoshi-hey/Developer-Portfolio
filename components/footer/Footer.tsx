"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-8 text-white border-t border-zinc-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-12 text-xs">
        {/* Logo matching Figma */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-white text-black font-black text-xs">
            M
          </div>
          <span className="text-base font-extrabold tracking-tight text-white">
            Personal
          </span>
        </div>

        {/* Copyright notice matching Figma template */}
        <p className="text-zinc-400 font-medium text-center sm:text-right">
          © {new Date().getFullYear()} Mohit Joshi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}