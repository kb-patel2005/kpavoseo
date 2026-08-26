import type { Metadata } from "next";
import AccountDeletionClient from "./AccountDeletionClient";

export const metadata: Metadata = {
  title: "Account Deletion Policy",
  description:
    "Learn how to permanently delete your AAVORide account and personal data.",
  alternates: {
    canonical: "https://www.aavoride.in/account-deletion",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <AccountDeletionClient />;
}
