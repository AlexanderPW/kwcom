import Link from "next/link";
import { site, socialLinks } from "@/config/site";
import { SocialIcon } from "@/components/icons/SocialIcon";

export function TopBar() {
  return (
    <div className="bg-kw-pink text-sm text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2">
        <Link
          href={`mailto:${site.email}`}
          className="font-medium hover:underline"
        >
          {site.email}
        </Link>
        <ul className="flex items-center gap-3">
          {socialLinks.slice(0, 4).map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-label={item.label}
                className="opacity-90 transition-opacity hover:opacity-100"
              >
                <SocialIcon icon={item.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
