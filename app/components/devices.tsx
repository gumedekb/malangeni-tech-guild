import type { ReactNode } from "react";

// Phone frame, designed at 280×580. Scale it with the `zoom` utility, e.g. className="[zoom:0.8]".
export function Phone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative h-[580px] w-[280px] shrink-0 rounded-[46px] border border-line-strong bg-[#050505] p-[9px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9),0_0_0_1px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[37px]">
        {children}
        <div aria-hidden="true" className="absolute left-1/2 top-2.5 z-20 h-[22px] w-[84px] -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  );
}

// Browser window. `viewHeight` is the visible page height; hovering scrolls the page inside.
export function Browser({
  url,
  children,
  viewHeight = 420,
  className = "",
}: {
  url: string;
  children: ReactNode;
  viewHeight?: number;
  className?: string;
}) {
  return (
    <div
      className={`scroll-host overflow-hidden rounded-2xl border border-line-strong bg-[#101012] shadow-[0_50px_100px_-40px_rgba(0,0,0,0.95)] ${className}`}
      style={{ "--view-h": `${viewHeight}px` } as React.CSSProperties}
    >
      <div className="flex h-10 items-center gap-3 border-b border-white/5 px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="mx-auto flex h-6 w-full max-w-xs items-center justify-center gap-1.5 rounded-md bg-white/5 text-[11px] text-white/45">
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          {url}
        </div>
        <div className="w-10" aria-hidden="true" />
      </div>
      <div className="relative overflow-hidden" style={{ height: viewHeight }}>
        <div className="auto-scroll">{children}</div>
      </div>
    </div>
  );
}

export function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex h-11 items-end justify-between px-6 pb-1 text-[11px] font-semibold ${dark ? "text-white" : "text-[#1c1917]"}`}>
      <span>9:41</span>
      <span className="flex items-center gap-1" aria-hidden="true">
        <svg viewBox="0 0 18 12" className="h-2.5 w-3.5" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5" width="3" height="7" rx="1" />
          <rect x="10" y="2" width="3" height="10" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" opacity=".35" />
        </svg>
        <svg viewBox="0 0 26 12" className="h-2.5 w-5" fill="none" stroke="currentColor">
          <rect x="0.5" y="0.5" width="22" height="11" rx="3" opacity=".5" />
          <rect x="2" y="2" width="15" height="8" rx="2" fill="currentColor" stroke="none" />
          <rect x="24" y="4" width="1.5" height="4" rx=".75" fill="currentColor" stroke="none" />
        </svg>
      </span>
    </div>
  );
}
