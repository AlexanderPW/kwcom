import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  WordPressHtml,
  getWpFooterHtml,
  getWpHeaderHtml,
} from "@/components/wp/WordPressHtml";
import { WpAnimateEnhancer } from "@/components/wp/WpAnimateEnhancer";
import { WpDuotoneFilters } from "@/components/wp/WpDuotoneFilters";
import { WpNavigationEnhancer } from "@/components/wp/WpNavigationEnhancer";
import { site } from "@/config/site";
import "@/styles/shell.css";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Real clients share what their experience is like working with Kelsey Waldrop as a Career and Leadership Coach.",
};

type Testimonial = {
  name: string;
  role: string;
  headline: string;
  quote: string;
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Manini Madi",
    role: "Managing Director, Accenture, Google Business Group",
    headline: "Kelsey is one of the very best coaches that I have worked with",
    quote:
      "Kelsey is one of the very best coaches that I have worked with. She is intuitive, insightful, and understands the executive experience during career transitions deeply. Her empathy, coupled with her own career experience navigating complex organizations, makes her a truly unique coach.",
    image:
      "https://i0.wp.com/kelseywaldrop.com/wp-content/uploads/2023/10/IMG_2803-1.jpeg?resize=1024%2C957&ssl=1",
  },
  {
    name: "Karla Parra",
    role: "Founder, The Joyful Career Coaching",
    headline: "Kelsey has a wealth of expertise and experience",
    quote:
      "Kelsey’s Executive Integration thought leadership and design developed have been the blueprint used across many other areas of the business. Kelsey has a wealth of expertise and experience, which are highly regarded by many in the company who have a stake in integrating our new MDs. Kelsey is well-respected in this space not only for the direct coaching she provides to executives in transition, but the effectiveness of her model.",
    image:
      "https://i0.wp.com/kelseywaldrop.com/wp-content/uploads/2023/10/Karla-Google-Photo-2-2-scaled.jpg?resize=768%2C793&ssl=1",
  },
  {
    name: "Craig Henzel",
    role: "C-Suite Advisor, Vetrepreneur and Amazon Best Selling Author",
    headline: "Kelsey was my strongest advocate and guide",
    quote:
      "She was an invaluable confidant and coach, playing a pivotal role in my transition into a new role and helping me decode and tackle the myriad challenges across a new company. Her insightful guidance and strategic acumen were instrumental in overcoming complexities, expanding my network, and achieving significant success right out of the gate.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Stars() {
  return (
    <div className="flex gap-1 text-kw-pink" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-4 w-4 fill-current"
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.98l-5.2 2.73.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <span
        aria-hidden
        className="pointer-events-none absolute right-7 top-4 select-none font-accent text-7xl leading-none text-kw-pink/15"
      >
        &rdquo;
      </span>

      <Stars />

      <blockquote className="mt-5 flex flex-1 flex-col">
        <p className="font-accent text-xl font-semibold leading-snug text-kw-primary">
          {t.headline}
        </p>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-neutral-600">
          {t.quote}
        </p>
      </blockquote>

      <figcaption className="mt-7 flex items-center gap-4 border-t border-neutral-100 pt-6">
        {t.image ? (
          <Image
            src={t.image}
            alt={t.name}
            width={56}
            height={56}
            className="h-14 w-14 shrink-0 rounded-full object-cover object-top ring-2 ring-kw-pink/20"
          />
        ) : (
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-kw-pink/10 font-accent text-lg font-semibold text-kw-primary ring-2 ring-kw-pink/20">
            {initials(t.name)}
          </span>
        )}
        <span className="min-w-0">
          <span className="block font-heading text-sm font-semibold uppercase tracking-wide text-neutral-900">
            {t.name}
          </span>
          <span className="mt-0.5 block text-xs leading-snug text-kw-pink">
            {t.role}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Page() {
  return (
    <>
      <WpDuotoneFilters />
      <WpAnimateEnhancer />
      <WpNavigationEnhancer />
      <div className="wp-site-blocks">
        <WordPressHtml html={getWpHeaderHtml()} />

        <main className="bg-white font-body text-neutral-900">
          {/* Hero */}
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-kw-pink/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-kw-primary/30 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
            <div className="text-center md:text-left">
              <span className="mx-auto mb-6 block h-px w-16 bg-kw-pink md:mx-0" />
              <h1
                className="font-heading uppercase"
                style={{
                  color: "#fff",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                }}
              >
                Testimonials
              </h1>
              <p className="mx-auto mt-5 max-w-xl font-accent text-lg leading-relaxed text-white/80 md:mx-0">
                Real clients share what their experience is like working with me
                as a Career and Leadership Coach.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
              <span
                aria-hidden
                className="absolute -right-4 -top-4 h-full w-full rounded-2xl border-2 border-kw-pink/60"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                <Image
                  src="https://i0.wp.com/kelseywaldrop.com/wp-content/uploads/2023/09/Kelsey-Waldrop-212-scaled.jpg?resize=683%2C1024&ssl=1"
                  alt="Kelsey Waldrop"
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 400px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials grid */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-kw-pink">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center text-white">
            <h2
              className="font-heading uppercase"
              style={{
                color: "#fff",
                fontWeight: 600,
                letterSpacing: "0.01em",
                lineHeight: 1.2,
                fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
              }}
            >
              Ready to navigate your next pivotal moment?
            </h2>
            <p className="max-w-xl font-accent text-lg text-white/90">
              Let’s talk about where you are and where you want to go.
            </p>
            <Link
              href={site.getStartedHref}
              style={{ textDecoration: "none" }}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-kw-primary transition-colors hover:bg-neutral-100"
            >
              Get Started
            </Link>
          </div>
        </section>
        </main>

        <WordPressHtml html={getWpFooterHtml()} />
      </div>
    </>
  );
}
