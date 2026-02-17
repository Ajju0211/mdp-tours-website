"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Utensils, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ItineraryDay } from "@/data/itineraries";

interface TimelineDayCardProps {
  day: ItineraryDay;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
  isLast: boolean;
}

function TimelineDayCard({
  day,
  isExpanded,
  onToggle,
  index,
  isLast,
}: TimelineDayCardProps) {
  const Icon = day.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative flex gap-6 lg:gap-10"
    >
      {/* Timeline Track */}
      <div className="flex flex-col items-center">
        {/* Day Circle */}
        <motion.button
          onClick={onToggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`relative z-10 flex h-12 w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
            isExpanded
              ? "border-[#1a5f7a] bg-[#1a5f7a] text-white shadow-lg shadow-[#1a5f7a]/25"
              : "border-neutral-200 bg-white text-neutral-400 hover:border-[#57b8d7] hover:text-[#1a5f7a]"
          }`}
        >
          <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
        </motion.button>

        {/* Connector Line */}
        {!isLast && (
          <div className="relative w-px flex-1 min-h-8">
            <div className="absolute inset-0 bg-neutral-200" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="absolute inset-0 bg-[#1a5f7a]/20 origin-top"
            />
          </div>
        )}
      </div>

      {/* Content Card */}
      <div className={`flex-1 ${!isLast ? "pb-8 lg:pb-12" : "pb-0"}`}>
        {/* Header - Always Visible */}
        <button
          onClick={onToggle}
          className="w-full text-left group"
          aria-expanded={isExpanded}
        >
          <div
            className={`rounded-2xl border transition-all duration-300 ${
              isExpanded
                ? "border-[#1a5f7a]/15 bg-white shadow-lg shadow-neutral-900/5"
                : "border-neutral-100 bg-white hover:border-neutral-200 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between p-5 lg:p-6">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1a5f7a]">
                    Day {day.day}
                  </span>
                  <span className="text-xs text-neutral-300">|</span>
                  <span className="text-xs font-medium text-neutral-500">
                    {day.location}
                  </span>
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-neutral-900 tracking-tight group-hover:text-[#1a5f7a] transition-colors truncate">
                  {day.title}
                </h3>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-4 shrink-0"
              >
                <ChevronDown
                  className={`h-5 w-5 transition-colors ${isExpanded ? "text-[#1a5f7a]" : "text-neutral-400"}`}
                />
              </motion.div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 lg:px-6 pb-5 lg:pb-6 border-t border-neutral-100">
                    <div className="pt-5 lg:pt-6">
                      {/* Description */}
                      <p className="text-sm lg:text-base text-neutral-600 leading-relaxed mb-6">
                        {day.description}
                      </p>

                      {/* Activities */}
                      <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                          Activities
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {day.activities.map((activity) => (
                            <li
                              key={activity}
                              className="flex items-start gap-2.5"
                            >
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#57b8d7] shrink-0" />
                              <span className="text-sm text-neutral-700">
                                {activity}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Meals & Accommodation */}
                      <div className="flex flex-wrap gap-3">
                        {day.meals.length > 0 && (
                          <div className="flex items-center gap-2 rounded-lg bg-neutral-50 px-3 py-2">
                            <Utensils className="h-3.5 w-3.5 text-[#1a5f7a]" />
                            <span className="text-xs font-medium text-neutral-600">
                              {day.meals.join(", ")}
                            </span>
                          </div>
                        )}
                        {day.accommodation !== "N/A" && (
                          <div className="flex items-center gap-2 rounded-lg bg-neutral-50 px-3 py-2">
                            <Building2 className="h-3.5 w-3.5 text-[#1a5f7a]" />
                            <span className="text-xs font-medium text-neutral-600">
                              {day.accommodation}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>
      </div>
    </motion.div>
  );
}

interface ItineraryTimelineProps {
  days: ItineraryDay[];
}

export function ItineraryTimeline({ days }: ItineraryTimelineProps) {
  const [expandedDay, setExpandedDay] = useState<number>(1);

  const handleToggle = (dayNum: number) => {
    setExpandedDay(expandedDay === dayNum ? -1 : dayNum);
  };

  return (
    <section className="py-16 lg:py-24 bg-neutral-50/50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a5f7a] mb-3 block">
            Day by Day
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight text-balance">
            Your Journey Unfolds
          </h2>
          <p className="mt-3 text-neutral-500 max-w-xl text-pretty">
            A carefully crafted itinerary that balances exploration with rest,
            ensuring you experience the best of each destination.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {days.map((day, index) => (
            <TimelineDayCard
              key={day.day}
              day={day}
              isExpanded={expandedDay === day.day}
              onToggle={() => handleToggle(day.day)}
              index={index}
              isLast={index === days.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
