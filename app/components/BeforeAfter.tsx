"use client";

import { useState, type ReactNode } from "react";

// Drag (or use arrow keys) to compare the client's old presence with the new site.
export default function BeforeAfter({ before, after }: { before: ReactNode; after: ReactNode }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative h-[340px] select-none overflow-hidden rounded-2xl border border-line-strong sm:h-[440px]">
      <div className="absolute inset-0">{after}</div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {before}
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-caption text-white backdrop-blur">Before</span>
      <span className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-caption text-white backdrop-blur">After</span>

      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }} aria-hidden="true">
        <div className="absolute inset-y-0 -left-px w-0.5 bg-gold-bright shadow-[0_0_20px_rgba(226,200,146,0.6)]" />
        <div className="absolute top-1/2 left-0 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold-bright bg-bg/80 text-gold-bright backdrop-blur">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="m9 6-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
