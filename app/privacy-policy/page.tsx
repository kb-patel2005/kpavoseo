import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | AAVORide - Your Data, Always Secure" },
  description:
    "Read AAVORide's Privacy Policy to understand how we collect, use, and protect your personal information. Your data is secure and never sold.",
  alternates: {
    canonical: "https://www.aavoride.in/privacy-policy",
  },
  openGraph: {

    url: "https://www.aavoride.in/privacy-policy",

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
  keywords:[
    "safe ride data",
    "safe customer data",
    "trust build",
  ]
};

export default function Page() {
  return <PrivacyPolicyClient />;
}
