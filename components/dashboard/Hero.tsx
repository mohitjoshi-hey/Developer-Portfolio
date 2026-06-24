"use client";

import BackgroundGrid from "./BackgroundGrid";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <BackgroundGrid />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <p className="tracking-[0.3em] text-cyan-400">MJ COMMAND CENTER</p>

        <h1 className="mt-4 text-5xl font-bold md:text-7xl">Mohit Joshi</h1>

        <p className="mt-4 text-zinc-400">
          Computer Science Student • IIIT Una
        </p>
        <div className="mt-10 mx-auto w-fit rounded-xl border border-cyan-500/30 bg-zinc-900/60 px-6 py-4 backdrop-blur">
          <p className="text-sm text-cyan-400">SYSTEM STATUS</p>

          <div className="mt-2 flex items-center justify-center gap-2 text-green-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
            ONLINE
        </div>
          <p className="text-zinc-400 text-sm">Location: IIIT Una</p>

          <p className="text-zinc-400 text-sm">
            Mission: Learn • Build • Improve
          </p>
        </div>
      </motion.div>
    </section>
  );
}
