"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  return (
    <section className="relative bg-[#0a0d12] px-6 md:px-20 py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-6 gap-12">

        {/* LEFT — LABEL + IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-2 flex flex-col gap-10"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-gray-500">
            Skills
          </p>

          {/* identity image */}
          <div className="relative flex items-center justify-center w-36 h-36">
            <div className="absolute inset-[-40px] rounded-full bg-cyan-400/25 blur-[140px]" />
            <Image
              src="/profile.jpg"
              alt="Jishnu Ray"
              width={120}
              height={120}
              className="rounded-full object-cover shadow-2xl"
            />
          </div>
        </motion.div>

        {/* RIGHT — SKILLS CONTENT */}
        <div className="md:col-span-4 space-y-20">

          {/* CORE ELECTRONICS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-xl font-medium text-white">
              Core Electronics & Communication
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed max-w-3xl">
              Communication Systems · Analog & Digital Signal Processing ·
              Digital Electronics · Electromagnetic Theory · EMI / EMC ·
              Frequency Selective Surfaces · Antenna & RF Concepts
            </p>
          </motion.div>

          {/* SOFTWARE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-xl font-medium text-white">
              Programming & Software
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed max-w-3xl">
              Java · C · SQL · Python (analysis & scripting) ·
              Algorithmic problem solving ·
              Software tools for modeling and system analysis
            </p>
          </motion.div>

          {/* TOOLS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-xl font-medium text-white">
              Tools & Engineering Practices
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed max-w-3xl">
              MATLAB · HFSS / CST (exposure) · LaTeX · Git & Version Control ·
              Technical Documentation · Research Writing
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
