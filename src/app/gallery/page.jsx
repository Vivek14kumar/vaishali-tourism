"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { Lato, Allerta } from "next/font/google";

const lato = Lato({subsets: ["latin"],weight: ["400", "700"],});
const allerta = Allerta({ subsets: ["latin"], weight: "400" });


const images = [
  { src: "/images/ashokan-pillar.jpg", title: "Ashokan Pillar", desc: "A 3rd Century BC monument built by Emperor Ashoka." },
  { src: "/images/relic.jpeg", title: "Relic Stupa", desc: "Ancient stupa believed to enshrine Buddha’s relics." },
  { src: "/images/vaishali.jpeg", title: "Buddha Stupa", desc: "Historic site where Buddha preached his last sermon." },
  { src: "/images/vaishali-museum.jpeg", title: "Vaishali Museum", desc: "Preserves artifacts from Vaishali’s glorious past." },
  { src: "/images/abhishek.jpg", title: "Abhishek Pushkarn", desc: "A serene water pond reflecting Vaishali’s charm." },
  { src: "/images/Mahavir-temple.jpeg", title: "Jain Temple", desc: "Sacred birthplace of Lord Mahavira, 24th Tirthankara." },
  { src: "/images/buddha-samyak.jpeg", title: "Buddha Samyak", desc: "Celebration of Buddhist teachings and culture." },
  { src: "/images/buddha-samyak1.jpeg", title: "Buddha Samyak", desc: "Grand annual Buddhist congregation in Vaishali." },
  { src: "/images/vaishali-1.jpg", title: "Vaishali Museum", desc: "Preserves artifacts from Vaishali’s glorious past." },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="min-h-screen mt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] mb-12 rounded-xl">
        <img
          src="/images/Budha_Stupa_Vaishali.jpg"
          alt="Vaishali Heritage"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center rounded-xl">
          <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={` mozilla-headline text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-lg`}
        >
          Discover Vaishali
        </motion.h1>

        <p className={`${allerta.className} text-lg md:text-2xl text-white mt-4 max-w-2xl`}>
          An ancient land of Buddha, Jainism & heritage – waiting for you to explore.
        </p>

        <div className="text-center mt-16">
          <Link
            href="/plan-your-visit"
            className={` ${lato.className} px-6 py-3 shadow-xl bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300`}
          >
            Plan Your Visit →
          </Link>
        </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 transition">
              <h2 className={`${allerta.className} text-white text-lg font-semibold`}>{img.title}</h2>
              <p className={`${lato.className} text-gray-200 text-sm`}>{img.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute -top-10 right-0 text-white"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImg.src}
              alt={selectedImg.title}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-center text-white mt-4 text-lg font-semibold">
              {selectedImg.title}
            </p>
            <p className="text-center text-gray-300 text-sm">
              {selectedImg.desc}
            </p>
          </div>
        </div>
      )}
      
    </div>
  );
}
