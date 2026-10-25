import type { Metadata } from "next";
import { Reveal, Spotlight } from "../components/motion";
import { WorkCard } from "../components/sections";
import { CtaBand, Em, PageHero } from "../components/ui";
import { work } from "../lib/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Products we build and run ourselves, and projects we build for South African businesses.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const products = work.filter((w) => w.kind === "product");
  const clients = work.filter((w) => w.kind === "client");

  return (
    <>
      <PageHero
        eyebrow="Work"
        parts={["Things we’ve built,", { em: "and who we built them for." }]}
        lead="Our own products live on their own subdomains of mtgtech.co.za. Client projects live on the client’s own domain — and they own the code."
      />

      <section className="pb-24 sm:pb-32">
        <div className="shell grid grid-cols-1 gap-20">
          <div>
            <Reveal className="mb-8 flex items-end justify-between border-b border-line pb-5">
              <h2 className="text-h3 font-semibold">Our products</h2>
              <p className="text-caption text-muted">Built and run by us</p>
            </Reveal>
            <Spotlight className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {products.map((item) => (
                <WorkCard key={item.slug} item={item} />
              ))}
            </Spotlight>
          </div>
          <div>
            <Reveal className="mb-8 flex items-end justify-between border-b border-line pb-5">
              <h2 className="text-h3 font-semibold">Client projects</h2>
              <p className="text-caption text-muted">Built for businesses like yours</p>
            </Reveal>
            <Spotlight className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {clients.map((item) => (
                <WorkCard key={item.slug} item={item} />
              ))}
            </Spotlight>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Your business <Em>could be next.</Em>
          </>
        }
      />
    </>
  );
}
