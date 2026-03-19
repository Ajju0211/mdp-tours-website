"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface PackagesHeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  budget: number[];
  onBudgetChange: (value: number[]) => void;
  groupSize: number[];
  onGroupSizeChange: (value: number[]) => void;
}

export function PackagesHero({
  searchQuery,
  onSearchChange,
  budget,
  onBudgetChange,
  groupSize,
  onGroupSizeChange,
}: PackagesHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/backgrond-image.png"
          alt="Explore our tour packages"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/50 to-neutral-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-[#57b8d7] mb-4"
        >
          Our Packages
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight text-balance mb-5"
        >
          Explore Tour Packages
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base lg:text-lg text-white/70 max-w-xl leading-relaxed mb-10"
        >
          Handpicked destinations with expertly curated itineraries. Find the
          perfect trip for your next adventure.
        </motion.p>

        {/* Search & Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl"
        >
          <div className="flex  flex-col sm:flex-row items-stretch gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search by destination, package name..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full h-13 pl-12 pr-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#57b8d7]/50 focus:border-[#57b8d7]/50 transition-all"
              />
            </div>

            {/* Budget Filter */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-13 shrink-0 rounded-xl bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white text-sm font-medium px-4"
                >
                  ₹{budget[0].toLocaleString("en-IN")} – ₹
                  {budget[1].toLocaleString("en-IN")}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 h-full" align="start">
                <div className="space-y-4">
                  <p className="text-sm font-medium text-neutral-700">
                    Budget per person
                  </p>
                  <Slider
                    value={budget}
                    onValueChange={onBudgetChange}
                    min={100}
                    max={100000}
                    step={500}
                  />
                  <p className="text-xs text-neutral-500">
                    ₹{budget[0].toLocaleString("en-IN")} – ₹
                    {budget[1].toLocaleString("en-IN")}
                  </p>
                </div>
              </PopoverContent>
            </Popover>

            {/* Group Size Filter */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-13 shrink-0 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:text-white text-sm font-medium px-4"
                >
                  <Users className="mr-2 h-4 w-4 text-neutral-400" />
                  {groupSize[0]} – {groupSize[1]} people
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 h-full" align="start">
                <div className="space-y-4">
                  <p className="text-sm font-medium text-neutral-700">
                    Group Size Range
                  </p>
                  <Slider
                    value={groupSize}
                    onValueChange={onGroupSizeChange}
                    min={1}
                    max={50}
                    step={1}
                  />
                  <p className="text-xs text-neutral-500">
                    {groupSize[0]} – {groupSize[1]} people
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
