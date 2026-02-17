"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Search } from "lucide-react";

interface PackagesHeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function PackagesHero({
  searchQuery,
  onSearchChange,
}: PackagesHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/packages-hero.jpg"
          alt="Explore our tour packages"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/50 to-neutral-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-[#57b8d7] mb-4"
        >
          Our Packages
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight text-balance mb-5"
        >
          Explore Tour Packages
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base lg:text-lg text-white/70 max-w-xl leading-relaxed mb-10"
        >
          Handpicked destinations with expertly curated itineraries. Find the
          perfect trip for your next adventure.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-lg"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search by destination, package name..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full h-13 pl-12 pr-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#57b8d7]/50 focus:border-[#57b8d7]/50 transition-all"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
