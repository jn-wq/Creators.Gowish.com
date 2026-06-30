const stats = [
  {
    num: "3,6M",
    label: "Brugere i DK",
    desc: "På tværs af hele platformen",
    variant: "default",
  },
  {
    num: "950",
    label: "Creators i netværket",
    desc: "Aktive og klar til samarbejde",
    variant: "default",
  },
  {
    num: "41.200",
    label: "Gns. reach pr. creator",
    desc: "Impressions i en kampagne",
    variant: "default",
  },
  {
    num: "1M+",
    label: "Push-tilladelser",
    desc: "Direkte bruger-aktivering in-app",
    variant: "featured",
  },
  {
    num: "75.000",
    label: "Gns. brand wall-følgere",
    desc: "Top 50 brands i appen",
    variant: "default",
  },
  {
    num: "650k",
    label: "Email-tilladelser (DK)",
    desc: "Kvalificerede og segmenterbare",
    variant: "default",
  },
  {
    num: "17M+",
    label: "Globale brugere",
    desc: "Total brugerbase på tværs af markeder",
    variant: "default",
  },
  {
    num: "700M+",
    label: "Oprettede ønsker",
    desc: "Ønsker gemt på platformen globalt",
    variant: "accent",
  },
];

export function PlatformStats() {
  return (
    <section id="platform" className="mx-auto max-w-[1180px] px-6 pt-28 pb-10">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] items-end mb-14">
        <div>
          <p className="eyebrow">02 — Platformen</p>
          <h2 className="title-l mt-4 text-[clamp(2rem,4.4vw,3.6rem)]">
            Platform oversigt{" "}
            <span className="font-['Instrument_Serif'] italic font-normal text-accent">
              &amp; rækkevidde.
            </span>
          </h2>
        </div>
        <p className="text-[18px] text-ink-2 leading-[1.45] max-w-[58ch] md:justify-self-end">
          Nøgletal der driver dine kampagners succes — på tværs af hele
          Ønskeskyen-økosystemet.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
        {stats.map((s) => (
          <div
            key={s.label}
            className={[
              "p-7 flex flex-col gap-3",
              s.variant === "featured" ? "bg-ink text-bg" : s.variant === "accent" ? "bg-accent text-white" : "bg-bg",
            ].join(" ")}
          >
            <div
              className={[
                "text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.04em] leading-none",
                s.variant === "featured" || s.variant === "accent" ? "text-white" : "text-ink",
              ].join(" ")}
            >
              {s.num}
            </div>
            <div>
              <div
                className={[
                  "text-[15px] font-semibold tracking-tight",
                  s.variant === "featured" || s.variant === "accent" ? "text-white" : "text-ink",
                ].join(" ")}
              >
                {s.label}
              </div>
              <div
                className={[
                  "text-[13px] mt-0.5 leading-[1.4]",
                  s.variant === "featured" ? "text-white/65" : s.variant === "accent" ? "text-white/80" : "text-ink-3",
                ].join(" ")}
              >
                {s.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
