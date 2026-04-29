import type { ReactNode } from "react";

export function MarginNote({
  label,
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-5 lg:my-0 lg:absolute lg:right-[-15rem] lg:w-[13rem] lg:mt-1 text-muted font-sans text-[0.85rem] leading-[1.5]">
      {label && (
        <div className="smallcaps text-rausch mb-1.5">{label}</div>
      )}
      <div>{children}</div>
    </aside>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-10 max-w-[34rem]">
      <p className="font-sans font-medium italic text-[1.4rem] md:text-[1.6rem] leading-[1.3] text-ink">
        {children}
      </p>
    </blockquote>
  );
}

export function StatBlock({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="my-7 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 border-t border-b border-hairline-soft py-6">
      {stats.map((s, i) => (
        <div key={i}>
          <div className="font-sans tnum font-bold text-[1.5rem] text-ink leading-none tracking-tightest">
            {s.value}
          </div>
          <div className="smallcaps text-muted mt-2">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
