"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavItem } from "@/config/site";
import { cn } from "@/lib/cn";

function NavDropdown({
  item,
}: {
  item: { label: string; children: { label: string; href: string }[] };
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1 py-2 text-sm font-medium uppercase tracking-wide text-neutral-800 hover:text-kw-button"
        aria-haspopup="true"
      >
        {item.label}
        <span aria-hidden className="text-xs">
          ▾
        </span>
      </button>
      <ul className="invisible absolute left-0 top-full z-50 min-w-[220px] border border-neutral-200 bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        {item.children.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-kw-button"
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

type MainNavProps = {
  items: NavItem[];
  className?: string;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
};

export function MainNav({
  items,
  className,
  onNavigate,
  variant = "desktop",
}: MainNavProps) {
  const linkClass =
    "py-2 text-sm font-medium uppercase tracking-wide text-neutral-800 hover:border-b-2 hover:border-kw-button hover:text-kw-button";

  return (
    <nav
      className={cn(
        variant === "desktop"
          ? "hidden items-center gap-6 lg:flex"
          : "flex flex-col gap-1",
        className,
      )}
      aria-label="Main"
    >
      {items.map((item) => {
        if ("children" in item && item.children) {
          if (variant === "mobile") {
            return (
              <div key={item.label}>
                <p className="py-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {item.label}
                </p>
                <ul className="mb-2 pl-2">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={onNavigate}
                        className="block py-1.5 text-sm font-medium text-neutral-800 hover:text-kw-button"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
          return <NavDropdown key={item.label} item={{ label: item.label, children: item.children }} />;
        }

        if ("href" in item && item.href) {
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                linkClass,
                variant === "desktop" && "border-b-2 border-transparent",
              )}
            >
              {item.label}
            </Link>
          );
        }

        return null;
      })}
    </nav>
  );
}

export function MobileNavToggle({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="rounded border border-neutral-300 px-3 py-2 text-sm font-medium uppercase"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Menu
      </button>
      {open ? (
        <div className="absolute left-0 right-0 top-full z-40 border-b border-neutral-200 bg-white px-4 py-4 shadow-md">
          <MainNav
            items={items}
            variant="mobile"
            onNavigate={() => setOpen(false)}
          />
        </div>
      ) : null}
    </div>
  );
}
