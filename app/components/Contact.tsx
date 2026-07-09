import Reveal from "./Reveal";

const CONTACT_EMAIL = "nastykgumede@gmail.com"; // TODO: swap for a company address when ready

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/70 px-6 py-16 text-center backdrop-blur sm:px-12">
            {/* Glow accents */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl"
            />

            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
                Let&apos;s talk
              </span>
              <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
                Have an idea? <span className="text-gradient">Let&apos;s build it.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Tell us what you want to create — a web app, a website, an
                Android app or an automation. We&apos;ll reply with a plan, a
                timeline and an honest price.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Project%20enquiry%20—%20Malangeni%20Tech%20Guild`}
                  className="group rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 hover:shadow-emerald-500/45"
                >
                  Email the guild
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <span className="font-mono text-sm text-muted">{CONTACT_EMAIL}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
