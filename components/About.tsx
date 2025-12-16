"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative bg-[#0a0d12] px-6 md:px-20 py-32 overflow-hidden">

      {/* subtle ambient background */}
      <div className="absolute top-1/4 left-[-200px] w-[500px] h-[500px] bg-cyan-400/10 blur-[220px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-6 gap-12 items-start">

        {/* LEFT — LABEL + IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-2 flex flex-col gap-10"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-gray-500">
            About
          </p>

          {/* animated glowing profile image */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-center justify-center w-36 h-36"
          >
            {/* dimmed outer vignette */}
            <div className="absolute inset-[-40px] rounded-full bg-[radial-gradient(circle,rgba(10,13,18,0)_35%,rgba(10,13,18,0.85)_75%)] pointer-events-none" />

            {/* pulsing glow */}
            <motion.div
              animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-cyan-400/35 blur-[140px]"
            />

            {/* glass ring */}
            <div className="relative rounded-full p-[4px] bg-gradient-to-br from-white/40 via-cyan-400/50 to-transparent">
              <div className="relative rounded-full bg-[#0a0d12] p-[6px] backdrop-blur-md">

                {/* specular highlight */}
                <div className="absolute top-2 left-4 w-20 h-20 bg-white/25 blur-2xl rounded-full pointer-events-none" />

                <Image
                  src="/profile.jpg"
                  alt="Jishnu Ray"
                  width={120}
                  height={120}
                  className="rounded-full object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — ABOUT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="md:col-span-4"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-white max-w-3xl">
            Engineering student focused on real-world systems where hardware,
            signals, and software intersect.
          </h2>

          <p className="mt-8 text-gray-400 leading-relaxed max-w-3xl">
            I am an Electronics and Communication Engineering student with a strong
            interest in communication systems, signal processing, and hardware-oriented
            design. My academic and project work emphasizes understanding how physical
            systems behave and how engineering constraints shape practical solutions.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-3xl">
            Alongside core electronics, I work with software tools and programming to
            model systems, analyze performance, and support decision-making in complex
            engineering problems. I value clarity, discipline, and correctness over
            superficial complexity.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-3xl">
            Through academic research, internships, and independent projects, I aim to
            develop a balanced skill set that bridges theoretical understanding with
            practical, real-world engineering applications.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
