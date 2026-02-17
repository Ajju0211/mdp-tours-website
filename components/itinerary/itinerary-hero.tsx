"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, IndianRupee } from "lucide-react";
import Image from "next/image";
import type { Itinerary } from "@/data/itineraries";

interface ItineraryHeroProps {
  itinerary: Itinerary;
}

export function ItineraryHero({ itinerary }: ItineraryHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={itinerary.heroImage}
          alt={itinerary.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-neutral-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-4"
        >
          <MapPin className="h-4 w-4 text-[#57b8d7]" />
          <span className="text-sm font-medium text-white/80 tracking-wide">
            {itinerary.destination}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight text-balance mb-6"
        >
          {itinerary.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base lg:text-lg text-white/70 max-w-2xl leading-relaxed mb-10"
        >
          {itinerary.overview}
        </motion.p>

        {/* Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 lg:gap-6"
        >
          {[
            {
              icon: Clock,
              label: itinerary.duration,
            },
            {
              icon: Calendar,
              label: `${itinerary.days.length} Destinations`,
            },
            {
              icon: IndianRupee,
              label: `Starting from ${itinerary.price.toLocaleString("en-IN")}`,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 rounded-xl bg-white/10 backdrop-blur-sm px-4 py-2.5 border border-white/10"
            >
              <item.icon className="h-4 w-4 text-[#57b8d7]" />
              <span className="text-sm font-medium text-white/90">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
