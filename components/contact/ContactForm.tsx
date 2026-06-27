"use client";

import { toast } from "sonner";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

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

      if (data.success) {
        toast.success("Message sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Something went wrong.");
      }
    } catch {
      toast.error("Failed to send message.");
    }

    setLoading(false);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.8fr_1fr]">

      {/* Contact Form */}

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
          rows={7}
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

      {/* Contact Info */}

      <div className="rounded-2xl border border-white/10 bg-[#171A21] p-6">

        <h3 className="text-2xl font-bold">
          Contact Me
        </h3>

        <div className="mt-8 space-y-6">

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-violet-500/10 p-3">
              <FaEnvelope className="text-violet-400" />
            </div>

            <div>
              <p className="text-sm text-zinc-500">
                Email
              </p>

              <p className="font-medium">
                joshionmohit@gmail.com
              </p>
            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-violet-500/10 p-3">
              <FaPhone className="text-violet-400" />
            </div>

            <div>
              <p className="text-sm text-zinc-500">
                Phone
              </p>

              <p className="font-medium">
                +91 86044 72066
              </p>
            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-violet-500/10 p-3">
              <FaLocationDot className="text-violet-400" />
            </div>

            <div>
              <p className="text-sm text-zinc-500">
                Location
              </p>

              <p className="font-medium">
                Uttar Pradesh, India
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}