"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-8 text-white border-t border-zinc-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-12 text-xs">
        {/* Modern Engineering Monogram: <MJ /> */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-white font-mono text-xs font-black text-black">
            &lt;MJ/&gt;
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-white leading-none">
              Mohit Joshi
            </span>
            <span className="text-[10px] font-mono text-zinc-400 leading-tight">
              IIIT Una • CSE
            </span>
          </div>
        </div>

        {/* Copyright notice */}
        <p className="text-zinc-400 font-medium text-center sm:text-right">
          © {new Date().getFullYear()} Mohit Joshi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}