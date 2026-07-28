"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides, site } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/cn";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="relative min-h-[420px] overflow-hidden md:min-h-[520px] lg:min-h-[600px]">
      {heroSlides.map((s, i) => (
        <div
          key={s.image}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            i === index ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={i !== index}
        >
          <Image
            src={s.image}
            alt=""
            fill
            className="object-cover object-top"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
      ))}

      <div className="relative mx-auto flex min-h-[420px] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center md:min-h-[520px] lg:min-h-[600px]">
        <h1 className="font-heading text-2xl font-bold uppercase leading-tight tracking-wide text-white md:text-3xl lg:text-4xl">
          {slide.title}
        </h1>
        <p className="mt-4 max-w-2xl font-heading text-lg font-medium text-white/95 md:text-xl">
          {slide.subtitle}
        </p>
        <div className="mt-8">
          <ButtonLink href={site.getStartedHref}>Get Started</ButtonLink>
        </div>
        <div className="mt-8 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                i === index ? "bg-white" : "bg-white/40",
              )}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
