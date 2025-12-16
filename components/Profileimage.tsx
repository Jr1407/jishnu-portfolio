"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileImage({ size = 180 }: { size?: number }) {
  return (
    <div className="relative flex justify-center">
      {/* glow */}
      <div
        className="absolute rounded-full bg-blue-500/10 blur-3xl"
        style={{ width: size + 100, height: size + 100 }}
      />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-full border border-gray-700 p-2 bg-[#0b0f14]"
      >
        <Image
          src="/profile.jpg"
          alt="Jishnu Ray"
          width={size}
          height={size}
          className="rounded-full object-cover"
          priority
        />
      </motion.div>
    </div>
  );
}
