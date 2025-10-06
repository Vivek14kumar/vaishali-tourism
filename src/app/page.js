"use client";

//import HeroSection from "@/components/heroSection";
import CallToAction from "@/components/callToAction"; // ✅ import new component
import { motion } from "framer-motion";
import { Landmark, Camera, Sun } from "lucide-react";
import HeroSectionCard from "@/components/heroSectionCard";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const attractions = [
    {
      icon: Landmark,
      title: "Ashokan Pillar",
      desc: "A symbol of Mauryan history and Buddhist heritage.",
    },
    {
      icon: Camera,
      title: "Archaeological Sites",
      desc: "Explore ruins of ancient monasteries and stupas.",
    },
    {
      icon: Sun,
      title: "Nature & Serenity",
      desc: "Peaceful landscapes and green surroundings.",
    },
  ];

  return (
    <div className="min-h-screen w-full mt-20">
      {/* Hero Section */}
      {/*<HeroSection />*/}
      <HeroSectionCard />

      {/* Durga Puja Highlight Section 
<section className="relative py-12 max-w-6xl mx-auto px-4 md:px-8">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    {/* Image with overlay 
    <div className="relative w-full h-60 md:h-72 rounded-2xl overflow-hidden shadow-lg group">
      <Image
        src="/images/maa-durga.jpeg"
        alt="Durga Puja in Kolkata"
        fill
        className="object-cover transform transition duration-700 group-hover:scale-105"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-blue-700/30 to-transparent" />
      {/* Floating festival badge  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold"> UNESCO Heritage </div>
    </div>

    {/* Text Content 
    <div className="space-y-4">
      <h2 className="mozilla-headline text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        Durga Puja –{" "}
        <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
          Kolkata’s Grand Festival
        </span>
      </h2>
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        Experience the cultural splendor of{" "}
        <span className="font-semibold text-green-600">Durga Puja</span> in
        Kolkata. The city comes alive with artistic pandals, devotional rituals,
        and celebrations, attracting visitors from around the world.
      </p>

      {/* CTA Button 
      <Link
        href="/festivals/durga-puja"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm md:text-base"
      >
        Explore Durga Puja
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 md:w-5 md:h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  </div>
</section>*/}


      {/* Attractions Section */}
      <section
        id="attractions"
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-white"
      >
        <h2 className={`mozilla-headline text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent`}>{/*bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent*/}
          Top Attractions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {attractions.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="transition-transform duration-300"
            >
              <div className="rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 p-1">
                <div className="rounded-2xl bg-white p-6 flex flex-col items-center text-center hover:bg-green-50 transition">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-green-100 rounded-full mb-4">
                    <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action (with video bg) */}
      <CallToAction />
    </div>
  );
}
