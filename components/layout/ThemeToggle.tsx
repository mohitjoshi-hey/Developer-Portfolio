"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-xl border border-zinc-200 bg-white/50 dark:border-white/10 dark:bg-zinc-900/50" />
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-violet-400 dark:hover:text-white"
    >
      {isDark ? (
        <FaSun className="text-amber-400 transition-transform hover:rotate-45" size={15} />
      ) : (
        <FaMoon className="text-violet-600 transition-transform hover:-rotate-12" size={14} />
      )}
    </button>
  );
}