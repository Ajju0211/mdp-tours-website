"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Users, ArrowRight, Mountain } from "lucide-react";
import Link from "next/link";
import type { Package } from "@/types/package-itinerary";
import { useRouter } from "next/navigation";

interface PackageCardProps {
  pkg: Package;
  index: number;
}

export function PackageCard({ pkg, index }: PackageCardProps) {
  const router = useRouter();
  const categoryLabel =
    Array.isArray(pkg.category) && pkg.category.length > 0
      ? pkg.category[0]
      : "Tour";

  const handleViewClick = (slug: string) => {
    router.push(`/packages/${slug}`);
  };

  const imageUrl = pkg.coverImage?.url || "/placeholder-package.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/packages/${pkg.slug}`} className="block h-full">
        <div className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={imageUrl}
              alt={pkg.title}
              className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-lg bg-white/90 backdrop-blur-sm px-3 py-1.5">
              <Mountain className="h-3.5 w-3.5 text-[#1a5f7a]" />
              <span className="text-xs font-semibold text-neutral-800">
                {categoryLabel}
              </span>
            </div>

            {/* Price Badge */}
            <div className="absolute bottom-4 right-4 rounded-xl bg-[#1a5f7a] px-4 py-2 shadow-lg">
              <p className="text-[10px] font-medium text-white/70 uppercase tracking-wider">
                From
              </p>
              <p className="text-lg font-bold text-white leading-tight">
                {"₹"}
                {pkg.pricePerPerson.toLocaleString("en-IN")}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-5 lg:p-6">
            {/* Location */}
            <div className="flex items-center gap-1.5 mb-2">
              <MapPin className="h-3.5 w-3.5 text-[#57b8d7]" />
              <span className="text-xs font-medium text-neutral-500">
                {pkg.destinationName}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-neutral-900 tracking-tight mb-2 group-hover:text-[#1a5f7a] transition-colors line-clamp-2 min-h-[56px]">
              {pkg.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-2 min-h-[44px]">
              {pkg.description}
            </p>

            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 bg-neutral-50 px-2.5 py-1.5 rounded-md">
                <Clock className="h-3 w-3" />
                {pkg.days}D / {pkg.nights}N
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 bg-neutral-50 px-2.5 py-1.5 rounded-md">
                <Users className="h-3 w-3" />
                {pkg.minGroupSize}-{pkg.maxGroupSize} people
              </span>
            </div>

            {/* CTA */}
            <div
              onClick={() => handleViewClick(pkg.slug)}
              className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100"
            >
              <span className="text-sm font-semibold text-[#1a5f7a] group-hover:underline underline-offset-2">
                View Itinerary
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-50 text-neutral-400 group-hover:bg-[#1a5f7a] group-hover:text-white transition-all duration-300">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
