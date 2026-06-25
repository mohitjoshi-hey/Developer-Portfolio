"use client";

import { toast } from "sonner";
import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function ContactForm() {
  const [email, setEmail] = useState("");
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
          email,
          message,
        }),
      });

      const data = await res.json();

      toast.success("Message sent successfully!");

      if (data.success) {
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      toast.error("Failed to send message.");
    }

    setLoading(false);
  }

  return (
    <div className="space-y-6">

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-white/10 bg-[#171A21] p-6"
      >

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="
          mb-4
          w-full
          rounded-xl
          border
          border-white/10
          bg-[#111318]
          p-4
          outline-none
          transition
          focus:border-violet-500
          "
        />

        <textarea
          rows={4}
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-[#111318]
          p-4
          outline-none
          transition
          focus:border-violet-500
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="
          mt-5
          w-full
          rounded-xl
          bg-violet-600
          py-3
          font-medium
          transition
          hover:bg-violet-500
          disabled:opacity-50
          "
        >
          {loading ? "Sending..." : "Send Message →"}
        </button>

      </form>

      {/* Social Row */}

      <div
        className="
        flex
        flex-wrap
        items-center
        justify-center
        gap-8
        rounded-2xl
        border
        border-white/10
        bg-[#171A21]
        p-5
        "
      >

        <a
          href="mailto:yourmail@gmail.com"
          className="flex items-center gap-2 text-zinc-400 transition hover:text-violet-400"
        >
          <FaEnvelope />
          Email
        </a>

        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-zinc-400 transition hover:text-violet-400"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-zinc-400 transition hover:text-violet-400"
        >
          <FaLinkedin />
          LinkedIn
        </a>

      </div>

    </div>
  );
}