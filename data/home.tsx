import {
  Train,
  Plane,
  Hotel,
  Bus,
  FileText,
  Zap,
  User,
  Users,
  ShieldCheck,
  Globe2,
} from "lucide-react";

export const homeServicesData = [
  {
    icon: Train,
    title: "Train Tickets",
    description:
      "Book train tickets across India with ease, including regular and tatkal bookings.",
  },
  {
    icon: Plane,
    title: "Flight Booking",
    description:
      "Domestic and international flight reservations at competitive prices.",
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    description:
      "Handpicked accommodations from budget stays to luxury resorts worldwide.",
  },
  {
    icon: Bus,
    title: "Bus Booking",
    description:
      "Comfortable bus travel options for intercity and interstate journeys.",
  },
  {
    icon: FileText,
    title: "Passport Services",
    description:
      "Complete assistance with passport applications, renewals, and documentation.",
  },
  {
    icon: Zap,
    title: "Tatkal Booking",
    description:
      "Emergency and last-minute train ticket bookings made simple and quick.",
  },
  {
    icon: User,
    title: "Individual Tours",
    description:
      "Personalized travel packages designed around your preferences and schedule.",
  },
  {
    icon: Users,
    title: "Group Tours",
    description:
      "Organized group travel experiences for families, friends, and corporate teams.",
  },
  {
    icon: Globe2,
    title: "Visa Services",
    description:
      "Expert assistance with visa applications and processing for all countries.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Insurance",
    description:
      "Comprehensive travel insurance coverage for domestic and international trips.",
  },
];

export const serviceName = homeServicesData.map((service) => service.title);
