import "../globals.css";
import Providers from "@/components/Providers";
import { FooterSection } from "@/components/landing/footer-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "AAVORide Blog | Road Trip & Outstation Taxi Guides",
    template: "%s | AAVORide Blog",
  },

  description:
    "Your ultimate travel guide for road trips and outstation taxi bookings across India. Real tips, top destinations, and expert advice — only on AAVORide.",
  keywords: [
    "Travel Blog",
    "Road Trip Guide",
    "Outstation Taxi",
    "Cab Booking Tips",
    "Airport Taxi service",
    "Travel Guide India",
    "Luxury Car service",
    "Tempo Traveller",
    "Travel Trip",
  ],

  alternates: {
    canonical: "https://www.aavoride.in/blog",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {

    url: "https://www.aavoride.in/blog",

    siteName: "AAVORide",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "https://www.aavoride.in/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "AAVORide Official Logo",
      },
    ],
  },

  twitter: {
    card: "summary",
    images: ["https://www.aavoride.in/android-chrome-512x512.png"],
  },

  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <main className="flex-grow">{children}</main>
     
      <FooterSection />
    </Providers>
  );
}
