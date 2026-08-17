import type { Metadata } from "next";
import { inter, sora } from "./fonts";
import "./globals.css";
import { NavbarWrapper } from "@/components/shared/navbar-wrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://aavoride.in"),

  title: {
    default:
      "AAVORide | Outstation Cab Services App | Single Request | Compare Prices",
    template: "%s | AAVORide",
  },

  description:
    "Outstation cab services starting from Gujarat with verified drivers and agencies. Compare fares with zero commission. Free cancellation! Rentals, tempo travellers, business trips - we have it all!",

  keywords: [
    "outstation cab service*",
    "outstation taxi service*",
    "outstation tempo traveller*",
    "free cancellation*",
    "compare cab prices*",
    "compare cab fares*",
    "outstation trip cab*",
    "outstation round trip*",
    "outstation prebooking*",
    "multiple quotes verified drivers*",
    "outstation travel",
    "outstation travel gujarat",
    "zero commission",
    "verified drivers",
    "airport pickup",
    "single request",
    "multiple quotes",
    "compare quotes",
    "pickup drop",
    "driver preference",
    "language preference",
    "outstation travel cab booking",
    "outstation travel service",
    "cabs near me for outstation",
    "outstation tempo traveller price",
    "cheapest taxi cab near me",
    "cheapest ride company",
    "cheapest taxi gujarat",
  ],

  authors: [
    {
      name: "AAVORide",
      url: "https://aavoride.in",
    },
  ],

  creator: "AAVORide",

  publisher: "AAVORide",

  category: "Transportation",

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

  alternates: {
    canonical: "https://aavoride.in",
  },

  openGraph: {
    title: "AAVORide | Outstation Cab Services App | Single Request | Compare Prices",

    description:
      "Outstation cab services starting from Gujarat with verified drivers and agencies. Compare fares with zero commission. Free cancellation! Rentals, tempo travellers, business trips - we have it all!",

    url: "https://aavoride.in",

    siteName: "AAVORide",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "https://aavoride.in/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "AAVORide Official Logo",
      },
    ],
  },

  twitter: {
    card: "summary",

    title: "AAVORide | Outstation Cab Services App | Single Request | Compare Prices",

    description:
      "Outstation cab services starting from Gujarat with verified drivers and agencies. Compare fares with zero commission. Free cancellation! Rentals, tempo travellers, business trips - we have it all!",

    images: ["https://aavoride.in/android-chrome-512x512.png"],
  },

  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/Icon.svg", type: "image/svg+xml" },
    ],

    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} ${inter.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--page-background)] text-[var(--foreground)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "AAVORide",
                url: "https://aavoride.in",
                logo: "https://aavoride.in/icon.png",
                sameAs: [
                  "https://www.instagram.com/",
                  "https://twitter.com/",
                  "https://www.linkedin.com/",
                  "https://www.facebook.com/",
                  "https://www.youtube.com/"
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+91-9712387840",
                  contactType: "customer service",
                  email: "aavoride@gmail.com",
                  availableLanguage: ["English", "Hindi", "Punjabi", "Marathi", "Gujarati", "Tamil", "Bengali", "Kannada"]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "AAVORide",
                url: "https://aavoride.in",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://aavoride.in/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "TaxiService",
                name: "AAVORide",
                image: "https://aavoride.in/icon.png",
                "@id": "https://aavoride.in",
                url: "https://aavoride.in",
                telephone: "+91-9712387840",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Ahmedabad",
                  addressRegion: "Gujarat",
                  addressCountry: "IN"
                },
                priceRange: "₹₹",
                areaServed: {
                  "@type": "State",
                  name: "India"
                }
              }
            ]),
          }}
        />
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
