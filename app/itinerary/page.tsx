import type { Metadata } from "next";
import { sampleItineraries } from "@/data/itineraries";
import { InnerNavbar } from "@/components/itinerary/inner-navbar";
import { ItineraryHero } from "@/components/itinerary/itinerary-hero";
import { ItineraryHighlights } from "@/components/itinerary/itinerary-highlights";
import { ItineraryTimeline } from "@/components/itinerary/itinerary-timeline";
import { ItineraryInclusions } from "@/components/itinerary/itinerary-inclusions";
import { ItineraryCTA } from "@/components/itinerary/itinerary-cta";
import { Footer } from "@/components/home/footer";

export const metadata: Metadata = {
  title: "Leh-Ladakh Adventure Itinerary | MDP Tours",
  description:
    "Explore our 7-day Leh-Ladakh mountain adventure itinerary featuring Pangong Lake, Khardung La, Nubra Valley and more. Book your dream trip with MDP Tours.",
};

export default function ItineraryPage() {
  const itinerary = sampleItineraries[0];

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
