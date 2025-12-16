"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative bg-[#0a0d12] px-6 md:px-20 py-32">

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-xs tracking-[0.35em] uppercase text-gray-500">
          Contact
        </p>

        <h2 className="mt-6 text-3xl font-medium text-white">
          Let’s connect
        </h2>

        <p className="mt-6 text-gray-400 leading-relaxed">
          I am open to internships, collaborations, and technical discussions
          related to electronics, communication systems, and software-supported
          engineering work.
        </p>

        <div className="mt-10 flex justify-center gap-8 text-gray-300">
          <a href="mailto:rayjishnn@gmail.com" className="hover:text-white">
            Email
          </a>
          <a href="https://www.linkedin.com/in/jishnu-ray-707869265" target="_blank" className="hover:text-white">
            LinkedIn
          </a>
          <a href="https://github.com/Jr1407" target="_blank" className="hover:text-white">
            GitHub
          </a>
          <a href="https://www.researchgate.net/profile/Jishnu-Ray-3" target="_blank" className="hover:text-white">
            ResearchGate
          </a>
        </div>
      </motion.div>
    </section>
  );
}
