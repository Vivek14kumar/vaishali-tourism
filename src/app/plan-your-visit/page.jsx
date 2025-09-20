"use client";
import { motion } from "framer-motion";
import { Sun, Plane, Hotel, Train, MapPin } from "lucide-react";
import Head from "next/head";
import { Allerta, Lato } from "next/font/google";

const allerta = Allerta({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function PlanYourVisit() {
  return (
    <div className="min-h-screen py-20 px-6">
      <Head>
        <title>Plan Your Visit - Vaishali Tourism</title>
        <meta
          name="description"
          content="Plan your visit to Vaishali, Bihar: best season, nearest airports, hotels, railway stations, and tips for exploring historical and spiritual sites."
        />
        <link rel="canonical" href="https://vaishalitourism.in/plan-your-visit" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Plan Your Visit - Vaishali Tourism" />
        <meta
          property="og:description"
          content="Plan your visit to Vaishali, Bihar: best season, nearest airports, hotels, railway stations, and tips for exploring historical and spiritual sites."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vaishalitourism.in/plan-your-visit" />
        <meta property="og:image" content="https://vaishalitourism.in/og-image-plan-your-visit.jpg" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristDestination",
              name: "Vaishali, Bihar",
              description: "Plan your visit to Vaishali, a historical and spiritual destination in Bihar, India.",
              url: "https://vaishalitourism.in/plan-your-visit",
              image: "https://vaishalitourism.in/images/vaishali-map.jpg",
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.9833,
                longitude: 85.3914
              },
              containsPlace: [
                { "@type": "LandmarksOrHistoricalBuildings", name: "Ashokan Pillar" },
                { "@type": "LandmarksOrHistoricalBuildings", name: "Vaishali Museum" }
              ]
            }),
          }}
        />
      </Head>

      {/* Header */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mozilla-headline text-4xl md:text-5xl font-bold drop-shadow-sm bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent"
        >
          Plan Your Visit
        </motion.h1>
        <p className={`${allerta.className} text-gray-700 mt-4 max-w-2xl mx-auto text-lg`}>
          Everything you need to know before exploring <span className="text-blue-700 font-semibold">Vaishali’s cultural treasures</span>.
        </p>
      </div>

      {/* Info Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-left">
        {[
          { icon: Sun, title: "Best Season", desc: "November to February offers the most pleasant weather for sightseeing.", color: "text-green-600" },
          { icon: Plane, title: "Nearest Airport", desc: "Jay Prakash Narayan International Airport, Patna (60 km from Vaishali).", color: "text-blue-600" },
          { icon: Hotel, title: "Where to Stay", desc: "Choose from heritage hotels & resorts in Vaishali and Patna for a comfortable stay.", color: "text-green-700" },
          { icon: Train, title: "Hajipur Junction", desc: "≈35 km from Vaishali, the nearest major railway station.", color: "text-green-700" },
          { icon: Train, title: "Vaishali Junction", desc: "Closest major railway station to Vaishali.", color: "text-green-700" },
          { icon: Train, title: "Muzaffarpur Junction", desc: "≈40 km from Vaishali, nearest major railway station.", color: "text-green-700" },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition"
          >
            <div className={`flex items-center gap-3 mb-3 ${item.color}`}>
              <item.icon size={28} />
              <h3 className="text-xl font-[Allerta] text-gray-800">{item.title}</h3>
            </div>
            <p className={`${lato.className} text-gray-600`}>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Map Section */}
      <div className="max-w-5xl mx-auto mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mozilla-headline text-2xl md:text-3xl text-center mb-8 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent flex items-center justify-center gap-2"
        >
          <MapPin className="text-green-600 w-7 h-7" />
          Location Map
        </motion.h2>
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-green-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28942.23411818232!2d85.3914!3d25.9833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed7e2076f6df2d%3A0x7056ddf3386da64f!2sVaishali%2C%20Bihar!5e0!3m2!1sen!2sin!4v1709733345678"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Vaishali Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
