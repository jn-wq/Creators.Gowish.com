export type CreatorVideo = {
  title: string;
  duration: string;
  tone: "coral" | "cream" | "blue" | "pink";
  aspect: "9/16" | "16/9" | "4/5" | "1/1";
  description: string;
  tiktokUrl?: string;
};

export type CaseStudyLocale = {
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  metrics: { value: string; label: string }[];
  sections: { heading: string; body: string }[];
  quote?: { text: string; attribution: string };
  brandBrief: {
    brandName: string;
    objective: string;
    background: string;
  };
  reachData: {
    expectedReach: string;
    actualReach: string;
    expectedImpressions: string;
    actualImpressions: string;
  };
  engagement: {
    likes: string;
    engagementRate: string;
    saves: string;
    comments: string;
  };
};

export type CaseStudy = {
  slug: string;
  creator: string;
  handle: string;
  headline: string;
  en: CaseStudyLocale;
  da: CaseStudyLocale;
  videos?: CreatorVideo[];
};

/** Convenience: get the locale-specific fields for a study */
export function studyLocale(s: CaseStudy, lang: "en" | "da"): CaseStudyLocale & { creator: string; handle: string; slug: string; headline: string } {
  return { ...s[lang], creator: s.creator, handle: s.handle, slug: s.slug, headline: s.headline };
}

