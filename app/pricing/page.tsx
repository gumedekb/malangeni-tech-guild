import type { Metadata } from "next";
import { Builds, CarePlans, Combos, DevWork, FaqList, OfferCard } from "../components/sections";
import { CtaBand, Em, PageHero, SectionHeader } from "../components/ui";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Published prices for websites, online stores, company registration, automation and care plans. From R1,300.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        parts={["Real prices,", { em: "on the page." }]}
        lead="No “contact us for a quote” on the simple stuff. Pick what you need and WhatsApp us."
      />

      <section className="pb-24 sm:pb-32">
        <div className="shell">
          <OfferCard />
        </div>
      </section>

      <section className="section-y border-t border-line">
        <div className="shell grid gap-24 sm:gap-32">
          <Combos />
          <Builds />
          <DevWork />
        </div>
      </section>

      <section id="care-plans" className="section-y border-t border-line">
        <div className="shell">
          <SectionHeader
            eyebrow="Care plans"
            title={
              <>
                We look after it, <Em>so you don’t have to.</Em>
              </>
            }
            lead="Your site stays online, backed up and up to date. You WhatsApp us when something needs changing."
          />
          <div className="mt-12">
            <CarePlans />
          </div>
        </div>
      </section>

      <section id="faq" className="section-y border-t border-line">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHeader
            eyebrow="FAQ"
            title={
              <>
                Straight <Em>answers.</Em>
              </>
            }
            lead="The questions everyone asks before they WhatsApp us."
          />
          <FaqList />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
