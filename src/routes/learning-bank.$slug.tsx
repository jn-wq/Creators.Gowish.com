import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Quote } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { caseStudies, creatorVideos, studyLocale } from "@/lib/case-studies";
import { VideoPlaceholder } from "@/components/site/VideoPlaceholder";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/learning-bank/$slug")({
  loader: ({ params }) => {
    const study = caseStudies.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return { study };
  },
  component: StudyPage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <p className="eyebrow">404</p>
        <h1 className="title-l mt-3 text-3xl">Case study not found</h1>
        <Link to="/learning-bank" className="btn-ghost mt-6">Back to Learning Bank</Link>
      </div>
    </div>
  ),
});

function StudyPage() {
  const { study } = Route.useLoaderData();
  const { lang, t } = useLanguage();
  const lb = t.learningBank;
  const sl = studyLocale(study, lang);
  const related = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  const labels = {
    brandXGoWish: lang === "da" ? "Brand x GoWish" : "Brand x GoWish",
    objective: lang === "da" ? "Formål" : "Objective",
    background: lang === "da" ? "Forudgående baggrund" : "Pre-campaign background",
    performance: lang === "da" ? "Performance — Rækkevidde & Visninger" : "Performance — Reach & Impressions",
    expected: lang === "da" ? "Forventet" : "Expected",
    actual: lang === "da" ? "Faktisk" : "Actual",
    reach: lang === "da" ? "Rækkevidde" : "Reach",
    impressions: lang === "da" ? "Visninger" : "Impressions",
    engagement: lang === "da" ? "Engagement" : "Engagement",
    likes: lang === "da" ? "Likes" : "Likes",
    engagementRate: lang === "da" ? "Engagement rate" : "Engagement rate",
    saves: lang === "da" ? "Gemte" : "Saves",
    comments: lang === "da" ? "Kommentarer" : "Comments",
  };

  return (
    <div className="min-h-screen pt-4">
      <Header />
      <main>
        {/* A) Hero */}
        <article className="mx-auto max-w-[860px] px-6 pt-16 pb-12">
          <Link to="/learning-bank" className="inline-flex items-center gap-2 text-[14px] text-ink-3 hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> {lb.backLink}
          </Link>

          <p className="eyebrow mt-8">{sl.category}</p>
          <h1 className="display mt-4 text-[clamp(2rem,5vw,3.8rem)] leading-[1.02]">
            {sl.title}
          </h1>
          <p className="mt-6 text-[20px] text-ink-2 leading-[1.45]">{sl.excerpt}</p>

          <div className="mt-8 flex items-center gap-4 pb-8 border-b border-line">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-pink-2 text-accent-ink font-semibold">
              {study.creator.split(" ").map((s: string) => s[0]).slice(0, 2).join("")}
            </span>
            <div>
              <div className="font-semibold">{study.creator}</div>
              <div className="text-[14px] text-ink-3">{study.handle} · {sl.readTime}</div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl border border-line bg-line overflow-hidden">
            {sl.metrics.map((m) => (
              <div key={m.label} className="bg-bg p-5">
                <div className="stat-num text-[28px] text-ink">{m.value}</div>
                <div className="label-kpi mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-14 space-y-12">
            {sl.sections.map((s, i) => (
              <section key={s.heading}>
                <span className="serif text-[28px] text-accent">0{i + 1}</span>
                <h2 className="title-l mt-2 text-[28px] md:text-[34px]">{s.heading}</h2>
                <p className="mt-4 text-[18px] text-ink-2 leading-[1.6]">{s.body}</p>
              </section>
            ))}
          </div>

          {sl.quote && (
            <blockquote className="mt-14 rounded-3xl bg-cream-soft p-10 md:p-14 border border-line">
              <Quote className="h-7 w-7 text-accent" />
              <p className="serif mt-5 text-[26px] md:text-[32px] leading-[1.25] text-ink">
                {sl.quote.text}
              </p>
              <footer className="mt-6 label-kpi">— {sl.quote.attribution}</footer>
            </blockquote>
          )}
        </article>

        {/* B) Brand Brief */}
        <section className="mx-auto max-w-[860px] px-6 pb-14">
          <div className="rounded-3xl bg-ink text-bg p-10 md:p-14">
            <p className="eyebrow !text-bg/50">{labels.brandXGoWish}</p>
            <h2 className="title-l mt-4 text-[36px] md:text-[48px] text-bg">
              {sl.brandBrief.brandName}
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div>
                <p className="label-kpi !text-bg/50 mb-3">{labels.objective}</p>
                <p className="text-[17px] leading-[1.6] text-bg/90">{sl.brandBrief.objective}</p>
              </div>
              <div>
                <p className="label-kpi !text-bg/50 mb-3">{labels.background}</p>
                <p className="text-[17px] leading-[1.6] text-bg/90">{sl.brandBrief.background}</p>
              </div>
            </div>
          </div>
        </section>

        {/* C) Performance — Reach & Impressions */}
        <section className="mx-auto max-w-[860px] px-6 pb-14">
          <p className="eyebrow mb-6">{labels.performance}</p>
          <div className="grid grid-cols-2 gap-px rounded-2xl border border-line bg-line overflow-hidden">
            {/* Expected column */}
            <div className="bg-bg-alt p-8 md:p-10">
              <p className="label-kpi text-ink-3 mb-6">{labels.expected}</p>
              <div className="space-y-6">
                <div>
                  <div className="stat-num text-[32px] md:text-[40px] text-ink-3">{sl.reachData.expectedReach}</div>
                  <div className="label-kpi mt-1 text-ink-3">{labels.reach}</div>
                </div>
                <div>
                  <div className="stat-num text-[32px] md:text-[40px] text-ink-3">{sl.reachData.expectedImpressions}</div>
                  <div className="label-kpi mt-1 text-ink-3">{labels.impressions}</div>
                </div>
              </div>
            </div>
            {/* Actual column */}
            <div className="bg-bg p-8 md:p-10">
              <p className="label-kpi text-accent mb-6">{labels.actual}</p>
              <div className="space-y-6">
                <div>
                  <div className="stat-num text-[32px] md:text-[40px] text-accent">{sl.reachData.actualReach}</div>
                  <div className="label-kpi mt-1">{labels.reach}</div>
                </div>
                <div>
                  <div className="stat-num text-[32px] md:text-[40px] text-accent">{sl.reachData.actualImpressions}</div>
                  <div className="label-kpi mt-1">{labels.impressions}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* D) Video section — 2-row × 3-col grid */}
        {creatorVideos[study.slug] && (
          <section className="mx-auto max-w-[1180px] px-6 pt-4 pb-16">
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <p className="eyebrow">{lb.watchPlaybook}</p>
                <h2 className="title-l mt-3 text-[28px] md:text-[36px] max-w-[22ch]">
                  {lang === "da" ? "Videoeksempler fra" : "Video examples from"}{" "}
                  <span className="serif text-accent">{study.creator}</span>
                </h2>
              </div>
              <span className="hidden md:inline label-kpi">
                {creatorVideos[study.slug].length} {lb.videoClips}
              </span>
            </div>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {creatorVideos[study.slug].map((v, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <VideoPlaceholder
                    title={v.title}
                    duration={v.duration}
                    tone={v.tone}
                    aspect={v.aspect}
                    thumbnailSeed={`${study.slug}-${i}`}
                    tiktokUrl={v.tiktokUrl}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* E) Engagement metrics */}
        <section className="mx-auto max-w-[860px] px-6 pb-16">
          <p className="eyebrow mb-6">{labels.engagement}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl border border-line bg-line overflow-hidden">
            <div className="bg-cream-soft p-6 md:p-8">
              <div className="stat-num text-[28px] md:text-[34px] text-ink">{sl.engagement.likes}</div>
              <div className="label-kpi mt-2">{labels.likes}</div>
            </div>
            <div className="bg-cream-soft p-6 md:p-8">
              <div className="stat-num text-[28px] md:text-[34px] text-accent">{sl.engagement.engagementRate}</div>
              <div className="label-kpi mt-2">{labels.engagementRate}</div>
            </div>
            <div className="bg-cream-soft p-6 md:p-8">
              <div className="stat-num text-[28px] md:text-[34px] text-ink">{sl.engagement.saves}</div>
              <div className="label-kpi mt-2">{labels.saves}</div>
            </div>
            <div className="bg-cream-soft p-6 md:p-8">
              <div className="stat-num text-[28px] md:text-[34px] text-ink">{sl.engagement.comments}</div>
              <div className="label-kpi mt-2">{labels.comments}</div>
            </div>
          </div>
        </section>

        {/* F) Related studies */}
        <section className="mx-auto max-w-[1180px] px-6 pt-16 pb-8 border-t border-line">
          <p className="eyebrow mb-6">{lb.moreStudies}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((c) => {
              const cl = studyLocale(c, lang);
              return (
                <Link
                  key={c.slug}
                  to="/learning-bank/$slug"
                  params={{ slug: c.slug }}
                  className="group card-paper p-6 flex flex-col gap-4 hover:border-accent/40 transition-colors"
                >
                  <span className="label-kpi !text-accent-ink">{cl.category}</span>
                  <h3 className="text-[19px] font-semibold tracking-tight leading-[1.2]">{cl.title}</h3>
                  <span className="inline-flex items-center gap-2 text-accent-ink text-[14px] font-semibold mt-auto">
                    {lb.readStudy} <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
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
