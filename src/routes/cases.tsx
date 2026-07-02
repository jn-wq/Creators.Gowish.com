import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { caseStudies, studyLocale } from "@/lib/case-studies";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/cases")({
  component: CasesPage,
});

function CasesPage() {
  const { lang } = useLanguage();

  const copy = {
    eyebrow: lang === "da" ? "Cases" : "Cases",
    h1: lang === "da" ? "Brand cases" : "Brand cases",
    subtitle:
      lang === "da"
        ? "Se hvordan brands bruger GoWish-creators til at skabe rækkevidde, engagement og salg — brand for brand."
        : "See how brands use GoWish creators to drive reach, engagement and sales — brand by brand.",
    viewCase: lang === "da" ? "Se case" : "View case",
    countLabel: lang === "da" ? "cases" : "cases",
  };

  return (
    <div className="min-h-screen pt-4">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-line">
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="relative mx-auto max-w-[1180px] px-6 pt-20 pb-20">
            <p className="eyebrow flex items-center gap-2">
              <Briefcase className="h-4 w-4" /> {copy.eyebrow}
            </p>
            <h1 className="display mt-5 text-[clamp(2.4rem,6vw,4.8rem)] max-w-[18ch]">
              {copy.h1}
            </h1>
            <p className="mt-6 max-w-[58ch] text-[19px] text-ink-2 leading-[1.45]">
              {copy.subtitle}
            </p>
            <p className="mt-4 label-kpi">
              {caseStudies.length} {copy.countLabel}
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="mx-auto max-w-[1180px] px-6 pt-16 pb-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c) => {
              const sl = studyLocale(c, lang);
              return (
                <Link
                  key={c.slug}
                  to="/cases/$slug"
                  params={{ slug: c.slug }}
                  className="group card-paper p-7 flex flex-col gap-5 hover:border-accent/40 transition-colors"
                >
                  {/* Brand name */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="label-kpi !text-accent-ink mb-2 block">
                        {sl.category}
                      </span>
                      <h2 className="text-[24px] font-semibold tracking-tight leading-[1.1]">
                        {sl.brandBrief.brandName}
                      </h2>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-ink-3 group-hover:text-accent transition-colors shrink-0 mt-1" />
                  </div>

                  {/* Excerpt */}
                  <p className="text-[15px] text-ink-2 leading-[1.5] line-clamp-3">
                    {sl.excerpt}
                  </p>

                  {/* Key metric */}
                  {sl.metrics[0] && (
                    <div className="rounded-xl bg-cream-soft border border-line px-5 py-4">
                      <div className="stat-num text-[28px] text-accent">
                        {sl.metrics[0].value}
                      </div>
                      <div className="label-kpi mt-1">{sl.metrics[0].label}</div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-auto pt-4 border-t border-line">
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent-ink bg-pink rounded-full px-3.5 py-1.5 group-hover:bg-pink-2 transition-colors">
                      {copy.viewCase} <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
