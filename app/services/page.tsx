import type { Metadata } from "next";
import { Reveal, Spotlight } from "../components/motion";
import { ArrowLink, Check, CtaBand, Em, PageHero, SectionHeader, WhatsAppButton } from "../components/ui";

export const metadata: Metadata = {
  title: "Services",
  description: "Websites, online stores, web apps, Android apps, WhatsApp bots and care plans for small South African businesses.",
  alternates: { canonical: "/services" },
};

const tiers = [
  {
    name: "Starter",
    price: "R950",
    for: "New or small businesses that need to be found.",
    points: ["One page, up to 6 sections", "WhatsApp button", "Google Business Profile set up free"],
  },
  {
    name: "Business",
    price: "R1,900",
    for: "Established businesses that want to look the part.",
    points: ["Up to 5 pages", "Enquiry form", "Your own domain and business email, first year included"],
    featured: true,
  },
  {
    name: "Store",
    price: "R3,500",
    for: "Anyone selling products, not just services.",
    points: ["Up to 30 products", "PayFast or Yoco card payments", "Delivery, stock and training for you"],
  },
];

const services = [
  {
    title: "Web applications & portals",
    plain: "A tool your staff log into every day — bookings, stock, quotes, clients. Built around how you already work.",
    who: "Businesses drowning in spreadsheets and paper.",
    price: "from R8,000",
  },
  {
    title: "Android apps",
    plain: "Your own app, built and published on the Google Play Store under your name.",
    who: "Businesses whose customers come back often.",
    price: "from R6,500",
  },
  {
    title: "AI & automation",
    plain: "WhatsApp bots that answer and book while you sleep. Quotes and invoices that write themselves.",
    who: "Owners who spend evenings on admin.",
    price: "from R950",
  },
  {
    title: "APIs & backends",
    plain: "The behind-the-scenes plumbing that connects your systems so information flows by itself.",
    who: "Businesses and agencies with systems that don’t talk.",
    price: "quoted",
  },
  {
    title: "Google, domain & email",
    plain: "Show up on Google Maps, own your .co.za name, and send email from your own address.",
    who: "Everyone. It’s how customers check you’re real.",
    price: "from R350",
  },
  {
    title: "Care & maintenance",
    plain: "We keep your site online, safe, backed up and up to date. Month to month.",
    who: "Anyone who would rather not think about it.",
    price: "from R150/mo",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        parts={["Everything a small business needs", { em: "to be found online." }]}
        lead="We start with a website, because that’s what most businesses need. When you’re ready for more, the same two developers build it."
      />

      <section className="pb-24 sm:pb-32">
        <div className="shell">
          <Reveal className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h2 className="text-h2 font-semibold">
              Websites <Em>— the main path</Em>
            </h2>
            <ArrowLink href="/pricing">Full price list</ArrowLink>
          </Reveal>
          <Spotlight className="grid gap-4 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 100}>
                <article className={`spot flex h-full flex-col rounded-[24px] border bg-surface p-8 ${tier.featured ? "border-gold/50" : "border-line"}`}>
                  <p className="text-caption uppercase tracking-[0.14em] text-gold">{tier.name}</p>
                  <p className="mt-5 text-[3rem] font-semibold leading-none tracking-[-0.04em] tabular-nums">{tier.price}</p>
                  <p className="mt-4 text-small text-muted">{tier.for}</p>
                  <ul className="mt-8 grid flex-1 gap-3 border-t border-line pt-6">
                    {tier.points.map((p) => (
                      <li key={p} className="flex gap-3 text-small">
                        <Check className="mt-1" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton
                    message={`Hi Malangeni Tech Guild, I'm interested in the ${tier.name} website (${tier.price}).`}
                    variant={tier.featured ? "gold" : "ghost"}
                    className="mt-8"
                  >
                    Ask about {tier.name}
                  </WhatsAppButton>
                </article>
              </Reveal>
            ))}
          </Spotlight>
        </div>
      </section>

      <section className="section-y border-t border-line">
        <div className="shell">
          <SectionHeader
            eyebrow="When you’re ready for more"
            title={
              <>
                Systems, apps and bots. <Em>Plain words, real prices.</Em>
              </>
            }
          />
          <Reveal as="ul" className="mt-16 border-t border-line">
            {services.map((s, i) => (
              <li key={s.title} className="group grid gap-4 border-b border-line py-10 transition-colors hover:bg-surface/50 md:grid-cols-[4rem_1fr_1.2fr_9rem] md:gap-8 md:px-4">
                <span className="font-serif text-[1.75rem] italic leading-none text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-[1.375rem] font-semibold tracking-tight transition-colors group-hover:text-gold-bright">{s.title}</h3>
                <div>
                  <p className="text-small text-text/85">{s.plain}</p>
                  <p className="mt-2 text-caption text-muted">For: {s.who}</p>
                </div>
                <p className="text-small font-medium tabular-nums text-gold-bright md:text-right">{s.price}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Not sure what you need? <Em>Ask us.</Em>
          </>
        }
        lead="Describe your business in a WhatsApp message. We’ll tell you what will actually help — and what it costs."
      />
    </>
  );
}
