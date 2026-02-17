"use client";

import { motion } from "framer-motion";

const categories = [
  "All",
  "Adventure",
  "Beach",
  "Heritage",
  "Nature",
  "Hill Station",
  "Spiritual",
];

interface PackagesFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  totalResults: number;
}

export function PackagesFilter({
  activeCategory,
  onCategoryChange,
  totalResults,
}: PackagesFilterProps) {
  return (
    <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-xl border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.97 }}
                onClick={() => onCategoryChange(cat)}
                className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#1a5f7a] text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Results Count */}
          <p className="shrink-0 text-sm text-neutral-500">
            <span className="font-semibold text-neutral-900">
              {totalResults}
            </span>{" "}
            {totalResults === 1 ? "package" : "packages"} found
          </p>
        </div>
      </div>
    </div>
  );
}
