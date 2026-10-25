import { StatusBar } from "../devices";

// EXAMPLE product UI: "Isitolo", a stock & sales app for spaza shops.
// Its own brand (warm orange on paper) shows we design for each product, not one house style.

const ink = "#1c1917";
const orange = "#ea7a2f";

function Shell({ children, tab }: { children: React.ReactNode; tab: number }) {
  const tabs = ["Today", "Sell", "Stock", "Reports"];
  return (
    <div className="flex h-full flex-col bg-[#faf7f2] text-[#1c1917]">
      <StatusBar />
      <div className="flex-1 overflow-hidden px-4 pt-2">{children}</div>
      <div className="grid grid-cols-4 border-t border-black/5 bg-white px-2 pt-2 pb-5">
        {tabs.map((t, i) => (
          <div key={t} className="flex flex-col items-center gap-1">
            <span className="h-1.5 w-5 rounded-full" style={{ background: i === tab ? orange : "#e7e1d8" }} />
            <span className="text-[10px] font-medium" style={{ color: i === tab ? ink : "#a8a29e" }}>
              {t}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function IsitoloToday() {
  const bars = [42, 58, 47, 70, 63, 88, 76];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <Shell tab={0}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] text-[#78716c]">Thandi&apos;s Spaza</p>
          <p className="text-[17px] font-semibold tracking-tight">Sawubona, Thandi</p>
        </div>
        <div className="grid h-9 w-9 place-items-center rounded-full text-[13px] font-semibold text-white" style={{ background: orange }}>
          T
        </div>
      </div>

      <div className="mt-4 rounded-2xl p-4 text-white" style={{ background: ink }}>
        <p className="text-[11px] text-white/60">Today&apos;s sales</p>
        <div className="mt-1 flex items-end justify-between">
          <p className="text-[28px] font-semibold tracking-tight">R2,340</p>
          <span className="mb-1.5 rounded-full bg-[#3f6212] px-2 py-0.5 text-[10px] font-semibold text-[#d9f99d]">+12%</span>
        </div>
        <div className="mt-4 flex h-20 items-end gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex h-full flex-1 flex-col items-center gap-1.5">
              <div className="flex w-full flex-1 items-end">
                <div
                  className="grow-bar w-full rounded-md"
                  style={{ height: `${h}%`, background: i === 5 ? orange : "rgba(255,255,255,0.18)", "--i": i } as React.CSSProperties}
                />
              </div>
              <span className="text-[9px] text-white/50">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 text-[12px] font-semibold">Recent sales</p>
      <ul className="mt-2 divide-y divide-black/5 rounded-2xl bg-white px-3">
        {[
          ["Bread × 2", "08:42", "R36"],
          ["Airtime", "08:31", "R50"],
          ["Milk 2L", "08:15", "R32"],
          ["Sugar 2kg", "07:58", "R46"],
        ].map(([item, time, price]) => (
          <li key={item} className="flex items-center justify-between py-2.5">
            <div>
              <p className="text-[12px] font-medium">{item}</p>
              <p className="text-[10px] text-[#a8a29e]">{time}</p>
            </div>
            <p className="text-[12px] font-semibold">{price}</p>
          </li>
        ))}
      </ul>
    </Shell>
  );
}

export function IsitoloSell() {
  const items = [
    ["Bread", "R18", "#f5d0a9"],
    ["Milk 2L", "R32", "#dbeafe"],
    ["Airtime", "R10+", "#fde68a"],
    ["Sugar 2kg", "R46", "#f5f5f4"],
    ["Maize 5kg", "R65", "#fef3c7"],
    ["Cold drink", "R15", "#fecaca"],
  ];
  return (
    <Shell tab={1}>
      <p className="text-[17px] font-semibold tracking-tight">New sale</p>
      <div className="mt-3 rounded-xl bg-white px-3 py-2.5 text-[11px] text-[#a8a29e]">Search products…</div>
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {items.map(([name, price, tint], i) => (
          <div key={name} className="relative rounded-2xl bg-white p-3">
            <div className="h-10 w-10 rounded-xl" style={{ background: tint }} />
            <p className="mt-2 text-[12px] font-medium">{name}</p>
            <p className="text-[11px] text-[#78716c]">{price}</p>
            {i < 2 ? (
              <span className="absolute right-2.5 top-2.5 grid h-5 w-5 place-items-center rounded-full text-[10px] font-semibold text-white" style={{ background: orange }}>
                {i === 0 ? 2 : 1}
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-2xl px-4 py-3 text-white" style={{ background: orange }}>
        <span className="text-[12px]">3 items · R68</span>
        <span className="text-[12px] font-semibold">Charge →</span>
      </div>
    </Shell>
  );
}

export function IsitoloStock() {
  const rows: [string, number, number][] = [
    ["Bread", 24, 80],
    ["Milk 2L", 3, 10],
    ["Airtime vouchers", 41, 90],
    ["Sugar 2kg", 2, 8],
    ["Maize meal 5kg", 12, 55],
    ["Cooking oil 2L", 9, 45],
  ];
  return (
    <Shell tab={2}>
      <div className="flex items-center justify-between">
        <p className="text-[17px] font-semibold tracking-tight">Stock</p>
        <span className="rounded-full bg-[#fee2e2] px-2 py-0.5 text-[10px] font-semibold text-[#b91c1c]">2 running low</span>
      </div>
      <ul className="mt-3 grid gap-2">
        {rows.map(([name, qty, pct], i) => {
          const low = pct <= 10;
          return (
            <li key={name} className="rounded-2xl bg-white p-3">
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-medium">{name}</p>
                <p className={`text-[11px] font-semibold ${low ? "text-[#b91c1c]" : ""}`}>{low ? `${qty} left` : qty}</p>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#f1ece4]">
                <div
                  className="grow-x h-full rounded-full"
                  style={{ width: `${Math.max(pct, 6)}%`, background: low ? "#dc2626" : orange, "--i": i } as React.CSSProperties}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </Shell>
  );
}

export function IsitoloWhatsApp() {
  return (
    <div className="flex h-full flex-col bg-[#efe7dd]">
      <div className="bg-[#0b3d36] text-white">
        <StatusBar dark />
        <div className="flex items-center gap-3 px-4 pb-3 pt-1">
          <div className="grid h-8 w-8 place-items-center rounded-full text-[12px] font-semibold" style={{ background: orange }}>
            i
          </div>
          <div>
            <p className="text-[13px] font-semibold">Isitolo</p>
            <p className="text-[10px] text-white/60">Daily report</p>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-3 px-3 py-4">
        <p className="mx-auto w-fit rounded-md bg-white/70 px-2 py-0.5 text-[10px] text-[#57534e]">Today</p>
        <div className="max-w-[88%] rounded-xl rounded-tl-sm bg-white p-3 text-[12px] leading-relaxed text-[#1c1917] shadow-sm">
          <p className="font-semibold">Good evening Thandi</p>
          <p className="mt-1.5">
            Today you made <b>R2,340</b> from <b>64 sales</b>. That&apos;s 12% more than yesterday.
          </p>
          <p className="mt-1.5">
            Best seller: <b>Bread</b> (31)
          </p>
          <p className="mt-1.5">
            Running low: <b>Milk 2L</b> (3), <b>Sugar 2kg</b> (2)
          </p>
          <p className="mt-1 text-right text-[9px] text-[#a8a29e]">19:00</p>
        </div>
        <div className="ml-auto max-w-[60%] rounded-xl rounded-tr-sm bg-[#d9fdd3] p-3 text-[12px] text-[#1c1917] shadow-sm">
          Order more milk tomorrow
          <p className="mt-1 text-right text-[9px] text-[#78716c]">19:02 ✓✓</p>
        </div>
      </div>
    </div>
  );
}

export function IsitoloReports() {
  const best: [string, number][] = [
    ["Bread", 100],
    ["Airtime", 78],
    ["Cold drinks", 61],
    ["Milk 2L", 47],
    ["Maize meal", 32],
  ];
  return (
    <Shell tab={3}>
      <p className="text-[17px] font-semibold tracking-tight">This month</p>
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        <div className="rounded-2xl bg-white p-3">
          <p className="text-[10px] text-[#78716c]">Sales</p>
          <p className="text-[18px] font-semibold">R61,480</p>
        </div>
        <div className="rounded-2xl bg-white p-3">
          <p className="text-[10px] text-[#78716c]">Profit</p>
          <p className="text-[18px] font-semibold" style={{ color: "#3f6212" }}>
            R14,920
          </p>
        </div>
      </div>
      <p className="mt-5 text-[12px] font-semibold">Best sellers</p>
      <ul className="mt-2 grid gap-3 rounded-2xl bg-white p-3">
        {best.map(([name, pct], i) => (
          <li key={name}>
            <div className="flex justify-between text-[11px]">
              <span className="font-medium">
                {i + 1}. {name}
              </span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#f1ece4]">
              <div className="grow-x h-full rounded-full" style={{ width: `${pct}%`, background: i === 0 ? orange : "#d6cfc4", "--i": i } as React.CSSProperties} />
            </div>
          </li>
        ))}
      </ul>
    </Shell>
  );
}

export function IsitoloIcon({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <div
      className={`grid place-items-center rounded-[22%] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] ${className}`}
      style={{ background: `linear-gradient(160deg, #f59e4b, ${orange} 55%, #c2561a)` }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5 5 4h14l2 5.5M3 9.5h18M3 9.5v.5a3 3 0 0 0 6 0v-.5m0 .5a3 3 0 0 0 6 0v-.5m0 .5a3 3 0 0 0 6 0v-.5M5 13v7h14v-7" />
      </svg>
    </div>
  );
}
