"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Clock,
  MapPin,
  Bus,
  Camera,
  Plane,
  Sunrise,
  Mountain,
} from "lucide-react";

const DynamicIcon = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  switch (name) {
    case "Plane":
      return <Plane className={className} />;
    case "Bus":
      return <Bus className={className} />;
    case "Camera":
      return <Camera className={className} />;
    case "Mountain":
      return <Mountain className={className} />;
    case "Sunrise":
      return <Sunrise className={className} />;
    default:
      return <MapPin className={className} />;
  }
};
import type { ItineraryDay } from "@/data/itineraries";
import { ImageCarousel } from "./image-carousel";

interface TimelineDayCardProps {
  day: ItineraryDay;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
  totalDays: number;
}

function TimelineDayCard({
  day,
  isExpanded,
  onToggle,
  index,
  totalDays,
}: TimelineDayCardProps) {
  const isLast = index === totalDays - 1;
  const dayNumber = String(day.day).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline Connector */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1a5f7a] to-[#57b8d7]" />

      {/* Timeline Dot */}
      <div className="absolute left-0 top-0 w-10 h-full flex items-start">
        <motion.div
          className="relative -left-[18px] mt-8 h-10 w-18 rounded-full border-[3px] border-white bg-[#1a5f7a] shadow-md shadow-[#1a5f7a]/20 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-[15px] font-bold text-white leading-none">
            {dayNumber}
          </span>
        </motion.div>
      </div>

      {/* Day Card */}
      <div className="ml-12 lg:ml-16 mb-8 lg:mb-12">
        <motion.div
          className="w-full text-left group"
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Container */}
          <div
            className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
              isExpanded
                ? "border-[#1a5f7a]/30 bg-white shadow-2xl shadow-[#1a5f7a]/10"
                : "border-neutral-200 bg-white hover:border-[#1a5f7a]/40 hover:shadow-xl hover:shadow-[#1a5f7a]/5"
            }`}
          >
            {/* Header with Background Image (Clickable) */}
            <button
              type="button"
              onClick={onToggle}
              className={`w-full text-left relative h-40 lg:h-48 overflow-hidden focus:outline-none ${day.image ? "bg-gradient-to-br from-[#1a5f7a]/10 to-[#57b8d7]/10" : "bg-white"}`}
            >
              {day.image && (
                <>
                  <img
                    src={day.image}
                    alt={day.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </>
              )}

              {/* Content Overlay */}
              <div className="relative h-full flex flex-col justify-between p-6 lg:p-8">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-[20px] lg:text-[22px] font-bold text-neutral-900 tracking-tight leading-snug mb-2 line-clamp-2 text-balance group-hover:text-[#1a5f7a] transition-colors">
                      <span className="text-[#1a5f7a] mr-2">
                        Day {day.day}:
                      </span>
                      {day.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      className={`w-6 h-6 transition-colors ${
                        isExpanded ? "text-[#1a5f7a]" : "text-neutral-400"
                      }`}
                    />
                  </motion.div>
                </div>

                <div className="flex items-start gap-2.5 text-[15px] text-neutral-500 mt-2 pr-6">
                  <DynamicIcon
                    name={day.iconName}
                    className="w-[18px] h-[18px] text-[#1a5f7a] shrink-0 mt-0.5"
                  />
                  <span className="line-clamp-2 font-semibold  leading-relaxed tracking-tight">
                    {day.description ||
                      "Exciting experiences await on this day of the adventure."}
                  </span>
                </div>
              </div>
            </button>

            {/* Expanded Content */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-neutral-100 p-6 lg:p-8 space-y-6 lg:space-y-8">
                    {/* Image Gallery Section */}
                    {day.images && day.images.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                          Journey Gallery
                        </h4>
                        <div className="rounded-xl overflow-hidden">
                          <ImageCarousel
                            images={day.images}
                            title={day.title}
                          />
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    {day.description && (
                      <div className="space-y-3">
                        <p className="text-neutral-700 leading-relaxed text-pretty">
                          {day.description}
                        </p>
                      </div>
                    )}

                    {/* Activities Grid */}
                    {day.activities.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                          Activities & Highlights
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {day.activities.map((activity) => (
                            <motion.div
                              key={activity}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-[#1a5f7a]/5 to-[#57b8d7]/5 border border-[#1a5f7a]/10 hover:border-[#1a5f7a]/30 transition-all"
                            >
                              <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#1a5f7a] shrink-0" />
                              <span className="text-sm font-medium text-neutral-700">
                                {activity}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Meals & Accommodation */}
                    {(day.meals.length > 0 || day.accommodation !== "N/A") && (
                      <div className="space-y-4 pt-4 border-t border-neutral-100">
                        <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                          Stay & Meals
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {day.meals.length > 0 && (
                            <div className="flex items-center gap-3 p-4 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-[#57b8d7]/40 transition-colors">
                              <Clock
                                className="h-5 w-5 text-[#57b8d7]"
                                shrink-0
                              />
                              <div>
                                <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                                  Meals
                                </p>
                                <p className="text-sm font-medium text-neutral-800">
                                  {day.meals.join(", ")}
                                </p>
                              </div>
                            </div>
                          )}
                          {day.accommodation !== "N/A" && (
                            <div className="flex items-center gap-3 p-4 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-[#57b8d7]/40 transition-colors">
                              <MapPin className="h-5 w-5 text-[#57b8d7]" />
                              <div>
                                <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                                  Accommodation
                                </p>
                                <p className="text-sm font-medium text-neutral-800">
                                  {day.accommodation}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

interface ItineraryTimelineProps {
  days: ItineraryDay[];
}

export function ItineraryTimeline({ days }: ItineraryTimelineProps) {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const handleToggle = (dayNum: number) => {
    setExpandedDay(expandedDay === dayNum ? null : dayNum);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl w-full mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a5f7a]/10 border border-[#1a5f7a]/20 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#1a5f7a]" />
            <span className="text-sm font-semibold text-[#1a5f7a] uppercase tracking-wider">
              Your Journey
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 text-balance">
            Day-by-Day Itinerary
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Discover each moment of your adventure with curated activities,
            breathtaking locations, and unforgettable experiences.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-2">
          {days.map((day, index) => (
            <TimelineDayCard
              key={day.day}
              day={day}
              isExpanded={expandedDay === day.day}
              onToggle={() => handleToggle(day.day)}
              index={index}
              totalDays={days.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
