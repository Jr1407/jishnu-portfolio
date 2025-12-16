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

        {/* EMAIL */}
        <p className="mt-10 flex justify-center items-center gap-3 text-gray-400">
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
          </svg>
          <span className="text-white">rayjishnn@gmail.com</span>
        </p>

        {/* LINKEDIN */}
        <p className="mt-3 flex justify-center items-center gap-3 text-gray-400">
          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.3h.1c.6-1.1 2.1-2.3 4.4-2.3 4.7 0 5.6 3.1 5.6 7.1V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.2V24h-5V8z" />
          </svg>
          <span className="text-white">linkedin.com/in/jishnu-ray-707869265</span>
        </p>

        {/* GITHUB */}
        <p className="mt-3 flex justify-center items-center gap-3 text-gray-400">
          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8-.7 1.7-1 .1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12C23.5 5.7 18.3.5 12 .5z" />
          </svg>
          <span className="text-white">github.com/Jr1407</span>
        </p>

        {/* RESEARCHGATE */}
        <p className="mt-3 flex justify-center items-center gap-3 text-gray-400">
          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.372 0 0 5.373 0 12c0 6.628 5.372 12 12 12 6.627 0 12-5.372 12-12C24 5.373 18.627 0 12 0zm4.59 16.59h-1.66c-.27 0-.5-.16-.6-.4l-1.24-3.1h-1.84v3.1c0 .28-.22.5-.5.5H9.1c-.28 0-.5-.22-.5-.5V7.81c0-.28.22-.5.5-.5h3.68c2.06 0 3.33 1.32 3.33 3.17 0 1.36-.67 2.34-1.73 2.8l1.5 3.65c.13.3-.1.66-.44.66zM12.28 9.6h-1.02v2.33h1.02c.82 0 1.3-.43 1.3-1.17 0-.73-.48-1.16-1.3-1.16z" />
          </svg>
          <span className="text-white">researchgate.net/profile/Jishnu-Ray-3</span>
        </p>
        <p className="mt-10 text-gray-400 italic">
  If you want to write something to me, feel free to write.
</p>


        {/* MESSAGE FORM (NEW — ADDED BELOW, NOTHING ABOVE TOUCHED) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-20"
        >
          <form className="space-y-6 max-w-xl mx-auto">
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-cyan-400"
            />

            <textarea
              rows={5}
              required
              placeholder="Write your message..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-cyan-400 resize-none"
            />

            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-cyan-500/90 text-white text-sm font-medium hover:bg-cyan-400 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </motion.div>

    </section>
  );
}
