"use client";

import { useEffect, useState } from "react";

const texts = [
  "software that solves real problems.",
  "production-ready web applications.",
  "backend systems with Go.",
  "AI-powered solutions.",
  "projects that make an impact.",
];

export default function TypingText() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.substring(0, displayed.length + 1));

        if (displayed === current) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.substring(0, displayed.length - 1));

        if (displayed === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 30 : 55);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, textIndex]);

  return (
    <>
      {displayed}
      <span className="animate-pulse text-violet-400">|</span>
    </>
  );
}