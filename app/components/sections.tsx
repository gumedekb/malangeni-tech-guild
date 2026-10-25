import Link from "next/link";
import { ViewTransition } from "react";
import { Browser, Phone } from "./devices";
import { IsitoloToday } from "./mocks/Isitolo";
import { LwaziDesktop } from "./mocks/LwaziSite";
import { CountUp, Reveal, Spotlight } from "./motion";
import { Badge, Check, WhatsAppButton } from "./ui";
import { site, VAT_NOTE, whatsappLink } from "../lib/site";
import { builds, combos, devWork, faqs, planPromises, planRows, plans, type PlanValue } from "../lib/pricing";
import type { WorkItem } from "../lib/work";

/* ---------- Trust strip ---------- */
const trust = [
  { label: "B-BBEE Level 1", detail: "100% Black owned" },
  { label: "Registered company", detail: `Reg ${site.regNumber}` },
  { label: "Local", detail: "Umzinto, KwaZulu-Natal" },
  { label: "No middlemen", detail: "You talk to the developers" },
];

export function TrustStrip() {
  return (
    <section aria-label="Company credentials" className="border-y border-line">
      <ul className="shell grid grid-cols-2 lg:grid-cols-4">
        {trust.map((item, i) => (
          <Reveal
            as="li"
            key={item.label}
            delay={i * 80}
            className={`py-7 ${i % 2 ? "pl-6 border-l border-line" : "pr-6"} ${i < 2 ? "border-b border-line lg:border-b-0" : ""} ${
              i === 2 ? "lg:border-l lg:border-line lg:pl-6" : ""
            }`}
          >
            <p className="text-small font-medium">{item.label}</p>
            <p className="mt-1 text-caption text-muted">{item.detail}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Capability marquee ---------- */
const capabilities = [
  "Websites",
  "Online stores",
  "Android apps",
  "WhatsApp bots",
  "Web apps & portals",
  "Google Business Profile",
  "Company registration",
  "Automation",
];

export function CapabilityMarquee() {
  return (
    <div className="marquee overflow-hidden py-10" aria-hidden="true">
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {capabilities.map((c) => (
              <span key={c} className="flex items-center whitespace-nowrap px-8 font-serif text-[clamp(2rem,4vw,3.5rem)] italic text-text/25">
                {c}
                <span className="ml-16 h-1.5 w-1.5 rounded-full bg-gold/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Headline offer ---------- */
const included = [
  "Your company registered with CIPC — name reservation and incorporation",
  "Registration documents sent to you by email",
  "A one-page website with up to 6 sections",
  "WhatsApp button so customers message you from the site",
  "Google Business Profile set up, free — so people find you on Maps",
];

export function OfferCard() {
  return (
    <Reveal className="gold-frame rounded-[28px]">
      <div className="relative grid overflow-hidden rounded-[27px] bg-surface lg:grid-cols-[1.15fr_1fr]">
        <div className="aurora opacity-60" aria-hidden="true" />
        <div className="relative p-8 sm:p-14">
          <Badge>Start here</Badge>
          <h2 className="mt-6 text-h2 font-semibold">
            Registered and online for <span className="serif-em">R1,300.</span>
          </h2>
          <p className="mt-5 max-w-md text-body text-muted">
            New business? We register the company and build the website in one go. One price, one WhatsApp, done.
          </p>
          <div className="mt-10 flex flex-wrap items-end gap-x-4 gap-y-1">
            <span className="text-[clamp(3.5rem,8vw,6rem)] font-semibold leading-none tracking-[-0.04em]">
              <CountUp to={1300} />
            </span>
            <span className="pb-2 text-caption text-muted">
              once-off · <s>R1,400</s> bought separately
            </span>
          </div>
          <div className="mt-10">
            <WhatsAppButton message="Hi Malangeni Tech Guild, I'd like the R1,300 registration + website deal.">
              Get registered and online
            </WhatsAppButton>
          </div>
          <p className="mt-5 text-caption text-muted">{VAT_NOTE}</p>
        </div>
        <div className="relative border-t border-line p-8 sm:p-14 lg:border-t-0 lg:border-l">
          <p className="text-caption uppercase tracking-[0.14em] text-muted">What you get</p>
          <ul className="mt-6 grid gap-5">
            {included.map((item) => (
              <li key={item} className="flex gap-3 text-small text-text/90">
                <Check className="mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 border-t border-line pt-6 text-caption text-muted">
            Already registered? The website on its own is R950.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- Work card ---------- */
export function WorkVisual({ item, large = false }: { item: WorkItem; large?: boolean }) {
  return (
    <ViewTransition name={`work-${item.slug}`} share="morph">
      {large ? (
        // Case-study hero: the whole device, centred and floating
        <div className="flex h-full items-center justify-center">
          {item.kind === "product" ? (
            <div className="float-a [zoom:0.78] sm:[zoom:0.9]">
              <Phone>
                <IsitoloToday />
              </Phone>
            </div>
          ) : (
            <div className="w-[1100px] [zoom:0.3] sm:[zoom:0.5] md:[zoom:0.62] lg:[zoom:0.85] xl:[zoom:1]">
              <Browser url="lwaziskitchen.co.za" viewHeight={600}>
                <LwaziDesktop />
              </Browser>
            </div>
          )}
        </div>
      ) : (
        // Card: device rises out of a soft glow in the brand colour, lifting on hover
        <div
          className="relative flex h-full items-end justify-center overflow-hidden"
          style={{ background: `radial-gradient(80% 70% at 50% 100%, ${item.accent}38, transparent 70%)` }}
        >
          {item.kind === "product" ? (
            <div className="translate-y-[18%] transition-transform duration-700 ease-out [zoom:0.72] group-hover:translate-y-[12%]">
              <Phone>
                <IsitoloToday />
              </Phone>
            </div>
          ) : (
            <div className="w-[900px] translate-y-[10%] transition-transform duration-700 ease-out [zoom:0.5] group-hover:translate-y-[6%]">
              <Browser url="lwaziskitchen.co.za" viewHeight={520}>
                <LwaziDesktop />
              </Browser>
            </div>
          )}
        </div>
      )}
    </ViewTransition>
  );
}

export function WorkCard({ item, delay = 0 }: { item: WorkItem; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link href={`/work/${item.slug}`} className="spot group block overflow-hidden rounded-[24px] border border-line bg-surface">
        <div className="h-[300px] overflow-hidden border-b border-line sm:h-[380px]">
          <WorkVisual item={item} />
        </div>
        <div className="p-7 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{item.label}</Badge>
            {item.example ? <Badge tone="muted">Example layout</Badge> : null}
          </div>
          <h3 className="mt-5 text-h3 font-semibold">{item.title}</h3>
          <p className="mt-3 max-w-md text-small text-muted">{item.summary}</p>
          <p className="link-arrow mt-6 inline-flex items-center gap-2 text-small font-medium text-gold-bright">
            {item.kind === "product" ? "See the product" : "Read the case study"}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </p>
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------- Process ---------- */
const steps = [
  { title: "Discover", line: "We talk on WhatsApp or in person. You tell us what you need, we tell you the price." },
  { title: "Design", line: "You see how it will look before we build it. Change what you don’t like." },
  { title: "Build", line: "We build it and send you a link to check as we go." },
  { title: "Launch & support", line: "It goes live. You get the logins, and we’re one message away." },
];

export function Process() {
  return (
    <Reveal className="relative">
      <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-line lg:block" aria-hidden="true" />
      <div className="draw-line absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-gold via-gold-bright to-transparent lg:block" aria-hidden="true" />
      <ol className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {steps.map((step, i) => (
          <li key={step.title} className="relative">
            <span className="pulse-dot block h-[15px] w-[15px] rounded-full border border-gold bg-bg" style={{ animationDelay: `${i * 0.6}s` }} />
            <p className="mt-6 font-serif text-[1.75rem] italic leading-none text-gold">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 text-body font-semibold">{step.title}</h3>
            <p className="mt-2 text-small text-muted">{step.line}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

/* ---------- Pricing blocks ---------- */
function GroupTitle({ id, title, lead }: { id?: string; title: string; lead: string }) {
  return (
    <Reveal className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
      <h3 id={id} className="text-h3 font-semibold">
        {title}
      </h3>
      <p className="text-small text-muted">{lead}</p>
    </Reveal>
  );
}

export function Combos() {
  return (
    <div>
      <GroupTitle title="Combos" lead="New business? Register and launch together and save." />
      <Spotlight className="grid gap-4 md:grid-cols-3">
        {combos.map((combo, i) => (
          <Reveal key={combo.name} delay={i * 90}>
            <article className={`spot flex h-full flex-col rounded-[20px] border bg-surface p-7 ${combo.featured ? "border-gold/50" : "border-line"}`}>
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-small font-medium">{combo.name}</h4>
                {combo.featured ? <Badge>Most popular</Badge> : null}
              </div>
              <p className="mt-6 text-[2.5rem] font-semibold leading-none tracking-[-0.03em] tabular-nums">{combo.price}</p>
              <p className="mt-2 text-caption text-gold">Save {combo.saving}</p>
              <p className="mt-5 flex-1 text-small text-muted">{combo.note}</p>
              <a
                href={whatsappLink(`Hi Malangeni Tech Guild, I'm interested in ${combo.name} (${combo.price}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex justify-center rounded-full px-5 py-3 text-small font-medium ${combo.featured ? "btn-gold" : "btn-ghost"}`}
              >
                <span className="relative">Choose this</span>
              </a>
            </article>
          </Reveal>
        ))}
      </Spotlight>
      <p className="mt-5 text-caption text-muted">{VAT_NOTE}</p>
    </div>
  );
}

export function Builds() {
  return (
    <div>
      <GroupTitle title="One-off builds" lead="Pay once. You own it." />
      <Reveal as="ul" className="border-t border-line">
        {builds.map((item) => (
          <li
            key={item.name}
            className="group grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 border-b border-line py-6 transition-colors hover:bg-surface/60 sm:grid-cols-[18rem_1fr_9rem] sm:px-4"
          >
            <span className="text-small font-medium transition-colors group-hover:text-gold-bright">{item.name}</span>
            <span className="col-span-2 row-start-2 text-small text-muted sm:col-span-1 sm:col-start-2 sm:row-start-1">{item.detail}</span>
            <span className="text-right text-body font-semibold tabular-nums">
              {item.price}
              {item.suffix ? <span className="ml-1 text-caption font-normal text-muted">{item.suffix}</span> : null}
            </span>
          </li>
        ))}
      </Reveal>
      <p className="mt-5 text-caption text-muted">{VAT_NOTE}</p>
    </div>
  );
}

export function DevWork() {
  return (
    <div>
      <GroupTitle id="developer-work" title="Developer work" lead="Bots, systems and apps that save you hours." />
      <Reveal as="ul" className="border-t border-line">
        {devWork.map((item) => (
          <li
            key={item.name}
            className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-b border-line py-6 transition-colors hover:bg-surface/60 sm:grid-cols-[1fr_9rem_17rem] sm:px-4"
          >
            <span className="text-small font-medium transition-colors group-hover:text-gold-bright">{item.name}</span>
            <span className="text-right text-body font-semibold tabular-nums">{item.price}</span>
            <span className="col-span-2 text-caption text-muted sm:col-span-1 sm:text-right">{item.ongoing}</span>
          </li>
        ))}
      </Reveal>
      <p className="mt-5 text-caption text-muted">{VAT_NOTE}</p>
    </div>
  );
}

function PlanCell({ value }: { value: PlanValue }) {
  if (value === true) {
    return (
      <>
        <Check />
        <span className="sr-only">Included</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <span aria-hidden="true" className="text-muted/50">
          —
        </span>
        <span className="sr-only">Not included</span>
      </>
    );
  }
  return <span className="text-small font-medium">{value}</span>;
}

export function CarePlans() {
  return (
    <div>
      <Reveal as="ul" className="flex flex-wrap gap-x-8 gap-y-3">
        {planPromises.map((p) => (
          <li key={p} className="flex items-center gap-2 text-small font-medium">
            <Check />
            {p}
          </li>
        ))}
      </Reveal>
      <Spotlight className="mt-10 grid gap-4 lg:grid-cols-3">
        {plans.map((plan, col) => (
          <Reveal key={plan.name} delay={col * 90}>
            <article className={`spot flex h-full flex-col rounded-[20px] border bg-surface p-7 ${plan.featured ? "border-gold/50" : "border-line"}`}>
              <div className="flex items-center justify-between">
                <h4 className="text-body font-semibold">{plan.name}</h4>
                {plan.featured ? <Badge>Recommended</Badge> : null}
              </div>
              <p className="mt-6 flex items-baseline gap-1.5">
                <span className="text-[2.5rem] font-semibold leading-none tracking-[-0.03em] tabular-nums">{plan.price}</span>
                <span className="text-small text-muted">/ month</span>
              </p>
              <p className="mt-3 text-small text-muted">{plan.blurb}</p>
              <dl className="mt-7 flex-1 divide-y divide-line border-t border-line">
                {planRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-small text-muted">{row.label}</dt>
                    <dd className="flex shrink-0 items-center">
                      <PlanCell value={row.values[col]} />
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href={whatsappLink(`Hi Malangeni Tech Guild, I'm interested in the ${plan.name} care plan (${plan.price}/month).`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex justify-center rounded-full px-5 py-3 text-small font-medium ${plan.featured ? "btn-gold" : "btn-ghost"}`}
              >
                <span className="relative">Choose {plan.name}</span>
              </a>
            </article>
          </Reveal>
        ))}
      </Spotlight>
      <div className="mt-5 flex flex-col gap-1 text-caption text-muted sm:flex-row sm:justify-between">
        <p>*Unlimited small edits — text, photos, prices. A redesign is a new build.</p>
        <p>{VAT_NOTE}</p>
      </div>
    </div>
  );
}

/* ---------- FAQ ---------- */
export function FaqList() {
  return (
    <Reveal className="border-t border-line">
      {faqs.map((faq) => (
        <details key={faq.q} className="group border-b border-line">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-body font-medium transition-colors hover:text-gold-bright">
            {faq.q}
            <span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-transform duration-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" className="h-3.5 w-3.5">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="max-w-2xl pb-7 text-small text-muted">{faq.a}</p>
        </details>
      ))}
    </Reveal>
  );
}

/* ---------- Example notice ---------- */
export function ExampleNotice() {
  return (
    <div className="border-b border-gold/20 bg-gold/[0.07] pt-20">
      <p className="shell py-3 text-center text-caption text-gold-bright">
        Example layout — sample content showing how we present this kind of work. Not a real project yet.
      </p>
    </div>
  );
}
