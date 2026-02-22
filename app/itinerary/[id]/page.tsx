import { notFound } from "next/navigation";
import { sampleItineraries } from "@/data/itineraries";
import { InnerNavbar } from "@/components/itinerary/inner-navbar";
import { ItineraryHero } from "@/components/itinerary/itinerary-hero";
import { ItineraryHighlights } from "@/components/itinerary/itinerary-highlights";
import { ItineraryTimeline } from "@/components/itinerary/itinerary-timeline";
import { TripEssentials } from "@/components/itinerary/trip-essentials";
import { ItineraryCTA } from "@/components/itinerary/itinerary-cta";
import { ItineraryGallery } from "@/components/itinerary/itinerary-gallery";
import { Footer } from "@/components/home/footer";

export async function generateStaticParams() {
  return sampleItineraries.map((it) => ({ id: it.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const itinerary = sampleItineraries.find((it) => it.id === id);
  if (!itinerary) return { title: "Tour Not Found | MDP Tours" };

  return {
    title: `${itinerary.title} | MDP Tours`,
    description: itinerary.overview,
  };
}

export default async function ItineraryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const itinerary = sampleItineraries.find((it) => it.id === id);

  if (!itinerary) notFound();

  // Collect all images from all days
  const allGalleryImages = itinerary.days.flatMap((day) => day.images || []);

  return (
    <main className="min-h-screen bg-white">
      <InnerNavbar />
      <ItineraryHero itinerary={itinerary} />
      <ItineraryHighlights highlights={itinerary.highlights} />
      <ItineraryTimeline days={itinerary.days} />
      {allGalleryImages.length > 0 && (
        <ItineraryGallery title={itinerary.title} allImages={allGalleryImages} />
      )}
      {itinerary.essentials && (
        <TripEssentials
          maxAltitude={itinerary.essentials.maxAltitude}
          minFitness={itinerary.essentials.minFitness}
          climate={itinerary.essentials.climate}
          visaRequired={itinerary.essentials.visaRequired}
          accommodation={itinerary.essentials.accommodation}
          whatToBring={itinerary.essentials.whatToBring}
        />
      )}
      <ItineraryCTA price={itinerary.price} duration={itinerary.duration} />
      <Footer />
    </main>
  );
}
