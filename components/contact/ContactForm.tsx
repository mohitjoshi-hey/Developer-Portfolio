"use client";

import { toast } from "sonner";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa6";

export default function ContactForm() {
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
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
      toast.error("Failed to send message. Please try again or email directly.");
    }

    setLoading(false);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm dark:border-white/10 dark:bg-[#131722] lg:col-span-7"
      >
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
          Send a Message
        </h3>

        <div className="grid gap-4 sm:grid-cols-2 mb-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              placeholder="e.g. Alex Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3.5 text-sm text-zinc-900 outline-none transition focus:border-violet-500 focus:bg-white dark:border-white/10 dark:bg-[#111318] dark:text-white dark:focus:border-violet-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="alex@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3.5 text-sm text-zinc-900 outline-none transition focus:border-violet-500 focus:bg-white dark:border-white/10 dark:bg-[#111318] dark:text-white dark:focus:border-violet-400"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5">
            Subject
          </label>
          <input
            type="text"
            placeholder="Project collaboration, internship, or question..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3.5 text-sm text-zinc-900 outline-none transition focus:border-violet-500 focus:bg-white dark:border-white/10 dark:bg-[#111318] dark:text-white dark:focus:border-violet-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5">
            Message *
          </label>
          <textarea
            rows={5}
            placeholder="Hello Mohit, I came across your portfolio and wanted to reach out regarding..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3.5 text-sm text-zinc-900 outline-none transition focus:border-violet-500 focus:bg-white dark:border-white/10 dark:bg-[#111318] dark:text-white dark:focus:border-violet-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3.5 font-semibold text-white shadow-md shadow-violet-500/20 transition-all hover:bg-violet-700 disabled:opacity-50"
        >
          <FaPaperPlane size={14} />
          <span>{loading ? "Sending Message..." : "Send Message"}</span>
        </button>
      </form>

      {/* Contact Info Sidebar */}
      <div className="flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm dark:border-white/10 dark:bg-[#131722] lg:col-span-5">
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
            Get in Touch
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Have a project in mind, seeking collaboration, or just want to discuss software engineering? My inbox is always open.
          </p>

          <div className="mt-6 space-y-4">
            <a
              href="mailto:joshimohit1981@gmail.com"
              className="group flex items-start gap-3.5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-all hover:border-violet-500 hover:bg-violet-50/50 dark:border-white/5 dark:bg-[#111318] dark:hover:border-violet-400"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                <FaEnvelope size={18} />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-semibold text-zinc-400">EMAIL</p>
                <p className="truncate text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400">
                  joshimohit1981@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+918604472066"
              className="group flex items-start gap-3.5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-all hover:border-violet-500 hover:bg-violet-50/50 dark:border-white/5 dark:bg-[#111318] dark:hover:border-violet-400"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                <FaPhone size={16} />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-400">PHONE</p>
                <p className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400">
                  +91 86044 72066
                </p>
              </div>
            </a>

            <div className="flex items-start gap-3.5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-white/5 dark:bg-[#111318]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                <FaLocationDot size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-400">LOCATIONS</p>
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Lucknow, UP &amp; IIIT Una, HP, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Link Quick Row */}
        <div className="mt-8 border-t border-zinc-100 pt-6 dark:border-white/5">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
            Social Profiles
          </p>
          <div className="flex gap-2">
            <a
              href="https://github.com/mohitjoshi-hey"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohit-joshi-a1376b36a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              <FaLinkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}