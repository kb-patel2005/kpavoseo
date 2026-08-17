import { FaqSection } from '@/components/landing/faq-section'
import { FooterSection } from '@/components/landing/footer-section'
import React from 'react'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | AAVORide - Outstation Cab Booking Questions",
  description:"Got questions about AAVORide? Find quick answers on bookings, verified drivers, fares, and payments — everything for a smooth outstation trip.",
  //   alternates: {
//     canonical: "https://aavoride.in/faq",
//   },
keywords:[
    "AAVORide FAQ", "outstation cab questions", "cab booking help", "verified drivers FAQ"
],
  openGraph: {
    title: "Frequently Asked Questions | AavoRide",
    description:
      "Learn more about AavoRide services: cab booking, tempo traveller rentals, verified drivers, best prices, free cancellation, and direct communication.",
    // url: "https://aavoride.in/faq",
    siteName: "AavoRide",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | AavoRide",
    description:
      "Get answers to your questions about AavoRide cab booking, tempo traveller rentals, verified drivers, and cancellation policies."
  },
};


export default function page() {
  return (
    <section>
        
        <FaqSection />
        <FooterSection/>
    </section>
  )
}
