import type { ReactNode } from "react";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="pt-36 pb-24 sm:pt-44">
      <div className="shell">
        <article className="max-w-3xl">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-6 text-display font-semibold">{title}</h1>
          <p className="mt-4 text-caption text-muted">Last updated {updated}</p>
          <div className="mt-12 grid gap-10 text-body text-muted [&_h2]:text-body [&_h2]:font-semibold [&_h2]:text-text [&_li]:mt-1.5 [&_section>*+*]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:marker:text-gold">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
}
