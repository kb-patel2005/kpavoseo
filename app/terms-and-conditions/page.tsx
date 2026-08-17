import type { Metadata } from "next";
import TermsConditionsClient from "./TermsConditionsClient";

export const metadata: Metadata = {
  title: { absolute: "Terms and Conditions | Service Listings | Transparency and Respect" },
  description:
    "Review AavoRide’s terms and conditions to understand how our taxi booking and travel marketplace works. Know your rights, responsibilities, and the policies that keep your journey safe and transparent.",
  alternates: {
    canonical: "https://aavoride.in/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <TermsConditionsClient />;
}
