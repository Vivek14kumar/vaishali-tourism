"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaClock,
  FaTicketAlt,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaLandmark,
  FaPagelines,
  FaChurch,
} from "react-icons/fa";
import { Allerta, Lato } from "next/font/google";

const allerta = Allerta({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

// Map event types to icons
const getEventIcon = (type) => {
  switch (type) {
    case "historical":
      return <FaLandmark className="text-emerald-500 w-5 h-5" />;
    case "architecture":
      return <FaPagelines className="text-emerald-500 w-5 h-5" />;
    case "religious":
      return <FaChurch className="text-emerald-500 w-5 h-5" />;
    default:
      return <FaInfoCircle className="text-emerald-500 w-5 h-5" />;
  }
};

export default function AttractionDetailClient({ place }) {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-b from-emerald-50 to-white mt-12 p-6 flex flex-col items-center max-w-7xl mx-auto"
      >
        {/* Hero Section */}
        <div className="relative w-full max-w-5xl mb-12">
          <Image
            src={place.image}
            alt={place.name}
            width={1200}
            height={600}
            className="rounded-3xl shadow-2xl w-full h-96 object-cover"
          />
          <h1 className="mozilla-headline absolute bottom-5 left-5 text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl">
            {place.name}
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-8">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-10">
            {/* Overview Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white w-full p-8 rounded-3xl shadow-xl border border-gray-100"
            >
              <h2
                className={`${allerta.className} text-2xl font-bold text-emerald-700 mb-4 flex items-center gap-2`}
              >
                Overview
              </h2>
              <p className={`${lato.className} text-gray-700 text-lg mb-4`}>
                {place.intro}
              </p>
              {place.seoIntro && (
                <p className={`${lato.className} text-gray-600 text-md italic mb-6`}>
                  {place.seoIntro}
                </p>
              )}
            </motion.div>

            {/* History Section */}
            {place.history && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white w-full p-8 rounded-3xl shadow-xl border border-gray-100"
              >
                <h2
                  className={`${allerta.className} text-2xl font-bold text-emerald-700 mb-4`}
                >
                  History
                </h2>
                <p className={`${lato.className} text-gray-700 text-lg mb-4`}>
                  {place.history}
                </p>
                {place.seoHistory && (
                  <p className={`${lato.className} text-gray-600 text-md italic`}>
                    {place.seoHistory}
                  </p>
                )}
              </motion.div>
            )}

            {/* Timeline Section */}
            {place.timeline && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white w-full p-8 rounded-3xl shadow-xl border border-gray-100"
              >
                <h2
                  className={`${allerta.className} text-2xl font-bold text-emerald-700 mb-6 text-center`}
                >
                  Timeline
                </h2>
                <div className="relative">
                  {place.timeline.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col md:flex-row items-center mb-8 last:mb-0 ${
                        idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Dot & Line */}
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-emerald-500 rounded-full z-10 flex items-center justify-center text-white">
                          {getEventIcon(item.type)}
                        </div>
                        {idx !== place.timeline.length - 1 && (
                          <div className="w-1 h-full bg-emerald-300"></div>
                        )}
                      </div>

                      {/* Event Card */}
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-emerald-50 border border-emerald-200 shadow-md rounded-2xl p-6 md:w-96 w-full mx-4"
                      >
                        <h3 className="mozilla-headline text-emerald-700 font-semibold text-lg mb-2">
                          {item.period}
                        </h3>
                        <p className={`${lato.className} text-gray-700`}>
                          {item.event}
                        </p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Google Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white w-full p-6 rounded-3xl shadow-xl border border-gray-100"
            >
              <h2 className={`${allerta.className} text-2xl font-bold text-emerald-700 mb-4`}>
                Map Location
              </h2>
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  place.location
                )}&output=embed`}
                className="w-full h-80 rounded-2xl"
              />
            </motion.div>

            {/* Back Button */}
            <Link href="/attractions">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 rounded-full bg-emerald-500 text-white font-semibold shadow-lg hover:bg-emerald-600 transition"
              >
                ← Back to Attractions
              </motion.button>
            </Link>
          </div>

          {/* Sticky Quick Info */}
          <div className="w-full lg:w-80 sticky top-24 self-start">
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 space-y-6">
              <h3 className={`${allerta.className} text-xl font-bold text-emerald-700 flex items-center gap-2`}>
                <FaInfoCircle /> Quick Info
              </h3>
              <div className="flex items-center gap-2">
                <FaClock className="text-emerald-500" />
                <span className={`${lato.className}`}>Visiting Hours: {place.visitingHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTicketAlt className="text-emerald-500" />
                <span className={`${lato.className}`}>Ticket: {place.ticket}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-emerald-500" />
                <span className={`${lato.className}`}>Location: {place.location}</span>
              </div>
              {place.importance && (
                <div className="text-gray-700 mt-4">
                  <strong className={`${lato.className}`}>Why Visit:</strong> {place.importance}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
