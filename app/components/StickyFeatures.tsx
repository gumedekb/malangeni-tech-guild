"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Phone } from "./devices";

type Feature = { title: string; body: string; screen: ReactNode };

// Product storytelling: the phone stays pinned while the features scroll past,
// and its screen changes to match the feature in the middle of the viewport.
export default function StickyFeatures({ features, accent = "#c8a96a" }: { features: Feature[]; accent?: string }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:gap-24">
      <ol>
        {features.map((f, i) => (
          <li
            key={f.title}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-index={i}
            className="flex flex-col justify-center py-10 lg:min-h-[78vh] lg:py-0"
          >
            <div
              className={`transition-all duration-700 lg:max-w-md ${
                active === i ? "lg:opacity-100" : "lg:opacity-30"
              }`}
            >
              <span className="font-serif text-[2.5rem] italic leading-none" style={{ color: accent }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-h3 font-semibold">{f.title}</h3>
              <p className="mt-4 text-body text-muted">{f.body}</p>
            </div>
            {/* On small screens each feature shows its own phone */}
            <div className="mt-10 flex justify-center lg:hidden">
              <Phone className="[zoom:0.85]">{f.screen}</Phone>
            </div>
          </li>
        ))}
      </ol>

      <div className="hidden lg:block">
        <div className="sticky top-[calc(50vh-290px)]">
          <div
            aria-hidden="true"
            className="absolute -inset-16 -z-10 rounded-full opacity-40 blur-3xl transition-colors duration-700"
            style={{ background: `radial-gradient(closest-side, ${accent}55, transparent)` }}
          />
          <Phone>
            {features.map((f, i) => (
              <div
                key={f.title}
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? "none" : active > i ? "translateY(-24px) scale(0.98)" : "translateY(24px) scale(0.98)",
                }}
                aria-hidden={active !== i}
              >
                {f.screen}
              </div>
            ))}
          </Phone>
          <div className="mt-8 flex justify-center gap-2" aria-hidden="true">
            {features.map((f, i) => (
              <span
                key={f.title}
                className="h-1 rounded-full transition-all duration-500"
                style={{ width: active === i ? 28 : 8, background: active === i ? accent : "rgba(242,238,230,0.2)" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
