import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, Spotlight } from "../components/motion";
import { CtaBand, Em, PageHero, SectionHeader } from "../components/ui";
import { founders } from "../lib/founders";

export const metadata: Metadata = {
  title: "About",
  description: "Malangeni Tech Guild is two software developers in Umzinto, KZN. No account managers — you talk to the people building your project.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "You talk to the developers", body: "No account managers, no sales team. The person you WhatsApp writes your code." },
  { title: "Prices on the page", body: "You know what it costs before you message us. No surprises on the invoice." },
  { title: "You own it", body: "We hand over the code and the logins. You’re never locked in." },
  { title: "Local on purpose", body: "We’re in Umzinto, building for the businesses around us. Local is the advantage, not something to hide." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        parts={["Built by developers.", { em: "Run by developers." }]}
        lead="Malangeni Tech Guild is two software developers in Umzinto, KwaZulu-Natal. We’re a small team on purpose — you get our full attention and a straight answer."
      />

      <section className="pb-24 sm:pb-32">
        <div className="shell grid gap-6 sm:grid-cols-2">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 120}>
              <figure className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-line">
                  <Image
                    src={f.photo}
                    alt={`${f.name}, ${f.role} at Malangeni Tech Guild`}
                    width={f.width}
                    height={f.height}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className={`h-full w-full object-cover grayscale-[30%] transition-all duration-1000 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 ${f.position}`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg/90 to-transparent" aria-hidden="true" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-7">
                    <p className="text-h3 font-semibold">{f.name}</p>
                    <p className="mt-1 text-small text-gold-bright">{f.role}</p>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y border-t border-line">
        <div className="shell">
          <SectionHeader
            eyebrow="How we work"
            title={
              <>
                What you can <Em>count on.</Em>
              </>
            }
          />
          <Spotlight className="mt-16 grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <article className="spot h-full rounded-[20px] border border-line bg-surface p-8">
                  <p className="font-serif text-[1.75rem] italic leading-none text-gold">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-5 text-[1.375rem] font-semibold tracking-tight">{v.title}</h3>
                  <p className="mt-3 text-small text-muted">{v.body}</p>
                </article>
              </Reveal>
            ))}
          </Spotlight>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
