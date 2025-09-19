"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, MapPin, Image, Phone } from "lucide-react";

export default function BottomNavbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Attractions", href: "/attractions", icon: MapPin },
    { name: "Gallery", href: "/gallery", icon: Image },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-2xl bg-black/30 backdrop-blur-xl shadow-lg border border-white/10 z-50">
      <div className="flex justify-around items-center h-16">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className="relative flex flex-col items-center justify-center text-xs font-medium group"
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-green-500/20 text-green-500"
                    : "text-white/70 group-hover:text-green-500"
                }`}
              >
                <Icon size={22} />
              </div>
              <span
                className={`mt-1 transition-colors duration-300 ${
                  isActive ? "text-green-400" : "text-white/60 group-hover:text-green-400"
                }`}
              >
                {link.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
