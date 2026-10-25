import Link from "next/link";
import type { ReactNode } from "react";
import { whatsappLink, type Contact } from "../lib/site";
import { Reveal } from "./motion";

// A headline whose words rise into place on load. Wrap words in {em: "..."} for gold serif italics.
export type RisePart = string | { em: string };

export function RiseText({ parts, base = 0 }: { parts: RisePart[]; base?: number }) {
  let i = 0;
  return (
    <>
      {parts.flatMap((part, p) => {
        const em = typeof part !== "string";
        const words = (em ? part.em : part).split(" ").filter(Boolean);
        return words.map((word, w) => (
          <span key={`${p}-${w}`}>
            <span className="rise-word">
              <span
                className={em ? "serif-em pr-[0.04em]" : undefined}
                style={{ "--i": i++, "--base": `${base}ms` } as React.CSSProperties}
              >
                {word}
              </span>
            </span>{" "}
          </span>
        ));
      })}
    </>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  id,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-5 text-h2 font-semibold">
        {title}
      </h2>
      {lead ? <p className="mt-5 text-body text-muted">{lead}</p> : null}
    </Reveal>
  );
}

export function Em({ children }: { children: ReactNode }) {
  return <span className="serif-em">{children}</span>;
}

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.24 8.24 0 0 1 0 16.48Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-small font-medium";

export function WhatsAppButton({
  message,
  contact,
  children = "WhatsApp us",
  variant = "gold",
  className = "",
}: {
  message?: string;
  contact?: Contact;
  children?: ReactNode;
  variant?: "gold" | "ghost";
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message, contact)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variant === "gold" ? "btn-gold" : "btn-ghost"} ${buttonBase} ${className}`}
    >
      <WhatsAppIcon />
      <span className="relative">{children}</span>
    </a>
  );
}

export function GhostButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`btn-ghost link-arrow ${buttonBase} ${className}`}>
      {children}
      <span className="arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}

export function ArrowLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`link-arrow inline-flex items-center gap-2 text-small font-medium text-gold-bright ${className}`}>
      {children}
      <span className="arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 text-gold ${className}`}
    >
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function Badge({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "muted" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-caption font-medium ${
        tone === "gold" ? "border-gold/30 bg-gold/10 text-gold-bright" : "border-line-strong text-muted"
      }`}
    >
      {children}
    </span>
  );
}

// Shared top-of-page hero for inner pages
export function PageHero({
  eyebrow,
  parts,
  lead,
  children,
}: {
  eyebrow: string;
  parts: RisePart[];
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div className="aurora" aria-hidden="true" />
      <div className="hairline-grid" aria-hidden="true" />
      <div className="shell relative">
        <p className="eyebrow fade-in">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-display font-semibold">
          <RiseText parts={parts} base={100} />
        </h1>
        {lead ? (
          <p className="fade-in mt-7 max-w-2xl text-body text-muted sm:text-[1.1875rem]" style={{ "--base": "450ms" } as React.CSSProperties}>
            {lead}
          </p>
        ) : null}
        {children ? (
          <div className="fade-in mt-10" style={{ "--base": "600ms" } as React.CSSProperties}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}

// Closing call to action used at the bottom of every page
export function CtaBand({
  title = (
    <>
      Ready when <Em>you are.</Em>
    </>
  ),
  lead = "Tell us what you need on WhatsApp. You’ll get a price from one of the two developers who will build it.",
}: {
  title?: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <section className="section-y">
      <div className="shell">
        <Reveal className="relative overflow-hidden rounded-[28px] border border-line bg-surface px-6 py-16 text-center sm:px-16 sm:py-24">
          <div className="aurora opacity-80" aria-hidden="true" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-display font-semibold">{title}</h2>
            <p className="mx-auto mt-6 max-w-xl text-body text-muted">{lead}</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <WhatsAppButton />
              <GhostButton href="/pricing">See prices</GhostButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
