import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Quote } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { caseStudies, creatorVideos, studyLocale } from "@/lib/case-studies";
import { VideoPlaceholder } from "@/components/site/VideoPlaceholder";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/cases/$slug")({
  loader: ({ params }) => {
    const study = caseStudies.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return { study };
  },
  component: CaseStudyPage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <p className="eyebrow">404</p>
        <h1 className="title-l mt-3 text-3xl">Case not found</h1>
        <Link to="/cases" className="btn-ghost mt-6">Back to Cases</Link>
      </div>
    </div>
  ),
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  const { lang } = useLanguage();
  const sl = studyLocale(study, lang);
  const related = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  const lbl = {
    back:             lang === "da" ? "Alle cases" : "All cases",
    category:         lang === "da" ? "Kategori" : "Category",
    period:           lang === "da" ? "Periode" : "Period",
    setup:            lang === "da" ? "Setup" : "Setup",
    objective:        lang === "da" ? "Hvad brandet ønskede" : "What the brand wanted",
    background:       lang === "da" ? "Baggrund for samarbejdet" : "Background",
    challenge:        lang === "da" ? "Challenge" : "Challenge",
    results:          lang === "da" ? "Resultater" : "Results",
    performance:      lang === "da" ? "Performance — Rækkevidde & Visninger" : "Performance — Reach & Impressions",
    expected:         lang === "da" ? "Forventet" : "Expected",
    actual:           lang === "da" ? "Faktisk" : "Actual",
    reach:            lang === "da" ? "Rækkevidde" : "Reach",
    impressions:      lang === "da" ? "Visninger" : "Impressions",
    creatorContent:   lang === "da" ? "Creator content" : "Creator content",
    creatorSub:       lang === "da" ? "Udvalgte videoer fra kampagnen" : "Selected videos from the campaign",
    clips:            lang === "da" ? "videoer" : "videos",
    engagement:       lang === "da" ? "Engagement" : "Engagement",
    likes:            lang === "da" ? "Likes" : "Likes",
    engagementRate:   lang === "da" ? "Engagement rate" : "Engagement rate",
    saves:            lang === "da" ? "Saves" : "Saves",
    comments:         lang === "da" ? "Kommentarer" : "Comments",
    moreCases:        lang === "da" ? "Flere cases" : "More cases",
    viewCase:         lang === "da" ? "Se case" : "View case",
  };

  const videos = creatorVideos[study.slug] ?? [];

  return (
    <div className="min-h-screen pt-4">
      <Header />
      <main>

        {/* ── 1. BRAND HERO ─────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-line">
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="relative mx-auto max-w-[1180px] px-6 pt-16 pb-16">
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 text-[14px] text-ink-3 hover:text-accent mb-10"
            >
              <ArrowLeft className="h-4 w-4" /> {lbl.back}
            </Link>

            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
              <div>
                <p className="eyebrow !text-accent-ink">{sl.category}</p>
                <h1 className="display mt-3 text-[clamp(2.8rem,7vw,5.6rem)] leading-[1.0]">
                  {sl.brandBrief.brandName}
                </h1>
                <p className="mt-6 max-w-[56ch] text-[19px] text-ink-2 leading-[1.45]">
                  {sl.brandBrief.objective}
                </p>
              </div>

              {/* Meta chips */}
              <div className="flex flex-col gap-3 text-[13px] shrink-0">
                {sl.period && (
                  <div className="rounded-2xl border border-line bg-bg px-5 py-3">
                    <div className="label-kpi mb-1">{lbl.period}</div>
                    <div className="font-semibold">{sl.period}</div>
                  </div>
                )}
                {sl.setup && (
                  <div className="rounded-2xl border border-line bg-bg px-5 py-3">
                    <div className="label-kpi mb-1">{lbl.setup}</div>
                    <div className="font-semibold">{sl.setup}</div>
                  </div>
                )}
                <div className="rounded-2xl border border-line bg-bg px-5 py-3">
                  <div className="label-kpi mb-1">{lbl.category}</div>
                  <div className="font-semibold">{sl.category}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. STORY — hvad brandet ville + baggrund ─────────── */}
        <section className="mx-auto max-w-[1180px] px-6 pt-16 pb-4">
          <div className="grid md:grid-cols-2 gap-px rounded-3xl border border-line bg-line overflow-hidden">

            {/* Challenge / objective */}
            <div className="bg-ink text-bg p-10 md:p-14">
              <p className="eyebrow !text-bg/50 mb-4">
                {sl.challengeText ? lbl.challenge : lbl.objective}
              </p>
              <p className="text-[19px] leading-[1.65] text-bg/90">
                {sl.challengeText ?? sl.brandBrief.objective}
              </p>

              {/* Creators + duration stats */}
              {sl.setup && (
                <div className="mt-10 pt-8 border-t border-bg/15 grid grid-cols-2 gap-6">
                  <div>
                    <div className="stat-num text-[36px] text-bg">
                      {sl.setup.split("·")[0].trim().replace(/\D/g, "") || sl.setup.split("·")[0].trim()}
                    </div>
                    <div className="label-kpi !text-bg/50 mt-1">Creators</div>
                  </div>
                  <div>
                    <div className="stat-num text-[36px] text-bg">4</div>
                    <div className="label-kpi !text-bg/50 mt-1">
                      {lang === "da" ? "Uger" : "Weeks"}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Background */}
            <div className="bg-cream-soft p-10 md:p-14">
              <p className="eyebrow mb-4">{lbl.background}</p>
              <p className="text-[17px] text-ink-2 leading-[1.65]">
                {sl.brandBrief.background}
              </p>

              {/* Story sections */}
              {sl.sections.length > 0 && (
                <div className="mt-10 space-y-8">
                  {sl.sections.map((s, i) => (
                    <div key={s.heading}>
                      <span className="serif text-[20px] text-accent">0{i + 1}</span>
                      <h3 className="font-semibold text-[17px] mt-1 mb-2">{s.heading}</h3>
                      <p className="text-[15px] text-ink-2 leading-[1.6]">{s.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── 3. RESULTATER — metrics grid ─────────────────────── */}
        <section className="mx-auto max-w-[1180px] px-6 pt-14 pb-4">
          <p className="eyebrow mb-6">{lbl.results}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px rounded-2xl border border-line bg-line overflow-hidden">
            {sl.metrics.map((m) => (
              <div key={m.label} className="bg-bg p-6">
                <div className="stat-num text-[26px] md:text-[30px] text-ink">{m.value}</div>
                <div className="label-kpi mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. PERFORMANCE — reach vs. forventet ─────────────── */}
        <section className="mx-auto max-w-[1180px] px-6 pt-10 pb-4">
          <p className="eyebrow mb-6">{lbl.performance}</p>
          <div className="grid grid-cols-2 gap-px rounded-2xl border border-line bg-line overflow-hidden">
            <div className="bg-bg-alt p-8 md:p-10">
              <p className="label-kpi text-ink-3 mb-6">{lbl.expected}</p>
              <div className="space-y-6">
                <div>
                  <div className="stat-num text-[32px] md:text-[40px] text-ink-3">{sl.reachData.expectedReach}</div>
                  <div className="label-kpi mt-1 text-ink-3">{lbl.reach}</div>
                </div>
                <div>
                  <div className="stat-num text-[32px] md:text-[40px] text-ink-3">{sl.reachData.expectedImpressions}</div>
                  <div className="label-kpi mt-1 text-ink-3">{lbl.impressions}</div>
                </div>
              </div>
            </div>
            <div className="bg-bg p-8 md:p-10">
              <p className="label-kpi text-accent mb-6">{lbl.actual}</p>
              <div className="space-y-6">
                <div>
                  <div className="stat-num text-[32px] md:text-[40px] text-accent">{sl.reachData.actualReach}</div>
                  <div className="label-kpi mt-1">{lbl.reach}</div>
                </div>
                <div>
                  <div className="stat-num text-[32px] md:text-[40px] text-accent">{sl.reachData.actualImpressions}</div>
                  <div className="label-kpi mt-1">{lbl.impressions}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. CREATOR CONTENT ───────────────────────────────── */}
        {videos.length > 0 && (
          <section className="mx-auto max-w-[1180px] px-6 pt-14 pb-6">
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <p className="eyebrow">{lbl.creatorContent}</p>
                <h2 className="title-l mt-3 text-[28px] md:text-[36px]">
                  {lbl.creatorSub}
                </h2>
              </div>
              <span className="hidden md:inline label-kpi">
                {videos.length} {lbl.clips}
              </span>
            </div>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              {videos.map((v, i) => (
                <div key={i} className="flex flex-col gap-0 card-paper overflow-hidden">
                  <VideoPlaceholder
                    title={v.title}
                    duration={v.duration}
                    tone={v.tone}
                    aspect={v.aspect}
                    thumbnailSeed={`${study.slug}-${i}`}
                    tiktokUrl={v.tiktokUrl}
                  />
                  {(v.creatorName || v.views) && (
                    <div className="p-4">
                      {v.creatorName && (
                        <div className="mb-3">
                          <div className="font-semibold text-[14px]">{v.creatorName}</div>
                          {v.creatorHandle && (
                            <div className="text-[12px] text-ink-3">{v.creatorHandle}</div>
                          )}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {v.views    && <div><span className="stat-num text-[14px] text-accent">{v.views}</span> <span className="label-kpi">Views</span></div>}
                        {v.likes    && <div><span className="stat-num text-[14px] text-ink">{v.likes}</span> <span className="label-kpi">Likes</span></div>}
                        {v.comments && <div><span className="stat-num text-[14px] text-ink">{v.comments}</span> <span className="label-kpi">Komm.</span></div>}
                        {v.saves    && <div><span className="stat-num text-[14px] text-ink">{v.saves}</span> <span className="label-kpi">Saves</span></div>}
                        {v.shares   && <div><span className="stat-num text-[14px] text-ink">{v.shares}</span> <span className="label-kpi">Shares</span></div>}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 6. ENGAGEMENT STATS ──────────────────────────────── */}
        <section className="mx-auto max-w-[1180px] px-6 pt-10 pb-16">
          <p className="eyebrow mb-6">{lbl.engagement}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl border border-line bg-line overflow-hidden">
            <div className="bg-cream-soft p-7 md:p-10">
              <div className="stat-num text-[32px] md:text-[40px] text-ink">{sl.engagement.likes}</div>
              <div className="label-kpi mt-2">{lbl.likes}</div>
            </div>
            <div className="bg-cream-soft p-7 md:p-10">
              <div className="stat-num text-[32px] md:text-[40px] text-accent">{sl.engagement.engagementRate}</div>
              <div className="label-kpi mt-2">{lbl.engagementRate}</div>
            </div>
            <div className="bg-cream-soft p-7 md:p-10">
              <div className="stat-num text-[32px] md:text-[40px] text-ink">{sl.engagement.saves}</div>
              <div className="label-kpi mt-2">{lbl.saves}</div>
            </div>
            <div className="bg-cream-soft p-7 md:p-10">
              <div className="stat-num text-[32px] md:text-[40px] text-ink">{sl.engagement.comments}</div>
              <div className="label-kpi mt-2">{lbl.comments}</div>
            </div>
          </div>
        </section>

        {/* ── 7. QUOTE ─────────────────────────────────────────── */}
        {sl.quote && (
          <section className="mx-auto max-w-[860px] px-6 pb-16">
            <blockquote className="rounded-3xl bg-cream-soft p-10 md:p-14 border border-line">
              <Quote className="h-7 w-7 text-accent" />
              <p className="serif mt-5 text-[26px] md:text-[32px] leading-[1.25] text-ink">
                {sl.quote.text}
              </p>
              <footer className="mt-6 label-kpi">— {sl.quote.attribution}</footer>
            </blockquote>
          </section>
        )}

        {/* ── 8. RELATEREDE CASES ──────────────────────────────── */}
        <section className="mx-auto max-w-[1180px] px-6 pt-16 pb-12 border-t border-line">
          <p className="eyebrow mb-8">{lbl.moreCases}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((c) => {
              const cl = studyLocale(c, lang);
              return (
                <Link
                  key={c.slug}
                  to="/cases/$slug"
                  params={{ slug: c.slug }}
                  className="group card-paper p-7 flex flex-col gap-4 hover:border-accent/40 transition-colors"
                >
                  <span className="label-kpi !text-accent-ink">{cl.category}</span>
                  <h3 className="text-[22px] font-semibold tracking-tight leading-[1.1]">
                    {cl.brandBrief.brandName}
                  </h3>
                  <p className="text-[14px] text-ink-2 leading-[1.5] line-clamp-2">{cl.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-accent-ink text-[13px] font-semibold mt-auto">
                    {lbl.viewCase} <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
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
