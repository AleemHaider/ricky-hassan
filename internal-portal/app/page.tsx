import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { SectionHead } from "@/components/SectionHead";
import {
  SayThis,
  SayThisGrid,
  SayThisCard,
} from "@/components/SayThis";
import { WhyItWorks, NoteList } from "@/components/WhyItWorks";
import { DataTable, StepsTable } from "@/components/DataTable";
import { PullQuote, StatBlock } from "@/components/Aside";

export default function PlaybookPage() {
  return (
    <div className="relative">
      <TopBar />

      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[13rem_minmax(0,1fr)] gap-14">
        <Sidebar />

        <main className="py-14 lg:py-18 max-w-[40rem]">
          {/* HERO ============================================================ */}
          <section id="manual" className="fade-up">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-mono text-emerald text-[0.68rem] tracking-[0.16em] tabular-nums font-semibold">
                §01
              </span>
              <span className="smallcaps text-gray">
                Field Manual · Issue 5 · Rev 1
              </span>
            </div>

            <h1 className="display text-[2.4rem] md:text-[3rem] text-ink mb-1 max-w-[28rem]">
              The Cold Prospect Conversion{" "}
              <span className="display-italic">Playbook.</span>
            </h1>
            <p className="font-sans text-[1.05rem] text-ink-soft mt-5 mb-8 max-w-[36rem] leading-[1.65]">
              An operating manual for first-touch conversations with qualified
              prospects. Calibrated against eighteen months of meeting data —
              what we kept, we kept because the numbers told us to.
            </p>

            <StatBlock
              stats={[
                { value: "1,247", label: "Tracked Meetings" },
                { value: "73.4%", label: "Cold-Prospect Conv." },
                { value: "45–55", label: "Target Minutes" },
                { value: "Rev 5.1", label: "Apr 2026" },
              ]}
            />

            <p className="serif-prose text-ink/85 mt-8">
              Read this manual once before your first call. Refer back to it
              the morning of every call after that. Sections are sequenced in
              the same order as the meeting itself, so the document reads
              cover-to-cover the way a meeting unfolds. Side-margin annotations
              call out timing, default behaviors, and the few rules that
              survive every revision.
            </p>

            <p className="serif-prose text-ink/85 mt-4">
              This is an internal document. It is not marketing. It is the way
              we work.
            </p>

            <div className="mt-12 mb-2 flex items-center gap-3">
              <span className="h-px flex-1 bg-ash" />
              <span className="smallcaps text-smoke">Begin</span>
              <span className="h-px w-12 bg-ink" />
            </div>
          </section>

          {/* §02 PRE-MEETING BRIEF ============================================ */}
          <section id="pre-brief" className="mt-32">
            <SectionHead
              num="02"
              kicker="Pre-Meeting Brief · 24–48 Hours Before"
              title="Standard practice,"
              italic="not optional."
              time="Pre · 5 min · admin"
            />

            <p className="serif-prose text-ink/85">
              We send a one-page brief to the prospect&apos;s spouse 24–48
              hours before every meeting. This is the mechanism that removes
              the spouse objection before the presentation begins. It is also
              the first thing the prospect&apos;s household sees from us, so
              the document carries weight beyond its content. It signals that
              we treat this as a household decision, not a sales call.
            </p>

            <p className="serif-prose text-ink/85 mt-4">
              At the open of the meeting, reference the brief with one
              sentence and move on. Do not dwell on it. The work it does, it
              does in the days before the meeting, not during.
            </p>

            <WhyItWorks
              items={[
                <>
                  Signals that Hasan thinks holistically about the family,{" "}
                  <em>not just the prospect.</em>
                </>,
                "Primes the spouse emotionally before the prospect sits down.",
                "Introduces context before the meeting, so the meeting itself doesn't have to do that work.",
                "Removes the spouse objection before it can surface at the close.",
              ]}
            />

            <h3 className="font-display text-[1.4rem] mt-10 mb-1 text-ink">
              Opening the meeting · one sentence.
            </h3>
            <p className="smallcaps text-smoke mb-4">Reference the brief, then move on.</p>

            <SayThisGrid>
              <SayThisCard label="If they saw it">
                &ldquo;Did your spouse get a chance to see the note I sent over?
                Good — I&apos;m glad they have some context for what we&apos;re
                going to cover today.&rdquo;
              </SayThisCard>
              <SayThisCard label="If they didn&apos;t">
                &ldquo;No problem — I&apos;ll make sure they get a summary
                after we meet. It&apos;s worth them seeing.&rdquo;
              </SayThisCard>
            </SayThisGrid>

            <NoteList
              items={[
                <>
                  Whether they read it or not, <em>the question</em> confirms
                  Hasan sent something — which itself signals care and
                  thoroughness.
                </>,
                "If they did read it, the household-decision frame is already on the table without you having to introduce it cold.",
                "The one-sentence reference takes eight seconds. It does not delay the presentation.",
              ]}
            />
          </section>

          {/* §03 PULSE CHECK ================================================== */}
          <section id="pulse-check" className="mt-32">
            <SectionHead
              num="03"
              kicker="Pulse Check · Opening Questions"
              title="Three questions"
              italic="they've never been asked."
              time="Discovery · 8–10 min"
            />

            <p className="serif-prose text-ink/85">
              The pulse check is the discovery opener for cold prospects,
              before the meeting itself is on the calendar. The three
              questions below are sequenced to do specific work in a specific
              order. Their answers tell you where the prospect is in the
              journey and which hooks will land when you get them on screen.
            </p>

            <SayThis label="Ask this" index="01" variant="ink">
              &ldquo;Has anyone ever sat down with you and actually shown you
              the full lifetime tax bill on your qualified accounts — like,
              the real number?&rdquo;
            </SayThis>

            <WhyItWorks
              title="Why Q1 works"
              items={[
                <>
                  Foundational. Most high-net-worth prospects have accumulated
                  wealth without ever seeing the lifetime tax figure
                  visualized.
                </>,
                <>Surfaces the core problem without pitching anything.</>,
                <>
                  Pre-empts the &ldquo;my advisor handles that&rdquo;
                  objection. If their advisor had done this, they would know
                  the answer.
                </>,
              ]}
            />

            <SayThis label="Ask this" index="02" variant="ink">
              &ldquo;Right now — who&apos;s actually making the call on when
              you convert, and how much?&rdquo;
            </SayThis>

            <WhyItWorks
              title="Why Q2 works"
              items={[
                "Exposes the planning gap without attacking their current advisor.",
                <>
                  Most prospects either have no answer or realize the answer
                  is <em>nobody, really.</em>
                </>,
                "Seeds Hasan's positioning — planning-first, no AUM conflict — before you ever say it explicitly.",
                <>
                  Anticipates the &ldquo;I already have an advisor&rdquo;
                  objection by having the prospect surface the gap themselves.
                </>,
              ]}
            />

            <SayThis label="Ask this" index="03" variant="ink">
              &ldquo;Where are you right now in the journey — still working,
              recently retired, or are the RMDs already hitting?&rdquo;
            </SayThis>

            <WhyItWorks
              title="Why Q3 works"
              items={[
                "Creates urgency without pressure.",
                "For prospects in their early-to-mid retirement gap years, this question makes the cost of waiting visceral and personal.",
                <>
                  Anticipates the &ldquo;I&apos;ll think about it&rdquo;
                  objection by reframing delay as a decision with a real
                  dollar cost attached.
                </>,
              ]}
            />
          </section>

          {/* §04 ENGAGEMENT SIGNALS =========================================== */}
          <section id="signals" className="mt-32">
            <SectionHead
              num="04"
              kicker="Signal Recognition · Embedded"
              title="Signals you must"
              italic="not misread."
              time="Throughout · pre-Bridge"
            />

            <p className="serif-prose text-ink/85">
              Three of the most common signals in discovery calls are
              routinely misinterpreted as problems. They are not. They are
              buying signals that require a specific response. Get any of
              these wrong and you trade a closeable conversation for an
              objection you created yourself.
            </p>

            <DataTable
              caption="Signal index · n = 1,247 cold-prospect calls"
              head={["Signal", "Lift vs baseline", "Conv. rate"]}
              rows={[
                [
                  "DIY language present",
                  <span key="1" className="tnum text-moss">+9.3 pts</span>,
                  <span key="2" className="tnum">71.2%</span>,
                ],
                [
                  "Confusion expressed",
                  <span key="3" className="tnum text-moss">×1.9 index</span>,
                  <span key="4" className="tnum">82.4%</span>,
                ],
                [
                  "Payment-plan question",
                  <span key="5" className="tnum text-moss">×2.4 index</span>,
                  <span key="6" className="tnum">88.6%</span>,
                ],
                [
                  "Baseline (all calls)",
                  <span key="7" className="tnum text-smoke">—</span>,
                  <span key="8" className="tnum text-smoke">61.9%</span>,
                ],
              ]}
            />

            <h3 className="font-display text-[1.5rem] mt-12 mb-2 text-ink">
              DIY language · <span className="display-italic">engagement, not rejection.</span>
            </h3>
            <p className="smallcaps text-smoke mb-4">
              Prospect says: &ldquo;I&apos;ve been managing this myself.&rdquo;
              / &ldquo;I have my own spreadsheet.&rdquo; / &ldquo;I&apos;ve
              been doing conversions on my own.&rdquo;
            </p>
            <NoteList
              items={[
                <>
                  <strong className="text-ink">What it means.</strong>{" "}
                  Prospects who use DIY language convert at 71.2%, 9.3 points
                  above the overall rate. They are not dismissing you. They
                  are telling you they&apos;ve hit the wall on a problem they
                  know is bigger than their spreadsheet.
                </>,
                <>
                  <strong className="text-ink">What to do.</strong> Lean in.
                  Increase emphasis on combinatorial complexity — IRMAA
                  interactions, beneficiary mechanics, bracket optimization
                  across multiple years. Raise family legacy stakes. Do{" "}
                  <em>not</em> back off, and do not treat this as an
                  objection.
                </>,
              ]}
            />

            <h3 className="font-display text-[1.5rem] mt-12 mb-2 text-ink">
              Confusion · <span className="display-italic">a buying signal.</span>
            </h3>
            <p className="smallcaps text-smoke mb-4">
              Prospect says: &ldquo;I don&apos;t understand how all of this
              fits together.&rdquo; / &ldquo;This is more complicated than I
              thought.&rdquo;
            </p>
            <NoteList
              items={[
                <>
                  <strong className="text-ink">What it means.</strong>{" "}
                  Confused prospects are nearly twice as likely to buy.
                  Confusion is the recognition that drives the purchase —
                  they have just confirmed they need what you offer.
                </>,
                <>
                  <strong className="text-ink">What to do.</strong> Do not
                  rush to simplify. Acknowledge the complexity briefly, then
                  frame it as exactly why the methodology exists:{" "}
                  <em>
                    &ldquo;That&apos;s the combinatorial problem, and
                    it&apos;s precisely what the plan solves.&rdquo;
                  </em>
                </>,
              ]}
            />

            <h3 className="font-display text-[1.5rem] mt-12 mb-2 text-ink">
              Payment-plan questions ·{" "}
              <span className="display-italic">they&apos;ve already decided.</span>
            </h3>
            <p className="smallcaps text-smoke mb-4">
              Prospect says: &ldquo;Do you offer payment plans?&rdquo; /
              &ldquo;Can I spread this out?&rdquo; / &ldquo;Is there a way to
              pay in installments?&rdquo;
            </p>
            <NoteList
              items={[
                <>
                  <strong className="text-ink">What it means.</strong>{" "}
                  Convert at 2.4× the baseline rate. This is not a price
                  objection. It is logistics. They have mentally committed
                  and are solving for how to execute.
                </>,
                <>
                  <strong className="text-ink">What to do.</strong> Treat it
                  as a close trigger. Answer the logistics question briefly
                  and move directly to the deposit ask. Do not reopen the
                  value conversation — it is already won.
                </>,
              ]}
              tone="warn"
            />

            <PullQuote>
              The most expensive mistake in this section is to apologize for
              complexity instead of pricing it.
            </PullQuote>
          </section>

          {/* §05 MEETING FLOW ================================================ */}
          <section id="meeting-flow" className="mt-32">
            <SectionHead
              num="05"
              kicker="Meeting Flow · Quick Reference"
              title="The six-stop"
              italic="conversation."
              time="Target · 45–55 min"
            />

            <p className="serif-prose text-ink/85">
              Once a prospect is on screen, the meeting moves through six
              stops in a deliberate sequence. Each has a specific job.
              Skipping or reordering them is the most common cause of
              meetings that drift.
            </p>

            <StepsTable
              rows={[
                {
                  num: "01",
                  title: "Lifetime Tax Projection",
                  time: "8–10 MIN",
                  note: "Their numbers, run live. Ownership begins here.",
                },
                {
                  num: "02",
                  title: "Engagement Signal Read",
                  time: "EMBEDDED",
                  note: "Read the room before delivering the bridge.",
                },
                {
                  num: "03",
                  title: "The Bridge",
                  time: "60 SEC",
                  note: "Verbal only — no new screen. Plants the timing argument.",
                },
                {
                  num: "04",
                  title: "Plan Walkthrough",
                  time: "12–15 MIN",
                  note: "Sample plan tour. Depth shown, not read.",
                },
                {
                  num: "05",
                  title: "The Window",
                  time: "7–8 MIN",
                  note: "Why timing matters. The five planning dependencies.",
                },
                {
                  num: "06",
                  title: "The Close",
                  time: "8–10 MIN",
                  note: "$42K data point. Cost-of-waiting. The ask.",
                },
              ]}
            />

            <p className="serif-prose text-ink/85 mt-4">
              The remainder of this manual walks each stop in detail.
            </p>
          </section>

          {/* §06 STOP 01 ====================================================== */}
          <section id="stop-01" className="mt-32">
            <SectionHead
              num="06"
              kicker="Stop 01 · Lifetime Tax Projection"
              title="Their numbers."
              italic="Their situation."
              time="Live model · 8–10 min"
            />

            <p className="serif-prose text-ink/85">
              Run the prospect&apos;s real qualified balance through the
              projection model on screen. This is the moment the conversation
              becomes personal — not a case study, not a generic illustration.
              The first moment of genuine ownership.
            </p>

            <NoteList
              items={[
                "Confirm their approximate balance before running the model.",
                "Walk the six elements in sequence — A through D land first, then E and F deliver the emotional weight.",
                <>
                  Let each number land before moving on.{" "}
                  <em>Silence is the tool.</em>
                </>,
              ]}
            />

            <h3 className="font-display text-[1.45rem] mt-12 mb-1 text-ink">
              A · Total Projected Taxes
            </h3>
            <p className="smallcaps text-smoke mb-3">
              Point to the lifetime tax figure — the red box.
            </p>
            <SayThis>
              &ldquo;This number right here — this is the government&apos;s
              share of what you&apos;ve built. Money you&apos;ve worked
              decades to accumulate that you&apos;ve never actually had full
              access to.&rdquo;{" "}
              <span className="not-italic smallcaps text-copper">
                [pause. let it land.]
              </span>
            </SayThis>

            <h3 className="font-display text-[1.45rem] mt-10 mb-1 text-ink">
              B · The RMD Column, Accelerating
            </h3>
            <p className="smallcaps text-smoke mb-3">
              Point to the RMD column in the projection table.
            </p>
            <SayThis>
              &ldquo;Notice how the RMD column accelerates. That&apos;s not a
              planning problem — that&apos;s a math problem. And it
              compounds, every year.&rdquo;
            </SayThis>

            <h3 className="font-display text-[1.45rem] mt-10 mb-1 text-ink">
              C · Estimated Tax Burden on Heirs
            </h3>
            <p className="smallcaps text-smoke mb-3">
              Navigate to <em>Impact on Your Heirs.</em> Point to the total
              tax burden.
            </p>
            <SayThis>
              &ldquo;This figure here — that&apos;s what your heirs pay.
              Under the ten-year rule, everything in this account has to come
              out within ten years of your passing. Which means your kids are
              paying these taxes during their peak earning years, stacked on
              top of their own income, in the highest brackets of their
              lives. It&apos;s the worst possible time for them to absorb
              it.&rdquo;
            </SayThis>

            <h3 className="font-display text-[1.45rem] mt-10 mb-1 text-ink">
              D · Client-Tier Savings
            </h3>
            <p className="smallcaps text-smoke mb-3">
              Reference 2,800 households specifically. Avoid generic
              averages.
            </p>
            <SayThis>
              &ldquo;This — this is the savings tier for households like
              yours. Across the roughly 2,800 plans we&apos;ve built, this is
              what someone in your position keeps in the family rather than
              sends to the IRS. Not a generic average. Your tier.&rdquo;
            </SayThis>

            <h3 className="font-display text-[1.45rem] mt-10 mb-1 text-ink">
              E · The &ldquo;most people&rdquo; line —{" "}
              <span className="display-italic">moved here on purpose.</span>
            </h3>
            <p className="serif-prose text-ink/85">
              Preserved from earlier revisions, but positioned after all four
              numbers have landed so it reads as a capstone, not a
              single-number reaction.
            </p>
            <SayThis>
              &ldquo;Most people have never seen these numbers.{" "}
              <em>Now you have.</em>&rdquo;
            </SayThis>

            <h3 className="font-display text-[1.45rem] mt-12 mb-1 text-ink">
              F · The Anchor Question
            </h3>
            <p className="smallcaps text-smoke mb-3">
              Hand the room back to the prospect.
            </p>
            <SayThis>
              &ldquo;What&apos;s going through your mind right now?&rdquo;
            </SayThis>
            <p className="serif-prose text-ink/85">
              This question does two things: it keeps the emotional weight in
              the room rather than rushing past it, and it tells you exactly
              how to deliver the bridge — via the regret-level cue table
              below.
            </p>

            <DataTable
              caption="Regret level · coaching cue"
              head={["Level", "What it looks like", "What to do"]}
              rows={[
                [
                  <span key="l1" className="text-ink">Level 1</span>,
                  "No articulation of consequences. Abstract concern, or silence.",
                  "Ask a named-beneficiary question before moving to the bridge: “You mentioned you have kids — do you know what their tax situation looks like if you don’t act on this?”",
                ],
                [
                  <span key="l2" className="text-ink">Level 2</span>,
                  "Senses danger but stays abstract. “I know it’s a lot of money.”",
                  "Press into a spouse or legacy scenario: “What does your wife’s situation look like if something happens to you before this is converted?”",
                ],
                [
                  <span key="l3" className="text-ink">Level 3</span>,
                  "Names a specific person and a specific consequence. Feels the weight.",
                  <span key="3a" className="text-ink/90">
                    Note it. Reinforce it. Move to the bridge with{" "}
                    <em>full</em> emotional momentum intact. Do not let this
                    moment pass without acknowledging it.
                  </span>,
                ],
              ]}
            />

            <p className="serif-prose text-ink/85 mt-2">
              <span className="text-copper smallcaps">Target — </span> Level
              3 regret produces a 79% buyer rate. It is reached in only 6.2%
              of calls without deliberate effort. Your job is to{" "}
              <em>build it,</em> not wait for it.
            </p>

            <h3 className="font-display text-[1.45rem] mt-12 mb-1 text-ink">
              Prevention framing · language cue
            </h3>
            <p className="serif-prose text-ink/85">
              Default to protection language throughout Stop 01:{" "}
              <em>protect your family&apos;s inheritance, avoid the
              widow&apos;s trap, make sure she isn&apos;t left with this
              alone.</em>{" "}
              Prevention-focused prospects convert at 7.4 points higher than
              promotion-focused ones. <em>Protect what you&apos;ve built</em>{" "}
              outperforms <em>optimize your outcome.</em>
            </p>

            <WhyItWorks
              title="Why Stop 01 works"
              items={[
                <>
                  Silence after the number is not dead air — it&apos;s the
                  calculator doing its job. Do not fill it.
                </>,
                <>
                  &ldquo;Their number&rdquo; creates ownership. A prospect
                  who has seen their own lifetime tax figure is emotionally
                  activated, ready for the reframe that follows.
                </>,
                <>
                  The RMD acceleration in the seventies consistently lands
                  hard. Point to it explicitly.
                </>,
                <>
                  Fear is fuel. Do not rush to relief. Let the emotional
                  weight build before moving to the bridge.
                </>,
              ]}
            />
          </section>

          {/* §07 BRIDGE ======================================================= */}
          <section id="bridge" className="mt-32">
            <SectionHead
              num="07"
              kicker="The Bridge · Verbal Only"
              title="No new screen,"
              italic="no slide."
              time="60 sec · between Stops 01 & 02"
            />

            <p className="serif-prose text-ink/85">
              This is the most strategically important sixty seconds of the
              entire presentation. The prospect has just seen their lifetime
              tax number and is emotionally activated. The bridge plants the
              timing argument at the moment of maximum emotional impact —
              before they have time to intellectually retreat to{" "}
              <em>&ldquo;I&apos;ll think about it later.&rdquo;</em>
            </p>

            <SayThis label="Say this exactly" variant="ink">
              &ldquo;That number you&apos;re looking at{" "}
              <em>doesn&apos;t stay still.</em> Every year without a plan,
              the balance grows and the window to fight it gets shorter. And
              here&apos;s something most people don&apos;t consider — even a
              favorable shift in tax rates can&apos;t offset the combination
              of higher balances and a shortened time horizon. The math
              doesn&apos;t work in the direction most people assume. Let me
              show you what a plan looks like — and specifically what
              happens to the opportunity when the planning window gets
              compressed.&rdquo;
            </SayThis>

            <WhyItWorks
              items={[
                <>
                  &ldquo;That number doesn&apos;t stay still&rdquo; is a loss
                  frame applied at the moment of highest emotional
                  activation. It reframes the lifetime tax figure from
                  something shocking-but-distant to something{" "}
                  <em>actively growing right now.</em>
                </>,
                <>
                  The tax-rate objection pre-emption is important. &ldquo;I&apos;m
                  waiting to see if rates change&rdquo; is one of the most
                  common intellectual retreats. Addressing it here removes
                  it before it forms.
                </>,
                <>
                  &ldquo;Planning window gets compressed&rdquo; plants the
                  seed for Stop 05 without delivering the argument yet.
                  Curiosity is better than information at this moment.
                </>,
                <>
                  Keep the bridge to sixty seconds. Do not elaborate. Click
                  to Stop 02 immediately after.
                </>,
              ]}
            />

            <p className="smallcaps text-oxblood mt-6">Important.</p>
            <NoteList
              tone="warn"
              items={[
                <>
                  The tax-rate argument <em>lives here</em> as a pre-emption,
                  not a recurring theme. Raise it once and move on. Do not
                  invite a debate about tax policy. The bridge is a pivot,
                  not a counter-argument.
                </>,
              ]}
            />
          </section>

          {/* §08 STOP 02 ====================================================== */}
          <section id="stop-02" className="mt-32">
            <SectionHead
              num="08"
              kicker="Stop 02 · Plan Walkthrough"
              title="What a plan"
              italic="looks like."
              time="Sample plan · 12–15 min"
            />

            <p className="serif-prose text-ink/85">
              Show the depth and precision of a Hasan Strategic Allocation
              Plan through a real client example. Walk Sections 01–05
              efficiently. Spend real time on Section 06 — The Window — as
              the emotional climax. The argument closes on the dollar
              figures and the $42K data point.
            </p>

            <NoteList
              items={[
                <>
                  Do <em>not</em> read every section in detail. The goal is
                  to create the feeling of depth and credibility, not to
                  explain every data point.
                </>,
                "Walk through 01–05 in 4–5 minutes total. Spend 7–8 minutes on Section 06.",
                "Section 06 is the argument. The rest is the evidence that Hasan does thorough work.",
              ]}
            />

            <h3 className="font-display text-[1.5rem] mt-10 mb-3 text-ink">
              Sections 01–05 · walk through efficiently.
            </h3>
            <p className="smallcaps text-smoke mb-3">Depth shown, not read.</p>

            <DataTable
              head={["§", "Section", "What you say"]}
              rows={[
                [
                  <span key="01" className="font-mono tabular-nums text-copper">
                    01
                  </span>,
                  "Client Profile",
                  "“Every assumption is documented upfront — nothing is hidden. The client is in their early sixties, $1.8M in qualified assets, 6% return assumption. Everything that follows flows from these inputs.”",
                ],
                [
                  <span key="02" className="font-mono tabular-nums text-copper">
                    02
                  </span>,
                  "No-Conversion Baseline",
                  "“First we project what happens if they do nothing. $2.94 million in projected lifetime taxes, including what their heirs pay. This is the baseline everything else is measured against.”",
                ],
                [
                  <span key="03" className="font-mono tabular-nums text-copper">
                    03
                  </span>,
                  "Strategy A — Current Bracket",
                  "“Converting at the current bracket saves $521,000 lifetime. Better, but incomplete — the IRA isn’t fully converted.”",
                ],
                [
                  <span key="04" className="font-mono tabular-nums text-copper">
                    04
                  </span>,
                  "Strategy B — Maximum Protection",
                  "“Full conversion accelerated across the gap years. Saves $1.18 million lifetime. The IRA is fully out of the system before RMDs begin.”",
                ],
                [
                  <span key="05" className="font-mono tabular-nums text-copper">
                    05
                  </span>,
                  "Medicare / IRMAA",
                  "“We model IRMAA precisely — we don’t cap conversions to avoid surcharges. The tax benefit of accelerated conversion is typically tens or hundreds of thousands. The IRMAA premium is a few thousand. Letting the tail wag the dog doesn’t survive the math.”",
                ],
              ]}
            />

            <h3 className="font-display text-[1.7rem] mt-14 mb-1 text-ink">
              Section 06 · The Window —{" "}
              <span className="display-italic">the timing reframe.</span>
            </h3>
            <p className="smallcaps text-smoke mb-4">
              Spend real time here · 7–8 minutes
            </p>

            <p className="serif-prose text-ink/85">
              The most important section of the entire presentation. The
              argument is not about dollar amounts — it is about{" "}
              <em>what gets compressed</em> when the planning window
              shrinks.
            </p>

            <SayThis label="Core reframe — say this">
              &ldquo;December 31st is the conversion deadline. But it is not
              the planning deadline. Those are two completely different
              things. The plan you receive in May and the plan you receive in
              November are the same plan. What&apos;s different is everything
              surrounding it — and everything surrounding it is what makes
              the plan actually work.&rdquo;
            </SayThis>

            <h4 className="font-display text-[1.2rem] mt-8 mb-2 text-ink">
              The five planning dependencies ·{" "}
              <span className="display-italic">use conversationally.</span>
            </h4>
            <p className="serif-prose text-smoke text-[0.95rem]">
              Reference two or three items that connect to what the prospect
              has already mentioned. <em>Do not read this list aloud.</em>
              These are your knowledge base, not a script.
            </p>

            <DataTable
              head={["#", "Dependency", "Why it compresses the window"]}
              rows={[
                [
                  <span key="d1" className="font-mono tabular-nums text-copper">
                    01
                  </span>,
                  "Your CPA",
                  "Tax-prep season runs February through April. Coordinating estimated payments, withholding strategy, and conversion timing requires reaching your CPA before they’re buried in year-end filings. Engage in Q4 and you compete for bandwidth with every other client they have.",
                ],
                [
                  <span key="d2" className="font-mono tabular-nums text-copper">
                    02
                  </span>,
                  "Your Investment Advisor",
                  "The specific holdings selected for conversion matter. Identifying the right positions requires time to evaluate across the portfolio — not a rushed December decision when markets and year-end tax positions are already in motion.",
                ],
                [
                  <span key="d3" className="font-mono tabular-nums text-copper">
                    03
                  </span>,
                  "Your Estate Attorney",
                  "Converting changes the character of assets from pre-tax to post-tax, which affects how beneficiaries inherit and whether existing estate documents still reflect your intent. An estate attorney needs lead time to review and update accordingly.",
                ],
                [
                  <span key="d4" className="font-mono tabular-nums text-copper">
                    04
                  </span>,
                  "Your Spouse",
                  <>
                    The conversion strategy affects both of you, including
                    what happens if one of you passes. The sooner your
                    spouse is fully in the picture, the more confidently
                    the strategy gets executed as a team.{" "}
                    <em>This is where the widow&apos;s tax-trap protection actually begins.</em>
                  </>,
                ],
                [
                  <span key="d5" className="font-mono tabular-nums text-copper">
                    05
                  </span>,
                  "Conversion Timing Across the Year",
                  "The right moment to convert specific holdings isn’t December by default. It’s whenever market conditions and tax positioning align. That opportunity only exists if there’s a full year to monitor and act, not a few weeks.",
                ],
              ]}
            />

            <SayThis label="The $42K data point" variant="ink">
              &ldquo;Across thousands of household engagements, our research
              shows that conversions executed with the benefit of a full
              planning year behind them can add as much as{" "}
              <em>forty-two thousand dollars of value for every million
              dollars in the IRA.</em> Not because the plan changes — because
              everything around it has time to work.&rdquo;{" "}
              <span className="not-italic smallcaps text-copper">
                [pause. for a $1.8M client, the implication is as much as $76K. do not state this — let them do the math.]
              </span>
            </SayThis>

            <PullQuote>
              The plan you get is the same plan. The window you have to
              execute it well is not.
            </PullQuote>
          </section>

          {/* §09 STOP 03 — THE CLOSE ========================================= */}
          <section id="stop-03" className="mt-32">
            <SectionHead
              num="09"
              kicker="Stop 03 · The Close"
              title="Dollar figures"
              italic="close the argument."
              time="8–10 min · final stop"
            />

            <p className="serif-prose text-ink/85">
              By this point the prospect has seen their numbers, watched a
              real plan walk past, and understood why the planning window
              compresses. The close is not a new argument — it is the
              translation of everything they&apos;ve already heard into a
              single decision they can make today.
            </p>

            <SayThis label="Dollar figures · close the argument" variant="ink">
              &ldquo;For this client, $1.8M IRA — waiting just one year cost
              ninety-two thousand dollars in foregone lifetime savings.
              Waiting five years cost four hundred and ninety-one thousand.
              The window narrows every year as RMDs approach and bracket
              optimization gets constrained.&rdquo;{" "}
              <span className="not-italic smallcaps text-copper">[pause.]</span>{" "}
              &ldquo;The plan you get is the same plan. The window you have
              to execute it well is not.&rdquo;
            </SayThis>

            <h3 className="font-display text-[1.3rem] mt-10 mb-3 text-ink">
              Ready to enroll · the ask, Path 01 or Path 03.
            </h3>
            <SayThis>
              &ldquo;The fifteen-hundred-dollar deposit starts everything.
              We&apos;ll confirm your data-gathering appointment before I let
              you go, and you&apos;ll have an email from us within the hour
              with next steps. Want to get that started now?&rdquo;
            </SayThis>

            <h3 className="font-display text-[1.3rem] mt-10 mb-3 text-ink">
              Three scripted objection responses ·{" "}
              <span className="display-italic">100% buyer-call resolution.</span>
            </h3>
            <p className="serif-prose text-ink/85">
              Know these before you&apos;re on a call. These are the three
              objections that separate buyer calls from non-buyer calls in
              the data.
            </p>

            <SayThis label='"I need to think about it" · timing objection'>
              &ldquo;Of course. Can I ask — what specifically would you like
              to think through? I&apos;d rather answer it now than have you
              carry it. If the hesitation is about timing — I understand,
              and that&apos;s actually the one thing I&apos;d want to make
              sure you have the full picture on. The planning deadline and
              the conversion deadline are two different dates. Let me show
              you what I mean.&rdquo;
            </SayThis>

            <SayThis label='"I&apos;m already doing this myself" · DIY objection'>
              &ldquo;That&apos;s actually one of the strongest signals I see
              — the people who get the most value from this have already
              done the work to understand conversions, which means you know
              exactly how many variables are interacting. The question
              isn&apos;t whether you can do the math — it&apos;s whether
              you&apos;re confident you&apos;re not missing something in
              the interaction between IRMAA surcharges, your Social
              Security timing, your spouse&apos;s scenario, and bracket
              optimization across the next ten years. That combinatorial
              problem is what the plan solves.&rdquo;
            </SayThis>
          </section>

          {/* §10 OBJECTION PROTOCOLS ========================================= */}
          <section id="objections" className="mt-32">
            <SectionHead
              num="10"
              kicker="Objection Protocols · As Needed"
              title="The first objection is"
              italic="the critical moment."
              time="Anywhere · pre-close"
            />

            <p className="serif-prose text-ink/85">
              When an objection surfaces at any point in the call, treat it
              as <em>the most important moment in the conversation.</em>{" "}
              Research across 15,728 calls shows a 90% versus 25%
              second-objection resolution rate when the first objection is
              resolved versus not. That sixty-five-point gap means the first
              objection is functionally determinative of the call outcome.
            </p>

            <DataTable
              caption="First-objection resolution · second-objection lift"
              head={[
                "First objection resolved",
                "Second objection conv.",
                "Outcome",
              ]}
              rows={[
                [
                  <span key="r1" className="text-moss">Yes — fully</span>,
                  <span key="r2" className="tnum">90.1%</span>,
                  <span key="r3">Closeable in the same call</span>,
                ],
                [
                  <span key="r4" className="text-oxblood">No / partial</span>,
                  <span key="r5" className="tnum">25.4%</span>,
                  <span key="r6">Conversation effectively over</span>,
                ],
              ]}
            />

            <NoteList
              tone="warn"
              items={[
                <>
                  Do not <em>minimize.</em> Do not <em>defer.</em> Do not{" "}
                  <em>partially address.</em>
                </>,
                <>
                  Miss the first objection and the call is almost certainly
                  lost — not because the prospect said no, but because every
                  subsequent objection will be twice as hard to resolve.
                </>,
              ]}
            />
          </section>

          {/* §11 DRIFT RECOVERY =============================================== */}
          <section id="drift" className="mt-32">
            <SectionHead
              num="11"
              kicker="Drift Recovery · Almost Buyer Close"
              title="The call that drifts"
              italic="without a close."
              time="Final 5 minutes"
            />

            <p className="serif-prose text-ink/85">
              The Almost Buyer is the highest-value non-buyer segment and
              the most avoidable loss in the sales process. This is a
              prospect who resolved most objections, showed consistent
              buying signals, engaged with financial specifics — and then
              the call simply ended without a close. No deal-death moment.
              No explicit objection. Just a drift to goodbye.
            </p>

            <DataTable
              caption="Almost Buyer · signal index"
              head={["Signal", "Almost Buyer", "Other Non-Buyers", "Buyers"]}
              rows={[
                [
                  "Re-engagement signals present",
                  <span key="ab1" className="tnum">95.5%</span>,
                  <span key="ab2" className="tnum text-smoke">79.8%</span>,
                  <span key="ab3" className="tnum text-moss">85.1%</span>,
                ],
                [
                  "Objection resolution rate",
                  <span key="ab4" className="tnum">77.1%</span>,
                  <span key="ab5" className="tnum text-smoke">52.4%</span>,
                  <span key="ab6" className="tnum text-moss">87.1%</span>,
                ],
                [
                  "Avg objections raised",
                  <span key="ab7" className="tnum">2.18</span>,
                  <span key="ab8" className="tnum text-smoke">2.05</span>,
                  <span key="ab9" className="tnum text-moss">1.59</span>,
                ],
              ]}
            />

            <h3 className="font-display text-[1.3rem] mt-10 mb-2 text-ink">
              How to recognize an Almost Buyer
            </h3>
            <NoteList
              items={[
                "In the final five minutes of the call, ask yourself —",
                "Have they raised objections that were successfully resolved?",
                "Are they still asking questions and engaging with financial details?",
                <>
                  Have I heard any of the core buying signals — &ldquo;makes
                  sense,&rdquo; &ldquo;I can see that,&rdquo; &ldquo;that&apos;s
                  interesting,&rdquo; payment-plan question, confusion about
                  next steps?
                </>,
                "Is there no active objection in the room right now?",
                <>
                  If the answer is <em>yes</em> and you have not asked for
                  the close, you are in an Almost Buyer call.{" "}
                  <strong>Ask now.</strong>
                </>,
              ]}
            />

            <SayThis label="The Almost Buyer close" variant="ink">
              &ldquo;Based on everything we&apos;ve covered today —{" "}
              <em>does this feel like the right direction for you?</em>&rdquo;{" "}
              <span className="not-italic smallcaps text-copper">
                [pause. let them answer. do not fill the silence.]
              </span>
            </SayThis>

            <SayThisGrid>
              <SayThisCard label="If yes or positive">
                &ldquo;Then let&apos;s get started. The fifteen-hundred-dollar
                deposit begins everything, and I&apos;ll confirm your
                data-gathering appointment before we hang up. Want to do
                that now?&rdquo;
              </SayThisCard>
              <SayThisCard label="If still uncertain">
                &ldquo;Of course. What&apos;s the one thing you&apos;d want
                to be sure about before moving forward?&rdquo;{" "}
                <span className="not-italic smallcaps text-copper">
                  [surface the specific hesitation, address it once, then ask again.]
                </span>
              </SayThisCard>
            </SayThisGrid>
          </section>

          {/* §12 THREE PATHS ================================================== */}
          <section id="paths" className="mt-32">
            <SectionHead
              num="12"
              kicker="Three Paths · Decision Frame"
              title="Path 01, 02, or 03"
              italic="— never end without one."
              time="Close · structure"
            />

            <p className="serif-prose text-ink/85">
              Every meeting ends in one of three paths. Anchor to Path 01.
              Reinforce the timing argument in Path 02. Actively offer Path
              03 if signals are present during the meeting. Close with a
              scheduled next step, deposit, or follow-up date — before
              ending the call.
            </p>

            {/* Path 01 */}
            <h3 className="font-display text-[1.5rem] mt-10 mb-1 text-ink">
              Path 01 · Recommended ·{" "}
              <span className="display-italic">Get your Strategic Allocation Plan.</span>
            </h3>
            <SayThis label="Present this">
              &ldquo;The way we get started is simple. A fifteen-hundred
              dollar deposit begins the process — your full discovery, data
              gathering, and the Plan itself. The balance is due after Data
              Gathering, once we&apos;ve confirmed you&apos;re a strong
              candidate. And our seven-hundred-fifty-thousand dollar written
              refund offer applies — if we can&apos;t show you a documented
              path to avoid at least seven hundred fifty thousand in
              lifetime taxes, you pay nothing. Full refund. The risk is
              entirely ours.&rdquo;
            </SayThis>
            <p className="smallcaps text-smoke mt-2">
              What&apos;s included · comprehensive discovery and data
              gathering · year-by-year conversion schedule · side-by-side ·
              no-conversion vs maximum-protection strategy · Medicare /
              IRMAA impact modeled · projected lifetime tax savings
              documented in writing · $750,000 written refund offer ·
              annual reviews.
            </p>

            <NoteList
              items={[
                <>
                  The refund offer is a strong asset in confident calls
                  where the prospect is engaged and moving toward Yes. Lead
                  with it in those calls.
                </>,
                <>
                  Do not over-deploy in hesitant prospects. Calls where the
                  guarantee is the central focus show lower conversion
                  rates, not because the offer is weak but because the
                  prospect is uncertain and you&apos;re trying to overcome
                  rather than confirm a decision.
                </>,
                <>
                  <em>Rule of thumb.</em> State it once, clearly, as part of
                  the Path 01 presentation. If a prospect circles back to
                  the guarantee repeatedly, surface the underlying
                  hesitation rather than reinforcing the guarantee.
                </>,
              ]}
            />

            {/* Path 02 */}
            <h3 className="font-display text-[1.5rem] mt-12 mb-1 text-ink">
              Path 02 · Follow-Up ·{" "}
              <span className="display-italic">Schedule with the spouse on the line.</span>
            </h3>
            <SayThis label="Present this">
              &ldquo;If you&apos;d like to bring your spouse into the
              conversation, or work through remaining questions, let&apos;s
              schedule a dedicated follow-up. But I want to be honest with
              you about timing. Your CPA, your investment advisor, your
              estate attorney — everyone&apos;s calendar fills from the back
              of the year forward. A follow-up scheduled now still gives
              you the full benefit of the planning year. A follow-up
              scheduled in the fall does not. Let&apos;s put a specific
              date on the calendar before we hang up. What does your
              schedule look like in the next two weeks?&rdquo;
            </SayThis>
            <NoteList
              items={[
                <>
                  The timing note is <em>built into</em> the Path 02
                  presentation — it is not an add-on after they choose it.
                  Deliver it as part of how Path 02 works, not as a response
                  to their hesitation.
                </>,
                <>
                  <em>Never leave Path 02 open-ended.</em>{" "}
                  &ldquo;Let&apos;s reconnect soon&rdquo; is not a next
                  step. A specific date is.
                </>,
                <>
                  Confirm the date out loud before ending the call: &ldquo;So
                  we&apos;re scheduled for [day/time]. I&apos;ll send a
                  calendar hold right now.&rdquo;
                </>,
              ]}
            />

            {/* Path 03 */}
            <h3 className="font-display text-[1.5rem] mt-12 mb-1 text-ink">
              Path 03 · Continuity Engagement ·{" "}
              <span className="display-italic">By invitation only — if 3+ signals.</span>
            </h3>
            <p className="serif-prose text-ink/85">
              Listen throughout the meeting for the following signals. If
              three or more are present, Path 03 should be{" "}
              <em>actively offered</em> — not left as a passive option.
            </p>

            <DataTable
              head={["Signal", "What to listen for"]}
              rows={[
                [
                  "Risk aversion",
                  "“I just want to get this right.” / “I’m afraid of making a mistake.” / “This stuff is complicated.”",
                ],
                [
                  "Delegator personality",
                  "“I’d rather have someone watching this.” / “I’m not a numbers person.” / “My advisor handles most of that.”",
                ],
                [
                  "Market-timing concern",
                  "“Should I wait for a pullback?” / “I don’t want to convert at the wrong time.” / “Markets seem high.”",
                ],
                [
                  "Spouse-confidence gap",
                  "“My wife doesn’t follow this stuff.” / “If something happened to me, she’d need help.” / “I handle all the finances.”",
                ],
                [
                  "Complex financial structure",
                  "Multiple IRAs · large taxable accounts · real estate income · deferred comp · charitable strategies.",
                ],
              ]}
            />

            <SayThis label="If 3+ signals present · activate Path 03">
              &ldquo;Based on what you&apos;ve shared today —{" "}
              <em>there&apos;s actually a version of this</em> that includes
              ongoing coordination beyond the Plan, something I&apos;d want
              to walk you through. Can I show you what that looks
              like?&rdquo;
            </SayThis>

            <SayThis label="Continuity Engagement · pricing frame" variant="ink">
              &ldquo;Instead of fifteen thousand for the Plan alone, the
              Continuity Engagement is twenty-two thousand and includes the
              full Strategic Allocation Plan plus ongoing coordination plus
              conversion-timing intelligence. Year one is fifteen thousand
              upfront plus seven thousand per quarter for the remaining
              three quarters — thirty-six thousand total. Or twenty-eight
              thousand upfront if you want to lock in the full year and
              save eight thousand. After year one, the standard Continuity
              rate is twenty-eight hundred per quarter.{" "}
              <em>The plan is complete. From there it&apos;s protection
              and execution.</em>&rdquo;
            </SayThis>

            <NoteList
              items={[
                <>
                  <em>The value narrative.</em> They&apos;re getting the
                  Plan they came for plus the full ongoing service for less
                  than the Plan alone will soon cost. State this clearly.
                </>,
                <>
                  If they&apos;re not ready for Path 03, no problem —{" "}
                  <em>let&apos;s get the Plan started.</em> We can talk
                  about ongoing coordination once you&apos;ve seen your
                  plan. <strong>Do not lose the Path 01 close chasing
                  Path 03.</strong>
                </>,
                <>
                  One client. One decision. If signals are present, offer
                  Path 03. If they hesitate, close Path 01.{" "}
                  <em>Never end the meeting without one of the two.</em>
                </>,
              ]}
            />
          </section>

          {/* §13 POST-CLOSE ROADMAP =========================================== */}
          <section id="post-close" className="mt-32">
            <SectionHead
              num="13"
              kicker="Post-Close Roadmap · Six-Step Journey"
              title="Shown after"
              italic="enrollment only."
              time="3–4 min · post-close reassurance"
            />

            <p className="serif-prose text-ink/85">
              The Six-Step Journey is shown only to prospects who have{" "}
              <em>enrolled</em> or scheduled a confirmed follow-up.
              Post-close, it functions as reassurance:{" "}
              <em>here&apos;s exactly what you just signed up for.</em>{" "}
              Pre-close, it was an information hurdle. Moved here, it
              becomes a reward for deciding.
            </p>

            <SayThis label="Transition into the journey · say this">
              &ldquo;Let me show you exactly what happens next — six steps,
              beginning to end. You should know precisely what you&apos;ve
              signed up for.&rdquo;
            </SayThis>

            <DataTable
              caption="The six steps · what happens after enrollment"
              head={["#", "Step", "What happens"]}
              rows={[
                [
                  <span key="s1" className="font-mono tabular-nums text-copper">
                    01
                  </span>,
                  "Discovery Consult",
                  "We get to know your complete financial picture. Most clients arrive thinking they know the answer, and leave realizing the real opportunity is bigger than they thought.",
                ],
                [
                  <span key="s2" className="font-mono tabular-nums text-copper">
                    02
                  </span>,
                  "Data Gathering",
                  "Every income source, every account, every variable. CPA, investment advisor, and estate picture all coordinated from this point forward. This is where a full planning year pays dividends.",
                ],
                [
                  <span key="s3" className="font-mono tabular-nums text-copper">
                    03
                  </span>,
                  "Preliminary Analysis",
                  "Your Senior Strategist presents initial findings. For most clients, this is the “Ah-ha” moment — when the numbers hit home and the urgency becomes undeniable.",
                ],
                [
                  <span key="s4" className="font-mono tabular-nums text-copper">
                    04
                  </span>,
                  "Strategic Allocation Plan",
                  "Your personalized Plan delivered — every variable modeled, every recommendation documented in writing. Backed by the $750,000 written refund offer.",
                ],
                [
                  <span key="s5" className="font-mono tabular-nums text-copper">
                    05
                  </span>,
                  "Implementation",
                  "Step-by-step action list with specific dollar amounts. Coordination with your CPA and existing advisors. No guessing. No ambiguity.",
                ],
                [
                  <span key="s6" className="font-mono tabular-nums text-copper">
                    06
                  </span>,
                  "Annual Review",
                  "Tax laws change. Life changes. Markets move. We stay with you, reviewing and updating your plan every year so it keeps delivering what it was designed to deliver.",
                ],
              ]}
            />

            <p className="serif-prose text-ink/85 italic">
              A prospect who has just said <em>yes</em> is in a completely
              different frame of mind than one still evaluating. Post-close,
              the journey now feels like a reward for committing —{" "}
              <em>here&apos;s what you&apos;ve just unlocked,</em> rather
              than a hurdle before the close.
            </p>

            <NoteList
              items={[
                "Keep the walkthrough brief — three to four minutes. The prospect has made a decision and wants to know next steps, not a detailed process explanation.",
              ]}
            />
          </section>

          {/* CLOSING ========================================================== */}
          <footer className="mt-40 mb-16 pt-10 border-t border-ash">
            <div className="flex items-baseline justify-between gap-6 mb-3">
              <span className="font-display text-[1.5rem] tracking-tightest text-ink">
                Hasan
              </span>
              <span className="smallcaps text-smoke">End of Manual</span>
            </div>
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-smoke/70 leading-relaxed">
              Hasan Consulting Group LLC · Field Manual Rev 5.1 · Apr 2026
              <br />
              Confidential. Distribution restricted to authorized internal
              personnel.
              <br />
              Planning-first · pure fiduciary · no AUM · $750,000 written
              refund offer.
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
