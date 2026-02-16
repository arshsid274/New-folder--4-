"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type NumberTickerProps = {
  value: number;
  startValue?: number;
  duration?: number;
  delay?: number;
  decimalPlaces?: number;
  className?: string;
  activateOnView?: boolean;
  viewThreshold?: number;
};

function easeInOutCubic(progress: number): number {
  if (progress < 0.5) {
    return 4 * progress * progress * progress;
  }

  return 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function formatValue(value: number, decimalPlaces: number): string {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
}

export function NumberTicker({
  value,
  startValue = 0,
  duration = 2600,
  delay = 0,
  decimalPlaces = 0,
  className,
  activateOnView = true,
  viewThreshold = 0.25,
}: NumberTickerProps) {
  const tickerRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(startValue);
  const [hasEnteredView, setHasEnteredView] = useState(!activateOnView);

  useEffect(() => {
    if (!activateOnView) {
      return;
    }

    const element = tickerRef.current;
    if (!element) {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      const fallbackFrameId = window.requestAnimationFrame(() => {
        setHasEnteredView(true);
      });
      return () => {
        window.cancelAnimationFrame(fallbackFrameId);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry && entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      {
        threshold: viewThreshold,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [activateOnView, viewThreshold]);

  useEffect(() => {
    if (activateOnView && !hasEnteredView) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      const reducedMotionFrameId = window.requestAnimationFrame(() => {
        setDisplayValue(value);
      });
      return () => {
        window.cancelAnimationFrame(reducedMotionFrameId);
      };
    }

    let frameId = 0;
    let timeoutId = 0;
    let startTime = 0;

    const diff = value - startValue;

    const step = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      setDisplayValue(startValue + diff * eased);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };

    timeoutId = window.setTimeout(() => {
      frameId = window.requestAnimationFrame(step);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(frameId);
    };
  }, [activateOnView, delay, duration, hasEnteredView, startValue, value]);

  const effectiveValue = activateOnView && !hasEnteredView ? startValue : displayValue;
  const formatted = useMemo(() => formatValue(effectiveValue, decimalPlaces), [decimalPlaces, effectiveValue]);

  return (
    <span ref={tickerRef} className={className}>
      {formatted}
    </span>
  );
}
