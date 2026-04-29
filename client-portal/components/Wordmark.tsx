export function Wordmark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { mark: "w-6 h-6 text-[0.78rem]", text: "text-[1rem]" },
    md: { mark: "w-7 h-7 text-[0.9rem]", text: "text-[1.18rem]" },
    lg: { mark: "w-9 h-9 text-[1.15rem]", text: "text-[1.5rem]" },
  };
  const s = sizes[size];
  return (
    <span className="inline-flex items-center gap-2.5 leading-none">
      <span
        className={`${s.mark} relative inline-flex items-center justify-center rounded-[8px] bg-rausch text-white font-extrabold tracking-tightest`}
        aria-hidden
      >
        H
      </span>
      <span
        className={`${s.text} font-semibold tracking-tightest text-ink leading-none`}
      >
        Hasan
      </span>
    </span>
  );
}
