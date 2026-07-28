import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "@/styles/shell.css";

type PlaceholderPageProps = {
  title: string;
  description?: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl flex-1 px-4 py-20 text-center">
        <h1 className="font-heading text-3xl font-bold text-kw-primary">{title}</h1>
        <p className="mt-4 text-neutral-600">
          {description ??
            "This page is queued for migration from WordPress. Content coming soon."}
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-sm font-semibold uppercase tracking-wide text-kw-button hover:underline"
        >
          ← Back to home
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
