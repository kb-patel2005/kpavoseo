import React from "react";
import { HeroSection } from "@/components/about/sections/HeroSection";
import { PhilosophySection } from "@/components/about/sections/PhilosophySection";
import { MissionSection } from "@/components/about/sections/MissionSection";
import { VisionSection } from "@/components/about/sections/VisionSection";
import { ServicesSection } from "@/components/about/sections/ServicesSection";
import { FooterSection } from "@/components/landing/footer-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About Us | Travel Services in Gujarat | Verified Drivers",
  },

  description: "Learn how AavoRide simplifies outstation cab booking from Gujarat. With one request, you’ll receive multiple verified driver quotes, compare fares easily, and choose the ride that matches your travel needs — all with zero commission and free cancellation.",
  alternates: {
    canonical: "https://aavoride.in/about",
  },

  openGraph: {
    title:
      "About Us | Travel Services Gujarat | Verified Drivers",

    description:
      "Book reliable outstation cab services from Gujarat with ease. Submit one request and instantly connect with multiple verified drivers and travel agencies. Compare prices, choose your preferred ride, and enjoy safe, affordable travel across India.",

    url: "https://aavoride.in/about",

    images: [
      {
        url: "https://aavoride.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AAVORide",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <main>
        <HeroSection />
        <PhilosophySection />
        <MissionSection />
        <VisionSection />
        <ServicesSection />
      </main>

      <FooterSection />
    </div>
  );
}