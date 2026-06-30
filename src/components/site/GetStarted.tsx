import { useEffect, useState } from "react";
import { Play, X, PlayCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Opret din ønskeliste",
    body: "Tilmeld dig, vælg produkter fra 75.000+ shops, tilføj noter og gruppér efter stemning. Det tager minutter — ingen ansøgning, ingen venteliste.",
  },
  {
    n: "02",
    title: "Del dit link",
    body: "Drop dit GoWish-link i bio, stories, captions, nyhedsbreve — overalt. Hvert ønske er et permanent købssignal.",
  },
  {
    n: "03",
    title: "Tjen på hvert køb",
    body: "Kommissioner trackes automatisk, når dine followers handler fra dine ønsker. Se reach, klik og udbetaling rulle ind — i realtid.",
  },
];

export function GetStarted() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <section id="kom-i-gang" className="bg-cream-soft py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className="max-w-3xl">
            <p className="eyebrow">03 — Kom i gang</p>
            <h2 className="title-l mt-4 text-[clamp(2rem,4.4vw,3.6rem)]">
              Byg, del, tjen —{" "}
              <span className="font-['Instrument_Serif'] italic font-normal text-accent">
                alt i én app.
              </span>
            </h2>
            <p className="mt-5 text-[19px] text-ink-2 leading-[1.45] max-w-[58ch]">
              Fra tilmelding til første kommission på under en dag. Ingen outreach,
              ingen kontrakter, ingen jagtede fakturaer.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-pink/40 via-cream to-accent/20 aspect-[16/10] text-left md:-mt-10 lg:-mt-16"
            aria-label="Se creator guide video"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-90"
              src="/creator-application-guide.mov"
              muted
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-bg/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-semibold text-ink">
                <PlayCircle className="h-3.5 w-3.5 text-accent" />
                Creator guide · 1 min
              </span>
            </div>
            <div className="absolute inset-0 grid place-items-center">
              <span className="relative grid h-20 w-20 place-items-center rounded-full bg-bg/95 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                <Play className="relative h-8 w-8 fill-accent text-accent translate-x-0.5" />
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-bg text-[18px] font-semibold leading-tight">
                Sådan ansøger og kommer du i gang
              </p>
              <p className="text-bg/80 text-[13px] mt-1">
                En 60-sekunders gennemgang af creator-tilmelding
              </p>
            </div>
          </button>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="card-paper p-8 flex flex-col gap-4 relative">
              <span className="font-['Instrument_Serif'] italic text-[56px] leading-none text-accent">
                {s.n}
              </span>
              <h3 className="text-[22px] font-semibold tracking-tight">{s.title}</h3>
              <p className="text-[16px] text-ink-2 leading-[1.5]">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <button type="button" onClick={() => setOpen(true)} className="btn-accent">
            <Play className="h-4 w-4 fill-current" /> Se creator guide
          </button>
          <a href="/learning-bank" className="btn-ghost">
            Læs case studies <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink/80 backdrop-blur-sm p-4 animate-in fade-in"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Creator guide video"
        >
          <div
            className="relative w-full max-w-[420px] aspect-[9/16] overflow-hidden rounded-3xl bg-ink shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/creator-application-guide.mov"
              autoPlay
              controls
              playsInline
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-bg/90 text-ink hover:bg-bg transition-colors"
              aria-label="Luk video"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
