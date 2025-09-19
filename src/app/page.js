"use client";

//import HeroSection from "@/components/heroSection";
import CallToAction from "@/components/callToAction"; // ✅ import new component
import { motion } from "framer-motion";
import { Landmark, Camera, Sun } from "lucide-react";
import HeroSectionCard from "@/components/heroSectionCard";


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
      {/* Attractions Section */}
      <section
        id="attractions"
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-white"
      >
        <h2 className={`mozilla-headline text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent`}>
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
