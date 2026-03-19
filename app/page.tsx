"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/home/hero";
import { Destinations } from "@/components/home/destinations";
import { Services } from "@/components/home/services";
import { QueryForm } from "@/components/home/query-form";
import { Testimonials } from "@/components/home/testimonials";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { getActivePublishedPackages } from "@/api/package";
import type { Package } from "@/types/package-itinerary";

export default function Home() {
  const [featuredPackages, setFeaturedPackages] = useState<Package[]>([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const data = await getActivePublishedPackages();
        if (data) {
          console.log(data);
          // Pass the exact backend data to destinations
          setFeaturedPackages(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch featured packages:", error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <SmoothScrollProvider>
      <main className="min-h-screen">
        <Hero />
        <Destinations initialPackages={featuredPackages} />
        <Services />
        <Testimonials />
        <QueryForm />
      </main>
    </SmoothScrollProvider>
  );
}
