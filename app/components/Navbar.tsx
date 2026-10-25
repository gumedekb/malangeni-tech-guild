"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { WhatsAppIcon } from "./ui";
import { nav, whatsappLink } from "../lib/site";

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
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header style={{ viewTransitionName: "site-header" }} className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled && !open ? "border-b border-line bg-bg/70 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <nav className="shell flex h-20 items-center justify-between gap-4">
          <Link href="/" aria-label="Malangeni Tech Guild — home" className="relative z-10">
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

          <div className="relative z-10 flex items-center gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden items-center gap-2 rounded-full px-4 py-2.5 text-small font-medium sm:inline-flex"
            >
              <WhatsAppIcon />
              <span className="relative">WhatsApp us</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setOpenedOn(pathname);
                setOpen(!open);
              }}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-line-strong md:hidden"
            >
              <span
                className={`h-px w-4.5 bg-text transition-transform duration-500 ${open ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-4.5 bg-text transition-transform duration-500 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Full-screen mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 -z-10 overflow-hidden bg-bg transition-[opacity,visibility] duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="aurora" aria-hidden="true" />
        <div className="shell relative flex h-full flex-col justify-between pt-28 pb-10">
          <ul className="grid gap-1">
            {nav.map((link, i) => (
              <li
                key={link.href}
                className="overflow-hidden"
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-[2.5rem] font-semibold tracking-tight transition-all duration-700 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  } ${isActive(link.href) ? "text-gold-bright" : "text-text"}`}
                  style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-body font-medium"
          >
            <WhatsAppIcon />
            <span className="relative">WhatsApp us</span>
          </a>
        </div>
      </div>
    </header>
  );
}
