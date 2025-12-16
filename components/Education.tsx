"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="relative bg-[#0a0d12] px-6 md:px-20 py-32">

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto mb-24"
      >
        <p className="text-xs tracking-[0.35em] uppercase text-gray-500">
          Academic Journey
        </p>
        <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-white">
          Education
        </h2>
      </motion.div>

      {/* EDUCATION CARDS */}
      <div className="max-w-7xl mx-auto space-y-16">

        {/* B.TECH */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative rounded-2xl border border-white/10 p-8 md:p-10 bg-white/5 backdrop-blur"
        >
          {/* Accent Line */}
          <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-cyan-400 to-blue-500 rounded-l-2xl" />

          <h3 className="text-xl md:text-2xl font-medium text-white">
            B.Tech in Electronics and Communication Engineering
          </h3>

          <p className="mt-3 text-gray-400">
            Institute of Engineering and Management (IEM), Kolkata
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6">
            <span className="text-sm uppercase tracking-wider text-cyan-400/90">
              2022 – 2026
            </span>

            <span className="px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm font-medium">
              CGPA: 9.75 / 10
            </span>
          </div>
        </motion.div>

        {/* HIGHER SECONDARY */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="rounded-2xl border border-white/10 p-8 md:p-10 bg-white/5 backdrop-blur"
        >
          <h3 className="text-xl md:text-2xl font-medium text-white">
            Higher Secondary (WBCHSE)
          </h3>

          <p className="mt-3 text-gray-400">
            Purulia Zilla School,Purulia
          </p>

          <p className="mt-4 text-sm uppercase tracking-wider text-cyan-400/80">
           2022 - 95.6%
          </p>
        </motion.div>

        {/* SECONDARY */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="rounded-2xl border border-white/10 p-8 md:p-10 bg-white/5 backdrop-blur"
        >
          <h3 className="text-xl md:text-2xl font-medium text-white">
            Secondary (WBBSE)
          </h3>

          <p className="mt-3 text-gray-400">
            Purulia Zilla School, Purulia
          </p>

          <p className="mt-4 text-sm uppercase tracking-wider text-cyan-400/80">
           2020 - 93.14%
          </p>
        </motion.div>

      </div>

    </section>
  );
}
