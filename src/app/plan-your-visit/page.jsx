"use client";
import { motion } from "framer-motion";
import { Sun, Plane, Hotel, Train, MapPin } from "lucide-react";
import { Allerta } from "next/font/google";

const allerta = Allerta({ subsets: ["latin"], weight: "400" });

export default function PlanYourVisit() {
  
  return (
    <div className="min-h-screen py-19 px-6 ">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`mozilla-headline text-4xl md:text-5xl font-bold drop-shadow-sm bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent`}
        >
          Plan Your Visit
        </motion.h1>
        <p className={`${allerta} text-gray-700 mt-4 max-w-2xl mx-auto text-lg`}>
          Everything you need to know before exploring{" "}
          <span className="text-blue-700 font-[Allerta]">
            Vaishali’s cultural treasures
          </span>.
        </p>
      </div>

      {/* Info Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-left">
        {/* Best Season */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition"
        >
          <div className="flex items-center gap-3 mb-3 text-green-600">
            <Sun size={28} />
            <h3 className="text-xl font-[Allerta] text-gray-800">Best Season</h3>
          </div>
          <p className="text-gray-600 font-[Lato]">
            November to February offers the most pleasant weather for sightseeing.
          </p>
        </motion.div>

        {/* Nearest Airport */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition"
        >
          <div className="flex items-center gap-3 mb-3 text-blue-600">
            <Plane size={28} />
            <h3 className="text-xl font-[Allerta] text-gray-800">Nearest Airport</h3>
          </div>
          <p className="text-gray-600 font-[Lato]">
            Jay Prakash Narayan International Airport, Patna (60 km from Vaishali).
          </p>
        </motion.div>

        {/* Where to Stay */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition"
        >
          <div className="flex items-center gap-3 mb-3 text-green-700">
            <Hotel size={28} />
            <h3 className="text-xl font-[Allerta] text-gray-800">Where to Stay</h3>
          </div>
          <p className="text-gray-600 font-[Lato]">
            Choose from heritage hotels & resorts in Vaishali and Patna for a comfortable stay.
          </p>
        </motion.div>

        {/* Nearest Railway Station */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition"
        >
          <div className="flex items-center gap-3 mb-3 text-green-700">
            <Train size={28} />
            <h3 className="text-xl font-[Allerta] text-gray-800">Nearest Railway Station</h3>
          </div>
          <p className="text-gray-600 font-[Lato]">
            Hajipur Junction (≈35 km) is the nearest major railway station to Vaishali.
          </p>
        </motion.div>
        
        {/* Nearest Railway Station */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition"
        >
          <div className="flex items-center gap-3 mb-3 text-green-700">
            <Train size={28} />
            <h3 className="text-xl font-[Allerta] text-gray-800">Nearest Railway Station</h3>
          </div>
          <p className="text-gray-600 font-[Lato]">
             Vaishali Junction is the closest major railway station.
          </p>
      
        </motion.div>

        {/* Nearest Railway Station */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition"
        >
          <div className="flex items-center gap-3 mb-3 text-green-700">
            <Train size={28} />
            <h3 className="text-xl font-[Allerta] text-gray-800">Nearest Railway Station</h3>
          </div>
          <p className="text-gray-600 font-[Lato]">
             Muzaffarpur Junction (≈40 km) is the nearest major railway station to Vaishali.
          </p>
        </motion.div>
      </div>

      

      {/* Map Section */}
      <div className="max-w-5xl mx-auto mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`mozilla-headline text-2xl md:text-3xl text-center mb-8 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent`}
        >
          <div className="flex items-center justify-center gap-2">
            <MapPin className="text-green-600 w-7 h-7" />
            Location Map
          </div>
        </motion.h2>
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-green-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28942.23411818232!2d85.3914!3d25.9833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed7e2076f6df2d%3A0x7056ddf3386da64f!2sVaishali%2C%20Bihar!5e0!3m2!1sen!2sin!4v1709733345678"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[450px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
