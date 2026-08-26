import type { Metadata } from "next";
import TermsConditionsClient from "./TermsConditionsClient";

export const metadata: Metadata = {
  title: { absolute: "Terms and Conditions|Service Listings|AAVORide App" },
  description:
    "Read the terms and conditions for using AAVORide's taxi booking and travel marketplace services. Understand your rights and responsibilities.",
  alternates: {
    canonical: "https://www.aavoride.in/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <TermsConditionsClient />;
}
