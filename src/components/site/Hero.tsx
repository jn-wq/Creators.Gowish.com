import { ArrowRight } from "lucide-react";

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.01a8.16 8.16 0 0 0 4.77 1.52V7.1a4.85 4.85 0 0 1-1.84-.41z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PinterestIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.64 19.32c-.09-.79-.17-2 .04-2.86.18-.78 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.85 0 1.27.64 1.27 1.41 0 .86-.55 2.14-.83 3.33-.24 1 .5 1.81 1.48 1.81 1.78 0 3.15-1.88 3.15-4.59 0-2.4-1.72-4.08-4.19-4.08-2.85 0-4.53 2.14-4.53 4.36 0 .86.33 1.78.74 2.29.08.1.09.18.07.28-.07.31-.24.97-.27 1.11-.04.18-.14.22-.33.13-1.21-.56-1.97-2.33-1.97-3.76 0-3.05 2.22-5.86 6.41-5.86 3.37 0 5.98 2.4 5.98 5.6 0 3.34-2.11 6.04-5.04 6.04-.99 0-1.91-.51-2.23-1.12 0 0-.49 1.86-.61 2.32-.22.85-.81 1.91-1.21 2.56A10 10 0 1 0 12 2z" />
    </svg>
  );
}

const orbitDots = [
  { x: 5,  y: 20, Icon: TikTokIcon,    bg: "bg-pink-2"     },
  { x: 12, y: 60, Icon: InstagramIcon, bg: "bg-blue-soft-2"},
  { x: 8,  y: 80, Icon: PinterestIcon, bg: "bg-cream"      },
  { x: 91, y: 25, Icon: InstagramIcon, bg: "bg-pink-2"     },
  { x: 94, y: 50, Icon: TikTokIcon,    bg: "bg-blue-soft-2"},
  { x: 88, y: 75, Icon: PinterestIcon, bg: "bg-cream"      },
];

const stats = [
  { n: "3,6M",   l: "Brugere i Danmark"     },
  { n: "950+",   l: "Aktive creators"        },
  { n: "41.200", l: "Gns. reach pr. creator" },
  { n: "75.000", l: "Partnershops"           },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute inset-x-0 -top-40 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,99,52,0.10),transparent_70%)]" />

      {orbitDots.map(({ x, y, Icon, bg }, i) => (
        <div
          key={i}
          className={`absolute hidden lg:grid place-items-center h-14 w-14 rounded-full ${bg} border border-line text-ink shadow-sm`}
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          <Icon className="h-6 w-6" />
        </div>
      ))}

      <div className="relative mx-auto max-w-[1180px] px-6 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-line bg-bg/80 backdrop-blur px-3.5 py-1.5 text-[13px] text-ink-2 mb-7">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="font-medium">
            Creator Takeover 2026 — <span className="text-accent-ink font-semibold">Nu åben for ansøgninger</span>
          </span>
        </div>

        <h1 className="text-[clamp(2.8rem,7.5vw,6rem)] font-semibold leading-[0.97] tracking-[-0.035em] text-ink mx-auto max-w-[18ch]">
          Forvandl dine<br />
          anbefalinger til en{" "}
          <span className="font-['Instrument_Serif'] italic font-normal text-accent">
            permanent destination
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-[54ch] text-[18px] md:text-[20px] text-ink-2 leading-[1.45]">
          Creator Marketing + Ønskeliste i ét. Bliv en del af{" "}
          <span className="font-semibold text-ink">950+ creators</span> der driver inspiration,
          ønsker og køb — med et permanent link i bio.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#kom-i-gang" className="btn-accent">
            Bliv creator <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#fordele" className="btn-ghost">
            Se fordelene
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {stats.map((s) => (
            <div key={s.l} className="bg-bg p-6 text-left">
              <div className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold tracking-[-0.04em] leading-none text-ink">
                {s.n}
              </div>
              <div className="label-kpi mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
