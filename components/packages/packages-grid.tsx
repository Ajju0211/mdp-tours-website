"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PackageCard } from "./package-card";
import { Compass, Loader2 } from "lucide-react";
import type { Package } from "@/types/package-itinerary";

interface PackagesGridProps {
  packages: Package[];
  isLoading?: boolean;
  isLoadingMore?: boolean;
}

export function PackagesGrid({
  packages,
  isLoading,
  isLoadingMore,
}: PackagesGridProps) {
  if (isLoading) {
    return (
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-2xl bg-neutral-100 aspect-[3/4]"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

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

        {/* Loading more indicator */}
        {isLoadingMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center py-12"
          >
            <Loader2 className="h-6 w-6 text-[#1a5f7a] animate-spin" />
            <span className="ml-2 text-sm text-neutral-500">
              Loading more packages...
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
