// Monogram in a glowing gold ring: a tall T with M and G tucked under its arms.
// Switch `mark` to "m" for the single-letter version.
export default function Logo({ mark = "mtg" }: { mark?: "mtg" | "m" }) {
  return (
    <span className="flex items-center gap-3">
      <span aria-hidden="true" className="monogram grid h-11 w-11 shrink-0 place-items-center rounded-full font-serif leading-none">
        {mark === "mtg" ? (
          <span className="flex items-baseline pt-[2px]">
            <span className="monogram-letters -mr-[2px] text-[16px]">M</span>
            <span className="monogram-letters text-[22px]">T</span>
            <span className="monogram-letters -ml-[2px] text-[16px]">G</span>
          </span>
        ) : (
          <span className="monogram-letters text-[22px] italic">M</span>
        )}
      </span>
      <span className="leading-tight">
        <span className="block text-small font-semibold tracking-tight">Malangeni</span>
        <span className="block text-[11px] uppercase tracking-[0.22em] text-muted">Tech Guild</span>
      </span>
    </span>
  );
}
