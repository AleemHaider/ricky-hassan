import type { ReactNode } from "react";

export function SayThis({
  label = "SAY THIS",
  index,
  children,
  variant = "default",
}: {
  label?: string;
  index?: string;
  children: ReactNode;
  variant?: "default" | "ink" | "split";
}) {
  if (variant === "ink") {
    return (
      <figure className="my-6 bg-surface-soft rounded-[14px] p-6 border border-hairline-soft">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-rausch" aria-hidden />
          <span className="smallcaps text-rausch">{label}</span>
          {index && (
            <span className="smallcaps text-muted tabular-nums">· {index}</span>
          )}
        </div>
        <blockquote className="font-sans text-[1.05rem] leading-[1.5] text-ink font-medium">
          {children}
        </blockquote>
      </figure>
    );
  }

  return (
    <figure className="my-5 border border-hairline-soft rounded-[14px] p-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="smallcaps text-muted">{label}</span>
        {index && (
          <span className="smallcaps text-muted tabular-nums">· {index}</span>
        )}
      </div>
      <blockquote className="font-sans text-[1rem] leading-[1.5] text-body">
        {children}
      </blockquote>
    </figure>
  );
}

export function SayThisGrid({ children }: { children: ReactNode }) {
  return <div className="my-6 grid md:grid-cols-2 gap-3">{children}</div>;
}

export function SayThisCard({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="border border-hairline-soft rounded-[14px] p-5 hover:shadow-[rgba(0,0,0,0.08)_0_4px_16px] transition-shadow">
      <div className="smallcaps text-rausch mb-2">{label}</div>
      <p className="font-sans text-[0.96rem] leading-[1.5] text-body">
        {children}
      </p>
    </div>
  );
}
