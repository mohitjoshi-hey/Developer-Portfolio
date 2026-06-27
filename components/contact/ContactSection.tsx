"use client";

import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-12 mx-auto max-w-5xl px-8 pt-16 pb-8"
    >
      <div className="mb-10">

        <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
          CONTACT
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Ready to build something awesome?
        </h2>

        <p className="mt-3 max-w-xl text-zinc-400">
          Whether it's software development, open-source, competitive programming, or simply sharing knowledge, feel free to reach out. Let's learn, build, and create something meaningful together.
        </p>

      </div>

      <ContactForm />

    </section>
  );
}