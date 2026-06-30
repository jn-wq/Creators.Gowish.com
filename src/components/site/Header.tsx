import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLanguage, type Lang } from "@/lib/i18n";

const GowishLogo = () => (
  <svg viewBox="0 0 487 295" aria-label="Ønskeskyen" className="h-5 w-auto fill-current">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M404.485 117.284C393.395 117.38 381.922 118.462 371.705 122.571C374.789 115.038 376.234 107.013 376.139 99.0013C376.044 65.2569 348.761 37.6613 315.6 37.6613C295.834 37.6613 277.227 47.5354 265.769 64.0791C263.45 37.6476 223.345 0 177.839 0C88.6807 0 72.5841 95.5636 88.6807 122.557C58.6022 114.545 0 135.567 0 200.618C0 246.688 44.5381 276.722 82.8013 284.651C123.097 292.964 315.6 303.043 404.485 284.651C438.028 277.707 487 256.083 487 201.015C487 155.041 444.972 117.079 404.485 117.284Z"
    />
  </svg>
);

function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const langs: { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "da", label: "DA" },
  ];
  return (
    <div className="hidden md:flex items-center gap-0.5 rounded-full border border-line bg-bg p-0.5">
      {langs.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={[
            "rounded-full px-3 py-1 text-[13px] font-semibold transition-colors",
            lang === code
              ? "bg-ink text-bg"
              : "text-ink-3 hover:text-ink",
          ].join(" ")}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useLanguage();
  const nav = t.header.nav;
  const ctaHref = t.header.nav[1]?.hash ?? "#get-started";

  return (
    <header className="sticky top-4 z-50 mx-auto w-[min(1180px,calc(100%-2rem))]">
      <div className="flex items-center justify-between rounded-full border border-line bg-bg/85 px-5 py-3 backdrop-blur-md shadow-[0_1px_0_rgba(30,41,59,0.04),0_12px_40px_-12px_rgba(30,41,59,0.18)]">
        <Link to="/" className="flex items-center gap-2.5 text-ink">
          <GowishLogo />
          <span className="text-[16px] font-semibold tracking-tight">
            {t.header.title.split(" ")[0]}{" "}
            <span className="text-ink-3 font-normal">
              {t.header.title.split(" ").slice(1).join(" ")}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-ink-2">
          {nav.map((n) =>
            "to" in n ? (
              <Link
                key={n.label}
                to={n.to}
                className="hover:text-accent transition-colors"
              >
                {n.label}
              </Link>
            ) : (
              <a
                key={n.label}
                href={n.hash}
                className="hover:text-accent transition-colors"
              >
                {n.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <a
            href={ctaHref}
            className="btn-accent !py-2.5 !px-5 text-[14px]"
          >
            {t.header.cta} <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
