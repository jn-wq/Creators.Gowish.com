import { useLanguage } from "@/lib/i18n";

export function PlatformStats() {
  const { t } = useLanguage();
  const p = t.platformStats;

  return (
    <section id="platform" className="mx-auto max-w-[1180px] px-6 pt-28 pb-10">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] items-end mb-14">
        <div>
          <p className="eyebrow">{p.eyebrow}</p>
          <h2 className="title-l mt-4 text-[clamp(2rem,4.4vw,3.6rem)]">
            {p.h2a}{" "}
            <span className="font-['Instrument_Serif'] italic font-normal text-accent">
              {p.h2italic}
            </span>
          </h2>
        </div>
        <p className="text-[18px] text-ink-2 leading-[1.45] max-w-[58ch] md:justify-self-end">
          {p.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
        {p.stats.map((s, i) => {
          const variant = i === 3 ? "featured" : i === 7 ? "accent" : "default";
          return (
            <div
              key={s.label}
              className={[
                "p-7 flex flex-col gap-3",
                variant === "featured" ? "bg-ink text-bg" : variant === "accent" ? "bg-accent text-white" : "bg-bg",
              ].join(" ")}
            >
              <div
                className={[
                  "text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.04em] leading-none",
                  variant === "featured" || variant === "accent" ? "text-white" : "text-ink",
                ].join(" ")}
              >
                {s.num}
              </div>
              <div>
                <div
                  className={[
                    "text-[15px] font-semibold tracking-tight",
                    variant === "featured" || variant === "accent" ? "text-white" : "text-ink",
                  ].join(" ")}
                >
                  {s.label}
                </div>
                <div
                  className={[
                    "text-[13px] mt-0.5 leading-[1.4]",
                    variant === "featured" ? "text-white/65" : variant === "accent" ? "text-white/80" : "text-ink-3",
                  ].join(" ")}
                >
                  {s.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
