"use client";

import { IoIosFlash } from "react-icons/io";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0F0F1A] to-black text-white px-6">
      {/* Glowing Background Effects */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(120,100,255,0.2),transparent_70%)] blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),transparent_70%)] blur-3xl" />

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full shadow-sm"
      >
        <IoIosFlash className="text-yellow-400 text-xl animate-pulse" />
        <p className="text-sm md:text-base font-medium tracking-wide text-gray-200">
          Supercharge Your Workflow with AI
        </p>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-8 text-4xl md:text-6xl font-extrabold text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500"
      >
        Build, Analyze, and Deploy Faster
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-4 text-base md:text-lg text-gray-400 text-center max-w-2xl"
      >
        Our intelligent automation platform helps teams innovate and scale effortlessly — powered by cutting-edge AI models and real-time data.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition-all duration-200 font-semibold shadow-lg">
          🚀 Get Started Free
        </button>
        <button className="px-8 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-200 font-medium text-gray-300">
          ▶ Watch Demo
        </button>
      </motion.div>
    </section>
  );
}
