"use client";

import { useEffect, useState } from "react";
import { sections } from "@/lib/sections";

export function Sidebar() {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sticky top-20 self-start hidden lg:block max-h-[calc(100vh-5rem)] overflow-y-auto pr-4 py-12">
      <div className="smallcaps text-muted mb-3">Contents</div>
      <nav>
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            data-active={active === s.id}
            className="nav-link group"
          >
            <div className="flex items-baseline gap-2.5">
              <span className="font-sans text-[0.7rem] tabular-nums font-bold text-muted-soft group-data-[active=true]:text-rausch">
                {s.num}
              </span>
              <span className="font-sans text-[0.92rem] leading-tight font-semibold">
                {s.title}
              </span>
            </div>
          </a>
        ))}
      </nav>

      <div className="mt-8 pt-5 border-t border-hairline-soft">
        <div className="font-sans text-[0.72rem] uppercase tracking-[0.04em] text-muted leading-relaxed font-bold">
          REV 5.1 · APR 2026
          <br />
          <span className="font-medium normal-case tracking-normal">
            Internal · confidential
          </span>
        </div>
      </div>
    </aside>
  );
}
