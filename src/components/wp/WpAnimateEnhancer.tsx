"use client";

import { useEffect } from "react";

/** Mirrors gutenify-base animate.min.js: animated-fadeInUp → fadeInUp when in view. */
export function WpAnimateEnhancer() {
  useEffect(() => {
    const elements = document.querySelectorAll(":not(.swiper-slide) > .animated");
    const observers: IntersectionObserver[] = [];

    elements.forEach((node) => {
      if (node.closest(".swiper-slide")) return;

      const animationClasses: string[] = [];
      for (let i = 0; i < node.classList.length; i++) {
        const cls = node.classList[i];
        if (cls.startsWith("animated-")) {
          animationClasses.push(cls.replace("animated-", ""));
        }
      }
      if (animationClasses.length === 0) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animationClasses.forEach((name) => node.classList.add(name));
        });
      });
      observer.observe(node);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return null;
}
