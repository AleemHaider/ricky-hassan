import type { ReactNode } from "react";

export function DataTable({
  caption,
  head,
  rows,
}: {
  caption?: string;
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <figure className="my-7">
      {caption && (
        <figcaption className="smallcaps text-muted mb-3">{caption}</figcaption>
      )}
      <div className="rounded-[14px] border border-hairline-soft overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-surface-soft">
            <tr>
              {head.map((h, i) => (
                <th
                  key={i}
                  className="smallcaps text-ink py-3 px-4 align-bottom text-left"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={i}
                className="border-t border-hairline-soft align-top"
              >
                {r.map((cell, j) => (
                  <td
                    key={j}
                    className="py-3.5 px-4 font-sans text-[0.93rem] leading-[1.5] text-body first:font-semibold first:text-ink"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

export function StepsTable({
  rows,
}: {
  rows: { num: string; title: string; time: string; note: string }[];
}) {
  return (
    <figure className="my-7 rounded-[14px] border border-hairline-soft overflow-hidden">
      {rows.map((r, i) => (
        <div
          key={i}
          className={`grid grid-cols-[2.25rem_1fr_5rem] md:grid-cols-[2.25rem_1fr_5.5rem_1.5fr] gap-4 px-4 py-4 align-baseline hover:bg-surface-soft transition-colors ${
            i > 0 ? "border-t border-hairline-soft" : ""
          }`}
        >
          <span className="font-sans text-[0.78rem] text-rausch tabular-nums font-bold pt-0.5">
            {r.num}
          </span>
          <span className="font-sans font-semibold text-[0.98rem] text-ink leading-tight">
            {r.title}
          </span>
          <span className="font-sans text-[0.7rem] uppercase tracking-[0.04em] text-muted pt-0.5 tabular-nums font-bold">
            {r.time}
          </span>
          <span className="hidden md:block font-sans text-[0.92rem] text-body leading-snug">
            {r.note}
          </span>
        </div>
      ))}
    </figure>
  );
}
