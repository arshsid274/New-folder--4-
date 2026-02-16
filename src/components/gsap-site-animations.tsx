"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isPluginRegistered = false;

if (typeof window !== "undefined" && !isPluginRegistered) {
  gsap.registerPlugin(ScrollTrigger);
  isPluginRegistered = true;
}

function getDirectionalOffset(element: HTMLElement): number {
  const forcedDirection = element.dataset.gsapFrom;
  if (forcedDirection === "left") {
    return -56;
  }

  if (forcedDirection === "right") {
    return 56;
  }

  if (forcedDirection === "none") {
    return 0;
  }

  if (window.innerWidth < 1024) {
    return 0;
  }

  const rect = element.getBoundingClientRect();
  const viewportCenter = window.innerWidth / 2;
  const elementCenter = rect.left + rect.width / 2;
  const deadZone = window.innerWidth * 0.08;
  const delta = elementCenter - viewportCenter;

  if (Math.abs(delta) < deadZone) {
    return 0;
  }

  return elementCenter < viewportCenter ? -56 : 56;
}

export function GsapSiteAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("main section, footer");

      sections.forEach((section) => {
        gsap.from(section, {
          y: 24,
          duration: 0.75,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            once: true,
          },
        });

        const headings = Array.from(section.querySelectorAll<HTMLElement>("h1, h2")).slice(0, 3);
        if (headings.length > 0) {
          gsap.from(headings, {
            y: 18,
            duration: 0.55,
            stagger: 0.08,
            ease: "power2.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: section,
              start: "top 84%",
              once: true,
            },
          });
        }

        const cards = Array.from(section.querySelectorAll<HTMLElement>("article")).slice(0, 18);
        if (cards.length > 0) {
          cards.forEach((card, index) => {
            const xOffset = getDirectionalOffset(card);

            gsap.from(card, {
              x: xOffset,
              y: xOffset === 0 ? 22 : 10,
              duration: 0.62,
              delay: Math.min(index * 0.03, 0.24),
              ease: "power2.out",
              immediateRender: false,
              scrollTrigger: {
                trigger: card,
                start: "top 86%",
                once: true,
              },
            });
          });
        }

        const statNumbers = Array.from(section.querySelectorAll<HTMLElement>(".tabular-nums"));
        if (statNumbers.length > 0) {
          gsap.from(statNumbers, {
            scale: 0.9,
            duration: 0.5,
            stagger: 0.05,
            ease: "back.out(1.7)",
            immediateRender: false,
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          });
        }
      });
    });

    const refreshId = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      window.cancelAnimationFrame(refreshId);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
