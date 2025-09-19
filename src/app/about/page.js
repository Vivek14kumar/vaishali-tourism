"use client";
import { motion } from "framer-motion";
import img from "next/image";
import { MapPin } from "lucide-react";

import { Lato, Allerta } from "next/font/google";

const lato = Lato({subsets: ["latin"],weight: ["400", "700"],});
const allerta = Allerta({ subsets: ["latin"], weight: "400" });

export default function About() {
  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden rounded-3xl ">
      {/* Decorative glowing orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-[-100px] left-[-100px] w-[450px] h-[450px] bg-orange-300/50 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-[-120px] right-[-100px] w-[500px] h-[500px] bg-yellow-400/40 rounded-full blur-3xl"
      />

      <div className={`relative max-w-6xl mx-auto text-center`}>
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`mozilla-headline text-4xl md:text-6xl font-extrabold text-gray-800 mb-6`}
        >
          <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Discover Vaishali
          </span>
        </motion.h2>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={` ${allerta.className} text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-14`}
        >
          Vaishali, located in Bihar, India, is one of the most sacred
          destinations for Buddhists and Jains. Known as the{" "}
          <span className="font-semibold text-orange-600">world’s first republic</span>,
          it was once a thriving hub of trade, culture, and spirituality.
        </motion.p>

        {/* Grid content */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Buddhist Significance */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition relative overflow-hidden group"
          >
            <img
              src="/images/buddha.jpg"
              alt="Buddhist Heritage"
              width={500}
              height={300}
              className="rounded-xl mb-4 object-cover w-full h-52 group-hover:scale-105 transition duration-500"
            />
            <h3 className={` mozilla-headline text-2xl font-semibold text-orange-700 mb-3`}>
              Buddhist Significance
            </h3>
            <p className={`${lato.className} text-gray-600 leading-relaxed`}>
              Vaishali is where Lord Buddha preached his{" "}
              <span className="font-medium">final sermon</span> and announced
              his Mahaparinirvana. Emperor Ashoka’s historic pillar still stands
              as a timeless symbol of this sacred heritage.
            </p>
          </motion.div>

          {/* Jain Connection */}
          <motion.div
            whileHover={{ scale: 1.05}}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition relative overflow-hidden group"
          >
            <img
              src="/images/Lord_Mahavira.jpg"
              alt="Jain Heritage"
              width={500}
              height={300}
              className="rounded-xl mb-4 object-cover w-full h-52 group-hover:scale-105 transition duration-500"
            />
            <h3 className={`mozilla-headline text-2xl font-semibold text-teal-700 mb-3`}>
              Jain Connection
            </h3>
            <p className={`${lato.className} text-gray-600 leading-relaxed`}>
              Vaishali is the{" "}
              <span className="font-medium">birthplace of Lord Mahavira</span>,
              the 24th Tirthankara. It became a center of Jain philosophy and
              spiritual awakening that shaped millions of lives.
            </p>
          </motion.div>
        </div>

        {/* Closing text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-14"
        >
          <p className={`${allerta.className} text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto`}>
            Today, Vaishali stands as a{" "}
            <span className="font-semibold text-yellow-600">
              living treasure of history and spirituality
            </span>
            , drawing pilgrims, historians, and travelers from every corner of
            the globe.
          </p>
        </motion.div>

        {/* Google Map Embed */}
        <div className="mt-16">
                    <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2 justify-center">
            <motion.div
              whileInView={{ y: [0, -5, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <MapPin className=" w-7 h-7" />
            </motion.div>
           <p className={`mozilla-headline`}>Find Vaishali on the Map</p> 
          </h3>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.447118050481!2d85.08197687477304!3d25.98775887723042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed77b5e9c14291%3A0x3ef177bb1a926f55!2sVaishali%2C%20Bihar%20844308!5e0!3m2!1sen!2sin!4v1694965000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
