"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface ItineraryHighlightsProps {
  highlights: string[];
}

export function ItineraryHighlights({
  highlights,
}: ItineraryHighlightsProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a5f7a] mb-3 block">
            Why This Trip
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
            Trip Highlights
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex items-start gap-4 rounded-2xl border border-neutral-100 bg-white p-5 lg:p-6 transition-all duration-300 hover:border-[#57b8d7]/30 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1a5f7a]/5 text-[#1a5f7a] transition-colors group-hover:bg-[#1a5f7a]/10">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="text-sm lg:text-base font-medium text-neutral-700 leading-relaxed">
                {highlight}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
