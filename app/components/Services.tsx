import Reveal from "./Reveal";

const services = [
  {
    title: "Web Applications",
    description:
      "Full-featured web apps — dashboards, portals, SaaS products — built with Next.js, React and TypeScript for speed and scale.",
    icon: (
      <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm0 4h18M7 6.5h.01M10 6.5h.01" />
    ),
  },
  {
    title: "Websites & Blogs",
    description:
      "Fast, SEO-friendly marketing sites, company pages and blogs that look sharp on every screen and load in a blink.",
    icon: (
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c2.5-2.2 4-5.4 4-9s-1.5-6.8-4-9c-2.5 2.2-4 5.4-4 9s1.5 6.8 4 9ZM3.5 9h17M3.5 15h17" />
    ),
  },
  {
    title: "Android Applications",
    description:
      "Polished Android apps designed for real users — from concept and UI to Play Store release and updates.",
    icon: (
      <path d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm2 15.5h4M6 7h12" />
    ),
  },
  {
    title: "AI & Automation",
    description:
      "Chatbots, AI integrations and workflow automation that cut manual work and unlock what your data can do.",
    icon: (
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3M7 7 5 5m14 14-2-2M7 17l-2 2M19 5l-2 2M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
    ),
  },
  {
    title: "APIs & Backends",
    description:
      "Reliable server-side foundations — REST APIs, databases, authentication and third-party integrations done right.",
    icon: (
      <path d="M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    ),
  },
  {
    title: "Care & Maintenance",
    description:
      "We stay after launch — hosting, monitoring, security updates and new features as your product grows.",
    icon: (
      <path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 0 0 6-6L14 13l-3-3 3.7-3.7Z" />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
            What we do
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            One guild, every{" "}
            <span className="text-gradient">digital craft</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Whatever shape your idea takes — a web app, a website, a mobile app
            or an automated workflow — we design it, build it and ship it.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 100}>
              <article className="card-lift group h-full rounded-2xl border border-line bg-surface/70 p-7 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 text-emerald-500 transition-colors group-hover:from-emerald-500 group-hover:to-cyan-500 group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    {service.icon}
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
