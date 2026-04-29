import type { ReactNode } from "react";

export function ProjectionTable({
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
                  className="smallcaps text-ink py-3 px-4 align-bottom text-left last:text-right"
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
                    className={`py-3.5 px-4 font-sans text-[0.93rem] leading-[1.5] text-body ${
                      j === r.length - 1
                        ? "text-right tabular-nums text-ink font-bold"
                        : "first:font-semibold first:text-ink"
                    }`}
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

export function StepList({
  items,
}: {
  items: { num: string; title: string; body: string }[];
}) {
  return (
    <ol className="my-8 grid gap-3 md:grid-cols-2">
      {items.map((it, i) => (
        <li
          key={i}
          className="card-wise flex items-start gap-4"
        >
          <span className="inline-flex shrink-0 items-center justify-center w-8 h-8 rounded-full bg-rausch text-white font-bold text-[0.78rem]">
            {it.num}
          </span>
          <div>
            <h3 className="font-sans font-semibold text-[1.02rem] text-ink leading-tight">
              {it.title}
            </h3>
            <p className="font-sans text-[0.93rem] leading-[1.55] text-body mt-1.5">
              {it.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
