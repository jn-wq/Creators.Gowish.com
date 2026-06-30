import { Check, X } from "lucide-react";

const rows: [string, boolean, boolean][] = [
  ["Permanent hjem til dine anbefalinger",       true,  false],
  ["Tjen kommission på hvert salg",               true,  true ],
  ["75.000+ shops uden outreach",                 true,  false],
  ["Ingen ansøgning eller venteliste",            true,  false],
  ["Followers kan handle igen og igen",           true,  false],
  ["Indbygget analytics dashboard",               true,  false],
  ["Forsvinder efter 24 timer (Stories)",         false, true ],
];

export function Comparison() {
  return (
    <section id="sammenligning" className="mx-auto max-w-[1180px] px-6 py-28">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] items-end mb-14">
        <div>
          <p className="eyebrow">04 — Sammenligning</p>
          <h2 className="title-l mt-4 text-[clamp(2rem,4.4vw,3.6rem)]">
            GoWish vs.{" "}
            <span className="font-['Instrument_Serif'] italic font-normal text-accent">
              resten.
            </span>
          </h2>
        </div>
        <p className="text-[18px] text-ink-2 leading-[1.45] max-w-[58ch] md:justify-self-end">
          De fleste affiliate-værktøjer er bygget til webshops. GoWish er bygget til
          den måde creators faktisk anbefaler på — liste-first, permanent, personlig.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-line">
        <div className="grid grid-cols-[2fr_1fr_1fr] bg-ink text-bg">
          <div className="p-5 label-kpi !text-bg/60">Feature</div>
          <div className="p-5 flex items-center gap-2 font-semibold text-[15px]">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-white text-[11px] font-bold">
              Ø
            </span>
            GoWish Creator
          </div>
          <div className="p-5 font-semibold text-[15px] text-bg/75">
            Typisk affiliate-link
          </div>
        </div>
        {rows.map(([label, gowish, other], i) => (
          <div
            key={label}
            className={`grid grid-cols-[2fr_1fr_1fr] border-t border-line ${
              i % 2 ? "bg-bg-alt" : "bg-bg"
            }`}
          >
            <div className="p-5 text-[16px] text-ink-2">{label}</div>
            <Cell yes={gowish} highlight />
            <Cell yes={other} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Cell({ yes, highlight }: { yes: boolean; highlight?: boolean }) {
  return (
    <div className="p-5 flex items-center">
      {yes ? (
        <span
          className={`grid h-7 w-7 place-items-center rounded-full ${
            highlight ? "bg-accent text-white" : "bg-pink text-accent-ink"
          }`}
        >
          <Check className="h-4 w-4" strokeWidth={2.5} />
        </span>
      ) : (
        <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-tint text-ink-3">
          <X className="h-4 w-4" strokeWidth={2.5} />
        </span>
      )}
    </div>
  );
}
