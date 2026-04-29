import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="px-6 lg:px-10 py-6 border-b border-hairline-soft">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          <Wordmark size="md" />
          <span className="text-[0.78rem] text-muted font-semibold uppercase tracking-[0.04em]">
            Consulting Group
          </span>
        </div>
      </header>

      <section className="flex-1 flex items-center">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 py-20 w-full">
          <div className="max-w-[40rem] mb-16">
            <span className="text-rausch text-[0.75rem] uppercase tracking-[0.04em] font-bold">
              Welcome
            </span>
            <h1 className="display text-[2.4rem] md:text-[3rem] text-ink mt-4">
              Two ways to work with{" "}
              <span className="display-italic">Hasan.</span>
            </h1>
            <p className="serif-prose text-body mt-5 max-w-[34rem]">
              Choose where you&apos;re going. The Field Manual is for the team —
              the playbook we run on every cold-prospect meeting. The Sample Plan
              is for clients — the deliverable a household receives when they
              engage us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <Link
              href="/internal"
              className="card-wise group flex flex-col gap-4 hover:shadow-[rgba(0,0,0,0.12)_0_8px_28px]"
            >
              <div className="flex items-center justify-between">
                <span className="badge-pill">Internal</span>
                <span className="text-muted text-[0.78rem] font-semibold uppercase tracking-[0.04em]">
                  For sales reps
                </span>
              </div>
              <h2 className="display text-[1.5rem] text-ink mt-2">
                Field Manual
              </h2>
              <p className="text-body text-[0.95rem] leading-[1.55]">
                The Cold Prospect Conversion Playbook. 13 sections, six meeting
                stops, every objection script — the operating manual the team
                runs in every meeting.
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 text-rausch font-semibold text-[0.92rem] group-hover:gap-3 transition-all">
                Open the manual
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              href="/plan"
              className="card-wise group flex flex-col gap-4 hover:shadow-[rgba(0,0,0,0.12)_0_8px_28px]"
            >
              <div className="flex items-center justify-between">
                <span className="badge-pill badge-pill-rausch">Client</span>
                <span className="text-muted text-[0.78rem] font-semibold uppercase tracking-[0.04em]">
                  For meetings
                </span>
              </div>
              <h2 className="display text-[1.5rem] text-ink mt-2">
                Sample Plan
              </h2>
              <p className="text-body text-[0.95rem] leading-[1.55]">
                What an engineered plan actually looks like. A real sample
                deliverable walked through during a client meeting — projection
                math, the timing window, and the cost of waiting.
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 text-rausch font-semibold text-[0.92rem] group-hover:gap-3 transition-all">
                View the plan
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-hairline-soft px-6 lg:px-10 py-6">
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between gap-3 text-[0.78rem] text-muted font-medium">
          <span>© Hasan Consulting Group LLC</span>
          <span>Pure fiduciary · No products · No AUM</span>
        </div>
      </footer>
    </main>
  );
}
