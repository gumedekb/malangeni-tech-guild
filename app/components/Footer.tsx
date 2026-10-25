import Link from "next/link";
import Logo from "./Logo";
import { Reveal } from "./motion";
import { contacts, nav, site, whatsappLink } from "../lib/site";

const more = [
  { href: "/procurement", label: "Procurement" },
  { href: "/privacy", label: "Privacy policy (POPIA)" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-line pt-20 pb-28 md:pb-10">
      <div className="shell">
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" aria-label="Malangeni Tech Guild — home">
              <Logo />
            </Link>
            <p className="mt-6 max-w-xs text-small text-muted">
              Websites and apps for small South African businesses. Built in Umzinto, KZN.
            </p>
          </div>

          <nav aria-label="Pages">
            <p className="text-caption uppercase tracking-[0.14em] text-muted">Pages</p>
            <ul className="mt-5 grid gap-3">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-small text-text/80 transition-colors hover:text-gold-bright">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="More">
            <p className="text-caption uppercase tracking-[0.14em] text-muted">More</p>
            <ul className="mt-5 grid gap-3">
              {more.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-small text-text/80 transition-colors hover:text-gold-bright">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-caption uppercase tracking-[0.14em] text-muted">Contact</p>
            <ul className="mt-5 grid gap-3">
              {contacts.map((contact) => (
                <li key={contact.number}>
                  <a
                    href={whatsappLink(undefined, contact)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <span className="block text-small text-text/80 transition-colors group-hover:text-gold-bright">
                      {contact.name}
                    </span>
                    <span className="block text-caption tabular-nums text-muted">{contact.display}</span>
                  </a>
                  <a href={`mailto:${contact.email}`} className="block text-caption text-muted transition-colors hover:text-gold-bright">
                    {contact.email}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className="text-small text-text/80 transition-colors hover:text-gold-bright">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Oversized outlined wordmark, stretched to the exact content width; the outline draws in on scroll */}
        <Reveal className="mt-20">
          <svg viewBox="0 0 1000 205" className="wordmark block h-auto w-full select-none overflow-visible" aria-hidden="true">
            <text
              x="2"
              y="150"
              textLength="996"
              lengthAdjust="spacing"
              fontSize="186"
              fontStyle="italic"
              fill="transparent"
              stroke="rgba(200,169,106,0.34)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
            >
              Malangeni Tech
            </text>
          </svg>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-caption text-muted md:flex-row md:justify-between">
          <p>
            <span className="uppercase tracking-wide text-text/80">{site.legalName}</span> · Reg {site.regNumber}
          </p>
          <p>
            {site.town}, KZN, South Africa · B-BBEE Level 1 · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
