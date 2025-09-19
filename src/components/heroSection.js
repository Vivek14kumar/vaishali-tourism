"use client";

import { motion } from "framer-motion";
import { Landmark, Camera, Sun } from "lucide-react";
import { Allerta } from "next/font/google";

const allerta = Allerta({ subsets: ["latin"], weight: "400" });

export default function HeroSection() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
        className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden pt-16 md:pt-20 rounded"
    >
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src="/images/vaishali.jpeg" // replace with your hero image
          alt="Vaishali"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-green-900/40"></div> {/* Overlay */}
      </div>

      {/* Animated Floating Icons */}
      <motion.div
        className="absolute top-10 left-10 text-yellow-400"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
      >
        <Landmark className="w-10 h-10 sm:w-12 sm:h-12" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-orange-400"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
      >
        <Camera className="w-10 h-10 sm:w-12 sm:h-12" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-3/4 text-yellow-300"
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "loop" }}
      >
        <Sun className="w-10 h-10 sm:w-12 sm:h-12" />
      </motion.div>

      {/* Hero Content */}
<div className="relative z-10 flex flex-col items-center">
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
      className={`mozilla-headline text-4xl sm:text-5xl md:text-6xl font-bold leading-tight sm:leading-snug md:leading-tight text-white drop-shadow-lg`}

  >
    Welcome to Vaishali
  </motion.h1>
   
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
    className={`${allerta.className} mt-4 text-base sm:text-lg md:text-xl text-white max-w-2xl drop-shadow-md`}
  >
    Explore the land of history, spirituality, and culture. Discover the
    birthplace of democracy and ancient Buddhist heritage.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="mt-6 sm:mt-8 flex gap-4 flex-wrap justify-center"
  >
    <button
      onClick={() => scrollToSection("attractions")}
      className="px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl rounded-full shadow-xl bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold hover:scale-105 transition-transform duration-300"
    >
      Plan Your Visit
    </button>
    <button
      onClick={() => scrollToSection("cta")}
      className="px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl rounded-full shadow-xl bg-white text-green-700 font-semibold hover:scale-105 transition-transform duration-300"
    >
      Explore More
    </button>
  </motion.div>
</div>

    </section>
  );
}
