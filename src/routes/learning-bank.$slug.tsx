import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Quote } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { caseStudies, creatorVideos } from "@/lib/case-studies";
import { VideoPlaceholder } from "@/components/site/VideoPlaceholder";

export const Route = createFileRoute("/learning-bank/$slug")({
  loader: ({ params }) => {
    const study = caseStudies.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.study.title} — GoWish Learning Bank` },
          { name: "description", content: loaderData.study.excerpt },
          { property: "og:title", content: loaderData.study.title },
          { property: "og:description", content: loaderData.study.excerpt },
        ]
      : [],
  }),
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
  const related = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <div className="min-h-screen pt-4">
      <Header />
      <main>
        <article className="mx-auto max-w-[860px] px-6 pt-16 pb-12">
          <Link to="/learning-bank" className="inline-flex items-center gap-2 text-[14px] text-ink-3 hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> Learning Bank
          </Link>

          <p className="eyebrow mt-8">{study.category}</p>
          <h1 className="display mt-4 text-[clamp(2rem,5vw,3.8rem)] leading-[1.02]">
            {study.title}
          </h1>
          <p className="mt-6 text-[20px] text-ink-2 leading-[1.45]">{study.excerpt}</p>

          <div className="mt-8 flex items-center gap-4 pb-8 border-b border-line">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-pink-2 text-accent-ink font-semibold">
              {study.creator.split(" ").map((s: string) => s[0]).slice(0, 2).join("")}
            </span>
            <div>
              <div className="font-semibold">{study.creator}</div>
              <div className="text-[14px] text-ink-3">{study.handle} · {study.readTime}</div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl border border-line bg-line overflow-hidden">
            {study.metrics.map((m: { value: string; label: string }) => (
              <div key={m.label} className="bg-bg p-5">
                <div className="stat-num text-[28px] text-ink">{m.value}</div>
                <div className="label-kpi mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-14 space-y-12">
            {study.sections.map((s: { heading: string; body: string }, i: number) => (
              <section key={s.heading}>
                <span className="serif text-[28px] text-accent">0{i + 1}</span>
                <h2 className="title-l mt-2 text-[28px] md:text-[34px]">{s.heading}</h2>
                <p className="mt-4 text-[18px] text-ink-2 leading-[1.6]">{s.body}</p>
              </section>
            ))}
          </div>

          {study.quote && (
            <blockquote className="mt-14 rounded-3xl bg-cream-soft p-10 md:p-14 border border-line">
              <Quote className="h-7 w-7 text-accent" />
              <p className="serif mt-5 text-[26px] md:text-[32px] leading-[1.25] text-ink">
                {study.quote.text}
              </p>
              <footer className="mt-6 label-kpi">— {study.quote.attribution}</footer>
            </blockquote>
          )}
        </article>

        {/* Creator videos */}
        {creatorVideos[study.slug] && (
          <section className="mx-auto max-w-[1180px] px-6 pt-8 pb-16">
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <p className="eyebrow">Watch the playbook</p>
                <h2 className="title-l mt-3 text-[28px] md:text-[36px] max-w-[22ch]">
                  Video examples from <span className="serif text-accent">{study.creator}</span>
                </h2>
              </div>
              <span className="hidden md:inline label-kpi">
                {creatorVideos[study.slug].length} clips
              </span>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
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


        {/* Related */}
        <section className="mx-auto max-w-[1180px] px-6 pt-16 pb-8 border-t border-line">
          <p className="eyebrow mb-6">More from the Learning Bank</p>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((c) => (
              <Link
                key={c.slug}
                to="/learning-bank/$slug"
                params={{ slug: c.slug }}
                className="group card-paper p-6 flex flex-col gap-4 hover:border-accent/40 transition-colors"
              >
                <span className="label-kpi !text-accent-ink">{c.category}</span>
                <h3 className="text-[19px] font-semibold tracking-tight leading-[1.2]">{c.title}</h3>
                <span className="inline-flex items-center gap-2 text-accent-ink text-[14px] font-semibold mt-auto">
                  Read study <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
