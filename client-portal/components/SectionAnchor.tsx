import type { ReactNode } from "react";

export function SectionAnchor({
  num,
  kicker,
  title,
  italic,
  lede,
}: {
  num: string;
  kicker: string;
  title: string;
  italic?: string;
  lede?: ReactNode;
}) {
  return (
    <header className="mb-10 max-w-[40rem]">
      <div className="flex items-baseline gap-2.5 mb-4 flex-wrap">
        <span className="font-sans text-rausch text-[0.72rem] tabular-nums font-bold uppercase tracking-[0.04em]">
          §{num}
        </span>
        <span className="text-muted text-[0.78rem] font-semibold uppercase tracking-[0.04em]">
          {kicker}
        </span>
      </div>
      <h2 className="display text-[1.85rem] md:text-[2.2rem] text-ink">
        {title}
        {italic && (
          <>
            {" "}
            <span className="display-italic">{italic}</span>
          </>
        )}
      </h2>
      {lede && (
        <p className="mt-5 text-[1.02rem] font-sans leading-[1.55] text-body max-w-[34rem]">
          {lede}
        </p>
      )}
    </header>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-12 max-w-[36rem]">
      <p className="display-soft text-[1.6rem] md:text-[1.85rem] leading-[1.25] text-ink">
        {children}
      </p>
    </blockquote>
  );
}