export const categories = [
  "All",
  "Beauty & Skincare",
  "Fashion",
  "Lifestyle",
  "Home & Interior",
  "Wellness",
  "Tech & Gadgets",
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "from-200-followers-to-12k-monthly",
    creator: "Mille Lykke",
    handle: "@millelykke",
    headline: "€12.400/mo",
    en: {
      title: "From 200 followers to €12k monthly commission in 9 months",
      category: "Beauty & Skincare",
      readTime: "8 min read",
      excerpt: "Mille turned a tiny skincare niche audience into a permanent income stream by treating her wishlist as a curated shelf — not a dump of links.",
      metrics: [
        { value: "€12.400", label: "Monthly commission" },
        { value: "9 mo", label: "Time to scale" },
        { value: "11.8%", label: "Avg. conversion" },
        { value: "47", label: "Active wishes" },
      ],
      sections: [
        { heading: "The setup", body: "Mille started with a niche audience of 200 skincare nerds. Instead of chasing reach, she chose depth — every wish on her list was a product she'd already used for 30+ days, with a personal note explaining who it's for and who it's not." },
        { heading: "What worked", body: "Grouping wishes by skin concern (barrier repair, oily, sensitive) made the list scannable. Followers stopped DM'ing 'what do you use?' and started shopping directly. Permanent links meant traffic kept rolling in from old posts." },
        { heading: "The lesson", body: "A small audience with high trust outperforms a large audience with low trust — every time. Treat your wishlist like a recommendation you'd give a close friend." },
      ],
      quote: { text: "I stopped trying to sound like an influencer. The moment my list felt like a friend's bathroom shelf, sales 5x'd.", attribution: "Mille Lykke" },
      brandBrief: {
        brandName: "La Roche-Posay",
        objective: "La Roche-Posay wanted to reach a highly engaged, trust-first skincare audience — not just impressions, but genuine product recommendations from credible voices.",
        background: "GoWish approached La Roche-Posay in early 2025 as part of a Creator Takeover pilot. The brand had struggled with influencer campaigns that generated reach but low intent. GoWish proposed a permanent wishlist format where Mille would curate a 'barrier repair shelf' and keep it live beyond the campaign window.",
      },
      reachData: {
        expectedReach: "25.000",
        actualReach: "41.200",
        expectedImpressions: "68.000",
        actualImpressions: "112.400",
      },
      engagement: {
        likes: "8.400",
        engagementRate: "6.2%",
        saves: "3.100",
        comments: "412",
      },
    },
    da: {
      title: "Fra 200 followers til €12k månedlig kommission på 9 måneder",
      category: "Skønhed & Hudpleje",
      readTime: "8 min læsning",
      excerpt: "Mille forvandlede et lille hudpleje-nichepublikum til en permanent indkomst ved at behandle sin ønskeliste som en kurateret reol — ikke et link-dump.",
      metrics: [
        { value: "€12.400", label: "Månedlig kommission" },
        { value: "9 mdr.", label: "Tid til skalering" },
        { value: "11,8%", label: "Gns. konvertering" },
        { value: "47", label: "Aktive ønsker" },
      ],
      sections: [
        { heading: "Opsætningen", body: "Mille startede med et nichepublikum på 200 hudplejenørder. I stedet for at jage rækkevidde valgte hun dybde — hvert ønske på hendes liste var et produkt hun allerede havde brugt i 30+ dage, med en personlig note om hvem det er til og hvem det ikke er til." },
        { heading: "Hvad der virkede", body: "At gruppere ønsker efter hudproblem (barrierreparation, fedtet, sensitiv) gjorde listen overskuelig. Followers holdt op med at DM'e 'hvad bruger du?' og begyndte at handle direkte. Permanente links betød at trafik blev ved med at rulle ind fra gamle opslag." },
        { heading: "Læren", body: "Et lille publikum med høj tillid overgår altid et stort publikum med lav tillid. Behandl din ønskeliste som en anbefaling du ville give en nær ven." },
      ],
      quote: { text: "Jeg holdt op med at forsøge at lyde som en influencer. I det øjeblik min liste føltes som en vens badeværelseshylde, 5-dobledtes salget.", attribution: "Mille Lykke" },
      brandBrief: {
        brandName: "La Roche-Posay",
        objective: "La Roche-Posay ønskede at nå et meget engageret, tillidsbaseret hudpleejpublikum — ikke bare visninger, men ægte produktanbefalinger fra troværdige stemmer.",
        background: "GoWish kontaktede La Roche-Posay i starten af 2025 som del af et Creator Takeover-pilotprojekt. Brandet havde kæmpet med influencer-kampagner der genererede rækkevidde men lav købsintention. GoWish foreslog et permanent ønskelisteformat, hvor Mille ville kuratere en 'barrierreparationshylde' og holde den aktiv efter kampagnevinduet.",
      },
      reachData: {
        expectedReach: "25.000",
        actualReach: "41.200",
        expectedImpressions: "68.000",
        actualImpressions: "112.400",
      },
      engagement: {
        likes: "8.400",
        engagementRate: "6,2%",
        saves: "3.100",
        comments: "412",
      },
    },
  },
  {
    slug: "fashion-edit-that-converts-7x",
    creator: "Aya Karim",
    handle: "@ayakrm",
    headline: "7× conv.",
    en: {
      title: "The seasonal edit format that converts 7× better than story drops",
      category: "Fashion",
      readTime: "6 min read",
      excerpt: "Why building 4 seasonal 'edits' a year beats daily story affiliate links — with the exact format Aya uses to ship hers.",
      metrics: [
        { value: "7×", label: "Conversion lift" },
        { value: "4", label: "Edits / year" },
        { value: "€38k", label: "Annual payout" },
        { value: "62%", label: "Returning shoppers" },
      ],
      sections: [
        { heading: "The format", body: "Each edit is a 12-piece capsule built around one wearable theme: 'Soft tailoring for warm offices', 'Cold-girl layers under €120'. Aya plans them like a magazine issue — drop date, hero image, intro note." },
        { heading: "Why it works", body: "Followers know the rhythm. They wait for drops, save the list, share it with friends. The list outlives the post by months." },
        { heading: "Steal this", body: "Pick 4 dates a year. Pick one tight theme per drop. Write 2 sentences per piece. Don't overproduce — the curation is the product." },
      ],
      brandBrief: {
        brandName: "UNIQLO",
        objective: "UNIQLO wanted to move beyond seasonal lookbooks and reach fashion-forward audiences through trusted creator curation — with persistent, shoppable wishlists that outlived individual posts.",
        background: "GoWish partnered with UNIQLO in spring 2025 to test a capsule-edit format. UNIQLO had previously run standard influencer gifting rounds with short-lived story placements. The brand was looking for a format that could hold attention across the full season, not just at drop time.",
      },
      reachData: {
        expectedReach: "32.000",
        actualReach: "58.700",
        expectedImpressions: "84.000",
        actualImpressions: "139.500",
      },
      engagement: {
        likes: "11.200",
        engagementRate: "7.4%",
        saves: "4.800",
        comments: "634",
      },
    },
    da: {
      title: "Det sæsonbaserede edit-format der konverterer 7× bedre end story-drops",
      category: "Mode",
      readTime: "6 min læsning",
      excerpt: "Hvorfor det at bygge 4 sæsonbestemte 'edits' om året slår daglige story affiliate-links — med det præcise format Aya bruger.",
      metrics: [
        { value: "7×", label: "Konverteringsløft" },
        { value: "4", label: "Edits / år" },
        { value: "€38k", label: "Årlig udbetaling" },
        { value: "62%", label: "Tilbagevendende shoppere" },
      ],
      sections: [
        { heading: "Formatet", body: "Hvert edit er en 12-stykkers kapsel bygget rundt om ét bærbart tema: 'Blød skræddersyring til varme kontorer', 'Cold-girl lag under €120'. Aya planlægger dem som et magasin — drop-dato, hero-billede, intro-note." },
        { heading: "Hvorfor det virker", body: "Followers kender rytmen. De venter på drops, gemmer listen, deler den med venner. Listen overlever opslaget med måneder." },
        { heading: "Stjæl det her", body: "Vælg 4 datoer om året. Vælg ét stramt tema per drop. Skriv 2 sætninger per stykke. Overproduc ikke — kureringen er produktet." },
      ],
      brandBrief: {
        brandName: "UNIQLO",
        objective: "UNIQLO ønskede at bevæge sig ud over sæsonbestemte lookbooks og nå modebeviste målgrupper gennem betroet creator-kuratering — med vedvarende, shoppable ønskelister der overlevede de individuelle opslag.",
        background: "GoWish indgik et samarbejde med UNIQLO i foråret 2025 for at teste et kapsel-edit-format. UNIQLO havde tidligere kørt standard influencer-gifting-runder med kortvarige story-placeringer. Brandet søgte et format der kunne fastholde opmærksomheden gennem hele sæsonen, ikke kun ved drop-tidspunktet.",
      },
      reachData: {
        expectedReach: "32.000",
        actualReach: "58.700",
        expectedImpressions: "84.000",
        actualImpressions: "139.500",
      },
      engagement: {
        likes: "11.200",
        engagementRate: "7,4%",
        saves: "4.800",
        comments: "634",
      },
    },
  },
  {
    slug: "newsletter-to-wishlist-funnel",
    creator: "Theo Bishop",
    handle: "theo.substack",
    headline: "22% CTR",
    en: {
      title: "How a weekly newsletter funnels 22% of subscribers to a wishlist",
      category: "Lifestyle",
      readTime: "5 min read",
      excerpt: "The 3-line PS that turned Theo's lifestyle newsletter into the top traffic source for his GoWish list.",
      metrics: [
        { value: "22%", label: "Click-through" },
        { value: "8.1k", label: "Subs" },
        { value: "€4.2k", label: "Monthly" },
        { value: "94s", label: "Avg. time on list" },
      ],
      sections: [
        { heading: "The PS that pays", body: "At the bottom of every Sunday issue: one line about what he's actually buying this week, linked to his GoWish list. No hard sell, no banner. Just a friend telling you what's on his desk." },
        { heading: "Why it scales", body: "Newsletter readers are already in 'recommendation mode'. They click because they trust the voice — not because of a discount code." },
        { heading: "Apply it", body: "Audit your highest-trust surface (newsletter, podcast outro, pinned story). Add one quiet line linking your wishlist. Measure for 4 weeks." },
      ],
      brandBrief: {
        brandName: "Tekla Fabrics",
        objective: "Tekla Fabrics wanted to reach considered, slow-lifestyle consumers through editorial voices rather than traditional advertising — audiences who buy with intent, not impulse.",
        background: "GoWish introduced Tekla to Theo's newsletter audience in autumn 2025. Tekla had previously focused on premium editorial placements in print and online magazines. The brand was curious whether a creator-led wishlist could replicate the conversion quality of a long-form editorial feature.",
      },
      reachData: {
        expectedReach: "8.100",
        actualReach: "8.100",
        expectedImpressions: "16.200",
        actualImpressions: "22.800",
      },
      engagement: {
        likes: "1.940",
        engagementRate: "5.1%",
        saves: "1.280",
        comments: "187",
      },
    },
    da: {
      title: "Hvordan et ugentligt nyhedsbrev sender 22% af abonnenter til en ønskeliste",
      category: "Livsstil",
      readTime: "5 min læsning",
      excerpt: "Den 3-linjers PS der forvandlede Theos livsstils-nyhedsbrev til den største trafikskilde for hans GoWish-liste.",
      metrics: [
        { value: "22%", label: "Klik-igennem" },
        { value: "8.1k", label: "Abonnenter" },
        { value: "€4.2k", label: "Månedlig" },
        { value: "94s", label: "Gns. tid på liste" },
      ],
      sections: [
        { heading: "PS'en der betaler", body: "I bunden af hvert søndagsblad: én linje om hvad han faktisk køber denne uge, linket til hans GoWish-liste. Ingen hårdt salg, ingen banner. Bare en ven der fortæller hvad der er på hans skrivebord." },
        { heading: "Hvorfor det skalerer", body: "Nyhedsbrevslæsere er allerede i 'anbefalingstilstand'. De klikker fordi de stoler på stemmen — ikke på grund af en rabatkode." },
        { heading: "Anvend det", body: "Gennemgå din højeste-tillid overflade (nyhedsbrev, podcast-outro, fastgjort story). Tilføj én stille linje der linker din ønskeliste. Mål i 4 uger." },
      ],
      brandBrief: {
        brandName: "Tekla Fabrics",
        objective: "Tekla Fabrics ønskede at nå eftertænksomme, slow-lifestyle-forbrugere via redaktionelle stemmer frem for traditionel reklame — målgrupper der køber med intention, ikke impulse.",
        background: "GoWish præsenterede Tekla for Theos nyhedsbrevspublikum i efteråret 2025. Tekla havde tidligere fokuseret på premium redaktionelle placeringer i print- og onlinemagasiner. Brandet var nysgerrig på om en creator-ledet ønskeliste kunne replikere konverteringskvaliteten fra en lang redaktionel feature.",
      },
      reachData: {
        expectedReach: "8.100",
        actualReach: "8.100",
        expectedImpressions: "16.200",
        actualImpressions: "22.800",
      },
      engagement: {
        likes: "1.940",
        engagementRate: "5,1%",
        saves: "1.280",
        comments: "187",
      },
    },
  },
  {
    slug: "interior-mood-boards-as-wishlists",
    creator: "Sara Vinter",
    handle: "@sarawinterhome",
    headline: "+340% saves",
    en: {
      title: "Mood-board wishlists: how an interior creator made browsing feel like Pinterest",
      category: "Home & Interior",
      readTime: "7 min read",
      excerpt: "Treating wishes as mood boards instead of catalogues — and why followers now save lists like they save recipes.",
      metrics: [
        { value: "340%", label: "Saves lift" },
        { value: "11", label: "Themed lists" },
        { value: "€6.8k", label: "Monthly" },
        { value: "3.2", label: "Avg. items/order" },
      ],
      sections: [
        { heading: "The shift", body: "Sara stopped making 'best of 2026' lists and started making mood lists: 'Sunday morning kitchen', 'Rainy reading corner', 'First apartment, second-hand first'." },
        { heading: "Why it works", body: "People shop a mood, not a category. A mood gives permission to buy three things instead of one." },
        { heading: "Try this week", body: "Take your last 20 wishes. Re-group them by feeling, not by room. Rename the lists like a Spotify playlist." },
      ],
      brandBrief: {
        brandName: "HAY",
        objective: "HAY wanted to demonstrate that their products belong in real, lived-in homes — not staged showrooms — by partnering with a creator who curates with an authentic residential eye.",
        background: "GoWish approached HAY in spring 2025 with a mood-board concept that aligned with the brand's editorial aesthetic. HAY had previously relied on interior magazine placements and in-store styling. The wishlist format allowed HAY to live inside a creator's genuine home narrative, grouped by feeling rather than product category.",
      },
      reachData: {
        expectedReach: "18.000",
        actualReach: "29.400",
        expectedImpressions: "46.000",
        actualImpressions: "78.200",
      },
      engagement: {
        likes: "6.100",
        engagementRate: "5.8%",
        saves: "5.400",
        comments: "298",
      },
    },
    da: {
      title: "Mood board-ønskelister: hvordan en indretningscreator fik browsing til at føles som Pinterest",
      category: "Hjem & Indretning",
      readTime: "7 min læsning",
      excerpt: "At behandle ønsker som mood boards i stedet for kataloger — og hvorfor followers nu gemmer lister som de gemmer opskrifter.",
      metrics: [
        { value: "340%", label: "Gem-løft" },
        { value: "11", label: "Tematiske lister" },
        { value: "€6.8k", label: "Månedlig" },
        { value: "3,2", label: "Gns. varer/ordre" },
      ],
      sections: [
        { heading: "Skiftet", body: "Sara holdt op med at lave 'bedste i 2026'-lister og begyndte at lave stemningslister: 'Søndagsmorgen-køkken', 'Regnvejrs-læsehjørne', 'Første lejlighed, genbrugsfirst'." },
        { heading: "Hvorfor det virker", body: "Folk shopper en stemning, ikke en kategori. En stemning giver tilladelse til at købe tre ting i stedet for én." },
        { heading: "Prøv det denne uge", body: "Tag dine sidste 20 ønsker. Omgrupper dem efter følelse, ikke efter rum. Omdøb listerne som en Spotify-playliste." },
      ],
      brandBrief: {
        brandName: "HAY",
        objective: "HAY ønskede at demonstrere at deres produkter hører hjemme i rigtige, beboede hjem — ikke iscenesatte showrooms — ved at samarbejde med en creator der kuraterer med et autentisk residensielt blik.",
        background: "GoWish henvendte sig til HAY i foråret 2025 med et mood board-koncept der matchede brandets redaktionelle æstetik. HAY havde tidligere baseret sig på interiørmagasin-placeringer og butiksstyling. Ønskelisteformatet lod HAY eksistere inde i en creators ægte hjemmenarrative, grupperet efter stemning frem for produktkategori.",
      },
      reachData: {
        expectedReach: "18.000",
        actualReach: "29.400",
        expectedImpressions: "46.000",
        actualImpressions: "78.200",
      },
      engagement: {
        likes: "6.100",
        engagementRate: "5,8%",
        saves: "5.400",
        comments: "298",
      },
    },
  },
  {
    slug: "wellness-creator-trust-flywheel",
    creator: "Noor Halim",
    handle: "@noorhalim",
    headline: "68% return",
    en: {
      title: "The trust flywheel: turning skeptical wellness readers into repeat shoppers",
      category: "Wellness",
      readTime: "6 min read",
      excerpt: "Why wellness creators have the highest skepticism — and the framework Noor uses to convert that skepticism into long-term loyalty.",
      metrics: [
        { value: "68%", label: "Returning" },
        { value: "€9.1k", label: "Monthly" },
        { value: "14d", label: "Avg. decision" },
        { value: "0", label: "Sponsored posts" },
      ],
      sections: [
        { heading: "Receipts > claims", body: "Every wish includes a note: 'I've used this for X weeks. Here's what changed. Here's what didn't.' No miracle language." },
        { heading: "Slow the funnel", body: "Wellness shoppers don't impulse-buy. Noor's list is built for people who'll come back in 2 weeks, not 2 minutes." },
        { heading: "Permanent > viral", body: "A permanent link beats a viral reel because trust compounds. Reels reset; lists accumulate." },
      ],
      brandBrief: {
        brandName: "Rituals",
        objective: "Rituals wanted to move beyond surface-level beauty influencer partnerships and connect with a wellness audience that prioritizes ritual, routine, and self-evidence over hype.",
        background: "GoWish introduced Rituals to Noor's audience in mid-2025, positioning the collaboration as a long-form trust exercise rather than a campaign. Rituals had seen diminishing returns from short-cycle influencer deals and was actively looking for formats where the brand message could compound over time alongside authentic creator testimony.",
      },
      reachData: {
        expectedReach: "22.000",
        actualReach: "34.600",
        expectedImpressions: "55.000",
        actualImpressions: "91.300",
      },
      engagement: {
        likes: "7.200",
        engagementRate: "8.1%",
        saves: "4.100",
        comments: "561",
      },
    },
    da: {
      title: "Tillidssvinghjulet: forvandling af skeptiske wellness-læsere til tilbagevendende shoppere",
      category: "Wellness",
      readTime: "6 min læsning",
      excerpt: "Hvorfor wellness-creators har den højeste skepsis — og den ramme Noor bruger til at konvertere den skepsis til langsigtet loyalitet.",
      metrics: [
        { value: "68%", label: "Tilbagevendende" },
        { value: "€9.1k", label: "Månedlig" },
        { value: "14 dage", label: "Gns. beslutning" },
        { value: "0", label: "Sponsorerede opslag" },
      ],
      sections: [
        { heading: "Beviser > påstande", body: "Hvert ønske inkluderer en note: 'Jeg har brugt dette i X uger. Her er hvad der ændrede sig. Her er hvad der ikke gjorde.' Ingen mirakelsproget." },
        { heading: "Sænk farten i tragten", body: "Wellness-shoppere impulskøber ikke. Noors liste er bygget til folk der vender tilbage om 2 uger, ikke 2 minutter." },
        { heading: "Permanent > viral", body: "Et permanent link slår en viral reel fordi tillid akkumuleres. Reels nulstilles; lister ophobes." },
      ],
      brandBrief: {
        brandName: "Rituals",
        objective: "Rituals ønskede at bevæge sig ud over overfladiske skønhedsinfluencer-partnerskaber og forbinde sig med et wellness-publikum der prioriterer ritual, rutine og selvdokumenteret virkning frem for hype.",
        background: "GoWish introducerede Rituals til Noors publikum i midten af 2025 og positionerede samarbejdet som en langsigtet tillidsøvelse frem for en kampagne. Rituals havde oplevet faldende afkast fra kortcyklede influencer-aftaler og søgte aktivt formater hvor brandbudskabet kunne akkumulere over tid sideløbende med autentisk creator-vidnesbyrd.",
      },
      reachData: {
        expectedReach: "22.000",
        actualReach: "34.600",
        expectedImpressions: "55.000",
        actualImpressions: "91.300",
      },
      engagement: {
        likes: "7.200",
        engagementRate: "8,1%",
        saves: "4.100",
        comments: "561",
      },
    },
  },
  {
    slug: "tech-reviewer-permanent-stack",
    creator: "Lukas Berg",
    handle: "@lukasreviews",
    headline: "€18k Q1",
    en: {
      title: "Why a tech reviewer ditched Amazon links for a permanent GoWish stack",
      category: "Tech & Gadgets",
      readTime: "5 min read",
      excerpt: "Lukas swapped a wall of Amazon links for one curated GoWish stack — and tripled commission in a quarter.",
      metrics: [
        { value: "€18k", label: "Q1 payout" },
        { value: "3×", label: "Vs. prior tool" },
        { value: "29", label: "Curated picks" },
        { value: "4.7★", label: "Audience NPS" },
      ],
      sections: [
        { heading: "The problem", body: "Affiliate links rotted. Half were dead within 6 months. Followers complained, trust dipped, commission cratered." },
        { heading: "The fix", body: "One permanent 'My current stack' wishlist. Updated quarterly. Featured in every video description, pinned in every thread." },
        { heading: "The takeaway", body: "If your list is the answer to 'what do you actually use?' — it earns forever." },
      ],
      brandBrief: {
        brandName: "Sonos",
        objective: "Sonos wanted to be recommended by credible tech voices as a considered, long-term purchase — not as a product of the week in a discount-driven affiliate roundup.",
        background: "GoWish approached Sonos in Q4 2024 with a permanent-stack concept specifically designed for the tech reviewer category. Sonos had been skeptical of influencer marketing due to the low-trust, high-volume approach of most affiliate networks. The permanent wishlist format, where Lukas would feature Sonos as part of a curated 'home audio setup' section, addressed the brand's core concern around authenticity.",
      },
      reachData: {
        expectedReach: "40.000",
        actualReach: "67.300",
        expectedImpressions: "110.000",
        actualImpressions: "184.600",
      },
      engagement: {
        likes: "13.800",
        engagementRate: "5.6%",
        saves: "6.200",
        comments: "892",
      },
    },
    da: {
      title: "Hvorfor en tech-anmelder droppede Amazon-links til fordel for en permanent GoWish-stack",
      category: "Tech & Gadgets",
      readTime: "5 min læsning",
      excerpt: "Lukas byttede en væg af Amazon-links ud med én kurateret GoWish-stack — og tredobledede kommissionen på et kvartal.",
      metrics: [
        { value: "€18k", label: "Q1 udbetaling" },
        { value: "3×", label: "Vs. tidligere værktøj" },
        { value: "29", label: "Kuraterede valg" },
        { value: "4.7★", label: "Publikums NPS" },
      ],
      sections: [
        { heading: "Problemet", body: "Affiliate-links rådnede. Halvdelen var døde inden for 6 måneder. Followers klagede, tillid faldt, kommission styrtdykkede." },
        { heading: "Løsningen", body: "Én permanent 'Min nuværende stack'-ønskeliste. Opdateret kvartalsvis. Fremhævet i hver videobeskrivelse, fastgjort i hvert tråd." },
        { heading: "Konklusionen", body: "Hvis din liste er svaret på 'hvad bruger du faktisk?' — tjener den for evigt." },
      ],
      brandBrief: {
        brandName: "Sonos",
        objective: "Sonos ønskede at blive anbefalet af troværdige tech-stemmer som et velovervejet, langsigtet køb — ikke som ugens produkt i en rabatdrevet affiliate-oversigt.",
        background: "GoWish henvendte sig til Sonos i Q4 2024 med et permanent-stack-koncept specielt designet til tech-anmelderkategorien. Sonos havde været skeptiske over for influencer-marketing på grund af den lav-tillid, høj-volumen tilgang hos de fleste affiliate-netværk. Det permanente ønskelisteformat, hvor Lukas ville fremhæve Sonos som del af en kurateret 'hjemmeaudio-opsætnings'-sektion, adresserede brandets kerneanliggende om autenticitet.",
      },
      reachData: {
        expectedReach: "40.000",
        actualReach: "67.300",
        expectedImpressions: "110.000",
        actualImpressions: "184.600",
      },
      engagement: {
        likes: "13.800",
        engagementRate: "5,6%",
        saves: "6.200",
        comments: "892",
      },
    },
  },
];

