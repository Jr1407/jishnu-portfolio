"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Text-to-SQL Query Generation using Quantized Gemma-2B",
    description:
      "Developed an AI system that converts natural language queries into SQL by fine-tuning the Gemma-2B large language model with 4-bit quantization. The approach significantly reduces memory usage while preserving query accuracy, enabling efficient deployment on low-resource systems for dashboards, analytics, and database-driven applications.",
    meta: "IEEE Xplore · Software · AI / NLP",
  },
  {
    title: "Secure Ultra-Wideband FSS for 5G/6G Communication",
    description:
      "Designed a polarization-insensitive frequency selective surface with an ultra-wide rejection band, enabling effective EMI shielding and interference suppression for next-generation wireless systems.",
    meta: "IEEE Xplore · Hardware · Communication Systems",
  },
  {
    title: "Dual Wide-Band Frequency Selective Surface Design",
    description:
      "Developed compact dual-layer FSS structures achieving stable wide-band performance across varying incident angles, suitable for Wi-Fi, radar, and communication filtering applications.",
    meta: "IEEE Xplore · Hardware · Electromagnetics",
  },
  {
    title: "Effect of Magnetic Field on Blood Flow Through a Stenosed Artery",
    description:
      "Formulated and solved a coupled MHD model using a non-Newtonian Casson fluid to analyze physiologically significant blood-flow behavior under magnetic field influence.",
    meta: "IEEE Xplore · Mathematical Modeling · Biomedical Systems",
  },
  {
    title: "Resource-Efficient Performance Analysis of BERT Variants",
    description:
      "Evaluated multiple transformer models to study accuracy–latency trade-offs, guiding the selection of efficient architectures for real-world fake-news detection systems.",
    meta: "Software Project · Performance Analysis.",
  },
];

export default function Projects() {
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
          Selected Work
        </p>
        <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-white">
          Projects & Publications
        </h2>
      </motion.div>

      {/* PROJECT LIST */}
      <div className="max-w-7xl mx-auto space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="grid md:grid-cols-5 gap-8 items-start"
          >
            {/* INDEX */}
            <div className="text-gray-600 text-sm md:col-span-1">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* CONTENT */}
            <div className="md:col-span-4">
              <h3 className="text-xl md:text-2xl font-medium text-white">
                {project.title}
              </h3>

              <p className="mt-4 max-w-3xl text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <p className="mt-4 text-sm uppercase tracking-wider text-cyan-400/80">
                {project.meta}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
