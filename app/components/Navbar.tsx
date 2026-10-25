"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { WhatsAppIcon } from "./ui";
import { nav, whatsappLink } from "../lib/site";

// 24px line icons for the mobile menu, keyed by href
const icons: Record<string, React.ReactNode> = {
  "/": <path d="M3 10.5 12 3l9 7.5M5 9v11h5v-6h4v6h5V9" />,
  "/services": <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3ZM3 12l9 4.5 9-4.5M3 16.5 12 21l9-4.5" />,
  "/work": (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </>
  ),
  "/pricing": (
    <>
      <path d="M3 12.6V4.5A1.5 1.5 0 0 1 4.5 3h8.1a1.5 1.5 0 0 1 1.06.44l6.9 6.9a1.5 1.5 0 0 1 0 2.12l-8.1 8.1a1.5 1.5 0 0 1-2.12 0l-6.9-6.9A1.5 1.5 0 0 1 3 12.6Z" />
      <circle cx="8" cy="8" r="1.5" />
    </>
  ),
  "/about": (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.6-3.4 3.2-5.5 6.5-5.5s5.9 2.1 6.5 5.5M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c1.9.7 3.2 2.5 3.5 5.2" />
    </>
  ),
  "/contact": <path d="M4 5h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-5 3.5V6a1 1 0 0 1 1-1ZM8 10h8M8 13.5h5" />,
};

function NavIcon({ href }: { href: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      {icons[href]}
    </svg>
  );
}

const menuLinks = [{ href: "/", label: "Home" }, ...nav];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openedOn, setOpenedOn] = useState(pathname);

  // Close the mobile menu after navigating
  if (open && openedOn !== pathname) {
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header style={{ viewTransitionName: "site-header" }} className="fixed inset-x-0 top-0 z-50">
        <div
          className={`transition-all duration-500 ${
            scrolled ? "border-b border-line bg-bg/70 backdrop-blur-xl" : "border-b border-transparent"
          }`}
        >
          <nav className="shell flex h-20 items-center justify-between gap-4">
            <Link href="/" aria-label="Malangeni Tech Guild — home">
              <Logo />
            </Link>

            <div className="hidden items-center gap-1 rounded-full border border-line bg-surface/50 p-1 backdrop-blur md:flex">
              {nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-small transition-colors duration-300 ${
                    isActive(link.href) ? "bg-surface-2 text-text" : "text-muted hover:text-text"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden items-center gap-2 rounded-full px-4 py-2.5 text-small font-medium sm:inline-flex"
            >
              <WhatsAppIcon />
              <span className="relative">WhatsApp us</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile: floating menu button, bottom right, opening a compact card above it */}
      <div style={{ viewTransitionName: "site-menu" }} className="relative z-50 md:hidden">
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className={`fixed inset-0 z-50 bg-bg/40 backdrop-blur-[2px] transition-opacity duration-300 ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />

        <div className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex flex-col items-end gap-3">
          <nav
            id="mobile-menu"
            aria-label="Menu"
            className={`fab-menu w-60 origin-bottom-right rounded-3xl border border-line-strong bg-surface/90 p-2 backdrop-blur-xl transition-[opacity,transform,visibility] duration-400 ease-(--ease-out) ${
              open ? "visible scale-100 opacity-100" : "invisible translate-y-2 scale-90 opacity-0"
            }`}
          >
            <ul>
              {menuLinks.map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-small font-medium transition-[opacity,transform,background-color,color] duration-500 ${
                      open ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
                    } ${isActive(link.href) ? "bg-gold/10 text-gold-bright" : "text-text/85 active:bg-surface-2"}`}
                    style={{ transitionDelay: open ? `${60 + i * 35}ms` : "0ms" }}
                  >
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-xl border ${
                        isActive(link.href) ? "border-gold/40 text-gold-bright" : "border-line text-gold"
                      }`}
                    >
                      <NavIcon href={link.href} />
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-2 flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-small font-medium"
            >
              <WhatsAppIcon />
              <span className="relative">WhatsApp us</span>
            </a>
          </nav>

          <button
            type="button"
            onClick={() => {
              setOpenedOn(pathname);
              setOpen(!open);
            }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="fab grid h-14 w-14 place-items-center rounded-full"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute inset-x-0 top-0 h-[1.5px] rounded-full bg-gold-bright transition-transform duration-500 ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute right-0 bottom-0 h-[1.5px] rounded-full bg-gold-bright transition-all duration-500 ${
                  open ? "w-5 -translate-y-[5px] -rotate-45" : "w-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
