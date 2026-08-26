import type { Metadata } from "next";
import TermsConditionsClient from "./TermsConditionsClient";

export const metadata: Metadata = {
  title: { absolute: "Terms and Conditions|Service Listings|AAVORide App" },
  description:
    "Read the terms and conditions for using AAVORide's taxi booking and travel marketplace services. Understand your rights and responsibilities.",
  alternates: {
    canonical: "https://www.aavoride.in/terms-and-conditions",
  },
  openGraph: {

    url: "https://www.aavoride.in/terms-and-conditions",

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
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <TermsConditionsClient />;
}
