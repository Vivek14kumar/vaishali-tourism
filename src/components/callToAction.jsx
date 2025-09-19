"use client";

import { motion } from "framer-motion";
import { Allerta } from "next/font/google";
import  Link  from "next/link";

// Initialize the font
const allerta = Allerta({ subsets: ["latin"], weight: "400" });

export default function CallToAction() {
  return (
    <section
      id="cta"
      className="relative py-20 text-center text-white px-4 sm:px-6 lg:px-12 overflow-hidden rounded-3xl"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-3xl"
      >
        <source src="/videos/vaishali-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/25 z-10"></div>

        {/*<motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={` mozilla-headline relative z-20 text-3xl sm:text-4xl md:text-5xl font-bold mb-6`}
      >
        Discover the Spirit of Vaishali
      </motion.h2>*/}

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`${allerta.className} relative z-20 max-w-2xl mx-auto mb-8 text-md sm:text-xl md:text-2xl`}
      >
        Experience a journey through history, spirituality, and culture. Vaishali
        awaits you with open arms.
      </motion.p>
      
      <Link href={"/attractions"}>    
        <motion.button
          whileHover={{ scale: 1.05 }}
          className={`${allerta.className} relative z-20 px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl rounded-full border border-white text-black font-semibold shadow-lg hover:bg-gray-100 transition backdrop-blur-xs`}
        >
          Explore More
        </motion.button>
      </Link>  
    </section>
  );
}
