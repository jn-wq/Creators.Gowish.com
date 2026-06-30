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
    },
  },
];

export const creatorVideos: Record<string, CreatorVideo[]> = {
  "from-200-followers-to-12k-monthly": [
    { title: "Reklam @GoWish", duration: "0:32", tone: "coral", aspect: "9/16", description: "Alva Leia viser sin GoWish-wishlist frem og fortæller hvorfor den fungerer som hendes faste skincare-shelf.", tiktokUrl: "https://www.tiktok.com/@alvaleiablomdahl/video/7638669551365934358" },
    { title: "Walkthrough: My skincare shelf, ranked by skin concern", duration: "1:48", tone: "coral", aspect: "9/16", description: "Mille walks through her top-10 barrier repair picks and why each made the cut." },
    { title: "Before & after: 90 days on the barrier-first routine", duration: "0:58", tone: "pink", aspect: "9/16", description: "Side-by-side skin diary that drove the most clicks of any post in 2026." },
    { title: "How I write a wish note that actually converts", duration: "2:14", tone: "cream", aspect: "16/9", description: "Her exact framework for the 2-line note under every product." },
  ],
  "fashion-edit-that-converts-7x": [
    { title: "Haul — styles fra UNIQLO", duration: "0:48", tone: "pink", aspect: "9/16", description: "Josefine Dybvad pakker sin UNIQLO-haul ud og linker hver style til sin GoWish-edit.", tiktokUrl: "https://www.tiktok.com/@josefinedybvad/video/7642621765948083478" },
    { title: "Inside the Spring Edit: 12 pieces, one mood", duration: "1:32", tone: "pink", aspect: "9/16", description: "Aya unboxes the capsule and explains the curation logic." },
    { title: "Cold-girl layers under €120 — full try-on", duration: "2:05", tone: "blue", aspect: "9/16", description: "The try-on reel that pushed 38% of edit sales in 48 hours." },
    { title: "Planning 4 drops a year like a magazine", duration: "3:10", tone: "cream", aspect: "16/9", description: "Her editorial calendar, drop dates, and pre-launch teaser format." },
  ],
  "newsletter-to-wishlist-funnel": [
    { title: "POV: curated wishlists for any occasion", duration: "0:24", tone: "cream", aspect: "9/16", description: "Den officielle GoWish-konto viser konceptet med kuraterede wishlists for enhver anledning.", tiktokUrl: "https://www.tiktok.com/@gowish_com/video/7227501005464718619" },
    { title: "The Sunday PS that pays — anatomy of one line", duration: "1:12", tone: "cream", aspect: "16/9", description: "Theo dissects the single sentence at the bottom of every issue." },
    { title: "On my desk this week — the recurring segment", duration: "0:46", tone: "coral", aspect: "9/16", description: "A weekly desk tour that doubles as a soft product recommendation." },
  ],
  "interior-mood-boards-as-wishlists": [
    { title: "Favoritter fra @jwlry.dk på Ønskeskyen", duration: "0:38", tone: "pink", aspect: "9/16", description: "Alisha Bk Rindsig kuraterer sine smykke-favoritter som en mood-board wishlist.", tiktokUrl: "https://www.tiktok.com/@alishabkrindsig/video/7621916390357732630" },
    { title: "Sunday morning kitchen — mood board build", duration: "1:58", tone: "cream", aspect: "4/5", description: "Sara assembles a mood list live, from playlist to plates." },
    { title: "First apartment, second-hand first", duration: "2:22", tone: "pink", aspect: "9/16", description: "Walkthrough of a 100% second-hand starter list under €600." },
    { title: "Why I stopped making 'best of' lists", duration: "1:05", tone: "blue", aspect: "16/9", description: "The shift from category lists to feeling-based lists, explained in 60 seconds." },
  ],
  "wellness-creator-trust-flywheel": [
    { title: "My current obsessions", duration: "0:42", tone: "blue", aspect: "9/16", description: "Maria gennemgår sine nuværende wellness-favoritter med den klassiske receipts-over-claims tilgang.", tiktokUrl: "https://www.tiktok.com/@maria_mk_managements/video/7601162694854479106" },
    { title: "14-day decision window: how I write wellness notes", duration: "1:40", tone: "blue", aspect: "9/16", description: "Noor explains the receipts-over-claims framework on camera." },
    { title: "Why I turned down €18k in sponsorships this year", duration: "2:48", tone: "coral", aspect: "16/9", description: "A candid talk on long-term trust math vs. short-term payouts." },
  ],
  "tech-reviewer-permanent-stack": [
    { title: "Favoritter til konfirmander", duration: "0:36", tone: "coral", aspect: "9/16", description: "Lykke Aagaard viser hvordan en permanent kurateret liste fungerer til en konkret anledning.", tiktokUrl: "https://www.tiktok.com/@lykkeaagaard/video/7613328342892186902" },
    { title: "My current stack — Q1 update", duration: "3:24", tone: "blue", aspect: "16/9", description: "Lukas's quarterly walkthrough of the permanent GoWish list." },
    { title: "Why affiliate links rot (and what to do instead)", duration: "1:52", tone: "coral", aspect: "9/16", description: "A 2-minute breakdown of link rot and the permanent-list fix." },
    { title: "Setup tour: the desk behind the reviews", duration: "2:11", tone: "cream", aspect: "4/5", description: "Every product on the desk, linked to the same permanent list." },
  ],
};


