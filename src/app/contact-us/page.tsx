import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = { title: "Contact Us" };

export default function Page() {
  return (
    <PlaceholderPage
      title="Contact Us"
      description="Inner pages still use the placeholder shell. Home uses WordPress-matched markup."
    />
  );
}
