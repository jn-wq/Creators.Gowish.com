import { useLanguage } from "@/lib/i18n";

const brands = [
  "Matas", "Elgiganten", "ASOS", "Zalando", "H&M", "Illum", "Magasin",
  "Sephora", "Nike", "Adidas", "Lego", "Bang & Olufsen", "Bodum",
  "By Malene Birger", "Ganni", "Cos", "& Other Stories", "Arket",
  "Jack & Jones", "Vero Moda", "Stine Goya", "Samsøe Samsøe",
];

export function BrandMarquee() {
  const { t } = useLanguage();
  const list = [...brands, ...brands];
  return (
    <section id="brands" className="border-y border-line bg-bg-alt py-10 overflow-hidden">
      <p className="text-center label-kpi mb-6">{t.brandMarquee.label}</p>
      <div className="relative">
        <div className="marquee">
          {list.map((b, i) => (
            <span
              key={i}
              className="text-[22px] md:text-[28px] font-semibold tracking-tight text-ink-2/80 whitespace-nowrap"
              style={{
                fontFamily: i % 5 === 0 ? "Instrument Serif, serif" : undefined,
                fontStyle: i % 5 === 0 ? "italic" : undefined,
              }}
            >
              {b}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-alt to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-alt to-transparent" />
      </div>
    </section>
  );
}
