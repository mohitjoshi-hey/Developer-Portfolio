"use client";

import { useEffect, useState } from "react";

const text = "software that solves real problems.";

export default function TypingText() {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayed(text.substring(0, index + 1));

      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 55);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {displayed}
      <span className="animate-pulse text-violet-400">|</span>
    </>
  );
}