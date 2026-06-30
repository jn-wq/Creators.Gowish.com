import { Wallet, Globe, TrendingUp, Gift, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const icons = [Globe, Wallet, Gift, TrendingUp, ShieldCheck, Sparkles];
const tints = ["bg-pink", "bg-blue-soft", "bg-cream-soft", "bg-pink", "bg-blue-soft", "bg-cream-soft"];

export function Benefits() {
  const { t } = useLanguage();
  const b = t.benefits;

  return (
    <section id="fordele" className="mx-auto max-w-[1180px] px-6 pt-28 pb-10">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] items-end mb-16">
        <div>
          <p className="eyebrow">{b.eyebrow}</p>
          <h2 className="title-l mt-4 text-[clamp(2rem,4.4vw,3.6rem)]">
            {b.h2a}{" "}
            <span className="font-['Instrument_Serif'] italic font-normal text-accent">
              {b.h2italic}
            </span>
          </h2>
        </div>
        <p className="text-[18px] text-ink-2 leading-[1.45] max-w-[58ch] md:justify-self-end">
          {b.subtitle}
        </p>
      </div>

      <div className="grid gap-px bg-line border border-line rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
        {b.cards.map((card, i) => {
          const Icon = icons[i];
          return (
            <div key={card.n} className="bg-bg p-8 flex flex-col gap-5">
              <div className={`h-11 w-11 rounded-full ${tints[i]} grid place-items-center text-accent`}>
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-ink-3 mb-2">
                  {card.n}
                </p>
                <h3 className="text-[20px] font-semibold tracking-tight leading-[1.2] text-ink mb-3">
                  {card.title}
                </h3>
                <p className="text-[15px] text-ink-2 leading-[1.55]">{card.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
