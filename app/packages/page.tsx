"use client";

import { useState, useMemo } from "react";
import { sampleItineraries } from "@/data/itineraries";
import { InnerNavbar } from "@/components/itinerary/inner-navbar";
import { PackagesHero } from "@/components/packages/packages-hero";
import { PackagesFilter } from "@/components/packages/packages-filter";
import { PackagesGrid } from "@/components/packages/packages-grid";
import { Footer } from "@/components/home/footer";

export default function PackagesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPackages = useMemo(() => {
    return sampleItineraries.filter((pkg) => {
      const matchesSearch =
        searchQuery === "" ||
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || pkg.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <main className="min-h-screen bg-neutral-50">
      <InnerNavbar />
      <PackagesHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <PackagesFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        totalResults={filteredPackages.length}
      />
      <PackagesGrid packages={filteredPackages} />
      <Footer />
    </main>
  );
}
