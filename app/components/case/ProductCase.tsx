import { IsitoloIcon, IsitoloReports, IsitoloSell, IsitoloStock, IsitoloToday, IsitoloWhatsApp } from "../mocks/Isitolo";
import { Reveal, Spotlight } from "../motion";
import { ExampleNotice, WorkVisual } from "../sections";
import StickyFeatures from "../StickyFeatures";
import { Badge, Check, CtaBand, Em, RiseText } from "../ui";
import type { WorkItem } from "../../lib/work";
import { MetaGrid, NextProject } from "./shared";

// Layout for a product WE build and run. Content below is an EXAMPLE.
const subdomain = "isitolo.mtgtech.co.za";

const features = [
  {
    title: "See today’s takings at a glance",
    body: "Open the app and the first thing you see is what you’ve made today, and how it compares to the rest of the week.",
    screen: <IsitoloToday />,
  },
  {
    title: "Record a sale in two taps",
    body: "Tap the products, tap Charge. Faster than writing it in the book — and it works without data.",
    screen: <IsitoloSell />,
  },
  {
    title: "Know what’s running low",
    body: "Stock goes down as you sell. When milk or sugar is nearly out, Isitolo tells you before your customers do.",
    screen: <IsitoloStock />,
  },
  {
    title: "A daily report on WhatsApp",
    body: "Every evening at 7, a short summary lands on WhatsApp: sales, best seller, what to re-order. No need to open the app.",
    screen: <IsitoloWhatsApp />,
  },
  {
    title: "Find out what actually makes money",
    body: "Monthly sales, profit and best sellers in plain numbers. Stock what sells, drop what doesn’t.",
    screen: <IsitoloReports />,
  },
];

const plain = [
  { title: "Works on a cheap phone", body: "Built for entry-level Android phones, not just the latest models." },
  { title: "Works without data", body: "Record sales offline. Everything syncs the next time you connect." },
  { title: "Backed up every night", body: "Lose your phone, keep your records. Log in on a new one and it’s all there." },
];

const pricing = [
  { name: "Free", price: "R0", points: ["1 shop", "Sales and stock", "Weekly WhatsApp report"] },
  { name: "Pro", price: "R99", suffix: "/month", points: ["Up to 3 shops", "Daily WhatsApp report", "Profit reports and export"], featured: true },
];

export default function ProductCase({ item }: { item: WorkItem }) {
  return (
    <>
      <ExampleNotice />

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 sm:pt-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(50rem 30rem at 75% 20%, ${item.accent}22, transparent 65%)` }}
          aria-hidden="true"
        />
        <div className="shell relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="fade-in flex items-center gap-4">
              <IsitoloIcon />
              <div>
                <p className="text-body font-semibold">{item.title}</p>
                <p className="text-caption text-muted">A Malangeni Tech Guild product</p>
              </div>
            </div>
            <h1 className="mt-8 text-display font-semibold">
              <RiseText parts={["Stock and sales for spaza shops,", { em: "on your phone." }]} base={150} />
            </h1>
            <p className="fade-in mt-6 max-w-lg text-body text-muted" style={{ "--base": "550ms" } as React.CSSProperties}>
              {item.summary}
            </p>
            <div className="fade-in mt-9 flex flex-wrap items-center gap-3" style={{ "--base": "700ms" } as React.CSSProperties}>
              {/* Swap these for real links when the product is live */}
              <span className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-small font-medium text-white" style={{ background: item.accent }}>
                Open {subdomain}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 text-small font-medium text-muted">
                Google Play · coming soon
              </span>
            </div>
          </div>
          <div className="h-[480px] sm:h-[560px]">
            <WorkVisual item={item} large />
          </div>
        </div>

        <div className="shell relative mt-16 pb-20 sm:pb-28">
          <Reveal>
            <MetaGrid
              items={[
                { label: "Platform", value: "Android + web" },
                { label: "Lives at", value: subdomain },
                { label: "Built by", value: "Malangeni Tech Guild" },
                { label: "Status", value: "In development" },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* Feature story */}
      <section className="border-t border-line py-16 sm:py-24">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">What it does</p>
            <h2 className="mt-5 text-h2 font-semibold">
              Everything in the stock book, <Em>without the book.</Em>
            </h2>
          </Reveal>
          <div className="mt-10">
            <StickyFeatures features={features} accent={item.accent} />
          </div>
        </div>
      </section>

      {/* Why we built it */}
      <section className="section-y border-t border-line">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <p className="eyebrow">Why we built it</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-serif text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.2] tracking-tight">
              Every spaza we walked into kept stock in a notebook. Owners knew roughly what sold — but not what they{" "}
              <span className="italic text-gold-bright">actually made.</span> We built Isitolo to answer that in one glance, on the phone
              they already have.
            </p>
          </Reveal>
        </div>
      </section>

      {/* In plain words */}
      <section className="section-y border-t border-line">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Under the hood, in plain words</p>
            <h2 className="mt-5 text-h2 font-semibold">
              Built for the real world, <Em>not a demo.</Em>
            </h2>
          </Reveal>
          <Spotlight className="mt-14 grid gap-4 md:grid-cols-3">
            {plain.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <article className="spot h-full rounded-[20px] border border-line bg-surface p-8">
                  <span className="block h-1 w-10 rounded-full" style={{ background: item.accent }} />
                  <h3 className="mt-6 text-[1.375rem] font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-small text-muted">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </Spotlight>
        </div>
      </section>

      {/* Product pricing */}
      <section className="section-y border-t border-line">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Pricing</p>
            <h2 className="mt-5 text-h2 font-semibold">
              Free to start. <Em>Cancel any time.</Em>
            </h2>
            <p className="mt-5 max-w-sm text-body text-muted">Same rule as everything we sell: the price is on the page.</p>
          </Reveal>
          <Spotlight className="grid gap-4 sm:grid-cols-2">
            {pricing.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <article className={`spot h-full rounded-[20px] border bg-surface p-8 ${p.featured ? "" : "border-line"}`} style={p.featured ? { borderColor: `${item.accent}88` } : undefined}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-body font-semibold">{p.name}</h3>
                    {p.featured ? <Badge>Most shops</Badge> : null}
                  </div>
                  <p className="mt-6 flex items-baseline gap-1">
                    <span className="text-[2.75rem] font-semibold leading-none tracking-[-0.03em]">{p.price}</span>
                    {p.suffix ? <span className="text-small text-muted">{p.suffix}</span> : null}
                  </p>
                  <ul className="mt-7 grid gap-3 border-t border-line pt-6">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-small">
                        <Check className="mt-1" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </Spotlight>
        </div>
      </section>

      <NextProject current={item} />

      <CtaBand
        title={
          <>
            Want an app like this <Em>for your business?</Em>
          </>
        }
        lead="Stock trackers start at R3,200. Tell us how your business runs and we’ll tell you what it would take."
      />
    </>
  );
}
