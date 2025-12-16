"use client";

import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section className="relative bg-[#0a0d12] px-6 md:px-20 py-32">

      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">

        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-1"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-gray-500">
            Achievements
          </p>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="md:col-span-4 space-y-10 max-w-3xl"
        >
          <div>
            <h3 className="text-lg text-white font-medium">
              Academic Rank — 3rd Position
            </h3>
            <p className="mt-2 text-gray-400">
              Secured 3rd position in the third year of the B.Tech Electronics and
              Communication Engineering program through consistent academic performance.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-white font-medium">
              NPTEL Star & Motivated Learner
            </h3>
            <p className="mt-2 text-gray-400">
              Recognized by NPTEL for successful completion of multiple certified
              courses, demonstrating sustained commitment to self-driven technical
              learning.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-white font-medium">
              IEEE CASS Student Chapter — Co-Technical Head
            </h3>
            <p className="mt-2 text-gray-400">
              Served as Co-Technical Head of the IEEE Circuits and Systems Society
              student chapter, contributing to technical initiatives, coordination,
              and student engagement activities.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
