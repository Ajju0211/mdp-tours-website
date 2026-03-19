"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

interface ItineraryCTAProps {
  price: number;
  duration: string;
}

export function ItineraryCTA({ price, duration }: ItineraryCTAProps) {
  return (
    <section className="py-16 lg:py-24 bg-[#1a5f7a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3 text-balance">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-white/70 text-base lg:text-lg max-w-lg leading-relaxed">
              Book this {duration.toLowerCase()} journey starting from just{" "}
              <span className="font-semibold text-white">
                &#8377;{price.toLocaleString("en-IN")}
              </span>{" "}
              per person. Contact us for customized packages.
            </p>
          </motion.div>

          {/* Right - Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="tel:+918779721547"
              className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-xl bg-white text-[#1a5f7a] font-semibold text-sm hover:bg-white/90 transition-colors shadow-lg shadow-black/10"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/918779721547"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              Enquire
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
