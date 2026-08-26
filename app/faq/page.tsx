import { FaqSection } from '@/components/landing/faq-section'
import { FooterSection } from '@/components/landing/footer-section'
import React from 'react'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | AAVORide - Outstation Cab Booking Questions",
  description: "Got questions about AAVORide? Find quick answers on bookings, verified drivers, fares, and payments — everything for a smooth outstation trip.",
  alternates: {
    canonical: "https://www.aavoride.in/faq",
  },
  keywords: [
    "AAVORide FAQ", "outstation cab questions", "cab booking help", "verified drivers FAQ"
  ],
  openGraph: {
    url: "https://www.aavoride.in/faq",
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


export default function page() {
  return (
    <section>

      <FaqSection />
      <FooterSection />
    </section>
  )
}
