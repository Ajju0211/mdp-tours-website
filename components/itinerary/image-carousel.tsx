"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export function ImageCarousel({
  images,
  title,
  isOpen = true,
  onClose,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, images.length]);

  const goToPrevious = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setAutoPlay(false);
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full">
      {/* Main Carousel */}
      <div className="relative w-full bg-black rounded-2xl overflow-hidden aspect-video">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              onMouseEnter={() => setAutoPlay(false)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              onMouseEnter={() => setAutoPlay(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 z-10 bg-black/60 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-16 w-20 shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
                currentIndex === index ? "ring-2 ring-[#1a5f7a]" : "opacity-60 hover:opacity-100"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {images.length > 1 && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-[#57b8d7]"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
          transition={{ duration: 5, ease: "linear" }}
        />
      )}
    </div>
  );
}
