import type { ReactNode } from "react";

export function BigNumber({
  value,
  unit,
  label,
  caption,
  tone = "ink",
  size = "lg",
}: {
  value: string;
  unit?: string;
  label: string;
  caption?: ReactNode;
  tone?: "ink" | "copper" | "moss" | "oxblood" | "green";
  size?: "lg" | "xl" | "xxl";
}) {
  const colors = {
    ink: "text-ink",
    copper: "text-rausch",
    green: "text-rausch",
    moss: "text-moss",
    oxblood: "text-rausch-text",
  };
  // Airbnb rating-display style — modest but confident
  const sizes = {
    lg: "text-[2.4rem] md:text-[2.8rem]",
    xl: "text-[3rem] md:text-[3.6rem]",
    xxl: "text-[3.6rem] md:text-[4rem]",
  };
  return (
    <figure className="my-8">
      <div className="smallcaps text-muted mb-2.5">{label}</div>
      <div className="flex items-end gap-3 leading-[1.1]">
        <span
          className={`font-sans tnum bignum-rise font-bold tracking-tightest ${colors[tone]} ${sizes[size]}`}
        >
          {value}
        </span>
        {unit && (
          <span className="smallcaps text-muted pb-1.5">{unit}</span>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 max-w-[34rem] font-sans text-[0.96rem] leading-[1.55] text-body">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function CompareRow({
  label,
  value,
  hint,
  emphasis = false,
}: {
  label: string;
  value: string;
  hint?: string;
  emphasis?: boolean;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_8rem_auto] gap-x-6 py-3.5 border-b border-hairline-soft align-baseline">
      <div className="font-sans font-semibold text-[0.98rem] text-ink leading-tight">
        {label}
      </div>
      <div
        className={`font-sans tnum text-right tabular-nums font-bold ${
          emphasis ? "text-[1.3rem] text-rausch leading-none" : "text-[1.05rem] text-ink"
        }`}
      >
        {value}
      </div>
      {hint && (
        <div className="hidden md:block font-sans text-[0.88rem] text-muted leading-snug pt-0.5">
          {hint}
        </div>
      )}
    </div>
  );
}
