const capabilities = [
  { tag: "#WebApps", color: "text-emerald-500 dark:text-emerald-400 border-emerald-500/30" },
  { tag: "#Websites", color: "text-cyan-600 dark:text-cyan-400 border-cyan-500/30" },
  { tag: "#Blogs", color: "text-teal-600 dark:text-teal-400 border-teal-500/30" },
  { tag: "#AndroidApps", color: "text-emerald-500 dark:text-emerald-400 border-emerald-500/30" },
  { tag: "#AIAutomation", color: "text-cyan-600 dark:text-cyan-400 border-cyan-500/30" },
  { tag: "#APIs", color: "text-teal-600 dark:text-teal-400 border-teal-500/30" },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Android",
  "Kotlin",
  "PostgreSQL",
  "AI Integrations",
  "GitHub",
  "Vercel",
  "REST APIs",
];

export default function Hero() {
  return (
    <section id="top" className="hero-backdrop relative overflow-hidden pt-36 pb-16 sm:pt-44">
      <div className="grid-pattern pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Floating orbs */}
      <div
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute left-[8%] top-40 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-500/25 to-cyan-500/10 blur-xl"
      />
      <div
        aria-hidden="true"
        className="animate-float-slower pointer-events-none absolute right-[10%] top-64 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 blur-xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Software Development Studio · South Africa
        </div>

        <h1
          className="animate-fade-up mx-auto mt-7 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
          style={{ "--fade-delay": "120ms" } as React.CSSProperties}
        >
          We build <span className="text-gradient">software</span> that moves
          your business forward
        </h1>

        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          style={{ "--fade-delay": "240ms" } as React.CSSProperties}
        >
          From web applications and websites to Android apps and AI-powered
          automation — Malangeni Tech Guild takes your idea from concept to
          launch, and beyond.
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-4"
          style={{ "--fade-delay": "360ms" } as React.CSSProperties}
        >
          <a
            href="#contact"
            className="group rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 hover:shadow-emerald-500/45"
          >
            Start a project
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#work"
            className="rounded-full border border-line bg-surface/60 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:border-emerald-500/50"
          >
            See our work
          </a>
        </div>

        <div
          className="animate-fade-up mt-12 flex flex-wrap items-center justify-center gap-2.5"
          style={{ "--fade-delay": "480ms" } as React.CSSProperties}
        >
          {capabilities.map((cap) => (
            <span
              key={cap.tag}
              className={`rounded-full border bg-surface/50 px-3.5 py-1.5 text-xs font-medium backdrop-blur ${cap.color}`}
            >
              {cap.tag}
            </span>
          ))}
        </div>
      </div>

      {/* Tech stack ticker */}
      <div className="ticker-mask relative mt-16 overflow-hidden border-y border-line py-4">
        <div className="animate-ticker flex w-max gap-10">
          {[...stack, ...stack].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex items-center gap-10 whitespace-nowrap font-mono text-sm text-muted"
            >
              {tech}
              <span className="text-emerald-500/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
