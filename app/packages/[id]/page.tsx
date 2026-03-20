import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/api/package";
import { ItineraryHero } from "@/components/itinerary/itinerary-hero";
import { ItineraryHighlights } from "@/components/itinerary/itinerary-highlights";
import { ItineraryTimeline } from "@/components/itinerary/itinerary-timeline";
import { ItineraryGallery } from "@/components/itinerary/itinerary-gallery";
import { ItineraryInclusions } from "@/components/itinerary/itinerary-inclusions";
import { QueryForm } from "@/components/home/query-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  try {
    const data = await getPackageBySlug(id);
    if (!data || !data.package) return { title: "Tour Not Found | MDP Tours" };
    return {
      title: `${data.package.title} | MDP Tours`,
      description:
        data.package.description || "Explore this amazing tour package.",
    };
  } catch (error) {
    return { title: "Tour Not Found | MDP Tours" };
  }
}

export default async function ItineraryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let packageData = null;
  try {
    packageData = await getPackageBySlug(id);
  } catch (error) {
    notFound();
  }

  if (!packageData || !packageData.package) {
    notFound();
  }

  const pkg = packageData.package;
  const itin = packageData.itinerary;

  // Map the database models to the frontend UI components' expected shapes
  const mappedItinerary: any = {
    id: pkg.slug,
    title: pkg.title || "Untitled Tour",
    destination: pkg.destinationName || "Various Destinations",
    duration: `${pkg.days ? pkg.days : 0} Days / ${pkg.nights ? pkg.nights : 0} Nights`,
    price: pkg.pricePerPerson || 0,
    heroImage: pkg.coverImage?.url || "/background/backgrond-image.png",
    cardImage: pkg.coverImage?.url || "/background/backgrond-image.png",
    overview: pkg.description || "No description available.",
    highlights: [], // Not present in the backend schema natively, safely pass empty
    included: pkg.inclusions || [],
    excluded: pkg.exclusions || [],
    category:
      pkg.category && pkg.category.length > 0 ? pkg.category[0] : "Tour",
    rating: typeof pkg.rating === "number" ? pkg.rating : 4.5, // Fallback if 0 or null
    reviews: typeof pkg.reviewsCount === "number" ? pkg.reviewsCount : 0,
    bestTime: "Year-round", // Missing in schema, fallback string
    difficulty: "Moderate", // Missing in schema, fallback string
    groupSize: pkg.minGroupSize && pkg.maxGroupSize ? `${pkg.minGroupSize} - ${pkg.maxGroupSize} People` : "Any Size",
    days: (itin?.days || []).map((dayData: any) => {
      const mealsArray: string[] = [];
      if (dayData.meals) {
        if (dayData.meals.breakfast) mealsArray.push("Breakfast");
        if (dayData.meals.lunch) mealsArray.push("Lunch");
        if (dayData.meals.dinner) mealsArray.push("Dinner");
      }
      return {
        day: dayData.dayNumber || 1,
        title: dayData.title || `Day ${dayData.dayNumber || 1}`,
        location: "", // Backend schema tracks {lat, lng} but UI expects string. Leaving empty.
        description: dayData.description || "",
        activities: dayData.activities || [],
        iconName: "MapPin",
        image: dayData.images?.[0]?.url || "/background/backgrond-image.png",
        images: (dayData.images || []).map((img: any) => img.url),
        meals: mealsArray,
        accommodation: "Included", // Fallback, not natively represented as explicit text
      };
    }),
  };

  const allGalleryImages = mappedItinerary.days.flatMap(
    (day: any) => day.images || [],
  );

  return (
    <main className="min-h-screen bg-white">
      <ItineraryHero itinerary={mappedItinerary} />

      {/* Some packages might not have explicit highlights, render conditionally */}
      {mappedItinerary.highlights && mappedItinerary.highlights.length > 0 && (
        <ItineraryHighlights highlights={mappedItinerary.highlights} />
      )}

      {mappedItinerary.days && mappedItinerary.days.length > 0 && (
        <ItineraryTimeline days={mappedItinerary.days} />
      )}

      {allGalleryImages.length > 0 && (
        <ItineraryGallery
          title={mappedItinerary.title}
          allImages={allGalleryImages}
        />
      )}

      {(mappedItinerary.included.length > 0 || mappedItinerary.excluded.length > 0) && (
        <ItineraryInclusions
          included={mappedItinerary.included}
          excluded={mappedItinerary.excluded}
        />
      )}

      {/* Submit linked queries */}
      <QueryForm packageId={pkg._id} packageTitle={pkg.title} />
    </main>
  );
}
