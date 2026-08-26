import type { Metadata } from "next";
import AccountDeletionClient from "./AccountDeletionClient";

export const metadata: Metadata = {
  title: "Account Deletion Policy",
  description:
    "Learn how to permanently delete your AAVORide account and personal data.",
  alternates: {
    canonical: "https://www.aavoride.in/account-deletion",
  },
  openGraph: {

    url: "https://www.aavoride.in/account-deletion",

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
  return <AccountDeletionClient />;
}
