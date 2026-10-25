import Image from "next/image";
import { Browser, Phone } from "./components/devices";
import { IsitoloToday } from "./components/mocks/Isitolo";
import { LwaziDesktop } from "./components/mocks/LwaziSite";
import { Reveal, Spotlight } from "./components/motion";
import { CapabilityMarquee, OfferCard, Process, TrustStrip, WorkCard } from "./components/sections";
import { ArrowLink, CtaBand, Em, GhostButton, RiseText, SectionHeader, WhatsAppButton } from "./components/ui";
import { founders } from "./lib/founders";
import { contacts, site } from "./lib/site";
import { work } from "./lib/work";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  description: "Websites, online stores and apps for small South African businesses.",
  priceRange: "R350 – R8,000+",
  currenciesAccepted: "ZAR",
  telephone: `+${contacts[0].number}`,
  contactPoint: contacts.map((c) => ({
    "@type": "ContactPoint",
    telephone: `+${c.number}`,
    contactType: "customer service",
    name: c.name,
  })),
  address: {
    "@type": "PostalAddress",
    addressLocality: site.town,
    addressRegion: site.province,
    addressCountry: "ZA",
  },
  areaServed: { "@type": "Country", name: "South Africa" },
  founder: [
    { "@type": "Person", name: "Gcina Mbabe" },
    { "@type": "Person", name: "Khumbulani Gumede" },
  ],
};

const tiers = [
  { name: "Starter", price: "R950", detail: "One page. Customers see what you do and WhatsApp you." },
  { name: "Business", price: "R1,900", detail: "Up to 5 pages, enquiry form, your own domain and email." },
  { name: "Store", price: "R3,500", detail: "Sell online. Card payments, delivery and stock in one place." },
];

