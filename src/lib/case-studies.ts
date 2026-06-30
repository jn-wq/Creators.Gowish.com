export type CreatorVideo = {
  title: string;
  duration: string;
  tone: "coral" | "cream" | "blue" | "pink";
  aspect: "9/16" | "16/9" | "4/5" | "1/1";
  description: string;
  tiktokUrl?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  creator: string;
  handle: string;
  readTime: string;
  headline: string;
  excerpt: string;
  metrics: { value: string; label: string }[];
  sections: { heading: string; body: string }[];
  quote?: { text: string; attribution: string };
  videos?: CreatorVideo[];
};

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
    title: "From 200 followers to €12k monthly commission in 9 months",
    category: "Beauty & Skincare",
    creator: "Mille Lykke",
    handle: "@millelykke",
    readTime: "8 min read",
    headline: "€12.400/mo",
    excerpt:
      "Mille turned a tiny skincare niche audience into a permanent income stream by treating her wishlist as a curated shelf — not a dump of links.",
    metrics: [
      { value: "€12.400", label: "Monthly commission" },
      { value: "9 mo", label: "Time to scale" },
      { value: "11.8%", label: "Avg. conversion" },
      { value: "47", label: "Active wishes" },
    ],
    sections: [
      {
        heading: "The setup",
        body: "Mille started with a niche audience of 200 skincare nerds. Instead of chasing reach, she chose depth — every wish on her list was a product she'd already used for 30+ days, with a personal note explaining who it's for and who it's not.",
      },
      {
        heading: "What worked",
        body: "Grouping wishes by skin concern (barrier repair, oily, sensitive) made the list scannable. Followers stopped DM'ing 'what do you use?' and started shopping directly. Permanent links meant traffic kept rolling in from old posts.",
      },
      {
        heading: "The lesson",
        body: "A small audience with high trust outperforms a large audience with low trust — every time. Treat your wishlist like a recommendation you'd give a close friend.",
      },
    ],
    quote: {
      text: "I stopped trying to sound like an influencer. The moment my list felt like a friend's bathroom shelf, sales 5x'd.",
      attribution: "Mille Lykke",
    },
  },
  {
    slug: "fashion-edit-that-converts-7x",
    title: "The seasonal edit format that converts 7× better than story drops",
    category: "Fashion",
    creator: "Aya Karim",
    handle: "@ayakrm",
    readTime: "6 min read",
    headline: "7× conv.",
    excerpt:
      "Why building 4 seasonal 'edits' a year beats daily story affiliate links — with the exact format Aya uses to ship hers.",
    metrics: [
      { value: "7×", label: "Conversion lift" },
      { value: "4", label: "Edits / year" },
      { value: "€38k", label: "Annual payout" },
      { value: "62%", label: "Returning shoppers" },
    ],
    sections: [
      {
        heading: "The format",
        body: "Each edit is a 12-piece capsule built around one wearable theme: 'Soft tailoring for warm offices', 'Cold-girl layers under €120'. Aya plans them like a magazine issue — drop date, hero image, intro note.",
      },
      {
        heading: "Why it works",
        body: "Followers know the rhythm. They wait for drops, save the list, share it with friends. The list outlives the post by months.",
      },
      {
        heading: "Steal this",
        body: "Pick 4 dates a year. Pick one tight theme per drop. Write 2 sentences per piece. Don't overproduce — the curation is the product.",
      },
    ],
  },
  {
    slug: "newsletter-to-wishlist-funnel",
    title: "How a weekly newsletter funnels 22% of subscribers to a wishlist",
    category: "Lifestyle",
    creator: "Theo Bishop",
    handle: "theo.substack",
    readTime: "5 min read",
    headline: "22% CTR",
    excerpt:
      "The 3-line PS that turned Theo's lifestyle newsletter into the top traffic source for his GoWish list.",
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
  {
    slug: "interior-mood-boards-as-wishlists",
    title: "Mood-board wishlists: how an interior creator made browsing feel like Pinterest",
    category: "Home & Interior",
    creator: "Sara Vinter",
    handle: "@sarawinterhome",
    readTime: "7 min read",
    headline: "+340% saves",
    excerpt:
      "Treating wishes as mood boards instead of catalogues — and why followers now save lists like they save recipes.",
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
  {
    slug: "wellness-creator-trust-flywheel",
    title: "The trust flywheel: turning skeptical wellness readers into repeat shoppers",
    category: "Wellness",
    creator: "Noor Halim",
    handle: "@noorhalim",
    readTime: "6 min read",
    headline: "68% return",
    excerpt:
      "Why wellness creators have the highest skepticism — and the framework Noor uses to convert that skepticism into long-term loyalty.",
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
  {
    slug: "tech-reviewer-permanent-stack",
    title: "Why a tech reviewer ditched Amazon links for a permanent GoWish stack",
    category: "Tech & Gadgets",
    creator: "Lukas Berg",
    handle: "@lukasreviews",
    readTime: "5 min read",
    headline: "€18k Q1",
    excerpt:
      "Lukas swapped a wall of Amazon links for one curated GoWish stack — and tripled commission in a quarter.",
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


