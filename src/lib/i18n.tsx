import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "en" | "da";

export const translations = {
  en: {
    header: {
      title: "GoWish Creators",
      nav: [
        { label: "Benefits", hash: "#fordele" },
        { label: "Get Started", hash: "#kom-i-gang" },
        { label: "Comparison", hash: "#sammenligning" },
        { label: "Learning Bank", to: "/learning-bank" },
      ],
      cta: "Become a creator",
    },
    hero: {
      badge: "Creator Takeover 2026 — Now open for applications",
      h1a: "Turn your recommendations into a",
      h1italic: "permanent destination",
      subtitle: "Creator Marketing + Wishlists in one. Join",
      subtitleBold: "950+ creators",
      subtitleEnd: "driving inspiration, wishes and purchases — with a permanent link in bio.",
      btn1: "Become a creator",
      btn2: "See the benefits",
      stats: [
        { n: "3.6M", l: "Users in Denmark" },
        { n: "950+", l: "Active creators" },
        { n: "41,200", l: "Avg. reach per creator" },
        { n: "75,000", l: "Partner shops" },
      ],
    },
    brandMarquee: {
      label: "75,000+ partner shops on the platform",
    },
    benefits: {
      eyebrow: "01 — Benefits",
      h2a: "Save it. Share it.",
      h2italic: "Earn from it.",
      subtitle: "A creator program built around the products you'd already recommend — with a permanent home and a permanent payout.",
      cards: [
        {
          n: "01",
          title: "75,000+ shops — ready instantly",
          body: "No outreach. No contracts. Just pick products from brands you'd already recommend — and start earning.",
        },
        {
          n: "02",
          title: "Permanent payout link",
          body: "Every wish you create is a permanent buy-signal. Earn commission every time someone shops from your list — for as long as it lives.",
        },
        {
          n: "03",
          title: "Your list is your destination",
          body: "Followers save it, share it and return to it. Your recommendations don't disappear after 24 hours like a Story.",
        },
        {
          n: "04",
          title: "Full-funnel data in real time",
          body: "See reach, clicks, conversions and commission roll in. Precise figures — no fluff. Built for creators who track numbers.",
        },
        {
          n: "05",
          title: "Brand-safe by default",
          body: "Every shop is pre-vetted. Commissions are auto-tracked. No screenshots, no spreadsheets, no chasing invoices.",
        },
        {
          n: "06",
          title: "Made for storytellers",
          body: "Add notes, group by mood, theme your lists. Your wishlist looks like you — not a generic affiliate dump.",
        },
      ],
    },
    platformStats: {
      eyebrow: "02 — Platform",
      h2a: "Platform overview",
      h2italic: "& reach.",
      subtitle: "Key numbers driving your campaign's success — across the entire GoWish ecosystem.",
      stats: [
        { num: "3.6M", label: "Users in Denmark", desc: "Across the entire platform" },
        { num: "950", label: "Creators in the network", desc: "Active and ready to collaborate" },
        { num: "41,200", label: "Avg. reach per creator", desc: "Impressions in a campaign" },
        { num: "1M+", label: "Push permissions", desc: "Direct user activation in-app" },
        { num: "75,000", label: "Avg. brand wall followers", desc: "Top 50 brands in the app" },
        { num: "650k", label: "Email permissions (DK)", desc: "Qualified and segmentable" },
        { num: "17M+", label: "Global users", desc: "Total user base across markets" },
        { num: "700M+", label: "Wishes created", desc: "Wishes saved on the platform globally" },
      ],
    },
    getStarted: {
      eyebrow: "03 — Get Started",
      h2a: "Build, share, earn —",
      h2italic: "all in one app.",
      subtitle: "From signup to first commission in less than a day. No outreach, no contracts, no chasing.",
      steps: [
        {
          n: "01",
          title: "Create your wishlist",
          body: "Sign up, pick products from 75,000+ shops, add notes and group by vibe. Takes minutes — no application, no waiting list.",
        },
        {
          n: "02",
          title: "Share your link",
          body: "Drop your GoWish link in bio, stories, captions, newsletters — anywhere. Every wish is a permanent buy-signal.",
        },
        {
          n: "03",
          title: "Earn from every purchase",
          body: "Commissions are auto-tracked when followers shop your wishes. Watch reach, clicks and payout roll in — in real time.",
        },
      ],
      videoBtnLabel: "Watch creator guide",
      videoAriaLabel: "Watch creator guide video",
      videoCloseLabel: "Close video",
      videoTitle: "How to apply and get started",
      videoSubtitle: "A 60-second walkthrough of creator sign-up",
      caseStudiesLink: "Read case studies",
    },
    comparison: {
      eyebrow: "04 — Comparison",
      h2a: "GoWish vs.",
      h2italic: "the rest.",
      subtitle: "Most affiliate tools are built for storefronts. GoWish is built for the way creators actually recommend — list-first, permanent, personal.",
      featureLabel: "Feature",
      col1: "GoWish Creator",
      col2: "Typical affiliate link",
      rows: [
        ["Permanent home for recommendations",  true,  false],
        ["Earn commission on every sale",        true,  true ],
        ["75,000+ shops without outreach",       true,  false],
        ["No application or waitlist",           true,  false],
        ["Followers can re-shop anytime",        true,  false],
        ["Built-in analytics dashboard",         true,  false],
        ["Disappears after 24h stories",         false, true ],
      ] as [string, boolean, boolean][],
    },
    cta: {
      eyebrow: "05 — Join",
      h2a: "Join the GoWish",
      h2italic: "creator universe.",
      subtitle: "Join 950+ creators turning recommendations into permanent payouts. Beta access is open — no waitlist.",
      btn1: "Create my account",
      btn2: "Explore Learning Bank",
    },
    footer: {
      title: "GoWish Creators",
      tagline: "A creator program built around the products you'd already recommend — with a permanent home and a permanent payout.",
      programCol: {
        title: "Program",
        links: [
          { label: "Benefits", href: "/#fordele" },
          { label: "Platform", href: "/#platform" },
          { label: "Get Started", href: "/#kom-i-gang" },
          { label: "Comparison", href: "/#sammenligning" },
        ],
      },
      resourcesCol: {
        title: "Resources",
        links: [
          { label: "Learning Bank", href: "/learning-bank" },
          { label: "Case Studies", href: "/learning-bank" },
          { label: "Partner Shops", href: "/#brands" },
        ],
      },
      companyCol: {
        title: "Company",
        links: [
          { label: "gowish.com", href: "https://gowish.com" },
          { label: "Support", href: "#" },
          { label: "Press", href: "#" },
        ],
      },
      copyright: "GoWish · Creator Universe",
    },
    learningBank: {
      eyebrow: "Learning Bank",
      h1a: "Case studies",
      h1italic: "from creators",
      h1b: "who actually earn.",
      subtitle: "No theory. Real numbers, real wishlists, real playbooks — shared by the GoWish creator community so you can borrow what works.",
      searchPlaceholder: "Search case studies, creators, categories…",
      featuredLabel: "Featured study",
      allStudiesLabel: "All case studies",
      readPlaybook: "Read the playbook",
      readStudy: "Read study",
      backLink: "Learning Bank",
      watchPlaybook: "Watch the playbook",
      videoClips: "clips",
      moreStudies: "More from the Learning Bank",
      categories: ["All", "Beauty & Skincare", "Fashion", "Lifestyle", "Home & Interior", "Wellness", "Tech & Gadgets"],
      readTime: (n: string) => `${n} min read`,
    },
  },
  da: {
    header: {
      title: "Ønskeskyen Creators",
      nav: [
        { label: "Fordele", hash: "#fordele" },
        { label: "Kom i gang", hash: "#kom-i-gang" },
        { label: "Sammenligning", hash: "#sammenligning" },
        { label: "Learning Bank", to: "/learning-bank" },
      ],
      cta: "Bliv creator",
    },
    hero: {
      badge: "Creator Takeover 2026 — Nu åben for ansøgninger",
      h1a: "Forvandl dine anbefalinger til en",
      h1italic: "permanent destination",
      subtitle: "Creator Marketing + Ønskeliste i ét. Bliv en del af",
      subtitleBold: "950+ creators",
      subtitleEnd: "der driver inspiration, ønsker og køb — med et permanent link i bio.",
      btn1: "Bliv creator",
      btn2: "Se fordelene",
      stats: [
        { n: "3,6M", l: "Brugere i Danmark" },
        { n: "950+", l: "Aktive creators" },
        { n: "41.200", l: "Gns. reach pr. creator" },
        { n: "75.000", l: "Partnershops" },
      ],
    },
    brandMarquee: {
      label: "75.000+ partnershops på platformen",
    },
    benefits: {
      eyebrow: "01 — Fordele",
      h2a: "Gem det. Del det.",
      h2italic: "Tjen på det.",
      subtitle: "Et creator-program bygget rundt om de produkter, du alligevel ville anbefale — med et permanent hjem og en permanent udbetaling.",
      cards: [
        {
          n: "01",
          title: "75.000+ shops klar med det samme",
          body: "Ingen outreach. Ingen kontrakter. Vælg bare produkter fra brands du alligevel ville anbefale — og start med at tjene.",
        },
        {
          n: "02",
          title: "Permanent udbetalingslink",
          body: "Hvert ønske du opretter er et permanent købssignal. Du tjener kommission hver gang nogen handler fra din liste — så længe den lever.",
        },
        {
          n: "03",
          title: "Din liste er din destination",
          body: "Followers gemmer den, deler den og vender tilbage til den. Dine anbefalinger forsvinder ikke efter 24 timer som en Story.",
        },
        {
          n: "04",
          title: "Fuld-funnel data i realtid",
          body: "Se reach, klik, konverteringer og kommission rulle ind. Præcise tal — ingen fluff. Bygget til creators der holder øje med tallene.",
        },
        {
          n: "05",
          title: "Brand-safe by default",
          body: "Alle shops er forhåndsgodkendte. Kommissioner trackes automatisk. Ingen screenshots, ingen regneark, ingen jagtede fakturaer.",
        },
        {
          n: "06",
          title: "Lavet til storytellers",
          body: "Tilføj noter, gruppér efter mood, og tema dine lister. Din ønskeliste ser ud som dig — ikke et generisk affiliate-dump.",
        },
      ],
    },
    platformStats: {
      eyebrow: "02 — Platformen",
      h2a: "Platform oversigt",
      h2italic: "& rækkevidde.",
      subtitle: "Nøgletal der driver dine kampagners succes — på tværs af hele Ønskeskyen-økosystemet.",
      stats: [
        { num: "3,6M", label: "Brugere i DK", desc: "På tværs af hele platformen" },
        { num: "950", label: "Creators i netværket", desc: "Aktive og klar til samarbejde" },
        { num: "41.200", label: "Gns. reach pr. creator", desc: "Impressions i en kampagne" },
        { num: "1M+", label: "Push-tilladelser", desc: "Direkte bruger-aktivering in-app" },
        { num: "75.000", label: "Gns. brand wall-følgere", desc: "Top 50 brands i appen" },
        { num: "650k", label: "Email-tilladelser (DK)", desc: "Kvalificerede og segmenterbare" },
        { num: "17M+", label: "Globale brugere", desc: "Total brugerbase på tværs af markeder" },
        { num: "700M+", label: "Oprettede ønsker", desc: "Ønsker gemt på platformen globalt" },
      ],
    },
    getStarted: {
      eyebrow: "03 — Kom i gang",
      h2a: "Byg, del, tjen —",
      h2italic: "alt i én app.",
      subtitle: "Fra tilmelding til første kommission på under en dag. Ingen outreach, ingen kontrakter, ingen jagtede fakturaer.",
      steps: [
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
      ],
      videoBtnLabel: "Se creator guide",
      videoAriaLabel: "Se creator guide video",
      videoCloseLabel: "Luk video",
      videoTitle: "Sådan ansøger og kommer du i gang",
      videoSubtitle: "En 60-sekunders gennemgang af creator-tilmelding",
      caseStudiesLink: "Læs case studies",
    },
    comparison: {
      eyebrow: "04 — Sammenligning",
      h2a: "GoWish vs.",
      h2italic: "resten.",
      subtitle: "De fleste affiliate-værktøjer er bygget til webshops. GoWish er bygget til den måde creators faktisk anbefaler på — liste-first, permanent, personlig.",
      featureLabel: "Feature",
      col1: "GoWish Creator",
      col2: "Typisk affiliate-link",
      rows: [
        ["Permanent hjem til dine anbefalinger",  true,  false],
        ["Tjen kommission på hvert salg",          true,  true ],
        ["75.000+ shops uden outreach",            true,  false],
        ["Ingen ansøgning eller venteliste",       true,  false],
        ["Followers kan handle igen og igen",      true,  false],
        ["Indbygget analytics dashboard",          true,  false],
        ["Forsvinder efter 24 timer (Stories)",    false, true ],
      ] as [string, boolean, boolean][],
    },
    cta: {
      eyebrow: "05 — Bliv creator",
      h2a: "Bliv en del af",
      h2italic: "Ønskeskyen",
      h2end: "creator-universet.",
      subtitle: "Slut dig til 950+ creators der forvandler anbefalinger til permanente udbetalinger. Beta-adgang er åben — ingen venteliste.",
      btn1: "Opret min konto",
      btn2: "Udforsk Learning Bank",
    },
    footer: {
      title: "Ønskeskyen Creators",
      tagline: "Et creator-program bygget rundt om de produkter, du alligevel ville anbefale — med et permanent hjem og en permanent udbetaling.",
      programCol: {
        title: "Program",
        links: [
          { label: "Fordele", href: "/#fordele" },
          { label: "Platform", href: "/#platform" },
          { label: "Kom i gang", href: "/#kom-i-gang" },
          { label: "Sammenligning", href: "/#sammenligning" },
        ],
      },
      resourcesCol: {
        title: "Ressourcer",
        links: [
          { label: "Learning Bank", href: "/learning-bank" },
          { label: "Case Studies", href: "/learning-bank" },
          { label: "Partnershops", href: "/#brands" },
        ],
      },
      companyCol: {
        title: "Virksomhed",
        links: [
          { label: "gowish.com", href: "https://gowish.com" },
          { label: "Support", href: "#" },
          { label: "Presse", href: "#" },
        ],
      },
      copyright: "Ønskeskyen · Creator Universe",
    },

    // Learning Bank
    learningBank: {
      eyebrow: "Learning Bank",
      h1a: "Case studies",
      h1italic: "fra creators",
      h1b: "der faktisk tjener.",
      subtitle: "Ingen teori. Ægte tal, ægte ønskelister, ægte playbooks — delt af GoWish creator-fællesskabet så du kan låne det der virker.",
      searchPlaceholder: "Søg case studies, creators, kategorier…",
      featuredLabel: "Fremhævet studie",
      allStudiesLabel: "Alle case studies",
      readPlaybook: "Læs playbook",
      readStudy: "Læs studie",
      backLink: "Learning Bank",
      watchPlaybook: "Se playbook",
      videoClips: "klip",
      moreStudies: "Mere fra Learning Bank",
      categories: ["Alle", "Skønhed & Hudpleje", "Mode", "Livsstil", "Hjem & Indretning", "Wellness", "Tech & Gadgets"],
      readTime: (n: string) => `${n} min læsning`,
    },
  },
} as const;

type Translations = typeof translations;

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations[Lang];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem("gowish-lang");
      if (stored === "en" || stored === "da") return stored;
    } catch {
      // ignore
    }
    return "en";
  });

  useEffect(() => {
    try {
      localStorage.setItem("gowish-lang", lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
