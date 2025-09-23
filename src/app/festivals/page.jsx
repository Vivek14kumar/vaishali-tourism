"use client";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import {  Lato, Allerta } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const allerta = Allerta({ subsets: ["latin"], weight: "400" });


const festivals = [
  {
    title: "Chhath Puja",
    link: "/festivals/chhath-puja",
    image: "/images/chhat-puja.webp",
    desc: "A unique festival dedicated to the Sun God, celebrated with rituals on river banks in Bihar & UP.",
  },
  {
    title: "Buddha Jayanti",
    link: "/festivals/buddha-jayanti",
    image: "/images/buddha-jayanti.webp",
    desc: "Celebrates the birth of Lord Buddha, marked by prayers, processions, and peace gatherings.",
  },
  {
    title: "Durga Puja",
    link: "/festivals/durga-puja",
    image: "/images/durga-puja.webp",
    desc: "The grand festival of Kolkata, celebrating Goddess Durga with pandals, rituals & cultural events.",
  },
  {
    title: "Diwali",
    link: "/festivals/diwali",
    image: "/images/diwali.jpg",
    desc: "Festival of Lights, celebrated across India with diyas, fireworks, and joy.",
  },
  {
    title: "Holi",
    link: "/festivals/holi",
    image: "/images/holi.jpeg",
    desc: "Festival of colors, celebrated with gulal, sweets, and togetherness in Mathura & beyond.",
  },
];

export default function Festivals() {
  return (
    <div className={`p-6 mt-14 max-w-7xl mx-auto`}>
      {/* Page Title */}
      <h1
        className={`mozilla-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent`}
      >
        Festivals of India
      </h1>

      {/* Festival Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {festivals.map((festival, index) => (
          <Link
            key={index}
            href={festival.link}
            className="group block bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-52">
              <Image
                src={festival.image}
                alt={festival.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h2
                className={`${allerta.className} text-2xl mb-3 text-emerald-700 group-hover:text-green-600 transition-colors`}
              >
                {festival.title}
              </h2>
              <p className={`${lato.className} text-gray-600 text-sm leading-relaxed`}>
                {festival.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
