"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface ItineraryInclusionsProps {
  included: string[];
  excluded: string[];
}

export function ItineraryInclusions({
  included,
  excluded,
}: ItineraryInclusionsProps) {
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
            What to Expect
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
            Inclusions & Exclusions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-6 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100">
                <Check className="h-5 w-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {"What's Included"}
              </h3>
            </div>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-4 w-4 mt-0.5 text-emerald-500 shrink-0" />
                  <span className="text-sm text-neutral-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Excluded */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-red-100 bg-red-50/30 p-6 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100">
                <X className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {"What's Not Included"}
              </h3>
            </div>
            <ul className="space-y-3">
              {excluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="h-4 w-4 mt-0.5 text-red-400 shrink-0" />
                  <span className="text-sm text-neutral-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
