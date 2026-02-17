"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PackageCard } from "./package-card";
import { Compass } from "lucide-react";
import type { Itinerary } from "@/data/itineraries";

interface PackagesGridProps {
  packages: Itinerary[];
}

export function PackagesGrid({ packages }: PackagesGridProps) {
  if (packages.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-24 text-center"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-neutral-100 mb-6">
          <Compass className="h-9 w-9 text-neutral-400" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2">
          No packages found
        </h3>
        <p className="text-neutral-500 max-w-sm">
          Try adjusting your search or filter to find the perfect tour package
          for you.
        </p>
      </motion.div>
    );
  }

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={packages.map((p) => p.id).join("-")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
