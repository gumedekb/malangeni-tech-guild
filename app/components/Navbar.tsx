"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  {
    href: "#services",
    label: "Services",
    icon: <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />,
  },
  {
    href: "#process",
    label: "Process",
    icon: <path d="M4 12h13m0 0-5-5m5 5-5 5M4 5h6M4 19h6" />,
  },
  {
    href: "#founders",
    label: "Founders",
    icon: (
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    ),
  },
  {
    href: "#work",
    label: "Work",
    icon: (
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-9 0h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
    ),
  },
  {
    href: "#contact",
    label: "Contact",
    icon: <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 1 8 6 8-6" />,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Malangeni Tech Guild — home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 font-mono text-sm font-bold text-white shadow-lg shadow-emerald-500/25">
            {"</>"}
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            <span className="sm:hidden">
              M<span className="text-gradient">TG</span>
            </span>
            <span className="hidden sm:inline">
              Malangeni <span className="text-gradient">Tech Guild</span>
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-4.5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-transform hover:scale-105 md:inline-block"
          >
            Start a project
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-line md:hidden"
          >
            <span
              className={`h-0.5 w-4 rounded bg-foreground transition-transform ${
                open ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-4 rounded bg-foreground transition-transform ${
                open ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-6 rounded-2xl border border-line bg-background/95 p-2.5 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="grid gap-0.5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-emerald-500/10 hover:text-foreground active:bg-emerald-500/15"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    {link.icon}
                  </svg>
                </span>
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-auto h-4 w-4 text-emerald-500 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                >
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </a>
            ))}
          </div>
          <div className="mt-2 flex justify-end border-t border-line pt-2.5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="group -mb-4 mr-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-emerald-500/45 transition-transform hover:scale-105"
            >
              Start a project
              <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
