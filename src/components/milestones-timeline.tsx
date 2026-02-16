"use client";

import { useEffect, useRef, useState } from "react";

type Milestone = {
  year: string;
  title: string;
  description: string;
};

type MilestonesTimelineProps = {
  milestones: Milestone[];
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function MilestonesTimeline({ milestones }: MilestonesTimelineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [inView, setInView] = useState<boolean[]>(() => milestones.map(() => false));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setInView((prev) => {
          const next = [...prev];
          let changed = false;

          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue;
            }

            const idx = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx) && !next[idx]) {
              next[idx] = true;
              changed = true;
            }
          }

          return changed ? next : prev;
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -12% 0px" },
    );

    itemRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [milestones.length]);

  useEffect(() => {
    const updateProgress = () => {
      if (!containerRef.current) {
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startTrigger = viewportHeight * 0.76;
      const endTrigger = viewportHeight * 0.2;
      const totalDistance = rect.height + (startTrigger - endTrigger);
      const coveredDistance = startTrigger - rect.top;
      const nextProgress = clamp(coveredDistance / totalDistance, 0, 1);
      setProgress(nextProgress);
    };

    let rafId = 0;
    const onScroll = () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      rafId = window.requestAnimationFrame(updateProgress);
    };

    const initFrameId = window.requestAnimationFrame(updateProgress);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(initFrameId);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-slate-200 md:block" />
      <div
        className="absolute left-1/2 top-0 hidden w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500 to-blue-600 md:block"
        style={{ height: `${progress * 100}%` }}
      />
      <div
        className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.5)] md:block"
        style={{ top: `${progress * 100}%`, transform: "translate(-50%, -50%)" }}
      />

      <div className="space-y-8 md:space-y-10">
        {milestones.map((milestone, index) => {
          const rightAligned = index % 2 === 0;
          const visible = inView[index];

          return (
            <div
              key={milestone.year}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
              data-index={index}
              className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center"
            >
              <div className={rightAligned ? "md:text-right" : "md:col-start-3 md:text-left"}>
                <article
                  className={`motion-reduce:opacity-100 motion-reduce:transform-none inline-block max-w-md rounded-xl border border-slate-200 bg-white p-6 text-left shadow-lg transition-all duration-700 ${
                    visible
                      ? "translate-x-0 translate-y-0 opacity-100"
                      : `${rightAligned ? "md:-translate-x-14" : "md:translate-x-14"} translate-y-6 opacity-0`
                  }`}
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <span className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-1 text-sm font-bold text-white">
                    {milestone.year}
                  </span>
                  <h3 className="font-benton mt-3 text-xl font-bold text-slate-900">{milestone.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{milestone.description}</p>
                </article>
              </div>

              <div className="hidden md:block">
                <span
                  className={`block h-4 w-4 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
                    visible
                      ? "scale-100 bg-gradient-to-r from-cyan-500 to-blue-600"
                      : "scale-75 bg-slate-300"
                  }`}
                />
              </div>

              <div className={rightAligned ? "md:col-start-3" : "md:col-start-1"} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
