import Link from "next/link";
import { site, socialLinks } from "@/config/site";
import { SocialIcon } from "@/components/icons/SocialIcon";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-neutral-900 text-neutral-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm text-neutral-400">
            Proudly powered by{" "}
            <Link
              href="https://fishsticks.com"
              className="text-white underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fishsticks
            </Link>
            .
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
            Follow Us :
          </p>
          <ul className="flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-white transition-colors hover:bg-kw-pink"
                >
                  <SocialIcon icon={item.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
