"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
  return (
    <section className="relative bg-[#0a0d12] px-6 md:px-20 py-32 overflow-hidden">

      {/* ambient background glow */}
      <div className="absolute top-1/3 right-[-200px] w-[520px] h-[520px] bg-cyan-400/10 blur-[220px] rounded-full" />

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
            Experience
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

        {/* RIGHT — EXPERIENCE CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="md:col-span-4"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-white max-w-3xl">
            Internship experience within large-scale urban rail infrastructure
            and communication systems.
          </h2>

          <div className="mt-12 max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-cyan-400/80">
              Kolkata Metro Railways · Internship
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Completed an internship at Kolkata Metro Railways, gaining exposure
              to communication and signaling systems used in large-scale urban
              transportation infrastructure. The experience provided insight into
              how engineering principles are applied under real-world operational
              constraints.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Observed the functioning of signaling architectures, safety mechanisms,
              and control systems critical to reliable train operations. Emphasis was
              placed on system robustness, fault tolerance, and adherence to safety
              standards rather than isolated component performance.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              This exposure strengthened my understanding of how theoretical concepts
              from communication systems and electronics translate into dependable,
              mission-critical engineering solutions deployed at scale.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
