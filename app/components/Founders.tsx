import Image from "next/image";
import Reveal from "./Reveal";

// Swap "#" for real portfolio / GitHub URLs when available.
const founders = [
  {
    name: "Gcina Mbabe",
    role: "Co-Founder · Software Developer",
    photo: "/founders/gcina-mbabe.webp",
    width: 1000,
    height: 1491,
    portfolio: "#",
    github: "#",
    position: "object-[50%_18%]",
  },
  {
    name: "Khumbulani Gumede",
    role: "Co-Founder · Software Developer",
    photo: "/founders/khumbulani-gumede.webp",
    width: 1000,
    height: 1333,
    portfolio: "#",
    github: "#",
    position: "object-[50%_12%]",
  },
];

function FounderCard({ founder, delay }: { founder: (typeof founders)[number]; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="group relative mx-auto w-full max-w-xs">
        {/* Soft glow behind the frame */}
        <div
          aria-hidden="true"
          className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-emerald-500/25 to-cyan-500/25 opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
        />
        {/* Rotating gradient ring */}
        <div className="founder-ring relative rounded-[2rem] p-[3px]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[calc(2rem-3px)] bg-surface">
            <Image
              src={founder.photo}
              alt={`${founder.name}, ${founder.role} at Malangeni Tech Guild`}
              width={founder.width}
              height={founder.height}
              className={`h-full w-full object-cover ${founder.position} transition-transform duration-700 ease-out group-hover:scale-105`}
            />
            {/* Name plate */}
            <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/15 bg-black/45 px-4 py-3 backdrop-blur-md">
              <p className="text-sm font-semibold text-white">{founder.name}</p>
              <p className="mt-0.5 text-xs text-emerald-300">{founder.role}</p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-3">
          <a
            href={founder.portfolio}
            className="rounded-full border border-line bg-surface/70 px-4 py-2 text-xs font-semibold backdrop-blur transition-colors hover:border-emerald-500/50 hover:text-emerald-500"
          >
            Portfolio
          </a>
          <a
            href={founder.github}
            className="flex items-center gap-1.5 rounded-full border border-line bg-surface/70 px-4 py-2 text-xs font-semibold backdrop-blur transition-colors hover:border-emerald-500/50 hover:text-emerald-500"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
              <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.05 11.05 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.68 5.38-5.24 5.66.41.35.77 1.05.77 2.12v3.15c0 .3.21.67.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Founders() {
  return (
    <section id="founders" className="relative overflow-hidden py-24 sm:py-32">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[56rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow-a),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr_1fr] lg:gap-8">
          {/* Left: Gcina */}
          <FounderCard founder={founders[0]} delay={100} />

          {/* Center: story */}
          <Reveal className="order-first text-center lg:order-none">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
              The founders
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built by developers,{" "}
              <span className="text-gradient">run by developers</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              Malangeni Tech Guild was founded by two software developers who
              believe great software comes from people who actually write it.
              When you work with us, you talk directly to the engineers
              building your product — no layers, no lost details.
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              Together we cover the full stack: web, mobile, backend and AI —
              one team from the first sketch to the final deploy.
            </p>
          </Reveal>

          {/* Right: Khumbulani */}
          <FounderCard founder={founders[1]} delay={200} />
        </div>
      </div>
    </section>
  );
}
