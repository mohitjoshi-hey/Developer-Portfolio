"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(data.message || "Message sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch {
      toast.error("Failed to send message. Please reach out via email directly.");
    }

    setLoading(false);
  }

  return (
    <section id="contact" className="w-full bg-white py-20 lg:py-28 text-black border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: "Let's talk for Something special" matching Figma */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.15] tracking-tight">
              <span>Let’s </span>
              <span className="stroke-heading font-extrabold">talk</span>
              <br />
              <span>for </span>
              <span className="font-extrabold">Something special</span>
            </h2>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-zinc-600">
              I seek to push the limits of technology to create high-performing, user-friendly, and memorable interactive experiences. Whether you have an engineering opportunity, a collaborative open-source idea, or want to discuss systems and algorithms, my inbox is always open.
            </p>

            <div className="mt-10 space-y-3 font-extrabold text-lg sm:text-2xl text-black">
              <a
                href="mailto:joshionmohit@gmail.com"
                className="block hover:underline"
              >
                joshionmohit@gmail.com
              </a>
              <a href="tel:+918604472066" className="block hover:underline">
                +91 86044 72066
              </a>
              <p className="text-sm font-semibold text-zinc-600">
                Lucknow, Uttar Pradesh &amp; IIIT Una, Himachal Pradesh, India
              </p>
            </div>
          </div>

          {/* Right Column: Form matching Figma template */}
          <div className="lg:col-span-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-sm border-2 border-black bg-white px-4 py-3 text-sm text-black placeholder:text-zinc-500 outline-none transition focus:bg-zinc-50"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-sm border-2 border-black bg-white px-4 py-3 text-sm text-black placeholder:text-zinc-500 outline-none transition focus:bg-zinc-50"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Your website (If exists) / Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-sm border-2 border-black bg-white px-4 py-3 text-sm text-black placeholder:text-zinc-500 outline-none transition focus:bg-zinc-50"
                />
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="How can I help?*"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full rounded-sm border-2 border-black bg-white px-4 py-3 text-sm text-black placeholder:text-zinc-500 outline-none transition focus:bg-zinc-50"
                />
              </div>

              {/* Action Bar: Button + Social Icons matching Figma */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-sm bg-black px-7 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-zinc-800 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Get In Touch"}
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/mohitjoshi-hey"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-black bg-black text-white hover:bg-white hover:text-black transition"
                  >
                    <FaGithub size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohit-joshi-a1376b36a"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-black bg-black text-white hover:bg-white hover:text-black transition"
                  >
                    <FaLinkedin size={16} />
                  </a>
                  <a
                    href="https://x.com/mohitjoshi45342"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                    className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-black bg-black text-white hover:bg-white hover:text-black transition"
                  >
                    <FaXTwitter size={15} />
                  </a>
                  <a
                    href="mailto:joshionmohit@gmail.com"
                    aria-label="Email"
                    className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-black bg-black text-white hover:bg-white hover:text-black transition"
                  >
                    <FaEnvelope size={15} />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}