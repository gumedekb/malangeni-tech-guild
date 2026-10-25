import { StatusBar } from "../devices";

// EXAMPLE client site: "Lwazi's Kitchen", a caterer on the South Coast.
// Cream, tomato and olive with serif headings — the client's brand, not ours.

const cream = "#f5eee3";
const tomato = "#b4432a";
const olive = "#4b5a2a";
const ink = "#2a211b";

// A plate of Sunday seven colours, drawn in CSS
export function Plate({ size = 220 }: { size?: number }) {
  const blob = (style: React.CSSProperties) => <span className="absolute rounded-full" style={style} />;
  return (
    <div
      className="relative shrink-0 rounded-full"
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle at 35% 30%, #ffffff, #ece4d6 70%, #d9cdb8)",
        boxShadow: "0 30px 60px -25px rgba(42,33,27,0.55), inset 0 0 0 10px #f7f2ea",
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-[14%] rounded-full" style={{ background: "#fbf8f2" }}>
        {blob({ left: "12%", top: "16%", width: "42%", height: "40%", background: "radial-gradient(circle at 40% 35%, #f8e3a8, #e8c46c)" })}
        {blob({ right: "10%", top: "14%", width: "32%", height: "30%", background: "radial-gradient(circle at 40% 35%, #b02a55, #6e1430)" })}
        {blob({ right: "14%", bottom: "16%", width: "34%", height: "32%", background: "radial-gradient(circle at 40% 35%, #f3a54f, #d4701d)" })}
        {blob({ left: "16%", bottom: "12%", width: "36%", height: "32%", background: "radial-gradient(circle at 40% 35%, #8aa34a, #4f6a22)" })}
        {blob({ left: "40%", top: "40%", width: "28%", height: "24%", background: "radial-gradient(circle at 40% 35%, #a5552b, #5e2a12)" })}
      </div>
    </div>
  );
}

function Logo({ small = false }: { small?: boolean }) {
  return (
    <span className="font-serif italic" style={{ color: ink, fontSize: small ? 18 : 22 }}>
      Lwazi&apos;s <span style={{ color: tomato }}>Kitchen</span>
    </span>
  );
}

const menu = [
  { name: "Wedding platters", from: "R180 pp", tint: "#e9d3b8" },
  { name: "Office lunches", from: "R85 pp", tint: "#d8dcc1" },
  { name: "Sunday seven colours", from: "R95", tint: "#f0c9b8" },
];

