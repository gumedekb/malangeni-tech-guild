import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We sit down with you, understand the problem and map out exactly what needs to be built — no jargon, no guesswork.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes and clean, user-friendly interfaces you can react to before a single line of production code is written.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Short, visible iterations with modern tooling. You watch the product take shape and steer it as we go.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We ship it, monitor it and keep improving it. Your product stays fast, secure and up to date.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative border-y border-line bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
            How we work
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            From idea to launch, <span className="text-gradient">step by step</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 120}>
              <div className="card-lift relative h-full rounded-2xl border border-line bg-surface/70 p-7 backdrop-blur">
                <span className="font-mono text-sm font-bold text-emerald-500">
                  {step.number}
                </span>
                <div className="mt-3 h-px w-10 bg-gradient-to-r from-emerald-500 to-cyan-500" />
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
