import { notFound } from "next/navigation";
import { sampleItineraries } from "@/data/itineraries";
import { InnerNavbar } from "@/components/itinerary/inner-navbar";
import { ItineraryHero } from "@/components/itinerary/itinerary-hero";
import { ItineraryHighlights } from "@/components/itinerary/itinerary-highlights";
import { ItineraryTimeline } from "@/components/itinerary/itinerary-timeline";
import { ItineraryInclusions } from "@/components/itinerary/itinerary-inclusions";
import { ItineraryCTA } from "@/components/itinerary/itinerary-cta";
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

  return (
    <main className="min-h-screen bg-white">
      <InnerNavbar />
      <ItineraryHero itinerary={itinerary} />
      <ItineraryHighlights highlights={itinerary.highlights} />
      <ItineraryTimeline days={itinerary.days} />
      <ItineraryInclusions
        included={itinerary.included}
        excluded={itinerary.excluded}
      />
      <ItineraryCTA price={itinerary.price} duration={itinerary.duration} />
      <Footer />
    </main>
  );
}
