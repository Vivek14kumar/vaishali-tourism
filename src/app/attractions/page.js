"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { attractions } from "../data/attractions"; // ✅ use this, remove local const

import {  Lato, Allerta } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const allerta = Allerta({ subsets: ["latin"], weight: "400" });

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AttractionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20 px-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`mozilla-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-14 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent`}
      >
        Attractions of Vaishali
      </motion.h1>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
      >
        {attractions.map((place, i) => (
  <Link key={i} href={`/attractions/${place.slug}`} className="group block">
    <motion.div
      variants={card}
      className="relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-md border border-emerald-100 shadow-lg transition-transform duration-300 hover:shadow-2xl hover:-translate-y-3 flex flex-col h-full"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={place.image}   // ✅ changed
          alt={place.name}
          width={400}
          height={250}
          className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h2
          className={`${allerta.className} text-2xl font-bold text-emerald-700 group-hover:text-emerald-600 transition-colors mb-3`}
        >
          {place.name}
        </h2>
        <p className={`${lato.className} text-gray-600 text-base leading-relaxed flex-1`}>
          {place.intro}   {/* ✅ changed */}
        </p>
      </div>

      {/* Gradient line animation */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </motion.div>
  </Link>
))}

      </motion.div>
    </div>
  );
}
