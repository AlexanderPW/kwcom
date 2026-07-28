/** Inlined so nav collapse works even if external WP CSS fails to load. Matches live site (900px). */
export function WpNavCollapseStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
@media (max-width: 900px) {
  header .wp-block-navigation__responsive-container-open {
    display: flex !important;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    min-height: 44px;
    cursor: pointer;
  }

  header .wp-block-navigation__responsive-container:not(.is-menu-open) {
    display: none !important;
  }

  /* Tablet + mobile: slide-in panel from the right (not full-viewport white sheet) */
  header .wp-block-navigation__responsive-container.is-menu-open {
    display: block !important;
    position: fixed !important;
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: auto !important;
    width: min(400px, 88vw) !important;
    max-width: 400px !important;
    height: 100% !important;
    z-index: 100000 !important;
    background: #fff !important;
    overflow-y: auto !important;
    visibility: visible !important;
    transform: translateX(0) !important;
    box-shadow: -11px 0 60px rgba(2, 2, 2, 0.35);
    animation: kw-nav-slide-in 0.3s ease-out;
  }

  header
    .wp-block-navigation__responsive-container.is-menu-open
    .wp-block-navigation__responsive-container-content {
    display: block !important;
    max-width: 100% !important;
    margin: 0 !important;
  }

  header .hide-on-mobile,
  header .hide-on-tablet {
    display: none !important;
  }
}

/* Phone: theme uses full-width drawer */
@media (max-width: 600px) {
  header .wp-block-navigation__responsive-container.is-menu-open {
    width: 100% !important;
    max-width: 100% !important;
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  html.has-modal-open {
    overflow: auto;
  }
}

@media (min-width: 901px) {
  header .wp-block-navigation__responsive-container-open {
    display: none !important;
  }

  header .wp-block-navigation__responsive-container {
    display: block !important;
    position: static !important;
    transform: none !important;
    visibility: visible !important;
    background: transparent !important;
    width: auto !important;
    box-shadow: none !important;
  }

  header
    .wp-block-navigation__responsive-container
    .wp-block-navigation__responsive-container-content {
    display: block !important;
  }

  header .wp-block-navigation__responsive-container-close {
    display: none !important;
  }
}

@media (max-width: 600px) {
  html.has-modal-open {
    overflow: hidden;
  }
}

@keyframes kw-nav-slide-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
`,
      }}
    />
  );
}
