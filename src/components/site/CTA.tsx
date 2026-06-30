import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function CTA() {
  const { t, lang } = useLanguage();
  const c = t.cta;

  return (
    <section className="mx-auto max-w-[1180px] px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl bg-ink text-bg p-12 md:p-20">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full bg-accent/40 blur-3xl" />

        <div className="relative max-w-2xl">
          <p className="eyebrow !text-accent">{c.eyebrow}</p>
          <h2 className="text-[clamp(2.2rem,5vw,4.4rem)] font-semibold tracking-[-0.035em] leading-[1.0] mt-5">
            {lang === "da" ? (
              <>
                {c.h2a}{" "}
                <span className="font-['Instrument_Serif'] italic font-normal text-accent">
                  {c.h2italic}
                </span>{" "}
                {"h2end" in c ? c.h2end : ""}
              </>
            ) : (
              <>
                {c.h2a}{" "}
                <span className="font-['Instrument_Serif'] italic font-normal text-accent">
                  {c.h2italic}
                </span>
              </>
            )}
          </h2>
          <p className="mt-6 text-[19px] text-bg/75 leading-[1.45] max-w-[50ch]">
            {c.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="btn-accent">
              {c.btn1} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/learning-bank"
              className="btn-ghost !border-bg/20 !text-bg hover:!bg-bg/10"
            >
              {c.btn2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
