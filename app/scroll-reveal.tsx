"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = ".reveal";

export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (
      prefersReducedMotion ||
      !("IntersectionObserver" in window) ||
      elements.length === 0
    ) {
      return;
    }

    const initialRevealLine = window.innerHeight * 0.9;

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      if (rect.top < initialRevealLine && rect.bottom > 0) {
        element.classList.add("is-visible");
      }
    });

    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.1,
      },
    );

    elements.forEach((element) => {
      if (!element.classList.contains("is-visible")) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
