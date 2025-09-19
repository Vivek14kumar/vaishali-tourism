"use client";
import { useEffect, useState } from "react";
import { Lato, Allerta } from "next/font/google";
import Link from "next/link";
//import img from "next/image";

const lato = Lato({subsets: ["latin"],weight: ["400", "700"],});
const allerta = Allerta({ subsets: ["latin"], weight: "400" });

export default function HeroSectionCard() {
  const cards = [
    { img: "/images/vaishali.jpeg" },
    { img: "/images/Ashok-piller.jpg" },
    { img: "/images/relic.jpeg" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 4000); // slower: change every 4s
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-6 overflow-hidden">
      {/* Left Side - img Cards */}
      <div className="relative flex w-full md:w-1/2 justify-center items-center h-[300px] sm:h-[400px] md:h-[500px] overflow-visible">
        {cards.map((card, index) => {
          const isActive = index === current;
          const prev = (current - 1 + cards.length) % cards.length;
          const next = (current + 1) % cards.length;

          let transform = "";
          let opacity = 0;
          let zIndex = 0;
          let filter = "blur(0px)";

          if (isActive) {
            // Center card → straight, big, sharp
            transform = "translateX(0) scale(1) rotate(0deg)";
            opacity = 1;
            zIndex = 10;
            filter = "blur(0px)";
          } else if (index === prev) {
            // Left card → smaller, blur, tilted
            transform = "translateX(-60px) scale(0.85) rotate(-16deg)";
            opacity = 0.6;
            zIndex = 5;
            filter = "blur(2px)";
          } else if (index === next) {
            // Right card → smaller, blur, tilted
            transform = "translateX(60px) scale(0.85) rotate(6deg)";
            opacity = 0.6;
            zIndex = 5;
            filter = "blur(2px)";
          } else {
            transform = "scale(0.8)";
            opacity = 0;
            zIndex = 0;
            filter = "blur(4px)";
          }

          return (
            <div
              key={index}
              className="absolute w-48 sm:w-56 md:w-64 h-72 sm:h-80 md:h-96 bg-cover bg-center rounded-2xl shadow-xl transition-all duration-1000 ease-in-out"
              style={{
                backgroundImage: `url(${card.img})`,
                transform,
                opacity,
                zIndex,
                filter,
              }}
            ></div>
          );
        })}
      </div>

      {/* Right Side - Heading */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6 mt-6 md:mt-0">
        <h1 className={`mozilla-headline text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent`}>
          Discover Vaishali
        </h1>
        <p className={`${allerta.className} text-base sm:text-lg md:text-lg text-gray-600 max-w-md mx-auto md:mx-0`}>
          Explore the land of history, culture, and spirituality. From the relic
          stupa to the Ashokan pillar, Vaishali is a treasure of ancient India
          waiting for you.
        </p>
        <div className="mt-6 sm:mt-8 flex gap-4 flex-wrap justify-center">
          <Link href={"/attractions"}>
            <button
              onClick={() => scrollToSection("attractions")}
              className={` ${lato.className} px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl rounded-full shadow-xl bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold hover:scale-105 transition-transform duration-300`}
            >
              Explore More
            </button>
          </Link>
          <Link href={"/plan-your-visit"}>
            <button
              //onClick={() => scrollToSection("plan")}
              className={`${lato.className} px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl rounded-full shadow-xl bg-white text-green-700 font-semibold hover:scale-105 transition-transform duration-300`}
            >
              Plan Your Visit
            </button>
          </Link>
        </div>
        {/*<button className="px-5 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition">
          Start Your Journey
        </button>*/}
      </div>
    </section>
  );
}
