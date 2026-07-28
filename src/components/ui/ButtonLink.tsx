import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors",
        variant === "primary" &&
          "bg-kw-button text-white hover:bg-kw-button-hover",
        variant === "outline" &&
          "border border-kw-primary text-kw-primary hover:bg-kw-primary/5",
        className,
      )}
    >
      {children}
    </Link>
  );
}
