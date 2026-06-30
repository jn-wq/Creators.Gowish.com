import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, Search } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { caseStudies, studyLocale } from "@/lib/case-studies";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/learning-bank")({
  component: LearningBankPage,
});

function LearningBankPage() {
  const { lang, t } = useLanguage();
  const lb = t.learningBank;

  return (
    <div className="min-h-screen pt-4">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-line">
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="relative mx-auto max-w-[1180px] px-6 pt-20 pb-20">
            <p className="eyebrow flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> {lb.eyebrow}
            </p>
            <h1 className="display mt-5 text-[clamp(2.4rem,6vw,4.8rem)] max-w-[18ch]">
              {lb.h1a}{" "}
              <span className="font-['Instrument_Serif'] italic font-normal text-accent">
                {lb.h1italic}
              </span>{" "}
              {lb.h1b}
            </h1>
            <p className="mt-6 max-w-[58ch] text-[19px] text-ink-2 leading-[1.45]">
              {lb.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-2 rounded-full border border-line bg-bg px-4 py-2.5 w-full max-w-md">
                <Search className="h-4 w-4 text-ink-3" />
                <input
                  type="search"
                  placeholder={lb.searchPlaceholder}
                  className="flex-1 bg-transparent outline-none text-[15px] placeholder:text-ink-3"
                />
              </label>
              <span className="label-kpi">
                {caseStudies.length} {lang === "da" ? "studier" : "studies"} · {lb.categories.length - 1} {lang === "da" ? "kategorier" : "categories"}
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {lb.categories.map((c) => (
                <button
                  key={c}
                  className="rounded-full border border-line bg-bg px-3.5 py-1.5 text-[13px] font-medium text-ink-2 hover:bg-pink hover:text-accent-ink hover:border-pink-2 transition-colors"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="mx-auto max-w-[1180px] px-6 pt-20">
          <p className="eyebrow mb-6">{lb.featuredLabel}</p>
          {(() => {
            const f = caseStudies[0];
            const fl = studyLocale(f, lang);
            return (
              <Link
                to="/learning-bank/$slug"
                params={{ slug: f.slug }}
                className="group grid md:grid-cols-[1.2fr_1fr] gap-px rounded-3xl border border-line bg-line overflow-hidden"
              >
                <div className="bg-cream-soft p-10 md:p-14">
                  <span className="label-kpi !text-accent-ink">{fl.category}</span>
                  <h2 className="title-l mt-4 text-[clamp(1.8rem,3.6vw,2.8rem)] max-w-[20ch]">
                    {fl.title}
                  </h2>
                  <p className="mt-5 text-[17px] text-ink-2 max-w-[52ch] leading-[1.5]">{fl.excerpt}</p>
                  <div className="mt-8 flex items-center gap-4">
                    <Avatar name={f.creator} />
                    <div>
                      <div className="font-semibold text-[15px]">{f.creator}</div>
                      <div className="text-[13px] text-ink-3">{f.handle} · {fl.readTime}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-bg p-10 md:p-14 flex flex-col justify-between gap-8">
                  <div className="grid grid-cols-2 gap-px bg-line rounded-2xl overflow-hidden border border-line">
                    {fl.metrics.map((m) => (
                      <div key={m.label} className="bg-bg p-5">
                        <div className="stat-num text-[32px] text-ink">{m.value}</div>
                        <div className="label-kpi mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-accent-ink font-semibold group-hover:gap-3 transition-all">
                    {lb.readPlaybook} <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })()}
        </section>

        {/* Grid */}
        <section className="mx-auto max-w-[1180px] px-6 pt-16 pb-8">
          <p className="eyebrow mb-6">{lb.allStudiesLabel}</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(1).map((c) => {
              const cl = studyLocale(c, lang);
              return (
                <Link
                  key={c.slug}
                  to="/learning-bank/$slug"
                  params={{ slug: c.slug }}
                  className="group card-paper p-7 flex flex-col gap-5 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="label-kpi !text-accent-ink">{cl.category}</span>
                    <ArrowUpRight className="h-4 w-4 text-ink-3 group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-[22px] font-semibold tracking-tight leading-[1.15]">{cl.title}</h3>
                  <p className="text-[15px] text-ink-2 leading-[1.5] line-clamp-3">{cl.excerpt}</p>
                  <div className="mt-auto pt-4 border-t border-line flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar name={c.creator} small />
                      <div>
                        <div className="font-semibold text-[14px]">{c.creator}</div>
                        <div className="text-[12px] text-ink-3">{c.handle}</div>
                      </div>
                    </div>
                    <span className="stat-num text-[18px] text-accent-ink">{c.headline}</span>
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

function Avatar({ name, small }: { name: string; small?: boolean }) {
  const initials = name.split(" ").map((s) => s[0]).slice(0, 2).join("");
  const palettes = ["bg-pink-2 text-accent-ink", "bg-blue-soft-2 text-ink", "bg-cream text-ink"];
  const c = palettes[name.length % palettes.length];
  const size = small ? "h-9 w-9 text-[12px]" : "h-12 w-12 text-[15px]";
  return (
    <span className={`grid place-items-center rounded-full ${c} ${size} font-semibold`}>{initials}</span>
  );
}
