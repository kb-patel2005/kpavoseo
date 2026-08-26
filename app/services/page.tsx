import type { Metadata } from "next";
import { FooterSection } from "@/components/landing/footer-section";
import { TravelSolutionsSection } from "@/components/landing/travel-solutions-section";

export const metadata: Metadata = {
  title: "AAVORide Services | Outstation Cabs & Tempo Travellers",
  description: "Book verified outstation cabs, tempo travellers & round trips across India. Compare fares instantly, pay zero commission, and travel with confidence.", //   alternates: {
  alternates: {

    canonical: "https://www.aavoride.in/services",
  },
  //   },
  keywords: ["outstation cab service", "outstation taxi service",
    "outstation tempo traveller", "free cancellation ", "compare cab prices", "compare cab fares",
    "outstation trip cab", "outstation round trip", "outstation prebooking", "zero commission",
    "verified drivers", "airport pickup", "single request", "multiple quotes"
  ],
  openGraph: {
    url: "https://aavoride.in/services",
    images: [
      {
        url: "https://www.aavoride.in/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "AAVORide Official Logo",
      },
    ],
    
    siteName: "AavoRide",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    
    images: ["https://www.aavoride.in/android-chrome-512x512.png"],
  },
};


export default function ServicesPage() {

  return (
    <section className="mt-10">
      <TravelSolutionsSection />
      <FooterSection />
    </section>
  );
}
