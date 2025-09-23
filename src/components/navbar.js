"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Lato } from "next/font/google";
import BottomNavbar from "./bottomNavbar";
import MobileTooltip from "./MobileTooltip";
import Image from "next/image";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Attractions", href: "/attractions" },
    { name: "Festivals", href: "/festivals" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // Variants for mobile stagger animation
  const mobileVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, type: "spring", stiffness: 120, damping: 20 },
    }),
  };

  return (
  <>
    <nav
      className={`${lato.className} fixed top-0 left-0 w-full z-50  backdrop-blur-md text-white shadow-lg`}
      aria-label="Main Navigation"
    >
      <MobileTooltip/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href={"/"} aria-label="Vaishali Tourism Home">
            <Image
              src="/images/vaishalitourism-logo.svg"
              alt="Vaishali Tourism Logo"
              width={110} // set width
              height={50} // set height
            />
            
            {/*<h1 className="font-bold text-2xl sm:text-3xl tracking-wider text-green-400">
              Vaishali Tourism
            </h1>*/}
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link rel='canonical'
                  href={link.href}
                  className="px-3 py-2 font-medium text-white/90 relative group"
                >
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                    {link.name}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-white/20 transition"
            >
              {isOpen ? <X size={28} color="black" /> : <Menu size={28} color="black" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40"
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className="fixed top-0 right-0 h-screen w-64 sm:w-80 bg-black/70 backdrop-blur-xl shadow-2xl border-l border-white/20 z-50 rounded-l-3xl"
              aria-label="Mobile Navigation"
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-white/20">
                <h2 className="text-xl font-semibold text-green-400">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-white/20 transition"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col space-y-6 px-6 py-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={mobileVariants}
                  >
                    <Link
                      href={link.href}
                      className="text-white/90 text-lg font-medium relative group"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                        {link.name}
                      </span>
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
      
    </nav>
    <BottomNavbar/>
  </> 
  );
}