// Full desktop homepage. Tall on purpose so the browser frame can scroll through it.
export function LwaziDesktop() {
  return (
    <div className="font-sans" style={{ background: cream, color: ink }}>
      <div className="flex items-center justify-between px-10 py-5">
        <Logo />
        <div className="flex items-center gap-7 text-[13px]" style={{ color: "#6b5d50" }}>
          <span>Menu</span>
          <span>Events</span>
          <span>About</span>
          <span className="rounded-full px-4 py-2 text-[12px] font-medium text-white" style={{ background: tomato }}>
            Order on WhatsApp
          </span>
        </div>
      </div>

      <div className="grid grid-cols-[1.1fr_1fr] items-center gap-6 px-10 pt-8 pb-14">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: olive }}>
            Scottburgh · Umzinto · Pennington
          </p>
          <h3 className="mt-4 font-serif text-[46px] leading-[1.02] tracking-tight">
            Home-cooked catering for the <i style={{ color: tomato }}>South Coast.</i>
          </h3>
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed" style={{ color: "#6b5d50" }}>
            Weddings, memorials, office lunches and Sunday seven colours. Cooked fresh, delivered hot.
          </p>
          <div className="mt-6 flex gap-3">
            <span className="rounded-full px-5 py-2.5 text-[13px] font-medium text-white" style={{ background: tomato }}>
              Get a quote
            </span>
            <span className="rounded-full border px-5 py-2.5 text-[13px] font-medium" style={{ borderColor: "#d8c9b4" }}>
              See the menu
            </span>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-6 rounded-full" style={{ background: "#ead9c1" }} />
          <div className="relative">
            <Plate size={260} />
          </div>
        </div>
      </div>

      <div className="mx-10 grid grid-cols-3 gap-4 border-y py-5 text-center" style={{ borderColor: "#e3d6c3" }}>
        {[
          ["Since 2019", "cooking for the coast"],
          ["Halaal options", "on every menu"],
          ["5-star", "on Google"],
        ].map(([a, b]) => (
          <div key={a}>
            <p className="font-serif text-[22px]">{a}</p>
            <p className="text-[11px]" style={{ color: "#8a7a6a" }}>
              {b}
            </p>
          </div>
        ))}
      </div>

      <div className="px-10 py-12">
        <h4 className="font-serif text-[32px] tracking-tight">The menu</h4>
        <div className="mt-5 grid grid-cols-3 gap-4">
          {menu.map((m) => (
            <div key={m.name} className="overflow-hidden rounded-2xl bg-white">
              <div className="flex h-28 items-center justify-center" style={{ background: m.tint }}>
                <Plate size={84} />
              </div>
              <div className="p-4">
                <p className="text-[14px] font-medium">{m.name}</p>
                <p className="text-[12px]" style={{ color: tomato }}>
                  from {m.from}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-10 rounded-3xl px-10 py-10 text-center" style={{ background: olive, color: cream }}>
        <p className="font-serif text-[24px] italic leading-snug">
          &ldquo;Two hundred guests and every plate came back empty.&rdquo;
        </p>
        <p className="mt-3 text-[12px] opacity-70">Nomsa, wedding in Hibberdene</p>
      </div>

      <div className="mt-12 flex items-center justify-between border-t px-10 py-6 text-[11px]" style={{ borderColor: "#e3d6c3", color: "#8a7a6a" }}>
        <Logo small />
        <span>Order on WhatsApp · 07X XXX XXXX</span>
      </div>
    </div>
  );
}

export function LwaziMobileHome() {
  return (
    <div className="flex h-full flex-col" style={{ background: cream, color: ink }}>
      <StatusBar />
      <div className="flex items-center justify-between px-5 py-3">
        <Logo small />
        <span className="flex flex-col gap-1" aria-hidden="true">
          <span className="h-px w-5" style={{ background: ink }} />
          <span className="h-px w-5" style={{ background: ink }} />
        </span>
      </div>
      <div className="px-5 pt-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: olive }}>
          South Coast catering
        </p>
        <h3 className="mt-3 font-serif text-[34px] leading-[1.02]">
          Home-cooked, <i style={{ color: tomato }}>delivered hot.</i>
        </h3>
      </div>
      <div className="mt-6 flex justify-center">
        <Plate size={200} />
      </div>
      <div className="mt-auto px-5 pb-8">
        <span className="block rounded-full py-3.5 text-center text-[13px] font-medium text-white" style={{ background: tomato }}>
          Order on WhatsApp
        </span>
      </div>
    </div>
  );
}

export function LwaziMobileMenu() {
  const items = [
    ["Sunday seven colours", "R95"],
    ["Chicken & rice platter", "R120"],
    ["Beef stew & dumplings", "R110"],
    ["Vegetable curry", "R85"],
    ["Wedding platter", "R180 pp"],
  ];
  return (
    <div className="h-full" style={{ background: cream, color: ink }}>
      <StatusBar />
      <div className="px-5 pt-3">
        <Logo small />
        <h3 className="mt-5 font-serif text-[30px] leading-none">The menu</h3>
        <div className="mt-4 flex gap-2 text-[11px]">
          {["Everyday", "Events", "Halaal"].map((t, i) => (
            <span
              key={t}
              className="rounded-full px-3 py-1"
              style={i === 0 ? { background: ink, color: cream } : { border: "1px solid #d8c9b4" }}
            >
              {t}
            </span>
          ))}
        </div>
        <ul className="mt-5 divide-y" style={{ borderColor: "#e3d6c3" }}>
          {items.map(([name, price]) => (
            <li key={name} className="flex items-center gap-3 py-3" style={{ borderColor: "#e3d6c3" }}>
              <Plate size={44} />
              <span className="flex-1 text-[13px]">{name}</span>
              <span className="text-[12px] font-semibold" style={{ color: tomato }}>
                {price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function LwaziMobileOrder() {
  return (
    <div className="flex h-full flex-col bg-[#efe7dd]">
      <div className="bg-[#0b3d36] text-white">
        <StatusBar dark />
        <div className="flex items-center gap-3 px-4 pb-3 pt-1">
          <div className="grid h-8 w-8 place-items-center rounded-full font-serif text-[14px] italic" style={{ background: cream, color: tomato }}>
            L
          </div>
          <div>
            <p className="text-[13px] font-semibold">Lwazi&apos;s Kitchen</p>
            <p className="text-[10px] text-white/60">Business account</p>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-3 px-3 py-4 text-[12px] text-[#1c1917]">
        <div className="ml-auto max-w-[80%] rounded-xl rounded-tr-sm bg-[#d9fdd3] p-3 shadow-sm">
          Hi! I&apos;d like a quote: <b>Wedding platter</b> for <b>120 guests</b> on 14 March, Hibberdene.
          <p className="mt-1 text-right text-[9px] text-[#78716c]">10:14 ✓✓</p>
        </div>
        <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-white p-3 shadow-sm">
          Thank you! That&apos;s <b>R21,600</b> including delivery and setup. A 50% deposit secures the date.
          <p className="mt-1 text-right text-[9px] text-[#a8a29e]">10:21</p>
        </div>
      </div>
    </div>
  );
}

// "Before": how the business looked online before the project — a busy flyer posted on Facebook.
export function LwaziBefore() {
  return (
    <div className="flex h-full w-full items-center justify-start bg-[#d7d3cc] p-6 sm:pl-[6%]">
      <div className="w-full max-w-[min(26rem,44%)] -rotate-1 bg-[#fff8c4] p-4 text-center shadow-lg sm:p-6" style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive" }}>
        <p className="text-[30px] font-bold leading-tight text-[#d40000]">LWAZI&apos;S KITCHEN!!!</p>
        <p className="mt-2 text-[16px] text-[#1b3fae]">Catering for ALL occasions</p>
        <p className="mt-1 text-[14px] text-[#333]">weddings * funerals * parties * office</p>
        <div className="mx-auto mt-4 h-24 w-40 bg-[repeating-linear-gradient(45deg,#c9b98a,#c9b98a_6px,#b8a874_6px,#b8a874_12px)] opacity-70" />
        <p className="mt-4 text-[18px] font-bold text-[#007a00]">CALL/WHATSAPP 07X XXX XXXX</p>
        <p className="mt-1 text-[13px] text-[#555]">DM for prices!! No time wasters pls</p>
      </div>
    </div>
  );
}

// "After" panel for the comparison slider: the new hero, filling the frame.
export function LwaziAfter() {
  return (
    <div className="flex h-full w-full items-center justify-end gap-8 px-6 sm:px-10" style={{ background: cream, color: ink }}>
      <div className="hidden lg:block">
        <Plate size={200} />
      </div>
      <div className="w-[46%]">
        <Logo />
        <h3 className="mt-4 font-serif text-[clamp(20px,3.4vw,40px)] leading-[1.02] tracking-tight">
          Home-cooked catering for the <i style={{ color: tomato }}>South Coast.</i>
        </h3>
        <span className="mt-6 inline-block rounded-full px-5 py-2.5 text-[13px] font-medium text-white" style={{ background: tomato }}>
          Order on WhatsApp
        </span>
      </div>
    </div>
  );
}
