"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { getPackages } from "@/api/package";
import { PackagesHero } from "@/components/packages/packages-hero";
import { PackagesFilter } from "@/components/packages/packages-filter";
import { PackagesGrid } from "@/components/packages/packages-grid";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import type { Package } from "@/types/package-itinerary";

const LIMIT = 9;

export default function PackagesPage() {
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [activeCategory, setActiveCategory] = useState("All");

  // Budget & group size — initialize from URL if coming from home search widget
  const [budget, setBudget] = useState<number[]>([
    Number(searchParams.get("minPrice")) || 100,
    Number(searchParams.get("maxPrice")) || 100000,
  ]);
  const [groupSize, setGroupSize] = useState<number[]>([
    Number(searchParams.get("minGroupSize")) || 1,
    Number(searchParams.get("maxGroupSize")) || 50,
  ]);

  const [packages, setPackages] = useState<Package[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const sentinelRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchPackages = useCallback(
    async (cursor?: string | null) => {
      // Cancel any in-flight request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      const controller = new AbortController();
      abortControllerRef.current = controller;

      const isInitialLoad = !cursor;

      if (isInitialLoad) {
        setIsLoading(true);
      } else {
        setIsLoadingMore(true);
      }

      try {
        const params: Record<string, any> = {
          limit: LIMIT,
        };

        if (searchQuery.trim()) {
          params.q = searchQuery.trim();
        }

        if (activeCategory !== "All") {
          params.category = activeCategory;
        }

        // Budget filter — only send if user changed from defaults
        if (budget[0] > 100) params.minPrice = budget[0];
        if (budget[1] < 100000) params.maxPrice = budget[1];

        // Group size filter — only send if user changed from defaults
        if (groupSize[0] > 1) params.minGroupSize = groupSize[0];
        if (groupSize[1] < 50) params.maxGroupSize = groupSize[1];

        if (cursor) {
          params.cursor = cursor;
        }

        const response = await getPackages(params);

        if (controller.signal.aborted) return;

        const responseData = response?.data || response;
        const newPackages: Package[] = Array.isArray(responseData)
          ? responseData
          : responseData?.data || [];
        const newNextCursor =
          response?.nextCursor ?? responseData?.nextCursor ?? null;
        const newHasMore = response?.hasMore ?? responseData?.hasMore ?? false;

        if (isInitialLoad) {
          setPackages(newPackages);
        } else {
          setPackages((prev) => [...prev, ...newPackages]);
        }

        setNextCursor(newNextCursor);
        setHasMore(newHasMore);
      } catch (error: any) {
        if (error?.name === "AbortError" || error?.code === "ERR_CANCELED")
          return;
        console.error("Failed to fetch packages:", error);
        if (isInitialLoad) {
          setPackages([]);
        }
        setHasMore(false);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
          setIsLoadingMore(false);
        }
      }
    },
    [searchQuery, activeCategory, budget, groupSize],
  );

  // Initial load & reload on filter/search change
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      setNextCursor(null);
      setHasMore(true);
      fetchPackages();
    }, 300);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [fetchPackages]);

  // Infinite scroll with IntersectionObserver
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasMore && !isLoading && !isLoadingMore) {
          fetchPackages(nextCursor);
        }
      },
      {
        rootMargin: "200px",
      },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, isLoading, isLoadingMore, nextCursor, fetchPackages]);

  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-neutral-50">
        <PackagesHero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          budget={budget}
          onBudgetChange={setBudget}
          groupSize={groupSize}
          onGroupSizeChange={setGroupSize}
        />
        <PackagesFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          totalResults={packages.length}
        />
        <PackagesGrid
          packages={packages}
          isLoading={isLoading}
          isLoadingMore={isLoadingMore}
        />

        {/* Infinite scroll sentinel */}
        <div ref={sentinelRef} className="h-1" />
      </main>
    </SmoothScrollProvider>
  );
}
