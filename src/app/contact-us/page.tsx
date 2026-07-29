import type { Metadata } from "next";
import {
  WordPressHtml,
  getWpFooterHtml,
} from "@/components/wp/WordPressHtml";
import { WpAnimateEnhancer } from "@/components/wp/WpAnimateEnhancer";
import { WpDuotoneFilters } from "@/components/wp/WpDuotoneFilters";
import { Header } from "@/components/layout/Header";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/config/site";
import "@/styles/shell.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Let's connect. Tell Kelsey Waldrop a bit about where you are in your career and where you want to go.",
};

export default function Page() {
  return (
    <>
      <Header />
      <WpDuotoneFilters />
      <WpAnimateEnhancer />
      <div className="wp-site-blocks">
        <main className="bg-white font-body text-neutral-900">
          {/* Hero */}
          <section className="relative overflow-hidden bg-neutral-950 text-white">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-kw-pink/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-kw-primary/25 blur-3xl"
            />
            <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center md:py-24">
              <span className="animated animated-fadeInUp mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-accent text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                Get In Touch
              </span>
              <h1
                className="animated animated-fadeInUp font-heading uppercase"
                style={{
                  color: "#fff",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  fontSize: "clamp(2.75rem, 6vw, 4rem)",
                }}
              >
                Let&rsquo;s Connect
              </h1>
              <span
                aria-hidden
                className="animated animated-fadeInUp mt-6 block h-px w-20 bg-gradient-to-r from-transparent via-kw-pink to-transparent"
              />
              <p className="animated animated-fadeInUp mx-auto mt-6 max-w-xl font-accent text-lg leading-relaxed text-white/75">
                Tell me a bit about where you are and where you want to go, and
                I&rsquo;ll be in touch to find the right next step together.
              </p>
            </div>
          </section>

          {/* Body: info + form */}
          <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              {/* Left: contact info */}
              <div className="lg:pt-4">
                <h2 className="font-heading text-2xl font-semibold uppercase tracking-wide text-kw-primary">
                  Reach Out Directly
                </h2>
                <p className="mt-4 text-neutral-600">
                  Prefer email? Send a note anytime and I&rsquo;ll get back to
                  you personally. Otherwise, fill out the form and I&rsquo;ll
                  follow up with next steps.
                </p>

                <a
                  href={`mailto:${site.email}`}
                  className="group mt-8 flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:border-kw-pink/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-kw-pink/10 text-kw-pink">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      aria-hidden
                    >
                      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                      Email
                    </span>
                    <span className="block truncate text-neutral-900 group-hover:text-kw-pink">
                      {site.email}
                    </span>
                  </span>
                </a>

              </div>

              {/* Right: form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </section>
        </main>

        <WordPressHtml html={getWpFooterHtml()} />
      </div>
    </>
  );
}
