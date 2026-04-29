"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "@/components/Wordmark";

export function TopBar() {
  const [progress, setProgress] = useState(0);
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

  return (
    <header className="sticky top-0 z-30 bg-canvas/95 backdrop-blur border-b border-hairline-soft">
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})`, width: "100%" }}
      />
      <div className="max-w-[1240px] mx-auto h-20 px-6 lg:px-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Wordmark size="md" />
        </div>
        <div className="hidden md:flex items-center gap-1">
          <span className="px-3.5 py-2 rounded-full text-[0.95rem] font-semibold text-ink hover:bg-surface-soft transition-colors cursor-pointer">
            Field Manual
          </span>
          <span className="px-3.5 py-2 rounded-full text-[0.95rem] font-semibold text-muted hover:bg-surface-soft transition-colors cursor-pointer">
            Talk Tracks
          </span>
          <span className="px-3.5 py-2 rounded-full text-[0.95rem] font-semibold text-muted hover:bg-surface-soft transition-colors cursor-pointer">
            Rev Notes
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.78rem] font-semibold text-ink bg-surface-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-rausch" />
            Internal · Rev 5.1
          </span>
        </div>
      </div>
    </header>
  );
}
