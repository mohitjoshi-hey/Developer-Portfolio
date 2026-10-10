"use client";

import { FaStar } from "react-icons/fa6";

export default function TestimonialSection() {
  return (
    <section id="testimonial" className="w-full bg-white py-20 lg:py-24 text-black border-t border-zinc-100">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        {/* Title matching Figma: My Testimonial */}
        <h2 className="text-center text-4xl sm:text-5xl font-normal text-black tracking-tight">
          My <span className="font-extrabold">Testimonial</span>
        </h2>

        {/* Testimonial Placeholder */}
        <div className="mt-16 mx-auto max-w-3xl">
          <div className="flex flex-col items-center text-center p-8 sm:p-12 border-2 border-black rounded-sm shadow-md bg-white">
            <div className="mb-6 rounded-full w-20 h-20 bg-zinc-200 border-2 border-black flex items-center justify-center overflow-hidden">
               {/* Avatar Placeholder */}
               <svg className="w-12 h-12 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
               </svg>
            </div>
            
            <p className="text-lg sm:text-xl text-zinc-600 mb-8 italic">
              "Mohit is an exceptional collaborator. His attention to detail and strong command of frontend technologies brought our designs to life beautifully. He consistently delivered high-quality code and showed a proactive approach to problem-solving."
            </p>

            <div className="h-[2px] w-12 bg-black mb-6"></div>

            <h3 className="text-lg font-bold">John Doe</h3>
            <p className="text-sm text-zinc-500 mb-4">Senior Designer, Example Corp</p>

            <div className="flex items-center gap-1 text-black">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
