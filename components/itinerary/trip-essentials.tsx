"use client";

import { motion } from "framer-motion";
import {
  Mountain,
  Cloud,
  Package,
  Heart,
  MapPin,
  Home,
  Zap,
} from "lucide-react";

interface TripEssentialsProps {
  maxAltitude?: string;
  minFitness?: string;
  climate?: string;
  visaRequired?: boolean;
  accommodation?: string;
  whatToBring?: string[];
}

export function TripEssentials({
  maxAltitude,
  minFitness,
  climate,
  visaRequired,
  accommodation,
  whatToBring,
}: TripEssentialsProps) {
  if (!maxAltitude && !minFitness && !climate && !whatToBring?.length) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-16 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a5f7a] mb-3 block">
            Before You Go
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
            Trip Essentials
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-base lg:text-lg">
            Everything you need to know and pack for a comfortable and safe journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-16"
        >
          {/* Altitude Card */}
          {maxAltitude && (
            <motion.div
              variants={itemVariants}
              className="group relative rounded-2xl border border-neutral-200 bg-white p-6 lg:p-8 hover:border-[#1a5f7a] hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-[#1a5f7a] group-hover:text-white transition-all duration-300">
                    <Mountain className="h-6 w-6 text-[#1a5f7a] group-hover:text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Maximum Altitude
                </h3>
                <p className="text-2xl font-bold text-[#1a5f7a] mb-3">
                  {maxAltitude}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Allow 1-2 days for acclimatization. Stay hydrated and avoid strenuous activity on arrival.
                </p>
              </div>
            </motion.div>
          )}

          {/* Fitness Card */}
          {minFitness && (
            <motion.div
              variants={itemVariants}
              className="group relative rounded-2xl border border-neutral-200 bg-white p-6 lg:p-8 hover:border-[#1a5f7a] hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 group-hover:bg-[#1a5f7a] group-hover:text-white transition-all duration-300">
                    <Heart className="h-6 w-6 text-[#1a5f7a] group-hover:text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Fitness Required
                </h3>
                <p className="text-base font-semibold text-[#1a5f7a] mb-3">
                  {minFitness}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Moderate physical fitness and comfort with walking on uneven terrain is recommended.
                </p>
              </div>
            </motion.div>
          )}

          {/* Climate Card */}
          {climate && (
            <motion.div
              variants={itemVariants}
              className="group relative rounded-2xl border border-neutral-200 bg-white p-6 lg:p-8 hover:border-[#1a5f7a] hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 group-hover:bg-[#1a5f7a] group-hover:text-white transition-all duration-300">
                    <Cloud className="h-6 w-6 text-[#1a5f7a] group-hover:text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Climate & Weather
                </h3>
                <p className="text-sm font-medium text-[#1a5f7a] mb-3">
                  {climate}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Pack layers to adapt to temperature changes throughout the day.
                </p>
              </div>
            </motion.div>
          )}

          {/* Accommodation Card */}
          {accommodation && (
            <motion.div
              variants={itemVariants}
              className="group relative rounded-2xl border border-neutral-200 bg-white p-6 lg:p-8 hover:border-[#1a5f7a] hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 group-hover:bg-[#1a5f7a] group-hover:text-white transition-all duration-300">
                    <Home className="h-6 w-6 text-[#1a5f7a] group-hover:text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Accommodation
                </h3>
                <p className="text-sm font-medium text-[#1a5f7a] mb-3">
                  {accommodation}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Comfortable stays in handpicked locations with modern amenities.
                </p>
              </div>
            </motion.div>
          )}

          {/* Visa Card */}
          <motion.div
            variants={itemVariants}
            className="group relative rounded-2xl border border-neutral-200 bg-white p-6 lg:p-8 hover:border-[#1a5f7a] hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 group-hover:bg-[#1a5f7a] group-hover:text-white transition-all duration-300">
                  <MapPin className="h-6 w-6 text-[#1a5f7a] group-hover:text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Visa Requirements
              </h3>
              <p className="text-sm font-medium text-[#1a5f7a] mb-3">
                {visaRequired ? "Visa Required" : "No Visa Required"}
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {visaRequired
                  ? "Check visa requirements based on your nationality."
                  : "Indian domestic travel - bring a valid ID or passport."}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* What to Bring Section */}
        {whatToBring && whatToBring.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-neutral-200 bg-white p-8 lg:p-10 lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a5f7a] text-white">
                <Package className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">What to Bring</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {whatToBring.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-[#f0f9ff] to-transparent border border-blue-100 hover:border-[#1a5f7a] transition-colors duration-300"
                >
                  <Zap className="h-5 w-5 text-[#1a5f7a] mt-0.5 shrink-0" />
                  <span className="text-sm lg:text-base text-neutral-700 leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
