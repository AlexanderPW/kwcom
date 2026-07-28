export const site = {
  name: "Kelsey Waldrop",
  tagline: "Leadership Coach",
  email: "kelseywaldrop@potentialonpoint.com",
  getStartedHref: "/contact-us",
} as const;

/** WP theme uses placeholder `#` links for some social icons today. */
export const socialLinks = [
  { label: "Facebook", href: "#", icon: "facebook" as const },
  { label: "Twitter", href: "#", icon: "twitter" as const },
  { label: "YouTube", href: "#", icon: "youtube" as const },
  { label: "Instagram", href: "#", icon: "instagram" as const },
  { label: "LinkedIn", href: "#", icon: "linkedin" as const },
];

export type NavItem =
  | { label: string; href: string }
  | { label: string; href?: string; children: { label: string; href: string }[] };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact-us" },
  { label: "Testimonials", href: "/testimonials" },
];

export const heroSlides = [
  {
    image:
      "https://i0.wp.com/kelseywaldrop.com/wp-content/uploads/2025/02/HEADSHOT.jpg?resize=1250%2C2500&ssl=1",
    title: "HELPING LEADERS NAVIGATE THE PIVOTAL MOMENTS THAT DEFINE THEIR CAREERS",
    subtitle:
      "Fortune500 Transformation Strategies for Executive Career and Life Transitions",
  },
  {
    image:
      "https://i0.wp.com/kelseywaldrop.com/wp-content/uploads/2024/01/KW-Reshoot-174-scaled.jpg?resize=2560%2C1707&ssl=1",
    title: "HELPING LEADERS NAVIGATE THE PIVOTAL MOMENTS THAT DEFINE THEIR CAREERS",
    subtitle:
      "Fortune500 Transformation Strategies for Executive Career and Life Transitions",
  },
  {
    image:
      "https://i0.wp.com/kelseywaldrop.com/wp-content/uploads/2023/09/Kelsey-Waldrop-179-scaled.jpg?resize=1684%2C2560&ssl=1",
    title: "HELPING LEADERS NAVIGATE THE PIVOTAL MOMENTS THAT DEFINE THEIR CAREERS",
    subtitle:
      "Fortune500 Transformation Strategies for Executive Career and Life Transitions",
  },
];
