import Link from "next/link";
import { cn } from "@/lib/cn";
import styles from "./Button.module.css";

type Variant = "primary" | "grey" | "light";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

type LinkProps = CommonProps & {
  href: string;
};

type ButtonProps = CommonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

/**
 * Shared button. Renders an anchor (`next/link`) when `href` is provided,
 * otherwise a native `<button>`. Styling is fully self-contained in
 * `Button.module.css` — no borders or drop shadows.
 */
export function Button(props: LinkProps | ButtonProps) {
  const { variant = "primary", className, children, onClick } = props;
  const classes = cn(styles.button, styles[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={(props as ButtonProps).type ?? "button"}
      className={classes}
      onClick={onClick}
      disabled={(props as ButtonProps).disabled}
    >
      {children}
    </button>
  );
}
