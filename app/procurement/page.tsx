import type { Metadata } from "next";
import { Reveal } from "../components/motion";
import { CtaBand, Em, PageHero, WhatsAppButton } from "../components/ui";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Procurement",
  description: "B-BBEE Level 1, 100% Black owned, 135% procurement recognition. Company details for corporate and government buyers.",
  alternates: { canonical: "/procurement" },
};

const facts = [
  { label: "B-BBEE status", value: "Level 1 contributor" },
  { label: "Ownership", value: "100% Black owned" },
  { label: "Procurement recognition", value: "135%" },
  { label: "Certificate valid until", value: "6 July 2027" },
  { label: "Company registration", value: site.regNumber },
  { label: "Registered name", value: site.legalName },
  { label: "Location", value: `${site.town}, ${site.province}` },
  { label: "Tax reference & CSD", value: "Supplied with your vendor forms" },
];

export default function ProcurementPage() {
  return (
    <>
      <PageHero
        eyebrow="For corporate and government buyers"
        parts={["Level 1 B-BBEE.", { em: "Every rand counts 135%." }]}
        lead="Spend with us counts at 135% on your preferential procurement scorecard. Ask for our certificate and company profile and we’ll send them over."
      >
        <WhatsAppButton message="Hi Malangeni Tech Guild, please send your B-BBEE certificate and company profile.">
          Request certificate & company profile
        </WhatsAppButton>
      </PageHero>

      <section className="pb-24 sm:pb-32">
        <div className="shell">
          <Reveal as="dl" className="grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-surface p-7">
                <dt className="text-caption uppercase tracking-[0.12em] text-muted">{fact.label}</dt>
                <dd className="mt-3 text-body font-semibold tabular-nums">{fact.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Onboarding us as a supplier? <Em>We’ll make it easy.</Em>
          </>
        }
        lead="Send your vendor forms on WhatsApp and we’ll return them completed, with every supporting document."
      />
    </>
  );
}
