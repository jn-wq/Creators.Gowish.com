import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

const GowishLogo = () => (
  <svg viewBox="0 0 487 295" aria-label="Ønskeskyen" className="h-5 w-auto fill-current text-ink">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M404.485 117.284C393.395 117.38 381.922 118.462 371.705 122.571C374.789 115.038 376.234 107.013 376.139 99.0013C376.044 65.2569 348.761 37.6613 315.6 37.6613C295.834 37.6613 277.227 47.5354 265.769 64.0791C263.45 37.6476 223.345 0 177.839 0C88.6807 0 72.5841 95.5636 88.6807 122.557C58.6022 114.545 0 135.567 0 200.618C0 246.688 44.5381 276.722 82.8013 284.651C123.097 292.964 315.6 303.043 404.485 284.651C438.028 277.707 487 256.083 487 201.015C487 155.041 444.972 117.079 404.485 117.284Z"
    />
  </svg>
);

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="mt-32 border-t border-line bg-bg-alt">
      <div className="mx-auto max-w-[1180px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5 font-semibold text-ink">
              <GowishLogo />
              <span className="text-[17px]">
                {f.title.split(" ")[0]}{" "}
                <span className="text-ink-3 font-normal">
                  {f.title.split(" ").slice(1).join(" ")}
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-[15px] text-ink-3 leading-relaxed">
              {f.tagline}
            </p>
          </div>

          <FooterCol title={f.programCol.title} links={f.programCol.links} />
          <FooterCol title={f.resourcesCol.title} links={f.resourcesCol.links} />
          <FooterCol title={f.companyCol.title} links={f.companyCol.links} />
        </div>

        <div className="mt-14 flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-t border-line pt-6 text-[13px] text-ink-3">
          <p>© {new Date().getFullYear()} {f.copyright}</p>
          <p className="label-kpi !text-ink-3">v1.0 · Beta</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="label-kpi mb-4">{title}</h4>
      <ul className="space-y-2.5 text-[15px]">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-ink-2 hover:text-accent transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
