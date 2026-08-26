import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | AAVORide - Your Data, Always Secure" },
  description:
    "Read AAVORide's Privacy Policy to understand how we collect, use, and protect your personal information. Your data is secure and never sold.",
  alternates: {
    canonical: "https://www.aavoride.in/privacy-policy",
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
