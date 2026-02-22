'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Utensils, Building2 } from 'lucide-react';
import type { ItineraryDay } from '@/data/itineraries';
import { ImageCarousel } from './image-carousel';

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative flex gap-8 lg:gap-12"
    >
      {/* Timeline Track - Left Side */}
      <div className="flex flex-col items-center">
        {/* Day Circle */}
        <motion.button
          onClick={onToggle}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className={`relative z-10 h-16 w-16 lg:h-20 lg:w-20 shrink-0 rounded-full border-3 transition-all duration-300 flex items-center justify-center ${
            isExpanded
              ? 'border-[#1a5f7a] bg-[#1a5f7a] text-white shadow-lg shadow-[#1a5f7a]/30'
              : 'border-[#1a5f7a]/30 bg-white text-[#1a5f7a] hover:border-[#1a5f7a] hover:bg-[#1a5f7a]/5'
          }`}
        >
          <span className="text-lg lg:text-xl font-bold">{day.day}</span>
        </motion.button>

        {/* Vertical Connector Line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="w-1 flex-1 min-h-12 bg-gradient-to-b from-[#1a5f7a]/40 to-[#1a5f7a]/10 origin-top"
          />
        )}
      </div>

      {/* Content Area - Right Side */}
      <div className={`flex-1 ${!isLast ? 'pb-12 lg:pb-16' : 'pb-0'}`}>
        {/* Header Button */}
        <button
          onClick={onToggle}
          className="w-full text-left group"
          aria-expanded={isExpanded}
        >
          <div
            className={`rounded-xl border transition-all duration-300 ${
              isExpanded
                ? 'border-[#1a5f7a]/20 bg-white shadow-xl shadow-neutral-900/8'
                : 'border-neutral-100 bg-white hover:border-neutral-200 hover:shadow-lg'
            }`}
          >
            <div className="p-6 lg:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1a5f7a]">
                      Day {day.day}
                    </span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-neutral-900 group-hover:text-[#1a5f7a] transition-colors mb-2 line-clamp-2">
                    {day.title}
                  </h3>
                  <p className="text-sm text-neutral-500 flex items-center gap-1.5">
                    <span className="inline-block w-1 h-1 rounded-full bg-[#57b8d7]" />
                    {day.location}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 mt-1"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-colors ${
                      isExpanded ? 'text-[#1a5f7a]' : 'text-neutral-400'
                    }`}
                  />
                </motion.div>
              </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-neutral-100 px-6 lg:px-7 py-6 lg:py-7">
                    {/* Image Carousel */}
                    {day.images && day.images.length > 0 && (
                      <div className="mb-7 -mx-6 lg:-mx-7">
                        <ImageCarousel images={day.images} title={day.title} />
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-sm lg:text-base text-neutral-600 leading-relaxed mb-6 text-pretty">
                      {day.description}
                    </p>

                    {/* Activities Section */}
                    <div className="mb-7">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                        Activities & Experiences
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {day.activities.map((activity) => (
                          <div
                            key={activity}
                            className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50/80 hover:bg-neutral-100 transition-colors"
                          >
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-[#57b8d7] shrink-0" />
                            <span className="text-sm text-neutral-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Meals & Accommodation */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {day.meals.length > 0 && (
                        <div className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-4 py-2.5">
                          <Utensils className="h-4 w-4 text-[#1a5f7a]" />
                          <span className="text-sm font-medium text-neutral-600">
                            {day.meals.join(', ')}
                          </span>
                        </div>
                      )}
                      {day.accommodation !== 'N/A' && (
                        <div className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-4 py-2.5">
                          <Building2 className="h-4 w-4 text-[#1a5f7a]" />
                          <span className="text-sm font-medium text-neutral-600">
                            {day.accommodation}
                          </span>
                        </div>
                      )}
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
    <section className="py-20 lg:py-32 bg-neutral-50/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a5f7a] mb-3 block">
            Day by Day Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight text-balance mb-4">
            Your Itinerary Awaits
          </h2>
          <p className="text-base text-neutral-600 max-w-2xl text-pretty">
            Explore each day of your adventure with detailed activities, accommodations, and memorable experiences carefully curated for you.
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
              totalDays={days.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
