const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#founders", label: "Founders" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:px-8 md:flex-row md:justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 font-mono text-xs font-bold text-white">
            {"</>"}
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Malangeni <span className="text-gradient">Tech Guild</span>
          </span>
        </a>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Malangeni Tech Guild (PTY) LTD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
