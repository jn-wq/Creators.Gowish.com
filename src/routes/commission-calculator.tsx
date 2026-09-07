import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { RotateCcw } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/commission-calculator")({
  head: () => ({
    meta: [
      { title: "Commission Calculator — GoWish Creators" },
      {
        name: "description",
        content:
          "Model your GoWish storefront earnings — drag the sliders to see your take-home commission.",
      },
    ],
  }),
  component: CommissionCalculatorPage,
});

const MIN_SALES = 10_000;
const MAX_SALES = 5_000_000;
const DEFAULTS = { salesPos: 741, commission: 8.5, payout: 80 };

function posToSales(pos: number) {
  const ratio = pos / 1000;
  return MIN_SALES * Math.pow(MAX_SALES / MIN_SALES, ratio);
}

function salesToPos(sales: number) {
  const ratio = Math.log(sales / MIN_SALES) / Math.log(MAX_SALES / MIN_SALES);
  return Math.round(ratio * 1000);
}

function usd(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

function pct(n: number) {
  return (Number.isInteger(n) ? n.toString() : n.toFixed(1)) + "%";
}

function SliderField({
  label,
  hint,
  valueLabel,
  min,
  max,
  step,
  value,
  onChange,
  ticks,
  last,
}: {
  label: string;
  hint: string;
  valueLabel: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  ticks: readonly [string, string, string];
  last?: boolean;
}) {
  const filled = ((value - min) / (max - min)) * 100;
  return (
    <div className={last ? "mb-6" : "mb-8"}>
      <div className="flex items-baseline justify-between gap-3">
        <label className="text-[15px] font-semibold text-ink">{label}</label>
        <span className="text-[18px] font-semibold tabular-nums text-accent-ink">{valueLabel}</span>
      </div>
      <p className="mt-1 text-[13px] text-ink-3">{hint}</p>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-line accent-accent"
        style={{
          background: `linear-gradient(to right, var(--accent) ${filled}%, var(--line) ${filled}%)`,
        }}
      />
      <div className="mt-2 flex justify-between text-[12px] font-semibold text-ink-3">
        <span>{ticks[0]}</span>
        <span>{ticks[1]}</span>
        <span>{ticks[2]}</span>
      </div>
    </div>
  );
}

function CommissionCalculatorPage() {
  const { t } = useLanguage();
  const c = t.commissionCalculator;

  const [salesPos, setSalesPos] = useState(DEFAULTS.salesPos);
  const [commission, setCommission] = useState(DEFAULTS.commission);
  const [payout, setPayout] = useState(DEFAULTS.payout);

  const sales = useMemo(() => posToSales(salesPos), [salesPos]);
  const brandCommission = sales * (commission / 100);
  const takeHome = brandCommission * (payout / 100);
  const platformShare = brandCommission - takeHome;
  const effRate = sales > 0 ? (takeHome / sales) * 100 : 0;

  const reset = () => {
    setSalesPos(DEFAULTS.salesPos);
    setCommission(DEFAULTS.commission);
    setPayout(DEFAULTS.payout);
  };

  const applyScenario = (scenarioSales: number) => {
    setSalesPos(salesToPos(scenarioSales));
    setCommission(DEFAULTS.commission);
    setPayout(DEFAULTS.payout);
  };

  return (
    <div className="min-h-screen pt-4">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-line">
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="relative mx-auto max-w-[1180px] px-6 pt-20 pb-16">
            <p className="eyebrow">{c.eyebrow}</p>
            <h1 className="title-l mt-4 text-[clamp(2rem,4.4vw,3.6rem)] max-w-[20ch]">
              {c.h1a}{" "}
              <span className="font-['Fraunces'] italic font-normal text-accent">{c.h1italic}</span>
            </h1>
            <p className="mt-5 max-w-[58ch] text-[18px] text-ink-2 leading-[1.45]">{c.subtitle}</p>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-6 py-16">
          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] items-stretch">
            {/* Sliders panel */}
            <div className="card-paper p-8">
              <SliderField
                label={c.salesLabel}
                hint={c.salesHint}
                valueLabel={usd(sales)}
                min={0}
                max={1000}
                step={1}
                value={salesPos}
                onChange={setSalesPos}
                ticks={[c.salesMin, c.salesMid, c.salesMax]}
              />
              <SliderField
                label={c.commissionLabel}
                hint={c.commissionHint}
                valueLabel={pct(commission)}
                min={1}
                max={25}
                step={0.5}
                value={commission}
                onChange={setCommission}
                ticks={[c.commissionMin, c.commissionMid, c.commissionMax]}
              />
              <SliderField
                label={c.payoutLabel}
                hint={c.payoutHint}
                valueLabel={pct(payout)}
                min={50}
                max={100}
                step={5}
                value={payout}
                onChange={setPayout}
                ticks={[c.payoutMin, c.payoutMid, c.payoutMax]}
                last
              />
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink-2 hover:text-ink transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" /> {c.resetLabel}
              </button>
            </div>

            {/* Result panel */}
            <div className="rounded-3xl bg-ink text-bg p-8 flex flex-col">
              <p className="label-kpi !text-bg/50">{c.resultLabel}</p>
              <p className="mt-2 text-[clamp(2.2rem,4vw,3rem)] font-semibold tabular-nums tracking-tight">
                {usd(takeHome)}
              </p>
              <p className="mt-3 text-[15px] text-bg/70 leading-[1.5]">
                {c.resultDesc(usd(sales), pct(commission), pct(payout))}
              </p>
              <span className="mt-4 inline-flex w-fit items-center rounded-full bg-accent/20 px-3 py-1 text-[13px] font-semibold text-accent">
                {c.effectiveRate(effRate.toFixed(2) + "%")}
              </span>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-bg/15 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-bg/50">
                    {c.brandCommissionLabel}
                  </p>
                  <p className="mt-1.5 text-[20px] font-semibold tabular-nums">
                    {usd(brandCommission)}
                  </p>
                </div>
                <div className="rounded-2xl border border-bg/15 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-bg/50">
                    {c.platformShareLabel}
                  </p>
                  <p className="mt-1.5 text-[20px] font-semibold tabular-nums">
                    {usd(platformShare)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How the math works */}
          <div className="mt-6 card-paper p-8">
            <p className="label-kpi mb-4">{c.mathTitle}</p>
            <ol className="space-y-2.5 text-[16px] text-ink-2 leading-[1.6] list-decimal list-inside">
              <li>{c.mathStep1(usd(brandCommission))}</li>
              <li>{c.mathStep2(pct(payout), usd(takeHome))}</li>
              <li>{c.mathStep3(pct(100 - payout))}</li>
            </ol>
          </div>

          {/* Scenarios */}
          <div className="mt-12">
            <p className="label-kpi mb-4">{c.scenariosLabel}</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {c.scenarios.map((s) => {
                const scenarioBrandCommission = s.sales * (DEFAULTS.commission / 100);
                const scenarioTakeHome = scenarioBrandCommission * (DEFAULTS.payout / 100);
                return (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => applyScenario(s.sales)}
                    className="rounded-2xl border border-line bg-bg p-5 text-left transition-colors hover:border-accent"
                  >
                    <p className="text-[15px] font-semibold text-ink">{s.name}</p>
                    <p className="mt-1 text-[13px] text-ink-3">{s.salesLabel}</p>
                    <p className="mt-3 text-[15px] font-semibold text-accent-ink">
                      ≈ {usd(scenarioTakeHome)} {c.forYou}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
