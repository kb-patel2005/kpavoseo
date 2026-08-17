import { AavoRidePartners } from "@/components/partner/aavo-ride-partners";
import { Cta } from "@/components/partner/cta";
import { Faqs } from "@/components/partner/faqs";
import { FooterSection } from "@/components/landing/footer-section";
import { ForDriverPartners } from "@/components/partner/for-driver-partners";
import { Hero } from "@/components/partner/hero";
import { OurMission } from "@/components/partner/our-mission";
import { StartJourney } from "@/components/partner/start-journey";
// import { Footer } from "@/components/about/layout/Footer";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {

  title: { absolute: "Become An Earning Partner | Zero Commission | Independent Drivers" },
  description:
    "Join AAVORide as an independent driver or travel agency. Receive direct customer enquiries, zero commission, flexible work, and transparent earnings.",

  alternates: {
    canonical: "https://aavoride.in/about/partner",
  },

  openGraph: {
    title: "Become An Earning Partner | Zero Commission | Independent Drivers",

    description:
      "Join AAVORide as an independent driver or travel agency. Receive direct customer enquiries, zero commission, flexible work, and transparent earnings.",

    url: "https://aavoride.in/about/partner",

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

const Page = () => {
  return (
    <div className="overflow-hidden relative bg-background">
      <div className="absolute top-[900px] right-[-292px] size-[570px] bg-primary rounded-full blur-[100px] pointer-events-none opacity-30 hidden lg:block" />
      <Hero />
      <AavoRidePartners />
      <ForDriverPartners />
      <StartJourney />
      <OurMission />
      <Cta />
      <Faqs />
      <FooterSection />
    </div>
  );
};

export default Page;
