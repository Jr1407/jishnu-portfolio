"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0d12] overflow-hidden">

      {/* ambient background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(56,189,248,0.08),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-20 pt-36 pb-28 grid md:grid-cols-2 gap-28 items-center">

        {/* LEFT — EDITORIAL TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-gray-500">
            Portfolio
          </p>

          <h1 className="mt-8 text-[3.2rem] md:text-[5rem] leading-[1.02] font-extrabold text-white">
            Jishnu
            <br />
            Ray
          </h1>

          <p className="mt-8 text-[1.05rem] text-gray-300 max-w-xl leading-relaxed">
            Aspiring Electronics & Communication Engineering student with a strong
            foundation in hardware domains such as communication systems and signal
            processing, complemented by software used for modeling, analysis, and
            system-level problem solving.
          </p>

          <div className="mt-12 flex gap-6">
            <HeroLink label="GitHub" href="https://github.com/Jr1407" />
            <HeroLink label="LinkedIn" href="https://www.linkedin.com/in/jishnu-ray-707869265" />
            <HeroLink label="ResearchGate" href="https://www.researchgate.net/profile/Jishnu-Ray-3" />
          </div>
        </motion.div>

        {/* RIGHT — AESTHETIC IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          className="relative flex justify-center md:justify-end"
        >
          {/* soft halo */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-400/20 blur-[180px]" />

          {/* glass ring */}
          <div className="relative rounded-full p-[6px] bg-gradient-to-br from-white/40 via-cyan-400/40 to-transparent">
            <div className="relative rounded-full bg-[#0a0d12] p-[8px] backdrop-blur-md">

              {/* specular highlight */}
              <div className="absolute top-4 left-8 w-32 h-32 bg-white/25 blur-3xl rounded-full pointer-events-none" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Jishnu Ray"
                  width={300}
                  height={300}
                  className="rounded-full object-cover shadow-[0_30px_80px_rgba(0,0,0,0.65)]"
                  priority
                />
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function HeroLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="relative text-sm uppercase tracking-wider text-gray-300 hover:text-white transition"
    >
      {label}
      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 hover:w-full" />
    </a>
  );
}
