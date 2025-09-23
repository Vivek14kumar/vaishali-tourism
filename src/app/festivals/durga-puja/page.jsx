"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {  Lato, Allerta } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const allerta = Allerta({ subsets: ["latin"], weight: "400" });

export default function DurgaPuja() {
  return (
    <div className="mt-18">
      {/* Hero Section */}
      <div className=" mozilla-headline relative w-full h-[400px] ">
        <Image
          src="/images/durga-puja-hero1.jpeg"
          alt="Durga Puja in Kolkata"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl shadow-lg" 
        />
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center">
            Durga Puja in Kolkata
          </h1>
        </div>
      </div>

      {/* Introduction */}
      <motion.div
        className="p-6 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className={`${allerta.className} text-lg md:text-xl text-gray-700 leading-relaxed mt-6`}>
          Durga Puja is more than just a festival—it's a grand celebration of
          art, culture, spirituality, and community. Recognized by{" "}
          <span className="font-semibold">UNESCO</span> as an{" "}
          <span className="italic">Intangible Cultural Heritage of Humanity</span>,
          the festival transforms Kolkata into a city of lights, colors, and
          devotion. Millions of people from across the globe visit every year to
          witness the magic of Durga Puja.
        </p>
      </motion.div>

      {/* Highlights Section */}
      <motion.div
        className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {[
          {
            title: "Artistic Pandals",
            desc: "Each neighborhood competes to design unique, themed pandals with breathtaking creativity.",
            img: "/images/Art-pandal.jpeg",
          },
          {
            title: "Cultural Programs",
            desc: "Traditional dhunuchi dances, music, and theater performances create a festive atmosphere.",
            img: "/images/dhunuchi-dance.webp",
          },
          {
            title: "Festive Foods",
            desc: "Savor delicious Bengali sweets, street delicacies, and community feasts.",
            img: "/images/food.jpg",
          },
          {
            title: "Grand Immersion",
            desc: "The idols are immersed in the Hooghly River, marking an emotional farewell.",
            img: "/images/immersion.webp",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className={`${allerta.className} text-xl font-bold mb-2 text-gray-800`}>
                {item.title}
              </h3>
              <p className={`${lato} text-gray-600 text-sm leading-relaxed`}>
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Travel Tips Section */}
      <div className="bg-gradient-to-r from-pink-100 to-yellow-100 mt-12 py-10 px-6 rounded-2xl max-w-6xl mx-auto shadow-lg">
        <h2 className={`mozilla-headline text-3xl md:text-3xl lg:text-3xl font-extrabold text-center mb-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent`}>
          Travel Tips for Tourists
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className={`${allerta.className} font-semibold text-lg mb-2`}>Best Time</h3>
            <p className={`${lato.className} text-gray-600`}>Late September to October during Navratri. <span className="text-orange-600">In 2025 it start's from 22-Sep-2025 and end on  01-Oct-2025</span></p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className={`${allerta.className} font-semibold text-lg mb-2`}>Where to Go</h3>
            <p className={`${lato.className} text-gray-600`}>Kumartuli, College Street, Salt Lake, South Kolkata pandals.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className={`${allerta.className} font-semibold text-lg mb-2`}>What to Try</h3>
            <p className={`${lato.className} text-gray-600`}>Puchkas, Mishti Doi, and Bhog at community pandals.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