const otherServices = [
  { title: "Web apps & portals", plain: "A tool your staff log into every day.", price: "from R8,000" },
  { title: "Android apps", plain: "Your own app on the Google Play Store.", price: "from R6,500" },
  { title: "AI & automation", plain: "WhatsApp bots, automatic quotes and invoices.", price: "from R950" },
  { title: "Care & maintenance", plain: "Online, safe, backed up and up to date.", price: "from R150/mo" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <div className="aurora" aria-hidden="true" />
        <div className="hairline-grid" aria-hidden="true" />
        <div className="shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          <div>
            <p className="fade-in inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pr-4 pl-2 text-caption text-muted backdrop-blur">
              <span className="pulse-dot h-2 w-2 rounded-full bg-gold" />
              Umzinto, KZN · Taking new projects
            </p>
            <h1 className="mt-8 text-hero font-semibold">
              <RiseText parts={["Websites and apps for small", { em: "South African" }, "businesses."]} base={150} />
            </h1>
            <p className="fade-in mt-8 max-w-lg text-body text-muted sm:text-[1.1875rem]" style={{ "--base": "650ms" } as React.CSSProperties}>
              Registered, online and found on Google — from <span className="font-semibold text-text">R1,300</span>. Built by two
              developers in Umzinto, KZN.
            </p>
            <div className="fade-in mt-10 flex flex-wrap items-center gap-3" style={{ "--base": "800ms" } as React.CSSProperties}>
              <WhatsAppButton message="Hi Malangeni Tech Guild, I'm interested in a website for my business." />
              <GhostButton href="/pricing">See prices</GhostButton>
            </div>
          </div>

          {/* Device composition: a client site and one of our apps */}
          <div className="fade-in relative h-[330px] sm:h-[500px] lg:h-[560px]" style={{ "--base": "500ms" } as React.CSSProperties}>
            <div className="float-a absolute right-0 top-0 w-[900px] [zoom:0.38] sm:[zoom:0.64] lg:[zoom:0.5] xl:[zoom:0.6]">
              <Browser url="lwaziskitchen.co.za" viewHeight={620}>
                <LwaziDesktop />
              </Browser>
            </div>
            <div className="float-b absolute bottom-0 left-0 [zoom:0.5] sm:[zoom:0.72] lg:[zoom:0.68] xl:[zoom:0.74]">
              <Phone>
                <IsitoloToday />
              </Phone>
            </div>
          </div>
        </div>

        <div className="relative mt-20 sm:mt-28">
          <TrustStrip />
          <CapabilityMarquee />
        </div>
      </section>

      {/* Headline offer */}
      <section className="pb-24 sm:pb-36">
        <div className="shell">
          <OfferCard />
        </div>
      </section>

      {/* Services overview */}
      <section className="section-y border-t border-line">
        <div className="shell">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Services"
              title={
                <>
                  Most businesses need a website. <Em>We start there.</Em>
                </>
              }
              lead="Customers find you on Google, see what you do and WhatsApp you. Everything else we build grows from that."
            />
            <Reveal>
              <ArrowLink href="/services">All services</ArrowLink>
            </Reveal>
          </div>

          <Spotlight className="mt-16 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <Reveal className="h-full">
              <article className="spot flex h-full flex-col rounded-[24px] border border-line bg-surface p-8 sm:p-10">
                <p className="text-caption uppercase tracking-[0.14em] text-gold">The main path</p>
                <h3 className="mt-4 text-h2 font-semibold">Websites</h3>
                <p className="mt-4 max-w-md text-body text-muted">Fast on a phone, easy to find on Google, and yours to keep. We hand over the code.</p>
                <div className="mt-auto grid gap-px overflow-hidden rounded-2xl border border-line bg-line pt-0 sm:grid-cols-3">
                  {tiers.map((tier) => (
                    <div key={tier.name} className="bg-surface-2 p-5">
                      <p className="text-caption text-muted">{tier.name}</p>
                      <p className="mt-2 text-[1.75rem] font-semibold tracking-tight tabular-nums">{tier.price}</p>
                      <p className="mt-2 text-caption text-muted">{tier.detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {otherServices.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <article className="spot flex h-full items-center justify-between gap-4 rounded-[20px] border border-line bg-surface px-6 py-5">
                    <div>
                      <h3 className="text-small font-medium">{s.title}</h3>
                      <p className="mt-1 text-caption text-muted">{s.plain}</p>
                    </div>
                    <p className="shrink-0 text-small font-medium tabular-nums text-gold-bright">{s.price}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Spotlight>
        </div>
      </section>

      {/* Work */}
      <section className="section-y border-t border-line">
        <div className="shell">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Work"
              title={
                <>
                  Our own products, <Em>and our clients’.</Em>
                </>
              }
              lead="We build and run our own apps, each on its own subdomain, and we build for businesses like yours."
            />
            <Reveal>
              <ArrowLink href="/work">All work</ArrowLink>
            </Reveal>
          </div>
          <Spotlight className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {work.map((item, i) => (
              <WorkCard key={item.slug} item={item} delay={i * 120} />
            ))}
          </Spotlight>
        </div>
      </section>

      {/* Process */}
      <section className="section-y border-t border-line">
        <div className="shell">
          <SectionHeader
            eyebrow="How we work"
            title={
              <>
                Four steps. <Em>No surprises.</Em>
              </>
            }
          />
          <div className="mt-16">
            <Process />
          </div>
        </div>
      </section>

      {/* Founders teaser */}
      <section className="section-y border-t border-line">
        <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="grid grid-cols-2 gap-4">
            {founders.map((f, i) => (
              <figure key={f.name} className={i === 1 ? "mt-12" : undefined}>
                <div className="group aspect-[3/4] overflow-hidden rounded-[20px] border border-line">
                  <Image
                    src={f.photo}
                    alt={`${f.name}, co-founder of Malangeni Tech Guild`}
                    width={f.width}
                    height={f.height}
                    sizes="(min-width: 1024px) 280px, 50vw"
                    className={`h-full w-full object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0 ${f.position}`}
                  />
                </div>
                <figcaption className="mt-3 text-caption text-muted">{f.name}</figcaption>
              </figure>
            ))}
          </Reveal>
          <div>
            <SectionHeader
              eyebrow="About us"
              title={
                <>
                  Built by developers. <Em>Run by developers.</Em>
                </>
              }
              lead="Two software developers in Umzinto. No account managers, no sales team. The person you WhatsApp is the person writing your code."
            />
            <Reveal className="mt-8">
              <ArrowLink href="/about">Meet the founders</ArrowLink>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
