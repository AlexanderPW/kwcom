import type { Metadata } from "next";
import { WpBrandStyles } from "@/components/wp/WpBrandStyles";
import { WpNavCollapseStyles } from "@/components/wp/WpNavCollapseStyles";
import { WpStylesheets } from "@/components/wp/WpStylesheets";
import "./globals.css";
import "@/styles/brand.css";
import "@/styles/wp-hero.css";

export const metadata: Metadata = {
  title: {
    default: "Home - Kelsey Waldrop",
    template: "%s - Kelsey Waldrop",
  },
  description:
    "Fortune 500 transformation strategies for executive career and life transitions.",
  metadataBase: new URL("https://kelseywaldrop.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <WpStylesheets />
        <WpBrandStyles />
        <WpNavCollapseStyles />
      </head>
      <body className="home wp-singular page page-id-681 wp-custom-logo wp-embed-responsive wp-theme-gutenify-base">
        {children}
      </body>
    </html>
  );
}
