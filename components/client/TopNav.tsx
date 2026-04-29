"use client";

import { useEffect, useState } from "react";
import { planSections } from "@/lib/plan";
import { Wordmark } from "@/components/Wordmark";

export function TopNav() {
  const [active, setActive] = useState<string>(planSections[0].id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] }
    );
    planSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? h.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeIndex = planSections.findIndex((s) => s.id === active);
  const activeSection = planSections[activeIndex] ?? planSections[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-canvas/95 backdrop-blur border-b border-hairline-soft">
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})`, width: "100%" }}
      />
      <div className="max-w-[1240px] mx-auto h-20 px-6 lg:px-10 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3 shrink-0">
          <Wordmark size="md" />
        </div>

        {/* Pill section indicator */}
        <div className="hidden md:flex items-center gap-2 px-2 py-1.5 rounded-full border border-hairline shadow-[rgba(0,0,0,0.06)_0_1px_2px]">
          <span className="px-3 py-1 rounded-full text-[0.82rem] font-semibold text-ink bg-surface-soft">
            {activeSection.short}
          </span>
          <span className="px-2 text-[0.78rem] font-medium text-muted tabular-nums">
            {activeSection.num} / {String(planSections.length - 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a href="#next" className="btn-wise">
            Get started
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
