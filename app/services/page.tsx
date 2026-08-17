import type { Metadata } from "next";
import Servicepage from "./servicepage"
import { FooterSection } from "@/components/landing/footer-section";
import { TravelSolutionsSection } from "@/components/landing/travel-solutions-section";

export const metadata: Metadata = {
  title: "AAVORide Services | Outstation Cabs & Tempo Travellers",
  description: "Book verified outstation cabs, tempo travellers & round trips across India. Compare fares instantly, pay zero commission, and travel with confidence.", //   alternates: {
  //     canonical: "https://aavoride.in/services",
  //   },
  keywords: ["outstation cab service", "outstation taxi service",
    "outstation tempo traveller", "free cancellation ", "compare cab prices", "compare cab fares",
    "outstation trip cab", "outstation round trip", "outstation prebooking", "zero commission",
    "verified drivers", "airport pickup", "single request", "multiple quotes"
  ],
  openGraph: {
    title: "Cab & Travel Services | AavoRide",
    description:
      "Discover AavoRide services: outstation cab booking, tempo traveller rentals, verified drivers, direct communication, and zero commission fares.",
    // url: "https://aavoride.in/services",
    siteName: "AavoRide",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cab & Travel Services | AavoRide",
    description:
      "Book cabs and tempo travellers with AavoRide. Multiple quotes, best prices, verified drivers, and free cancellation.",
  },
};


export default function ServicesPage() {

  return (
    <>
      <TravelSolutionsSection />
      <FooterSection/>
    </>
  );
}
