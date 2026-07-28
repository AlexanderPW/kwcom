import Image from "next/image";
import Link from "next/link";
import { mainNav, site } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MainNav, MobileNavToggle } from "@/components/layout/MainNav";
import { TopBar } from "@/components/layout/TopBar";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <TopBar />
      <div className="relative border-b border-neutral-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="shrink-0">
            <Image
              src="https://i0.wp.com/kelseywaldrop.com/wp-content/uploads/2023/08/cropped-cropped-kwlogo.png?fit=470%2C100&ssl=1"
              alt={site.name}
              width={235}
              height={50}
              className="h-10 w-auto md:h-12"
              priority
            />
          </Link>
          <div className="hidden flex-1 justify-center lg:flex">
            <MainNav items={mainNav} />
          </div>
          <div className="flex items-center gap-3">
            <ButtonLink href={site.getStartedHref} className="hidden sm:inline-flex">
              Get Started
            </ButtonLink>
            <MobileNavToggle items={mainNav} />
          </div>
        </div>
      </div>
    </header>
  );
}
