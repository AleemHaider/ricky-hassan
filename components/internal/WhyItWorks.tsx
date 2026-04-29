import type { ReactNode } from "react";

export function WhyItWorks({
  title = "Why this works",
  items,
}: {
  title?: string;
  items: ReactNode[];
}) {
  return (
    <div className="my-6 bg-surface-soft rounded-[14px] p-6">
      <div className="smallcaps text-ink mb-3">{title}</div>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-3 font-sans text-[0.95rem] leading-[1.55] text-body"
          >
            <span
              className="select-none mt-1.5 shrink-0"
              aria-hidden
            >
              <span className="block w-1.5 h-1.5 rounded-full bg-rausch" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NoteList({
  items,
  tone = "default",
}: {
  items: ReactNode[];
  tone?: "default" | "warn";
}) {
  return (
    <ul
      className={`my-5 space-y-2 font-sans text-[0.95rem] leading-[1.55] ${
        tone === "warn" ? "text-rausch-text" : "text-body"
      }`}
    >
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span
            className={`select-none mt-2 shrink-0 ${
              tone === "warn" ? "text-rausch-text" : "text-muted"
            }`}
            aria-hidden
          >
            <span className="block w-1 h-1 rounded-full bg-current" />
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
