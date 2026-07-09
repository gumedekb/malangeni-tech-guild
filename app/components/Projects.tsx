import Reveal from "./Reveal";

// Replace these placeholders with real GitHub repos / live links when ready.
const projects = [
  {
    title: "Project One",
    blurb: "A production web application — case study on the way.",
    tags: ["Next.js", "TypeScript"],
  },
  {
    title: "Project Two",
    blurb: "An Android application — case study on the way.",
    tags: ["Android", "Kotlin"],
  },
  {
    title: "Project Three",
    blurb: "An AI automation build — case study on the way.",
    tags: ["AI", "Automation"],
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative border-y border-line bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
            Our work
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Shipped, open and <span className="text-gradient">on GitHub</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            We publish our projects on GitHub. Full case studies and repository
            links are landing here soon.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <article className="card-lift group h-full overflow-hidden rounded-2xl border border-line bg-surface/70 backdrop-blur">
                {/* Thumbnail placeholder */}
                <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-500/12 via-teal-500/8 to-cyan-500/12">
                  <div className="grid-pattern absolute inset-0" aria-hidden="true" />
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="relative h-10 w-10 text-emerald-500/60 transition-transform duration-500 group-hover:scale-110"
                  >
                    <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-2.5-11-3 14" />
                  </svg>
                  <span className="absolute right-3 top-3 rounded-full border border-emerald-500/30 bg-surface/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-500 backdrop-blur">
                    Coming soon
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
