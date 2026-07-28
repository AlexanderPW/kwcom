"use client";

import { useEffect } from "react";

function closestNav(el: EventTarget | null) {
  return (el as HTMLElement | null)?.closest(".wp-block-navigation");
}

/** WP block-navigation mobile toggle + submenu taps (no WP Interactivity API in Next). */
export function WpNavigationEnhancer() {
  useEffect(() => {
    const openButtons = document.querySelectorAll(
      ".wp-block-navigation__responsive-container-open",
    );
    const closeButtons = document.querySelectorAll(
      ".wp-block-navigation__responsive-container-close",
    );

    const getContainer = (nav: Element | null) =>
      nav?.querySelector(".wp-block-navigation__responsive-container") ?? null;

    const openMenu = (container: Element | null) => {
      if (!container) return;
      container.classList.add("is-menu-open", "has-modal-open");
      container.setAttribute("aria-hidden", "false");
      document.documentElement.classList.add("has-modal-open");
    };

    const closeMenu = (container: Element | null) => {
      if (!container) return;
      container.classList.remove("is-menu-open", "has-modal-open");
      container.setAttribute("aria-hidden", "true");
      document.documentElement.classList.remove("has-modal-open");
    };

    const onOpen = (e: Event) => {
      openMenu(getContainer(closestNav(e.currentTarget) ?? null));
    };

    const onClose = (e: Event) => {
      closeMenu(getContainer(closestNav(e.currentTarget) ?? null));
    };

    const onSubmenuToggle = (e: Event) => {
      const btn = e.currentTarget as HTMLButtonElement;
      if (window.matchMedia("(max-width: 900px)").matches) return;
      e.preventDefault();
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
    };

    openButtons.forEach((btn) => btn.addEventListener("click", onOpen));
    closeButtons.forEach((btn) => btn.addEventListener("click", onClose));

    const submenuToggles = document.querySelectorAll(
      ".wp-block-navigation-submenu__toggle",
    );
    submenuToggles.forEach((btn) =>
      btn.addEventListener("click", onSubmenuToggle),
    );

    return () => {
      openButtons.forEach((btn) => btn.removeEventListener("click", onOpen));
      closeButtons.forEach((btn) => btn.removeEventListener("click", onClose));
      submenuToggles.forEach((btn) =>
        btn.removeEventListener("click", onSubmenuToggle),
      );
      document.documentElement.classList.remove("has-modal-open");
    };
  }, []);

  return null;
}
