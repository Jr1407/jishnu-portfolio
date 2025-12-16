"use client";

import { motion } from "framer-motion";

export default function Address() {
  return (
    <section className="relative bg-[#0a0d12] px-6 md:px-20 py-32">

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto mb-24 text-center"
      >
        <p className="text-xs tracking-[0.35em] uppercase text-gray-500">
          Location
        </p>
        <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-white">
          Address
        </h2>
      </motion.div>

      {/* ADDRESS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex justify-center"
      >
        <div className="relative max-w-md w-full rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/40 via-blue-500/30 to-purple-500/40">
          <div className="rounded-2xl px-12 py-10 text-center bg-[#0a0d12]/90 backdrop-blur">

            {/* ICON */}
            <div className="flex justify-center mb-5">
              <svg
                className="w-7 h-7 text-cyan-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
                />
              </svg>
            </div>

            {/* ADDRESS TEXT */}
            <p className="text-lg text-gray-300">
              Barasat, West Bengal, India
            </p>
            <p className="mt-1 text-gray-400 tracking-wide">
              PIN – 700126
            </p>

          </div>
        </div>
      </motion.div>

    </section>
  );
}

