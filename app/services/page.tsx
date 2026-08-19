import type { Metadata } from "next";
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
// url: "https://aavoride.in/services",
    siteName: "AavoRide",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image"
  },
};


export default function ServicesPage() {

  return (
    <section className="mt-10">
      <TravelSolutionsSection />
      <FooterSection/>
    </section>
  );
}