export const creatorVideos: Record<string, CreatorVideo[]> = {
  "from-200-followers-to-12k-monthly": [
    { title: "Reklam @GoWish", duration: "0:32", tone: "coral", aspect: "9/16", description: "Alva Leia viser sin GoWish-wishlist frem og fortæller hvorfor den fungerer som hendes faste skincare-shelf.", tiktokUrl: "https://www.tiktok.com/@alvaleiablomdahl/video/7638669551365934358" },
    { title: "Walkthrough: My skincare shelf, ranked by skin concern", duration: "1:48", tone: "coral", aspect: "9/16", description: "Mille walks through her top-10 barrier repair picks and why each made the cut." },
    { title: "Before & after: 90 days on the barrier-first routine", duration: "0:58", tone: "pink", aspect: "9/16", description: "Side-by-side skin diary that drove the most clicks of any post in 2026." },
    { title: "How I write a wish note that actually converts", duration: "2:14", tone: "cream", aspect: "16/9", description: "Her exact framework for the 2-line note under every product." },
    { title: "La Roche-Posay review: 6 weeks of daily use", duration: "1:22", tone: "pink", aspect: "9/16", description: "An honest breakdown of the Cicaplast B5 serum after six weeks — what improved, what didn't." },
    { title: "How the GoWish shelf keeps earning while I sleep", duration: "3:05", tone: "cream", aspect: "16/9", description: "A behind-the-scenes look at evergreen traffic from older posts still linking to the permanent wishlist." },
  ],
  "fashion-edit-that-converts-7x": [
    { title: "Haul — styles fra UNIQLO", duration: "0:48", tone: "pink", aspect: "9/16", description: "Josefine Dybvad pakker sin UNIQLO-haul ud og linker hver style til sin GoWish-edit.", tiktokUrl: "https://www.tiktok.com/@josefinedybvad/video/7642621765948083478" },
    { title: "Inside the Spring Edit: 12 pieces, one mood", duration: "1:32", tone: "pink", aspect: "9/16", description: "Aya unboxes the capsule and explains the curation logic." },
    { title: "Cold-girl layers under €120 — full try-on", duration: "2:05", tone: "blue", aspect: "9/16", description: "The try-on reel that pushed 38% of edit sales in 48 hours." },
    { title: "Planning 4 drops a year like a magazine", duration: "3:10", tone: "cream", aspect: "16/9", description: "Her editorial calendar, drop dates, and pre-launch teaser format." },
    { title: "UNIQLO collab: what the brief actually said", duration: "1:18", tone: "coral", aspect: "9/16", description: "Behind the scenes on the brand brief, what Aya pushed back on, and how the final edit took shape." },
    { title: "Why I stopped doing story swipe-ups", duration: "2:44", tone: "cream", aspect: "16/9", description: "A data breakdown comparing story affiliate CTR vs. permanent edit CTR across 6 months." },
  ],
  "newsletter-to-wishlist-funnel": [
    { title: "POV: curated wishlists for any occasion", duration: "0:24", tone: "cream", aspect: "9/16", description: "Den officielle GoWish-konto viser konceptet med kuraterede wishlists for enhver anledning.", tiktokUrl: "https://www.tiktok.com/@gowish_com/video/7227501005464718619" },
    { title: "The Sunday PS that pays — anatomy of one line", duration: "1:12", tone: "cream", aspect: "16/9", description: "Theo dissects the single sentence at the bottom of every issue." },
    { title: "On my desk this week — the recurring segment", duration: "0:46", tone: "coral", aspect: "9/16", description: "A weekly desk tour that doubles as a soft product recommendation." },
    { title: "Tekla Fabrics wishlist: building a slow-home shelf", duration: "1:55", tone: "blue", aspect: "4/5", description: "Theo curates a Tekla-anchored bedroom wishlist live, explaining the editorial logic behind each pick." },
    { title: "8.100 readers, 22% click — the funnel behind the number", duration: "2:38", tone: "cream", aspect: "16/9", description: "A transparent walkthrough of the newsletter analytics, referral traffic, and wishlist revenue for one month." },
    { title: "How to turn a niche audience into a high-trust revenue source", duration: "3:22", tone: "coral", aspect: "16/9", description: "Broader reflections on why small, engaged email lists outperform large, passive social followings for affiliate income." },
  ],
  "interior-mood-boards-as-wishlists": [
    { title: "Favoritter fra @jwlry.dk på Ønskeskyen", duration: "0:38", tone: "pink", aspect: "9/16", description: "Alisha Bk Rindsig kuraterer sine smykke-favoritter som en mood-board wishlist.", tiktokUrl: "https://www.tiktok.com/@alishabkrindsig/video/7621916390357732630" },
    { title: "Sunday morning kitchen — mood board build", duration: "1:58", tone: "cream", aspect: "4/5", description: "Sara assembles a mood list live, from playlist to plates." },
    { title: "First apartment, second-hand first", duration: "2:22", tone: "pink", aspect: "9/16", description: "Walkthrough of a 100% second-hand starter list under €600." },
    { title: "Why I stopped making 'best of' lists", duration: "1:05", tone: "blue", aspect: "16/9", description: "The shift from category lists to feeling-based lists, explained in 60 seconds." },
    { title: "HAY collab: curating the 'rainy reading corner' mood", duration: "2:14", tone: "cream", aspect: "4/5", description: "Sara builds the collaboration wishlist in real time, showing how HAY pieces anchor the mood without dominating it." },
    { title: "Why followers save mood lists like recipes", duration: "1:44", tone: "pink", aspect: "9/16", description: "An analysis of save-rate data across category lists vs. mood lists — the difference is dramatic." },
  ],
  "wellness-creator-trust-flywheel": [
    { title: "My current obsessions", duration: "0:42", tone: "blue", aspect: "9/16", description: "Maria gennemgår sine nuværende wellness-favoritter med den klassiske receipts-over-claims tilgang.", tiktokUrl: "https://www.tiktok.com/@maria_mk_managements/video/7601162694854479106" },
    { title: "14-day decision window: how I write wellness notes", duration: "1:40", tone: "blue", aspect: "9/16", description: "Noor explains the receipts-over-claims framework on camera." },
    { title: "Why I turned down €18k in sponsorships this year", duration: "2:48", tone: "coral", aspect: "16/9", description: "A candid talk on long-term trust math vs. short-term payouts." },
    { title: "Rituals collab: what 6 weeks of honest use looks like", duration: "2:02", tone: "blue", aspect: "9/16", description: "Noor's unfiltered review of the Rituals products after the collaboration window, including what she kept and what she didn't." },
    { title: "68% returning shoppers — how the flywheel actually spins", duration: "3:14", tone: "cream", aspect: "16/9", description: "A breakdown of the trust-compounding cycle: first visit, second visit, purchase, return purchase, and referral." },
    { title: "Wellness skepticism is a feature, not a bug", duration: "1:28", tone: "blue", aspect: "9/16", description: "Why a skeptical audience converts at higher rates when trust is earned — and how to earn it in 4 steps." },
  ],
  "tech-reviewer-permanent-stack": [
    { title: "Favoritter til konfirmander", duration: "0:36", tone: "coral", aspect: "9/16", description: "Lykke Aagaard viser hvordan en permanent kurateret liste fungerer til en konkret anledning.", tiktokUrl: "https://www.tiktok.com/@lykkeaagaard/video/7613328342892186902" },
    { title: "My current stack — Q1 update", duration: "3:24", tone: "blue", aspect: "16/9", description: "Lukas's quarterly walkthrough of the permanent GoWish list." },
    { title: "Why affiliate links rot (and what to do instead)", duration: "1:52", tone: "coral", aspect: "9/16", description: "A 2-minute breakdown of link rot and the permanent-list fix." },
    { title: "Setup tour: the desk behind the reviews", duration: "2:11", tone: "cream", aspect: "4/5", description: "Every product on the desk, linked to the same permanent list." },
    { title: "Sonos in the stack: 4 months later", duration: "2:36", tone: "blue", aspect: "16/9", description: "An honest update on the Sonos Era 300 after four months of daily use — what changed in the review after living with it." },
    { title: "From 300 dead links to 1 list: the migration story", duration: "3:48", tone: "coral", aspect: "16/9", description: "How Lukas audited and collapsed his entire affiliate link history into a single permanent GoWish stack over one weekend." },
  ],
};
