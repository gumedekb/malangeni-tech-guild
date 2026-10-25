import Link from "next/link";
import { Reveal } from "../motion";
import { nextWork, type WorkItem } from "../../lib/work";

export function MetaGrid({ items }: { items: { label: string; value: React.ReactNode }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-line bg-line lg:grid-cols-4">
      {items.map((m) => (
        <div key={m.label} className="bg-bg/80 p-5 backdrop-blur sm:p-6">
          <dt className="text-caption uppercase tracking-[0.12em] text-muted">{m.label}</dt>
          <dd className="mt-2 text-small font-medium">{m.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function NextProject({ current }: { current: WorkItem }) {
  const next = nextWork(current.slug);
  return (
    <section className="border-t border-line">
      <Link href={`/work/${next.slug}`} className="group block">
        <Reveal className="shell flex flex-col gap-4 py-20 sm:flex-row sm:items-end sm:justify-between sm:py-28">
          <div>
            <p className="text-caption uppercase tracking-[0.14em] text-muted">Next: {next.label.toLowerCase()}</p>
            <p className="mt-4 text-display font-semibold transition-colors duration-500 group-hover:text-gold-bright">
              {next.title}
            </p>
          </div>
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-line-strong text-h3 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-on-gold">
            →
          </span>
        </Reveal>
      </Link>
    </section>
  );
}
