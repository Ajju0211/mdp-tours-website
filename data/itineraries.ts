import {
  Plane,
  Bus,
  Hotel,
  Camera,
  Mountain,
  Utensils,
  MapPin,
  Sunrise,
  Ship,
  TreePine,
} from "lucide-react";

export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  activities: string[];
  icon: typeof Plane;
  image: string;
  meals: string[];
  accommodation: string;
}

export interface Itinerary {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: number;
  heroImage: string;
  overview: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  days: ItineraryDay[];
}

export const sampleItineraries: Itinerary[] = [
  {
    id: "leh-ladakh-adventure",
    title: "Leh-Ladakh Mountain Adventure",
    destination: "Leh-Ladakh, Jammu & Kashmir",
    duration: "7 Days / 6 Nights",
    price: 24999,
    heroImage: "/assets/itinerary-hero.jpg",
    overview:
      "Embark on an unforgettable journey through the breathtaking landscapes of Leh-Ladakh. From the stunning Pangong Lake to the ancient monasteries, experience the raw beauty of the Himalayas with our expertly curated itinerary.",
    highlights: [
      "Visit the iconic Pangong Tso Lake",
      "Explore ancient Buddhist monasteries",
      "Drive through Khardung La, one of the highest motorable passes",
      "Experience the magnetic hill phenomenon",
      "Witness stunning sunset at Shanti Stupa",
      "Explore the vibrant markets of Leh",
    ],
    included: [
      "Accommodation in handpicked hotels & camps",
      "Daily breakfast and dinner",
      "All sightseeing as per itinerary",
      "Airport transfers",
      "Experienced local guide",
      "Inner line permits",
      "Oxygen cylinder in vehicle",
      "All applicable taxes",
    ],
    excluded: [
      "Airfare to and from Leh",
      "Lunch during the trip",
      "Personal expenses & tips",
      "Travel insurance",
      "Any activity not mentioned in itinerary",
      "Camera charges at monuments",
    ],
    days: [
      {
        day: 1,
        title: "Arrival in Leh - Acclimatization",
        location: "Leh",
        description:
          "Arrive at Kushok Bakula Rimpochee Airport in Leh. The day is dedicated to acclimatization due to the high altitude (3,500m). Take rest and explore the local surroundings at a leisurely pace.",
        activities: [
          "Airport pickup and hotel transfer",
          "Rest and acclimatize to high altitude",
          "Evening walk to Leh Market",
          "Visit Shanti Stupa at sunset",
        ],
        icon: Plane,
        image:
          "https://images.unsplash.com/photo-1551785882-5ba31ba4f583?q=80&w=1740&auto=format&fit=crop",
        meals: ["Dinner"],
        accommodation: "Hotel in Leh",
      },
      {
        day: 2,
        title: "Leh Local Sightseeing",
        location: "Leh",
        description:
          "After breakfast, embark on a full day of local sightseeing. Visit the magnificent Leh Palace, ancient monasteries, and the famous Hall of Fame museum dedicated to the Indian Army.",
        activities: [
          "Visit Leh Palace & Namgyal Tsemo Monastery",
          "Explore Hall of Fame Museum",
          "Tour Sankar Monastery",
          "Walk through Old Leh Town",
        ],
        icon: Camera,
        image:
          "https://images.unsplash.com/photo-1626621331169-5f68be3f4834?q=80&w=1740&auto=format&fit=crop",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Hotel in Leh",
      },
      {
        day: 3,
        title: "Leh to Nubra Valley via Khardung La",
        location: "Nubra Valley",
        description:
          "Drive through the legendary Khardung La Pass (5,359m), one of the highest motorable roads in the world. Descend into the stunning Nubra Valley with its unique sand dunes and Bactrian camels.",
        activities: [
          "Cross Khardung La Pass (5,359m)",
          "Photo stops at scenic viewpoints",
          "Double-hump camel ride at Hunder Sand Dunes",
          "Visit Diskit Monastery & 32m Maitreya Buddha statue",
        ],
        icon: Mountain,
        image:
          "https://images.unsplash.com/photo-1593181629936-11c tried?q=80&w=1740&auto=format&fit=crop",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Camp in Nubra Valley",
      },
      {
        day: 4,
        title: "Nubra Valley to Pangong Lake",
        location: "Pangong Lake",
        description:
          "Journey from Nubra Valley to the mesmerizing Pangong Tso Lake via Shyok route. The crystal-clear blue waters surrounded by barren mountains create a surreal landscape that changes colors throughout the day.",
        activities: [
          "Scenic drive through Shyok route",
          "Arrival at Pangong Lake",
          "Witness the color-changing lake waters",
          "Stargazing at night by the lake",
        ],
        icon: Sunrise,
        image:
          "https://images.unsplash.com/photo-1583312708208-12e85cd1e6df?q=80&w=1740&auto=format&fit=crop",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Lakeside Camp at Pangong",
      },
      {
        day: 5,
        title: "Pangong Lake to Leh via Chang La",
        location: "Leh",
        description:
          "Wake up to a stunning sunrise over Pangong Lake. After breakfast, drive back to Leh via Chang La Pass (5,360m), the third highest motorable pass. Visit the scenic Hemis Monastery en route.",
        activities: [
          "Sunrise photography at Pangong Lake",
          "Cross Chang La Pass (5,360m)",
          "Visit Hemis Monastery",
          "Explore Thiksey Monastery",
        ],
        icon: Bus,
        image:
          "https://images.unsplash.com/photo-1600411832923-04c1bef22d14?q=80&w=1740&auto=format&fit=crop",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Hotel in Leh",
      },
      {
        day: 6,
        title: "Leh - Magnetic Hill & Confluence",
        location: "Leh",
        description:
          "Explore the famous Magnetic Hill where vehicles appear to defy gravity, visit the stunning confluence of Indus and Zanskar rivers, and explore the serene Pathar Sahib Gurudwara.",
        activities: [
          "Visit Magnetic Hill",
          "See Indus-Zanskar Confluence",
          "Visit Pathar Sahib Gurudwara",
          "Farewell dinner with cultural program",
        ],
        icon: MapPin,
        image:
          "https://images.unsplash.com/photo-1586340521535-3a5855a5b1b6?q=80&w=1740&auto=format&fit=crop",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Hotel in Leh",
      },
      {
        day: 7,
        title: "Departure from Leh",
        location: "Leh",
        description:
          "After a memorable week in Ladakh, check out from the hotel and transfer to Kushok Bakula Rimpochee Airport for your onward flight. Carry back beautiful memories of the Land of High Passes.",
        activities: [
          "Hotel checkout",
          "Last-minute souvenir shopping",
          "Airport transfer",
          "Departure with cherished memories",
        ],
        icon: Plane,
        image:
          "https://images.unsplash.com/photo-1551785882-5ba31ba4f583?q=80&w=1740&auto=format&fit=crop",
        meals: ["Breakfast"],
        accommodation: "N/A",
      },
    ],
  },
];
