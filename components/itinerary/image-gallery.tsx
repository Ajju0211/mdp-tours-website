"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { ImageCarousel } from "./image-carousel";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  if (images.length === 0) {
    return null;
  }

  // Show featured image and grid of remaining images
  const featuredImage = images[0];
  const remainingImages = images.slice(1);

  return (
    <div>
      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 cursor-pointer group"
        onClick={() => setSelectedImageIndex(0)}
      >
        <div className="relative rounded-2xl overflow-hidden aspect-video bg-neutral-100">
          <img
            src={featuredImage}
            alt={`${title} - Featured`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
      </motion.div>

      {/* Image Grid */}
      {remainingImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3"
        >
          {remainingImages.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedImageIndex(index + 1)}
              className="relative rounded-lg overflow-hidden aspect-square bg-neutral-100 group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <img
                src={image}
                alt={`${title} - Image ${index + 2}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImageIndex(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl max-h-[90vh] bg-black rounded-2xl overflow-hidden"
          >
            <div className="relative w-full aspect-video">
              <img
                src={images[selectedImageIndex]}
                alt={`${title} - Image ${selectedImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
