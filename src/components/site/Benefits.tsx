import { Wallet, Globe, TrendingUp, Gift, ShieldCheck, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    n: "01",
    title: "75.000+ shops klar med det samme",
    body: "Ingen outreach. Ingen kontrakter. Vælg bare produkter fra brands du alligevel ville anbefale — og start med at tjene.",
    tint: "bg-pink",
  },
  {
    icon: Wallet,
    n: "02",
    title: "Permanent udbetalingslink",
    body: "Hvert ønske du opretter er et permanent købssignal. Du tjener kommission hver gang nogen handler fra din liste — så længe den lever.",
    tint: "bg-blue-soft",
  },
  {
    icon: Gift,
    n: "03",
    title: "Din liste er din destination",
    body: "Followers gemmer den, deler den og vender tilbage til den. Dine anbefalinger forsvinder ikke efter 24 timer som en Story.",
    tint: "bg-cream-soft",
  },
  {
    icon: TrendingUp,
    n: "04",
    title: "Fuld-funnel data i realtid",
    body: "Se reach, klik, konverteringer og kommission rulle ind. Præcise tal — ingen fluff. Bygget til creators der holder øje med tallene.",
    tint: "bg-pink",
  },
  {
    icon: ShieldCheck,
    n: "05",
    title: "Brand-safe by default",
    body: "Alle shops er forhåndsgodkendte. Kommissioner trackes automatisk. Ingen screenshots, ingen regneark, ingen jagtede fakturaer.",
    tint: "bg-blue-soft",
  },
  {
    icon: Sparkles,
    n: "06",
    title: "Lavet til storytellers",
    body: "Tilføj noter, gruppér efter mood, og tema dine lister. Din ønskeliste ser ud som dig — ikke et generisk affiliate-dump.",
    tint: "bg-cream-soft",
  },
];

export function Benefits() {
  return (
    <section id="fordele" className="mx-auto max-w-[1180px] px-6 pt-28 pb-10">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] items-end mb-16">
        <div>
          <p className="eyebrow">01 — Fordele</p>
          <h2 className="title-l mt-4 text-[clamp(2rem,4.4vw,3.6rem)]">
            Gem det. Del det.{" "}
            <span className="font-['Instrument_Serif'] italic font-normal text-accent">
              Tjen på det.
            </span>
          </h2>
        </div>
        <p className="text-[18px] text-ink-2 leading-[1.45] max-w-[58ch] md:justify-self-end">
          Et creator-program bygget rundt om de produkter, du alligevel ville anbefale
          — med et permanent hjem og en permanent udbetaling.
        </p>
      </div>

      <div className="grid gap-px bg-line border border-line rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.n} className="bg-bg p-8 flex flex-col gap-5">
            <div className={`h-11 w-11 rounded-full ${b.tint} grid place-items-center text-accent`}>
              <b.icon className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-ink-3 mb-2">
                {b.n}
              </p>
              <h3 className="text-[20px] font-semibold tracking-tight leading-[1.2] text-ink mb-3">
                {b.title}
              </h3>
              <p className="text-[15px] text-ink-2 leading-[1.55]">{b.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
