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
    absolute: "About Us | AAVORide - Verified Drivers, Trusted Rides",
  },

  description: "Send one request and receive multiple quotes from verified drivers across India. Compare cab prices and book your preferred outstation ride today.",  
  alternates: {
    canonical: "https://www.aavoride.in/about",
  },

  keywords:[
    "multiple quotes verified drivers*",
    "verified drivers", 
    "compare cab prices"
  ],

  openGraph: {

    url: "https://www.aavoride.in/about",

    images: [
      {
        url: "https://www.aavoride.in/og-image.jpg",
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