import Link from "next/link";
import BeforeAfter from "../BeforeAfter";
import { Phone } from "../devices";
import { LwaziAfter, LwaziBefore, LwaziMobileHome, LwaziMobileMenu, LwaziMobileOrder } from "../mocks/LwaziSite";
import { CountUp, Reveal } from "../motion";
import { ExampleNotice, WorkVisual } from "../sections";
import { CtaBand, Em, RiseText } from "../ui";
import type { WorkItem } from "../../lib/work";
import { MetaGrid, NextProject } from "./shared";

// Layout for a CLIENT project. Every name, number and quote below is an EXAMPLE.

const story = [
  {
    label: "The problem",
    body: "Lwazi cooked for weddings and memorials all along the coast, but online she was a Facebook flyer. People couldn’t see the menu or prices, so every enquiry started with “how much?” — and many never came back.",
  },
  {
    label: "What we built",
    body: "A five-page site with the full menu and starting prices, photos of real events, and an “Order on WhatsApp” button on every page. We set up her Google Business Profile so she shows on Maps, and gave her an email on her own domain.",
  },
  {
    label: "The result",
    body: "Customers now arrive knowing what they want and roughly what it costs. Lwazi spends her time quoting real jobs instead of answering the same questions.",
  },
];

const results = [
  { value: 3, suffix: "×", label: "more quote requests a month" },
  { value: 1, prefix: "#", label: "on Google Maps for “catering Scottburgh”" },
  { value: 12, label: "days from first message to live site" },
];

export default function ClientCase({ item }: { item: WorkItem }) {
  return (
    <>
      <ExampleNotice />

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 sm:pt-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(50rem 30rem at 50% 70%, ${item.accent}26, transparent 65%)` }}
          aria-hidden="true"
        />
        <div className="shell relative">
          <p className="eyebrow fade-in">Client project · {item.title}</p>
          <h1 className="mt-6 max-w-4xl text-display font-semibold">
            <RiseText parts={["From a Facebook flyer to", { em: "a full order book." }]} base={150} />
          </h1>
          <div className="fade-in mt-10" style={{ "--base": "550ms" } as React.CSSProperties}>
            <MetaGrid
              items={[
                { label: "Client", value: "Lwazi’s Kitchen, caterer" },
                { label: "Location", value: "Scottburgh, KZN" },
                { label: "What we built", value: "Business site · Google profile" },
                { label: "Live site", value: "lwaziskitchen.co.za" },
              ]}
            />
          </div>
        </div>

        <div className="shell relative mt-14">
          <div className="h-[230px] sm:h-[420px] lg:h-[650px]">
            <WorkVisual item={item} large />
          </div>
          <p className="mt-4 text-center text-caption text-muted">Hover over the site to scroll through it</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-y">
        <div className="shell grid gap-12 md:grid-cols-3 md:gap-10">
          {story.map((s, i) => (
            <Reveal key={s.label} delay={i * 110}>
              <p className="font-serif text-[1.75rem] italic leading-none" style={{ color: item.accent }}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-5 text-[1.375rem] font-semibold tracking-tight">{s.label}</h2>
              <p className="mt-4 text-small text-muted">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="border-y border-line">
        <div className="shell grid sm:grid-cols-3">
          {results.map((r, i) => (
            <Reveal key={r.label} delay={i * 100} className={`py-12 sm:py-16 ${i ? "border-t border-line sm:border-t-0 sm:border-l sm:pl-10" : ""}`}>
              <p className="text-[clamp(3rem,6vw,4.5rem)] font-semibold leading-none tracking-[-0.04em] text-gold-bright">
                <CountUp to={r.value} prefix={r.prefix ?? ""} />
                {r.suffix}
              </p>
              <p className="mt-4 max-w-[16rem] text-small text-muted">{r.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Before / after */}
      <section className="section-y">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Before and after</p>
            <h2 className="mt-5 text-h2 font-semibold">
              Same business. <Em>Very different first impression.</Em>
            </h2>
            <p className="mt-5 text-body text-muted">Drag the handle to compare.</p>
          </Reveal>
          <Reveal className="mt-12" delay={100}>
            <BeforeAfter before={<LwaziBefore />} after={<LwaziAfter />} />
          </Reveal>
        </div>
      </section>

      {/* Mobile screens */}
      <section className="section-y border-t border-line">
        <div className="shell">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">On the phone</p>
            <h2 className="mt-5 text-h2 font-semibold">
              Most of her customers <Em>never see a laptop.</Em>
            </h2>
            <p className="mt-5 text-body text-muted">So we designed for the phone first: menu, prices and WhatsApp, one thumb away.</p>
          </Reveal>
          <div className="mt-16 flex snap-x snap-mandatory justify-start gap-6 overflow-x-auto pb-6 sm:justify-center sm:overflow-visible">
            {[<LwaziMobileHome key="h" />, <LwaziMobileMenu key="m" />, <LwaziMobileOrder key="o" />].map((screen, i) => (
              <Reveal key={i} delay={i * 140} className={`shrink-0 snap-center ${i === 1 ? "sm:-translate-y-8" : ""}`}>
                <Phone className="[zoom:0.82] lg:[zoom:1]">{screen}</Phone>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-y border-t border-line">
        <Reveal className="shell max-w-4xl text-center">
          <p className="font-serif text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.2] tracking-tight">
            &ldquo;People used to ask me the price and disappear. Now they message me <span className="italic text-gold-bright">ready to book.</span>&rdquo;
          </p>
          <p className="mt-8 text-small text-muted">Lwazi M. · Owner, Lwazi’s Kitchen</p>
        </Reveal>
      </section>

      {/* What it cost */}
      <section className="pb-20 sm:pb-28">
        <div className="shell">
          <Reveal className="flex flex-col items-start justify-between gap-6 rounded-[24px] border border-line bg-surface p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="text-caption uppercase tracking-[0.14em] text-muted">What it cost</p>
              <p className="mt-3 text-h3 font-semibold">
                Business site <span className="text-gold-bright">R1,900</span> · Standard care <span className="text-gold-bright">R350/mo</span>
              </p>
            </div>
            <Link href="/pricing" className="btn-ghost link-arrow inline-flex items-center gap-2 rounded-full px-6 py-3 text-small font-medium">
              See all prices <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <NextProject current={item} />

      <CtaBand
        title={
          <>
            Want results <Em>like these?</Em>
          </>
        }
        lead="A Business site is R1,900, with your domain and email included for the first year. WhatsApp us and we’ll start with a chat."
      />
    </>
  );
}
