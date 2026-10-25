import type { Metadata } from "next";
import ContactForm from "../components/Contact";
import { Reveal, Spotlight } from "../components/motion";
import { FaqList } from "../components/sections";
import { Em, PageHero, SectionHeader, WhatsAppButton } from "../components/ui";
import { contacts } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "WhatsApp Khumbulani or Gcina directly. You talk to the developers who will build your project.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        parts={["WhatsApp us.", { em: "We reply." }]}
        lead="Tell us what you need and we’ll send you a price. You’ll be talking to one of the two developers who will build it."
      />

      <section className="pb-24 sm:pb-32">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <Spotlight className="grid gap-4">
              {contacts.map((contact, i) => (
                <Reveal key={contact.number} delay={i * 100}>
                  <div className="spot flex items-center justify-between gap-4 rounded-[20px] border border-line bg-surface p-6">
                    <div>
                      <p className="text-body font-semibold">{contact.name}</p>
                      <p className="mt-1 text-small tabular-nums text-muted">{contact.display}</p>
                    </div>
                    <WhatsAppButton contact={contact} className="!px-5 !py-3">
                      WhatsApp
                    </WhatsAppButton>
                  </div>
                </Reveal>
              ))}
            </Spotlight>
            <Reveal delay={200}>
              <p className="mt-5 text-caption text-muted">Two numbers, so if one of us is busy the other one answers.</p>
              <p className="mt-10 border-t border-line pt-8 text-small text-muted">
                Prefer a form? Fill this one in. It opens WhatsApp with your details already typed in — just press send.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section-y border-t border-line">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHeader
            eyebrow="Before you message"
            title={
              <>
                Straight <Em>answers.</Em>
              </>
            }
          />
          <FaqList />
        </div>
      </section>
    </>
  );
}
