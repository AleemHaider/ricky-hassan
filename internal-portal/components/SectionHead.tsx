export function SectionHead({
  num,
  kicker,
  title,
  italic,
  time,
}: {
  num: string;
  kicker: string;
  title: string;
  italic?: string;
  time?: string;
}) {
  return (
    <header className="mb-8 pt-2">
      <div className="flex items-baseline justify-between gap-6 mb-3 flex-wrap">
        <div className="flex items-baseline gap-2.5">
          <span className="font-sans text-rausch text-[0.7rem] tabular-nums font-bold uppercase tracking-[0.04em]">
            §{num}
          </span>
          <span className="text-muted text-[0.78rem] font-semibold uppercase tracking-[0.04em]">
            {kicker}
          </span>
        </div>
        {time && (
          <span className="text-muted text-[0.72rem] tabular-nums uppercase tracking-[0.04em] font-bold">
            {time}
          </span>
        )}
      </div>
      <h2 className="display text-[1.65rem] md:text-[1.95rem] text-ink max-w-[34rem]">
        {title}
        {italic && (
          <>
            {" "}
            <span className="display-italic">{italic}</span>
          </>
        )}
      </h2>
    </header>
  );
}
