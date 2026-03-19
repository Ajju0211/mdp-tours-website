"use client";

import { motion } from "framer-motion";
import { ImageCarousel } from "./image-carousel";
import { ImageGallery } from "./image-gallery";

interface ItineraryGalleryProps {
  title: string;
  allImages: string[];
}

export function ItineraryGallery({ title, allImages }: ItineraryGalleryProps) {
  if (allImages.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a5f7a] mb-3 block">
            Visual Journey
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight text-balance">
            Gallery & Highlights
          </h2>
          <p className="mt-3 text-neutral-500 max-w-xl text-pretty">
            Explore stunning moments captured from {title}. Each image tells a
            story of unforgettable experiences.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ImageGallery images={allImages} title={title} />
        </motion.div>

        {/* Statistics */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 lg:mt-16 grid grid-cols-3 gap-4 lg:gap-6"
        >
          <div className="rounded-lg bg-gradient-to-br from-[#1a5f7a]/5 to-[#57b8d7]/5 p-4 lg:p-6 border border-[#57b8d7]/10">
            <div className="text-2xl lg:text-3xl font-bold text-[#1a5f7a]">
              {allImages.length}
            </div>
            <div className="mt-1 text-xs lg:text-sm font-medium text-neutral-600">
              Photos
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-[#1a5f7a]/5 to-[#57b8d7]/5 p-4 lg:p-6 border border-[#57b8d7]/10">
            <div className="text-2xl lg:text-3xl font-bold text-[#1a5f7a]">
              100%
            </div>
            <div className="mt-1 text-xs lg:text-sm font-medium text-neutral-600">
              Verified Moments
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-[#1a5f7a]/5 to-[#57b8d7]/5 p-4 lg:p-6 border border-[#57b8d7]/10">
            <div className="text-2xl lg:text-3xl font-bold text-[#1a5f7a]">
              HD
            </div>
            <div className="mt-1 text-xs lg:text-sm font-medium text-neutral-600">
              Quality Images
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
