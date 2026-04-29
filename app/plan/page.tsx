import type { Metadata } from "next";
import { TopNav } from "@/components/client/TopNav";
import {
  SectionAnchor,
  PullQuote,
} from "@/components/client/SectionAnchor";
import { BigNumber, CompareRow } from "@/components/client/BigNumber";
import {
  ProjectionTable,
  StepList,
} from "@/components/client/ProjectionTable";

export const metadata: Metadata = {
  title: "Strategic Allocation Plan",
  description:
    "A sample deliverable. An engineered conversion plan, illustrated through one real household.",
};

export default function PlanPage() {
  return (
    <div className="relative">
      <TopNav />
      <div className="spine" aria-hidden />

      <main className="max-w-[1080px] mx-auto px-6 lg:px-12 pt-14">
        {/* COVER ============================================================ */}
        <section
          id="cover"
          className="min-h-[80vh] flex flex-col justify-between py-20"
        >
          <div className="flex items-baseline justify-between drift-in">
            <span className="smallcaps text-gray">
              Strategic Allocation Plan
            </span>
            <span className="smallcaps-tight text-gray">
              Sample · 01 / 10
            </span>
          </div>

          <div className="my-16 max-w-[40rem]">
            <span className="smallcaps text-emerald drift-in">
              A Sample Plan · For Illustration
            </span>
            <h1
              className="display text-[2.6rem] md:text-[3.4rem] mt-5 mb-6 drift-in text-ink"
              style={{ animationDelay: "120ms" }}
            >
              What an engineered plan{" "}
              <span className="display-italic">actually looks like.</span>
            </h1>
            <p
              className="font-sans text-[1.05rem] leading-[1.65] text-ink-soft max-w-[34rem] drift-in"
              style={{ animationDelay: "260ms" }}
            >
              A real plan, with real numbers, built for one real household —
              an illustration of how we work, and of the cost of waiting to
              begin.
            </p>
            <div
              className="mt-8 flex flex-wrap items-center gap-3 drift-in"
              style={{ animationDelay: "400ms" }}
            >
              <a href="#profile" className="btn-wise">
                Begin walkthrough
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#next" className="btn-subtle">
                Skip to enrollment
              </a>
            </div>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-3 pt-10 border-t border-ink/60 font-mono text-[0.7rem] uppercase tracking-[0.18em] tabular-nums drift-in"
            style={{ animationDelay: "400ms" }}
          >
            <div>
              <div className="text-smoke/70 mb-1">Household</div>
              <div className="text-ink">The Whitfields</div>
            </div>
            <div>
              <div className="text-smoke/70 mb-1">Qualified Assets</div>
              <div className="text-ink">$1.8M IRA</div>
            </div>
            <div>
              <div className="text-smoke/70 mb-1">Time Horizon</div>
              <div className="text-ink">9 Gap Years</div>
            </div>
            <div>
              <div className="text-smoke/70 mb-1">Issued</div>
              <div className="text-ink">April 2026</div>
            </div>
          </div>
        </section>

        {/* §01 PROFILE ====================================================== */}
        <section id="profile" className="py-24 md:py-28">
          <SectionAnchor
            num="01"
            kicker="Client Profile · The Starting Point"
            title="Every assumption,"
            italic="documented upfront."
            lede={
              <>
                Nothing is hidden. The inputs below are the foundation —
                everything that follows in this document flows from them. If
                any assumption changes, the plan changes with it.
              </>
            }
          />

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-2 max-w-[44rem]">
            <CompareRow
              label="Household ages"
              value="63 / 61"
              hint="Both spouses, currently. Nine years until first RMD."
            />
            <CompareRow
              label="Qualified balance"
              value="$1.80M"
              hint="Traditional IRA. Tax-deferred, untouched at present."
            />
            <CompareRow
              label="Annual gross income"
              value="$285K"
              hint="Wages plus rental income. Anticipated to drop in retirement."
            />
            <CompareRow
              label="Effective tax bracket"
              value="24%"
              hint="Federal marginal — currently. Anticipated to land higher post-RMD."
            />
            <CompareRow
              label="Return assumption"
              value="6.0%"
              hint="Real, after-fee — used consistently throughout this plan."
            />
            <CompareRow
              label="Surviving spouse scenario"
              value="Modeled"
              hint="Single-filer brackets applied for the projected widow years."
            />
          </div>

          <p className="serif-prose mt-12 text-ink/80 max-w-[36rem]">
            The Whitfields are a hypothetical illustration. The numbers
            below are calibrated to what a typical Hasan household at this
            tier looks like. Your numbers will differ — but the
            <em> structure</em> of the analysis will be identical.
          </p>
        </section>

        {/* §02 BASELINE ===================================================== */}
        <section id="baseline" className="py-24 md:py-28">
          <SectionAnchor
            num="02"
            kicker="Baseline · No Conversion"
            title="What happens"
            italic="if they do nothing."
            lede={
              <>
                Before any strategy is evaluated, we project the outcome of
                doing nothing. This is the baseline against which every
                decision in this plan is measured.
              </>
            }
          />

          <BigNumber
            value="$2.94M"
            label="Total projected lifetime taxes — household + heirs"
            tone="oxblood"
            size="xxl"
            caption={
              <>
                The Whitfields&apos; share of taxes paid across both lifetimes
                and the ten-year heir-distribution window. This is the figure
                everything else in this plan is measured against.
              </>
            }
          />

          <ProjectionTable
            caption="Baseline projection · key components"
            head={["Component", "Detail", "Lifetime Cost"]}
            rows={[
              [
                "RMD acceleration (ages 73+)",
                "Forced distributions stack on top of Social Security and rental income, pushing into higher brackets in the 80s.",
                "$1,124,000",
              ],
              [
                "Surviving-spouse single-filer years",
                "After the first death, single-filer brackets apply to the same RMD stream. Most households underestimate this.",
                "$486,000",
              ],
              [
                "Heir distribution under 10-year rule",
                "Adult children inherit and must distribute within ten years, during their own peak earning years and highest brackets.",
                "$1,332,000",
              ],
            ]}
          />

          <PullQuote>
            Every year without a plan, the balance grows and the window to
            fight it gets shorter.
          </PullQuote>
        </section>

        {/* §03 STRATEGY A =================================================== */}
        <section id="strategy-a" className="py-24 md:py-28">
          <SectionAnchor
            num="03"
            kicker="Strategy A · Current Bracket"
            title="Convert at the"
            italic="current bracket."
            lede={
              <>
                Better, but incomplete. We convert what fits inside the
                current tax bracket each year — preserving today&apos;s
                rates without absorbing a step-up. The IRA is reduced, not
                eliminated.
              </>
            }
          />

          <div className="grid md:grid-cols-2 gap-12">
            <BigNumber
              value="$521K"
              label="Lifetime savings vs. baseline"
              tone="moss"
              size="xl"
              caption={
                <>Reduces total household tax burden by 17.7% over baseline.</>
              }
            />
            <div className="pt-8">
              <h3 className="font-display text-[1.3rem] text-ink mb-3">
                What this strategy does well.
              </h3>
              <p className="serif-prose text-ink/85">
                Locks in current bracket rates. Modest annual conversions
                are absorbed without IRMAA spikes. Predictable tax
                planning, year over year.
              </p>
              <h3 className="font-display text-[1.3rem] text-ink mt-8 mb-3">
                Where it falls short.
              </h3>
              <p className="serif-prose text-ink/85">
                Leaves roughly $720K in the IRA at age 73. RMDs still
                begin. Heir tax burden is reduced but not removed. The
                widow&apos;s tax trap is partially mitigated, not closed.
              </p>
            </div>
          </div>

          <ProjectionTable
            caption="Strategy A · annual conversion schedule (excerpt)"
            head={["Year", "Age", "Convert", "Bracket"]}
            rows={[
              ["2026", "63 / 61", "$112,000", "24%"],
              ["2027", "64 / 62", "$118,000", "24%"],
              ["2028", "65 / 63", "$122,000", "24%"],
              ["2029", "66 / 64", "$128,000", "24%"],
              ["…", "—", "Continued through 2034", "—"],
            ]}
          />
        </section>

        {/* §04 STRATEGY B =================================================== */}
        <section id="strategy-b" className="py-24 md:py-28">
          <SectionAnchor
            num="04"
            kicker="Strategy B · Maximum Protection"
            title="Full conversion,"
            italic="across the gap years."
            lede={
              <>
                Accelerated conversion across the nine years before RMDs
                begin. The IRA exits the traditional system entirely before
                forced distributions arrive. Higher near-term tax. Far
                lower lifetime tax.
              </>
            }
          />

          <BigNumber
            value="$1.18M"
            label="Lifetime savings vs. baseline"
            tone="copper"
            size="xxl"
            caption={
              <>
                A 40.1% reduction in total projected tax burden. The IRA is
                fully converted by age 71. Zero RMDs. Zero ten-year-rule
                exposure for heirs. The widow&apos;s tax trap, removed
                entirely.
              </>
            }
          />

          <div className="grid md:grid-cols-3 gap-8 my-12">
            <div className="border-l border-copper pl-5">
              <div className="font-display text-[2.2rem] text-ink leading-none tnum">
                $0
              </div>
              <div className="smallcaps text-smoke mt-3">RMDs · post-71</div>
              <p className="font-serif italic text-[0.95rem] mt-2 text-smoke">
                Account fully converted before forced-distribution age.
              </p>
            </div>
            <div className="border-l border-copper pl-5">
              <div className="font-display text-[2.2rem] text-ink leading-none tnum">
                $0
              </div>
              <div className="smallcaps text-smoke mt-3">10-year heir tax</div>
              <p className="font-serif italic text-[0.95rem] mt-2 text-smoke">
                Roth assets pass income-tax-free under current law.
              </p>
            </div>
            <div className="border-l border-copper pl-5">
              <div className="font-display text-[2.2rem] text-ink leading-none tnum">
                $0
              </div>
              <div className="smallcaps text-smoke mt-3">Widow&apos;s trap</div>
              <p className="font-serif italic text-[0.95rem] mt-2 text-smoke">
                Single-filer years carry no taxable RMD stream.
              </p>
            </div>
          </div>

          <ProjectionTable
            caption="Strategy B · annual conversion schedule (excerpt)"
            head={["Year", "Age", "Convert", "Bracket"]}
            rows={[
              ["2026", "63 / 61", "$214,000", "24% → 32%"],
              ["2027", "64 / 62", "$218,000", "32%"],
              ["2028", "65 / 63", "$222,000", "32%"],
              ["…", "—", "Through age 71 — IRA fully converted", "—"],
            ]}
          />
        </section>

        {/* §05 MEDICARE / IRMAA ============================================= */}
        <section id="medicare" className="py-24 md:py-28">
          <SectionAnchor
            num="05"
            kicker="Medicare · IRMAA Modeling"
            title="We model IRMAA precisely —"
            italic="we don&apos;t cap conversions to avoid it."
            lede={
              <>
                Many advisors treat IRMAA thresholds as conversion ceilings.
                We don&apos;t. The reasoning is on the next page — and once
                you see the relative magnitudes, the choice becomes
                self-evident.
              </>
            }
          />

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 my-10">
            <div>
              <div className="smallcaps text-smoke mb-2">
                Annual IRMAA premium increase
              </div>
              <div className="font-display tnum text-[3.4rem] text-oxblood leading-none">
                ~$3,400
              </div>
              <p className="font-serif italic text-[1rem] text-smoke mt-3">
                Per spouse, in the highest IRMAA bracket triggered by
                Strategy B conversions during the gap years.
              </p>
            </div>
            <div>
              <div className="smallcaps text-smoke mb-2">
                Lifetime tax benefit of those same conversions
              </div>
              <div className="font-display tnum text-[3.4rem] text-moss leading-none">
                ~$129K
              </div>
              <p className="font-serif italic text-[1rem] text-smoke mt-3">
                Per million dollars converted at the optimal bracket
                window. Two orders of magnitude.
              </p>
            </div>
          </div>

          <PullQuote>
            Letting the tail wag the dog — stopping a $200,000 conversion
            to avoid a $3,000 premium bump — doesn&apos;t survive the math.
          </PullQuote>

          <p className="serif-prose text-ink/80 max-w-[36rem]">
            What we do instead is model IRMAA precisely, year by year, so
            you know exactly what surcharge you&apos;re absorbing and why
            it&apos;s worth it. No surprises. No artificial limits on the
            strategy.
          </p>
        </section>

        {/* §06 THE WINDOW =================================================== */}
        <section id="window" className="py-24 md:py-28">
          <SectionAnchor
            num="06"
            kicker="The Window · Why Timing Matters"
            title="December 31st is the conversion deadline."
            italic="It is not the planning deadline."
            lede={
              <>
                The plan you receive in May and the plan you receive in
                November are the same plan. What&apos;s different is{" "}
                <em>everything surrounding it.</em> And everything
                surrounding it is what makes the plan actually work.
              </>
            }
          />

          <p className="serif-prose text-ink/85 max-w-[36rem] mb-4">
            Five dependencies determine whether a conversion strategy
            executes well or executes poorly. Each one tightens as the
            calendar year progresses.
          </p>

          <StepList
            items={[
              {
                num: "01",
                title: "Your CPA",
                body:
                  "Tax-prep season runs February through April. Coordinating estimated payments, withholding, and conversion timing requires reaching them before they're buried in year-end filings. Engage in Q4 and you compete for bandwidth with every other client they have.",
              },
              {
                num: "02",
                title: "Your Investment Advisor",
                body:
                  "The specific holdings selected for conversion matter — appreciated equities, fixed income, in-kind transfers each have different consequences. Identifying the right positions requires time across the portfolio, not a December decision when markets are already in motion.",
              },
              {
                num: "03",
                title: "Your Estate Attorney",
                body:
                  "Converting changes the character of inherited assets and may require updates to beneficiary designations, trust language, and intent documents. An estate attorney needs lead time to review these.",
              },
              {
                num: "04",
                title: "Your Spouse",
                body:
                  "The strategy affects both of you, including what happens if one of you passes. The sooner your spouse is fully in the picture, the more confidently the plan executes as a team. This is also where the widow's tax-trap protection actually begins.",
              },
              {
                num: "05",
                title: "Conversion Timing Across the Year",
                body:
                  "The right moment to convert specific holdings isn't December by default. It's whenever market conditions and tax positioning align. That opportunity only exists if there's a full year to monitor and act, not a few weeks.",
              },
            ]}
          />
        </section>

        {/* §07 THE $42K DATA POINT =========================================== */}
        <section
          id="datapoint"
          className="py-24 md:py-28"
        >
          <SectionAnchor
            num="07"
            kicker="Research · Across Engagements"
            title="The"
            italic="$42,000 data point."
          />

          <div className="my-2">
            <div className="smallcaps text-gray mb-3">
              Per million dollars in the IRA — additional value captured
              when the engagement begins with a full planning year ahead.
            </div>
            <div className="flex items-end gap-6">
              <span className="display tnum font-semibold text-[3.6rem] md:text-[5rem] leading-none text-emerald bignum-rise">
                $42,000
              </span>
            </div>
          </div>

          <div className="max-w-[42rem] mt-2">
            <p className="serif-prose text-ink/85">
              Across thousands of household engagements, our research shows
              that conversions executed with the benefit of a full planning
              year behind them can add as much as forty-two thousand
              dollars of value per million dollars in the IRA. Not because
              the plan changes. Because{" "}
              <em>everything surrounding it has time to work.</em>
            </p>
            <p className="font-serif italic text-[1.05rem] text-smoke mt-5">
              For a $1.8M household — the implication is up to{" "}
              <span className="text-ink not-italic font-medium tnum">
                $76,000
              </span>{" "}
              in additional value. That figure is not a promise. It is what
              the data tells us is possible when timing, coordination, and
              precision align.
            </p>
          </div>
        </section>

        {/* §08 COST OF WAITING ============================================== */}
        <section id="waiting" className="py-24 md:py-28">
          <SectionAnchor
            num="08"
            kicker="The Cost of Waiting"
            title="The plan stays the same."
            italic="The window does not."
            lede={
              <>
                For this household, here is what waiting costs in foregone
                lifetime savings — by year of delay.
              </>
            }
          />

          <ProjectionTable
            caption="Delay scenario · for the Whitfield household, $1.8M IRA"
            head={["If they wait", "Foregone savings", "Why"]}
            rows={[
              [
                "1 year",
                "$92,000",
                "One gap year lost. Eight remaining for full Strategy B execution.",
              ],
              [
                "2 years",
                "$201,000",
                "RMD planning window narrows. Bracket optimization across remaining years tightens.",
              ],
              [
                "3 years",
                "$318,000",
                "Coordination across CPA, investment advisor, and estate attorney becomes increasingly compressed.",
              ],
              [
                "5 years",
                "$491,000",
                "Half the gap window is gone. Strategy A becomes the only viable option for most clients at this point.",
              ],
            ]}
          />

          <PullQuote>
            The window narrows every year as RMDs approach and bracket
            optimization gets constrained.
          </PullQuote>
        </section>

        {/* §09 ROADMAP ====================================================== */}
        <section id="roadmap" className="py-24 md:py-28">
          <SectionAnchor
            num="09"
            kicker="The Engagement Roadmap"
            title="Six steps,"
            italic="beginning to end."
            lede={
              <>
                A complete view of how a Hasan engagement unfolds, from
                first conversation to ongoing annual review. You should
                know exactly what you&apos;re signing up for — and what
                happens after.
              </>
            }
          />

          <StepList
            items={[
              {
                num: "01",
                title: "Discovery Consult",
                body:
                  "We get to know your complete financial picture. Most clients arrive thinking they know the answer, and leave realizing the real opportunity is bigger than they thought.",
              },
              {
                num: "02",
                title: "Data Gathering",
                body:
                  "Every income source, every account, every variable. CPA, investment advisor, and estate picture are coordinated from this point forward. This is where a full planning year pays dividends.",
              },
              {
                num: "03",
                title: "Preliminary Analysis",
                body:
                  "Your Senior Strategist presents initial findings. For most households, this is the moment the numbers hit home and the urgency becomes undeniable.",
              },
              {
                num: "04",
                title: "Your Strategic Allocation Plan",
                body:
                  "Personalized Plan delivered — every variable modeled, every recommendation documented in writing. Backed by the $750,000 written refund offer.",
              },
              {
                num: "05",
                title: "Implementation",
                body:
                  "Step-by-step action list with specific dollar amounts. Coordination with your CPA and existing advisors. No guessing. No ambiguity.",
              },
              {
                num: "06",
                title: "Annual Review",
                body:
                  "Tax laws change. Life changes. Markets move. We stay with you, reviewing and updating your plan every year so it keeps delivering what it was designed to deliver.",
              },
            ]}
          />
        </section>

        {/* §10 WHAT NEXT ===================================================== */}
        <section id="next" className="py-24 md:py-28">
          <SectionAnchor
            num="10"
            kicker="From Here · What Happens Next"
            title="Pure fiduciary advice."
            italic="No products. No AUM."
          />

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-[60rem]">
            <div>
              <h3 className="font-display text-[1.45rem] text-ink mb-3">
                The way we get started.
              </h3>
              <p className="serif-prose text-ink/85">
                A $1,500 deposit begins the process — your full discovery,
                data gathering, and the Plan itself. The balance is due
                after Data Gathering, once we&apos;ve confirmed
                you&apos;re a strong candidate.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[1.45rem] text-ink mb-3">
                The $750,000 refund offer.
              </h3>
              <p className="serif-prose text-ink/85">
                If we can&apos;t show you a documented path to avoid at
                least $750,000 in lifetime taxes, you pay nothing. Full
                refund.{" "}
                <em>The risk is entirely ours.</em>
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-[40rem]">
            <BigNumber
              value="$1,500"
              label="Deposit · begins everything"
              tone="copper"
              size="xl"
              caption={
                <>
                  Refundable under the written guarantee. Schedules your
                  Data Gathering appointment. The first concrete step.
                </>
              }
            />
          </div>

          <div className="mt-20 pt-10 border-t border-ink/60 grid md:grid-cols-3 gap-6 font-mono text-[0.7rem] tracking-[0.18em] uppercase tabular-nums text-smoke">
            <div>
              <div className="text-smoke/70 mb-1">Prepared for</div>
              <div className="text-ink">The Whitfield Household</div>
            </div>
            <div>
              <div className="text-smoke/70 mb-1">Engagement Type</div>
              <div className="text-ink">Strategic Allocation Plan</div>
            </div>
            <div>
              <div className="text-smoke/70 mb-1">Issued</div>
              <div className="text-ink">April 23, 2026</div>
            </div>
          </div>
        </section>

        {/* FOOTER =========================================================== */}
        <footer className="border-t border-ash mt-10 mb-16 pt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-[1.5rem] tracking-tightest text-ink">
                Hasan
              </span>
              <span className="smallcaps-tight text-smoke">
                Consulting Group
              </span>
            </div>
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-smoke">
              Pure fiduciary · No products · No AUM · $750,000 written
              refund offer
            </div>
          </div>
          <p className="font-serif italic text-[0.92rem] text-smoke/80 mt-6 max-w-[40rem]">
            This document is a sample deliverable for illustration. Numbers
            shown are calibrated to a representative household at this
            tier. Your engagement will produce your own numbers.
          </p>
        </footer>
      </main>
    </div>
  );
}
