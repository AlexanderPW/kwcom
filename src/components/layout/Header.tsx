"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { mainNav, site, socialLinks } from "@/config/site";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { Button } from "@/components/ui/Button";
import styles from "./Header.module.css";

const LOGO_SRC =
  "https://i0.wp.com/kelseywaldrop.com/wp-content/uploads/2023/08/cropped-cropped-kwlogo.png?fit=470%2C100&ssl=1";

/** Flattened nav links (dropdowns collapse to their top-level entry for now). */
const navLinks = mainNav.map((item) =>
  "href" in item && item.href
    ? { label: item.label, href: item.href }
    : { label: item.label, href: (item as { children: { href: string }[] }).children[0].href },
);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Top bar */}
      <div className={styles.topbar}>
        <div className={styles.topbarInner}>
          <a className={styles.email} href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <ul className={styles.socials}>
            {socialLinks.slice(0, 4).map((item) => (
              <li key={item.label}>
                <a href={item.href} aria-label={item.label}>
                  <SocialIcon icon={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main bar */}
      <div className={styles.mainInner}>
        <Link href="/" className={styles.logoLink} aria-label={site.name}>
          <Image
            src={LOGO_SRC}
            alt={site.name}
            width={293}
            height={62}
            className={styles.logo}
            priority
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          href={site.getStartedHref}
          variant="grey"
          className={styles.navCta}
        >
          Get Started
        </Button>

        <button
          type="button"
          className={styles.menuButton}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M5 5v1.5h14V5H5z" />
            <path d="M5 12.8h14v-1.5H5v1.5z" />
            <path d="M5 19h14v-1.5H5V19z" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen ? (
        <>
          <div
            className={styles.overlay}
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />
          <div className={styles.drawer} role="dialog" aria-modal="true">
            <button
              type="button"
              className={styles.drawerClose}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg viewBox="0 0 24 24" aria-hidden>
                <path d="m13.06 12 6.47-6.47-1.06-1.06L12 10.94 5.53 4.47 4.47 5.53 10.94 12l-6.47 6.47 1.06 1.06L12 13.06l6.47 6.47 1.06-1.06L13.06 12Z" />
              </svg>
            </button>
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href={site.getStartedHref}
              variant="grey"
              className={styles.drawerCta}
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </>
      ) : null}
    </header>
  );
}
