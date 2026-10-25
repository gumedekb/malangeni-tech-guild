import Image from "next/image";
import { Reveal, Spotlight } from "../motion";
import { hubScreens, WorkVisual } from "../sections";
import StickyFeatures from "../StickyFeatures";
import { CtaBand, Em, RiseText } from "../ui";
import type { WorkItem } from "../../lib/work";
import { MetaGrid, NextProject } from "./shared";

// Malangeni Hub: our first live product. Screens are real screenshots of blog.mtgtech.co.za.
const host = "blog.mtgtech.co.za";

const features = [
  {
    title: "What’s happening, today",
    body: "The home page brings together a featured place, upcoming events and the community feed — news, notices, discussions and jobs, filterable by type.",
    screen: hubScreens.home(),
  },
  {
    title: "Explore the area",
    body: "Search places around Malangeni — the library, clinics, parks — with a featured spot and directions one tap away.",
    screen: hubScreens.explore(),
  },
  {
    title: "Find a local service",
    body: "Plumbers, electricians, drivers and tutors list their skills so people nearby can find them. Anyone can offer a service.",
    screen: hubScreens.services(),
  },
  {
    title: "Light or dark, your choice",
    body: "It follows the phone’s setting on first visit and remembers what you pick after that — easy on the eyes at night.",
    screen: hubScreens.homeLight(),
  },
];

const plain = [
  { title: "Sign in with Google", body: "No new password to remember. Your account is created the first time you sign in." },
  { title: "A real community feed", body: "Post, like, comment and share. Join groups like Students, and see who’s new." },
  { title: "Checked by the hub team", body: "Local businesses get a verified badge before they’re listed, and moderators keep the feed clean." },
];

const stack = ["Next.js", "React", "Spring Boot", "MySQL", "Firebase sign-in"];

// The Hub's own MB mark (same file as its favicon, dark version)
function HubIcon() {
  return <Image src="/work/malangeni-hub/icon.svg" alt="" width={56} height={56} className="h-14 w-14" />;
}

export default function HubCase({ item }: { item: WorkItem }) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 sm:pt-44">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(50rem 30rem at 75% 20%, ${item.accent}22, transparent 65%)` }}
          aria-hidden="true"
        />
        <div className="shell relative grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <div className="fade-in flex items-center gap-4">
              <HubIcon />
              <div>
                <p className="text-body font-semibold">{item.title}</p>
                <p className="text-caption text-muted">A Malangeni Tech Guild product</p>
              </div>
            </div>
            <h1 className="mt-8 text-display font-semibold">
              <RiseText parts={["Everything happening in Malangeni,", { em: "in one place." }]} base={150} />
            </h1>
            <p className="fade-in mt-6 max-w-lg text-body text-muted" style={{ "--base": "550ms" } as React.CSSProperties}>
              {item.summary}
            </p>
            <div className="fade-in mt-9 flex flex-wrap items-center gap-4" style={{ "--base": "700ms" } as React.CSSProperties}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-small font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: item.accent }}
              >
                Visit {host}
                <span aria-hidden="true">↗</span>
              </a>
              <span className="inline-flex items-center gap-2 text-small text-muted">
                <span className="pulse-dot h-2 w-2 rounded-full bg-gold" />
                Live now
              </span>
            </div>
          </div>
          <div className="h-[360px] sm:h-[520px]">
            <WorkVisual item={item} large />
          </div>
        </div>

        <div className="shell relative mt-16 pb-20 sm:pb-28">
          <Reveal>
            <MetaGrid
              items={[
                { label: "Platform", value: "Web — phone and desktop" },
                {
                  label: "Lives at",
                  value: (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="underline decoration-gold/50 underline-offset-4 hover:text-gold-bright">
                      {host}
                    </a>
                  ),
                },
                { label: "Built by", value: "Malangeni Tech Guild" },
                { label: "Status", value: "Live" },
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
              News, places and people, <Em>on the phone you have.</Em>
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
              In a small community, what’s on and who can help is spread across notice boards and group chats. We built Malangeni Hub so it
              all lives in <span className="italic text-gold-bright">one place</span> anyone can open.
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
              A full platform, <Em>not a template.</Em>
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
          <Reveal delay={150} className="mt-10 flex flex-wrap items-center gap-2">
            <span className="mr-2 text-caption uppercase tracking-[0.14em] text-muted">Built with</span>
            {stack.map((s) => (
              <span key={s} className="rounded-full border border-line-strong px-3 py-1 text-caption text-text/80">
                {s}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <NextProject current={item} />

      <CtaBand
        title={
          <>
            Want a platform like this <Em>for your community?</Em>
          </>
        }
        lead="Custom web apps and portals start from R8,000. Tell us who it’s for and we’ll tell you what it would take."
      />
    </>
  );
}
